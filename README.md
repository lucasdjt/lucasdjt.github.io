# Préparation de la nouvelle branche du Portfolio

## Préparations

- Trouver un hébergement web (ou rester sur github.io) pouvant héberger un site dynamique utilisant Node.js
- Préparer les informations nécessaires dans des fichiers .txt pour tous les projets, formations et toutes les compétences puis utilisation de l'API Fetch pour les récupérer, ce sera plus simple pour modifier les informations.

Choix : React > JS ça va être le projet que je vais utiliser pour y montrer mes compétences.
Style : Soit Bootstrap soit TailwindCSS 
Utilisation : API FETCH

## Portfolio V3 - Page Web Dynamique, tout sur une page (Avec React)

Ce portfolio deviendra un ancien dépôt de portfolio avec une redirection vers le nouveau portfolio, et le nouveau portfolio sera dans un nouveau dépôt nommé "lucasdjt.github.io"

**Header :**

Icône : Icône personnalisée  
Titre : Portfolio - Lucas DJT

**Barre de navigation :**

Accueil / Compétences / Parcours et Expériences / Projets / Loisirs / Me Contacter

**Titre de la page :**

Nom Prénom - Portfolio

**Blogs :**

Affichage de mes derniers ajouts avec image/titre/description, flèche gauche/droite (présentation des derniers projets, dernier post, recherche d'alternance)

**Accueil :**

Photo de profil / Description de mon profil bref

**Compétences :**

Affichage des compétences en icône + Titre, cliquer sur une icône affiche où a été apprise la compétence (soit BUT, soit STI2D, soit auto-apprentissage) + Description + Projets associés.  
Affichage des compétences linguistiques et des 5 savoir-être que j'ai.

**Parcours et Expériences :**

Mettre mon stage que je vais réaliser / est réalisé + les 2 formations. Au clic sur le div, ça affiche la description et les infos de la formation/stage.

**Projets :**

Présentation de chaque projet avec toutes les infos nécessaires, images et README ensemble si nécessaire avec les versions du projet.  
Pouvoir rechercher les projets avec une barre de recherche ou des coches.  
Changement en --> terminés/en pause/en cours/bientôt.

**Loisirs :**

Affichage de mes loisirs.

**Me Contacter :**

Affichage de mes infos personnelles (âge, permis, localisation, email pro et perso, Github, Linkedin et me contacter --> Télécharger CV).

**Footer :**

Footer fixe, affichant les réseaux sociaux, LINKEDIN/GITHUB/Télécharger CV + code source de la page + tous droits réservés.

**Fonctionnalités supplémentaires :**

- Passage Anglais <--> Français
- Peut-être un "Me Contacter" dynamique à la place des emails ou les deux ensemble.
- Ajout d'animations curseur pour la description d'accueil, et GIF pour les icônes.
- Ajout de vidéos pour certaines présentations de projet.
- Mode sombre, mode clair.
- De base, gestion avec des fichiers .txt ou .csv, mais peut être connecté à une base de données si nécessaire.
- Mettre un chatbot que j'alimenterai avec l'IA bien plus tard quand j'aurai les compétences nécessaires. Ce chatbot aura juste quelques préréponses possibles.
- Ajout d'animation de fond plutôt que neutre.
- Mettre des projets/applications directement téléchargeables.
- Mettre mon parcours futur ?
- Responsive avant tout.

## Informations nécessaires pour les .txt / .csv

*Pour chaque information, une version anglaise et française*

### nav.txt
Accueil / Compétences / Parcours et Expériences / Projets / Loisirs / Me Contacter

### titre.txt
Nom Prénom - Portfolio

### blogs.csv
Contenant les dernières ajouts : 
Titre, Description, ImageLink, Lien

1 - Recherche d'alternance
- Présentation du dernier projet
- Dernier Post LINKEDIN
- Présentation de la mise à jour du portfolio

### accueil.txt
Description de mon profil

### competences.csv
Pour chaque compétences, les informations sont affichés de ce genre :
ImageLink, Titre, Description, ParcoursLink, ProjetsLink, Lien?

### savoirs.csv
Affichage des compétences linguistiques et des 5 savoir-être que j'ai :
Titre, Description, ParcoursLink/ProjetsLink

### experiences.csv

Informations sur mon stage et mes formations (peut être ajoutés parcours futur):
Logo, Titre, Sous-Titre (Entreprise/Ecole), Description, CompetencesLink, ProjetsLink, Lien

### projets.csv

Présentation de chaque projet avec toutes les infos nécessaires, images et README ensemble, avec les versions du projet si nécessaires :
Logo, Titre, ImagesLink, EtatDuProjet, Description, CompetencesLink, ParcoursLink, AncienneVersionDUnProjet, Lien/Installation

### loisirs.csv

Info sur mes loisirs :
Image, Titre, Description

### contact.txt

Informations personnelles :
- Age
- Permis
- Localisation
- Email professionnelle
- Email perso
- Github
- LinkedIN
- Lien vers CV

### lien.txt

Autres liens utilisés dans le portfolio.
lien vers Icônes, vidéos, images et autres externes.

### chatbot.txt

Gestion des messages du chatbot selon les mot-clés à adapter plus tard
listesMots, réponses