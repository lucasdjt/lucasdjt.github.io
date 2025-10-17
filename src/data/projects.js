const PATH_LOGO = '/images/projects/';

const stateTitle = [
	{ value: 'in-progress', title: 'En cours' },
	{ value: 'completed', title: 'Terminé' },
	{ value: 'paused', title: 'En pause' },
	{ value: 'soon', title: 'Bientôt' },
];
const experiencesTitle = [
	{ value: 'personal', title: 'Personnel' },
	{ value: 'but-info', title: 'BUT Informatique' },
];

const projects = [
/*
	{
		id: 'booking',
		path: `${PATH_LOGO}booking/`,
		title: 'Site de Booking',
		github: '',
		date: '17/10/2025',
		description: `Projet en cours de 3ème année de BUT Informatique visant à développer un site de Booking.`,
		state: 'in-progress',
		experiences: 'but-info',
		screenshots:
		skills: [ SQL, JAVAEE, MAVEN, NoSQL (bientôt)
		],
		oldVersions: [
		],
	},
	{
		id: 'emulateur',
		path: `${PATH_LOGO}emulateur/`,
		title: 'Emulateur',
		github: '',
		date: '17/10/2025',
		description: `Projet en cours de 3ème année de BUT Informatique visant à développer un émulateur.`,
		state: 'in-progress',
		experiences: 'but-info',
		screenshots:
		skills: [ C++, VAGRANT...
		],
		oldVersions: [
		],
	}
*/
	{
		id: 'portfolio',
		path: `${PATH_LOGO}portfolio/`,
		title: 'Portfolio',
		github: 'https://github.com/lucasdjt/Portfolio',
		date: '27/03/2025',
		description: `Le dépôt Git de cette page web actuelle, où vous pouvez explorer le code source et suivre l'évolution du projet.`,
		state: 'completed',
		experiences: 'personal',
		screenshots: ['logo.png', 'uneautreimage.png'].map(
			img => `${PATH_LOGO}portfolio/${img}`
		),
		skills: [
			{ anchor: 'react', title: 'React' },
			{ anchor: 'javascript', title: 'JavaScript, TypeScript' },
			{ anchor: 'css', title: 'TailwindCSS' },
			{ anchor: 'nodejs', title: 'Node.js' },
			{ anchor: 'outils-production', title: 'Figma' },
			{ anchor: 'git', title: 'GitHub' },
			{ anchor: 'dev-web', title: 'HTML, CSS' },
		],
		oldVersions: [
			{
				title: 'Version 1.0 - Ancien Portfolio',
				description: `Ancienne version du portfolio.`,
				date: '17/12/2024-24/03/2025',
			},
		],
	},
	{
		id: 'hagario',
		path: `${PATH_LOGO}hagario/`,
		title: 'Hagar.io',
		github: 'https://github.com/lucasdjt/Hagario',
		date: '14/03/2025-25/03/2025',
		description: `Jeu développé en JavaScript, inspiré du célèbre jeu Agar.io,
        offrant une expérience multijoueur immersive avec des fonctionnalités similaires à l'original.`,
		state: 'completed',
		experiences: 'but-info',
		screenshots: [
			'accueil.png',
			'credits.png',
			'gameplay.png',
			'gameplay_2.png',
			'replay.png',
		].map(img => `${PATH_LOGO}hagario/${img}`),
		skills: [
			{ anchor: 'javascript', title: 'JavaScript' },
			{ anchor: 'socketio', title: 'Socket.io' },
			{ anchor: 'agile', title: 'Approche Kanban/Scrum' },
			{ anchor: 'nodejs', title: 'Node.js' },
			{ anchor: 'tdd', title: 'Méthode TDD' },
			{ anchor: 'dev-web', title: 'HTML, CSS' },
			{ anchor: 'git', title: 'GitLab' },
			{ anchor: 'outils-production', title: 'Figma' },
		],
		oldVersions: [],
	},
	{
		id: 'dwidder',
		path: `${PATH_LOGO}dwidder/`,
		title: 'Dwidder - Mon Réseau Social',
		github: 'https://github.com/lucasdjt/Dwidder',
		date: '10/02/2025-20/03/2025',
		description: `J’ai développé Dwidder, un réseau social inspiré de Twitter et Facebook, utilisant JakartaEE pour le back-end
        et les JSP pour l'affichage. Ce réseau social est connecté à une base de données PostgreSQL grâce à JDBC.
        Il permet aux utilisateurs de publier des posts, d’interagir via des réactions, de créer des groupes privés et
        d’envoyer des messages. Une interface d’administration et une API REST sont intégrées pour faciliter l’interaction avec les données.
        Vous pouvez voir mon projet directement sur GitHub.`,
		state: 'completed',
		experiences: 'but-info',
		screenshots: [
			'accueil.jpg',
			'arborescence.png',
			'inscription.jpg',
			'connexion.jpg',
			'admin.jpg',
			'commentaire.jpg',
			'creerGroupe.jpg',
			'groupe.jpg',
			'listUser.jpg',
			'message.jpg',
			'modifierGroupe.jpg',
			'parametres.jpg',
			'profil.jpg',
			'reaction.jpg',
		].map(img => `${PATH_LOGO}dwidder/${img}`),
		skills: [
			{ anchor: 'javaee', title: 'JavaEE, JSP, JDBC, Tomcat' },
			{ anchor: 'postgresql', title: 'PostgreSQL' },
			{ anchor: 'css', title: 'Bootstrap' },
			{ anchor: 'mvc-model', title: 'Architecture MVC Web' },
			{ anchor: 'api', title: 'REST API' },
			{ anchor: 'java', title: 'Java' },
			{ anchor: 'git', title: 'GitLab' },
		],
		oldVersions: [],
	},
	{
		id: 'chess',
		path: `${PATH_LOGO}chess/`,
		title: 'Chess',
		github: 'https://github.com/lucasdjt/Chess',
		date: '25/01/2024-17/02/2025',
		description: `Jouez aux échecs avec cette application disponible sur PC. Utilise le modèle MVC, Java et Swing.
        Respecte les règles officielles du jeu d'échecs et permet des parties à deux joueurs.
        Projet entièrement réalisé en solo.`,
		state: 'paused',
		experiences: 'personal',
		screenshots: [
			'start.png',
			'selectionner.png',
			'dameSelect.png',
			'changementTour.png',
			'victoire.png',
			'sansgraphique_1.png',
			'sans_graphique_2.png',
		].map(img => `${PATH_LOGO}chess/${img}`),
		skills: [
			{ anchor: 'java', title: 'Java' },
			{ anchor: 'javase', title: 'Swing, Maven' },
			{ anchor: 'mvc-model', title: 'Architecture MVC' },
			{ anchor: 'git', title: 'GitHub' },
			{ anchor: 'tdd', title: 'Méthode TDD' },
		],
		oldVersions: [
			{
				title: 'Version 1.0 - Échecs sans mode graphique',
				description: `Ancienne version du jeu d'échecs avec seulement une interface non graphique.`,
				date: '10/12/2024-24/01/2025',
			},
		],
	},
	{
		id: 'classification',
		path: `${PATH_LOGO}classification/`,
		title: 'Application de classification',
		github: 'https://github.com/lucasdjt/Classification',
		date: '25/09/2024-05/12/2024',
		description: `Ce projet propose un outil permettant de charger et d'afficher visuellement un ensemble de données variées.
        Il offre également des fonctionnalités de classification, permettant de comparer et de catégoriser
        de nouvelles données en fonction des ensembles de données précédemment chargés. Grâce à cet outil,
        les utilisateurs peuvent analyser efficacement les informations qu'ils souhaitent. Utilisation du modèle MVC,
        de JavaFX, de la mise en place de la qualité de développement, d'analyses et du travail de groupe.
        Projet réalisé en équipe de 4 personnes.`,
		state: 'completed',
		experiences: 'but-info',
		screenshots: [
			'accueil.png',
			'projection.png',
			'autreaffichage.png',
			'ajoutpoint.png',
		].map(img => `${PATH_LOGO}classification/${img}`),
		skills: [
			{ anchor: 'java', title: 'Java' },
			{ anchor: 'javase', title: 'JavaFX, Maven' },
			{ anchor: 'mvc-model', title: 'Architecture MVC' },
			{ anchor: 'git', title: 'GitLab' },
			{ anchor: 'outils-production', title: 'Figma' },
		],
		oldVersions: [],
	},
	{
		id: 'miniagile',
		path: `${PATH_LOGO}miniagile/`,
		title: 'Jeu en méthodologie agile',
		github: 'https://github.com/lucasdjt/MiniAgile',
		date: '02/09/2024-05/09/2024',
		description: `Projet pour introduire l'agilité avec des sprints de 2h durant 1 semaine, en utilisant Java et la méthode Scrum
        (Agile), réalisé en équipe de 6 personnes.`,
		state: 'completed',
		experiences: 'but-info',
		screenshots: ['presentation.jpg', 'radiateur.jpg'].map(
			img => `${PATH_LOGO}miniagile/${img}`
		),
		skills: [
			{ anchor: 'java', title: 'Java' },
			{ anchor: 'agile', title: 'Scrum' },
			{ anchor: 'git', title: 'GitLab' },
		],
		oldVersions: [],
	},
];

export default { stateTitle, experiencesTitle, projects };
