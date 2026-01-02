import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const error = requestUrl.searchParams.get("error");
  const error_description = requestUrl.searchParams.get("error_description");
  const origin = requestUrl.origin;

  // Handle errors (like expired link)
  if (error) {
    return NextResponse.redirect(`${origin}/signup?error=${encodeURIComponent(error_description || "Une erreur est survenue")}`);
  }

  if (code) {
    const supabase = await createClient();
    const { data, error: authError } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!authError && data?.user) {
      // Force sync profile from metadata to ensure "Recrue" is replaced
      const metadata = data.user.user_metadata;
      if (metadata?.username || metadata?.full_name) {
        await supabase.from('profiles').upsert({
            id: data.user.id,
            username: metadata.username || metadata.full_name,
            full_name: metadata.full_name,
            // Keep existing fields if any
          }, { onConflict: 'id', ignoreDuplicates: false }); // We want to update
      }

      // Check if user is already onboarded
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_fully_onboarded, current_video_url')
        .eq('id', data.user.id)
        .single();

      // If they have a video URL or are marked as onboarded, go to dashboard
      // Assuming that having a video URL is a strong signal they passed onboarding
      if (profile?.is_fully_onboarded || profile?.current_video_url) {
         return NextResponse.redirect(`${origin}/dashboard`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/onboarding`);
}
