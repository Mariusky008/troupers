export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Mentions Légales & CGU/CGV</h1>
      
      <section className="space-y-6 text-sm text-muted-foreground">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">1. Présentation du service</h2>
          <p>
            Troupers est une plateforme communautaire d'entraide pour créateurs de contenu sur les réseaux sociaux. 
            Le service permet de rejoindre des "escouades" pour échanger de la visibilité et de l'engagement de manière organique.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">2. Conditions d'accès et Prix</h2>
          <p>
            L'accès à la plateforme est soumis à la création d'un compte utilisateur.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Période d'essai :</strong> Chaque nouvel utilisateur bénéficie d'une période d'essai gratuite de 7 jours calendaires à compter de son inscription.</li>
            <li><strong>Abonnement :</strong> Au-delà de cette période, l'accès au service devient payant. Les tarifs en vigueur sont indiqués sur la page d'accueil.</li>
            <li><strong>Sans engagement :</strong> L'abonnement est sans engagement de durée et peut être résilié à tout moment depuis l'espace utilisateur.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">3. Règles de conduite (Discipline)</h2>
          <p>
            Troupers repose sur la réciprocité. Tout utilisateur s'engage à :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Effectuer ses missions quotidiennes de soutien envers les membres de son escouade.</li>
            <li>Ne pas utiliser de bots ou d'outils d'automatisation.</li>
            <li>Rester courtois et bienveillant.</li>
          </ul>
          <p>
            Le non-respect de ces règles peut entraîner la suspension ou la suppression définitive du compte, sans remboursement des périodes déjà payées.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">4. Données personnelles (RGPD)</h2>
          <p>
            Nous collectons votre email et votre photo de profil (via Google ou upload) uniquement pour le fonctionnement du service. 
            Vos données ne sont jamais revendues à des tiers. Vous disposez d'un droit d'accès, de modification et de suppression de vos données sur simple demande au support ou via les paramètres de votre compte.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">5. Responsabilité</h2>
          <p>
            Troupers n'est pas affilié à TikTok, Instagram, YouTube ou toute autre plateforme sociale. 
            Nous ne garantissons aucun résultat chiffré (nombre de vues, d'abonnés) car cela dépend de la qualité de votre contenu et des algorithmes tiers.
          </p>
        </div>

        <div className="pt-8 border-t">
          <p>Éditeur du site : Troupers Inc.</p>
          <p>Contact : support@troupers.dev</p>
          <p>Hébergement : Vercel Inc.</p>
        </div>
      </section>
    </div>
  )
}
