# 📚 Documentation Fonctionnelle et Technique - Troupers

Ce document sert de référence complète (ancre de repérage) pour comprendre le fonctionnement de l'application Troupers, ses fonctionnalités clés et son implémentation technique.

---

## 1. Dashboard & Missions du Jour
**Fichier Principal :** `src/app/dashboard/page.tsx`

C'est le cœur de l'application où l'utilisateur passe le plus clair de son temps.

### Fonctionnalités
*   **Affichage des Missions :** Liste les membres de l'escouade que l'utilisateur doit soutenir aujourd'hui.
*   **Logique de Rotation des Actions :** L'action demandée change cycliquement pour chaque membre (Like -> Commentaire -> Favori) basé sur l'historique.
*   **Gating (Verrouillage) :**
    *   Les missions sont **verrouillées** si l'utilisateur n'a pas ajouté le lien de sa propre vidéo ("Pas de lien = Pas de soutien").
    *   Les missions sont **verrouillées** si l'utilisateur n'est pas abonné à tous les membres de son escouade.

### Implémentation Technique
*   **State `tasks` :** Tableau d'objets généré dynamiquement en croisant les membres de l'escouade (`squad_members`) avec l'historique de tracking (`video_tracking`).
*   **Calcul de l'Action :** Utilise `action_count % 3` pour déterminer si c'est un Like (0), Comment (1) ou Favori (2).
*   **Sécurité :** Vérifie `!myVideoUrl` pour afficher l'overlay de blocage.

---

## 2. Système de Vidéo & Validation
**Fichier Principal :** `src/app/dashboard/page.tsx`

Le mécanisme qui assure que les utilisateurs font réellement le travail.

### Fonctionnalités
*   **Ajout de Vidéo :** L'utilisateur doit fournir une URL (TikTok/YouTube) dans le bloc "Ta Vidéo à Promouvoir".
*   **Visualisation Obligatoire :** Le bouton de validation (rond) est inactif tant que l'utilisateur n'a pas cliqué sur "Voir la vidéo".
*   **Persistence de la Vue :** Si l'utilisateur clique sur "Voir la vidéo", quitte l'app et revient, l'état "Vu" est conservé.

### Implémentation Technique
*   **SessionStorage :** Utilise `sessionStorage.getItem('viewedVideos')` pour stocker les IDs des utilisateurs dont la vidéo a été ouverte. Cela survit au rafraîchissement de la page.
*   **Tracking Unique :** On track via `targetUserId` et non l'URL de la vidéo (pour éviter de valider 5 missions d'un coup si tout le monde a la même URL par défaut).
*   **Validation (`toggleTask`) :**
    1.  Vérifie si la vidéo a été vue.
    2.  Insère une ligne dans `daily_supports` (pour les stats du jour).
    3.  Met à jour ou crée une entrée dans `video_tracking` (pour l'historique long terme).
    4.  Déclenche la **Rotation d'Escouade** si le compteur atteint 3.

---

## 3. Chat & Notifications ("Taverne")
**Fichier Principal :** `src/app/dashboard/page.tsx`
**Table BDD :** `squad_messages`

L'espace social pour motiver les troupes.

### Fonctionnalités
*   **Messagerie Instantanée :** Chat en temps réel entre les membres de la même escouade.
*   **Notifications Automatiques :** Lorsqu'un utilisateur valide une mission, un message est posté automatiquement en son nom (ex: "J'ai liké la vidéo de Username ! ❤️").

### Implémentation Technique
*   **Supabase Realtime :** Souscription via `supabase.channel` aux INSERT sur la table `squad_messages`.
*   **Insertion Auto :** Dans la fonction `toggleTask`, le code détecte le type d'action (Like/Comment/Favori) et insère un message système dans la table.
*   **Sécurité (RLS) :** Une policy SQL permet aux utilisateurs d'insérer des messages pour eux-mêmes.

---

## 4. Gestion des Escouades & Rotation (Le "Swap")
**Fichier Principal :** `src/app/dashboard/page.tsx` (Appel RPC)
**Fichier SQL :** `supabase/migrations/create_swap_member_rpc.sql`

Le moteur de renouvellement de l'application.

### Fonctionnalités
*   **Cycle de 3 jours/actions :** Une fois qu'un utilisateur a soutenu un membre 3 fois (Like + Com + Fav), sa "mission" envers ce membre est terminée.
*   **Remplacement Automatique :** Le membre soutenu est retiré de l'escouade de l'utilisateur et remplacé par un nouveau membre inconnu.

### Implémentation Technique
*   **Fonction RPC `swap_squad_member` :** C'est une fonction stockée en base de données (PostgreSQL) qui :
    1.  Supprime la relation `squad_members` existante avec la cible.
    2.  Cherche un utilisateur éligible (qui a une vidéo, qui n'est pas déjà dans l'escouade).
    3.  L'ajoute à l'escouade.
*   **Déclenchement :** Appelé dans `toggleTask` quand `newCount >= 3`.

---

## 5. Surveillance & Signalement
**Fichier Principal :** `src/app/dashboard/page.tsx`

Outil de contrôle social pour maintenir la discipline.

### Fonctionnalités
*   **Onglet Aujourd'hui :** Montre la progression en temps réel (X/Y membres soutenus).
*   **Onglet Hier (Bilan) :** Montre qui a joué le jeu la veille.
*   **Signalement :** Bouton pour signaler un membre ("Traître") qui n'a pas rendu les soutiens la veille.

### Implémentation Technique
*   **Comparaison de Sets :** Le code compare la liste des membres (`squadMembers`) avec la liste des soutiens reçus (`supportsReceived`) pour déduire les manquants (`missingSupporters`).
*   **Table `reports` :** Les signalements sont enregistrés en base pour l'admin.

---

## 6. Gamification & Célébration
**Fichier Principal :** `src/app/dashboard/page.tsx`

### Fonctionnalités
*   **Score de Discipline :** Affiché sous forme de bouclier (En Probation / 100%).
*   **Animation de Victoire :** Une fois toutes les missions cochées, une animation avec Trophée et Confettis apparaît.

### Implémentation Technique
*   **Framer Motion :** Utilisé pour les animations fluides du trophée (rebond, apparition).
*   **Logique conditionnelle :** `allTasksCompleted` déclenche le rendu du bloc de félicitations.

---

## 7. Structure de la Base de Données (Supabase)

Voici les tables clés utilisées par l'application :

*   **`profiles`** : Infos utilisateur, score, URL vidéo courante.
*   **`squads`** : Groupes d'utilisateurs.
*   **`squad_members`** : Table de liaison (Qui est dans quelle escouade).
*   **`daily_supports`** : Historique court terme (qui a aidé qui aujourd'hui ?).
*   **`video_tracking`** : Historique long terme (combien de fois j'ai aidé X sur cette vidéo ?). Sert au compteur de 3.
*   **`squad_messages`** : Historique du chat.
*   **`reports`** : Signalements des utilisateurs.

---

## 8. Commandes Utiles (Développement)

*   **Lancer le projet :** `npm run dev`
*   **Déployer migrations :** Les fichiers SQL sont dans `supabase/migrations/`. Il faut souvent les appliquer via le dashboard Supabase ou un outil SQL si pas de CLI connecté.
