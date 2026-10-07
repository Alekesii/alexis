# Portfolio Alexis — version autonome

## Ouvrir le site

Décompressez le ZIP et ouvrez index.html dans votre navigateur. Aucun serveur ni installation nécessaire.
Conservez tous les fichiers et sous-dossiers ensemble : les liens sont relatifs.

## Déployer sur Apache

Copiez le contenu du dossier Alexis-Portfolio dans le répertoire web souhaité, à la racine ou dans un sous-dossier.
Aucune réécriture d’URL ni dépendance Python ou Node.js nécessaire.

## Ajouter le CV

1. Placez votre PDF dans assets/cv-alexis.pdf.
2. Dans cv-config.js, renseignez :

    window.PORTFOLIO_CV = { path: "assets/cv-alexis.pdf" };

L’aperçu et les boutons apparaîtront sur l’accueil. L’affichage intégré du PDF dépend du navigateur ; un lien d’ouverture et de téléchargement est également disponible.

## Contenu à compléter

Les liens des dépôts GitHub, AP3, AP4 et le brouillon de veille sont à compléter dans les pages HTML correspondantes.
Le formulaire de contact ouvre votre messagerie pour préparer un e-mail, sans service d’envoi côté serveur.
Les polices Google Fonts nécessitent Internet ; sans connexion, les polices de remplacement sont utilisées.

## Fichiers

index.html : accueil ; style.css : présentation ; script.js : interactions ; cv-config.js : chemin du CV.
Les autres pages sont dans leurs sous-dossiers. L’illustration de veille est dans assets.

## Mentions légales

La page mentions-legales.html est accessible depuis le pied de page de chaque page. Complétez les informations de l’éditeur, de l’hébergeur et de gestion des échanges avant de rendre le site public.
