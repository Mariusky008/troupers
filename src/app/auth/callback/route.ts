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
    }
  }

  return NextResponse.redirect(`${origin}/onboarding`);
}
