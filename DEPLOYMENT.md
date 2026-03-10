# Guide de Déploiement NOMAD

Pour que les emails et le formulaire de booking fonctionnent en production (Vercel, Cloudflare, etc.), vous devez configurer les variables d'environnement.

## 1. Clé API Resend
Dans le tableau de bord de votre hébergeur (ex: Vercel Settings > Environment Variables), ajoutez la variable suivante :
- **Clé** : `RESEND_API_KEY`
- **Valeur** : `re_FynnrkKG_WifMMoRfPW8PfFEvC1jaVEpp` (ou votre nouvelle clé si vous la changez)

## 2. Validation du Domaine (Recommandé)
Pour éviter que vos emails n'arrivent en spam et pour pouvoir envoyer depuis `@nomadmusic.fr` au lieu de `onboarding@resend.dev` :
1. Allez dans **Resend Dashboard** > **Domains**.
2. Ajoutez `nomadmusic.fr`.
3. Configurez les DNS (MX/TXT) indiqués par Resend chez votre fournisseur de nom de domaine.
4. Une fois validé, modifiez la ligne `from` dans `src/app/actions/contact.ts` pour utiliser votre domaine.

## 3. Configuration de l'Audience (Newsletter)
Pour que les inscrits soient ajoutés à votre liste de contacts :
1. Allez dans **Resend Dashboard** > **Audiences**.
2. Créez une audience (ex: "NOMAD Newsletter").
3. Cliquez sur l'audience créée, allez dans **Settings**.
4. Copiez l'**Audience ID**.
5. Ajoutez-le dans vos variables d'environnement sous le nom `RESEND_AUDIENCE_ID`.

## 4. Déploiement
Une fois les variables configurées, relancez un déploiement. Tout sera opérationnel !
