const experiences = [
	{
		id: 'but-info',
		logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQE4TCoGVGb_tw/company-logo_200_200/company-logo_200_200/0/1683019038335/iut_de_lille_logo?e=2147483647&v=beta&t=wyaar0k1HAPvJFpxL3OsNFVNwP0WuRtT1q7CIHd_8No',
		title: `BUT Informatique, parcours Réalisation d'Applications : Conception, Développement, Validation`,
		subtitle: `IUT de Lille - Université de Lille, Villeneuve d'Ascq`,
		description: `Ce cursus a couvert des domaines essentiels de l'informatique,
        notamment le développement web et logiciel, la gestion de bases de données,
        ainsi que les systèmes et réseaux. Au-delà des compétences techniques,
        le programme a mis l'accent sur la gestion de groupe et le travail en équipe.
        Toutes ces compétences ont été évaluées lors de divers projets réalisés pendant ce cursus.`,
		techStack: [
			{ anchor: 'java', title: 'Java' },
			{ anchor: 'postgresql', title: 'PostgreSQL' },
			{ anchor: 'conteneurs', title: 'Docker, Podman' },
			{ anchor: 'linux', title: 'Linux' },
			{ anchor: 'agile', title: 'Méthodologie Agile' },
			{ anchor: 'javascript', title: 'JavaScript' },
			{ anchor: 'c', title: 'C' },
			{ anchor: 'git', title: 'GitLab' },
		],
		projects: [
			{
				anchor: 'booktaplace',
				title: 'Book Ta Place',
				description:
					'Projet réalisé au 5ème semestre utilisant le développement web, plus particulièrement avec la framework Spring Boot',
			},
			{
				anchor: 'emulateur',
				title: 'Emulateur',
				description:
					'Projet réalisé au 5ème semestre utilisant C++.',
			},
			{
				anchor: 'agariolike',
				title: 'Jeu web multijoueur client-serveur',
				description:
					'Projet réalisé au 4ème semestre utilisant JavaScript, Node.js et Socket.io',
			},
			{
				anchor: 'dwidder',
				title: 'Dwidder',
				description:
					'Projet réalisé au 4ème semestre utilisant Java EE, PostgreSQL et Tomcat.',
			},
			{
				anchor: 'classification',
				title: 'Application de Classification',
				description:
					'Projet réalisé au 3ème semestre utilisant Java, JavaFX, Modèle MVC et des fichiers CSV.',
			},
			{
				anchor: 'miniagile',
				title: 'Projet en méthodologie Agile',
				description:
					'Projet réalisé au 3ème semestre en Java suivant la méthodologie Agile.',
			},
		],
		link: 'https://iut.univ-lille.fr/',
		date: 'Septembre 2023 - Septembre 2026',
	},
	{
		id: 'stage-info',
		logo: 'https://as-afa.fr/wp-content/uploads/sites/12/2022/05/logo-as-afa.png',
		title: 'Stage - Mise en conformité du parc et réseau informatique',
		subtitle: 'Stage effectué chez AS AFA à Arras',
		description: `Pendant mon stage de seconde année, j'ai eu 2 tâches principales : Déploiement et configuration d’une CMDB avec Snipe-IT et automatisation des missions internes via Power Automate. Ce stage m’a permis de renforcer mes compétences en bases de données, automatisation et scripting Linux, tout en intervenant sur des outils utilisés en production dans un environnement professionnel.`,
		techStack: [
			{ anchor: 'mysql', title: 'Configuration de la base de données MySQL' },
			{ anchor: 'linux', title: 'Linux, utilisation de scripts Bash' },
			{ anchor: 'conteneurs', title: 'Docker, Docker Compose' },
			{ anchor: 'windows', title: 'Gestion de PC Windows, installation et configuration' },
			{ anchor: 'm365', title: 'Microsoft365' },
			{ anchor: 'powerautomate', title: 'Automatisation et développement low-code avec Power Automate' },
			{ anchor: 'api', title: `Utilisation de l'API REST avec Snipe-IT` },
			{ anchor: 'outils-production', title: `Utilisation d'Excel, de l'Active Directory, de la CMDB et de Microsoft 365 pour répertorier les données, et utilisation de Markdown pour rédiger un guide complet. Utilisation de Draw.io pour Power Automate.` },
		],
		projects: [],
		link: '/assets/Rapport_de_stage_Lucas_DEJESUSTEIXEIRA.pdf',
		date: 'Avril 2025 - Mai 2025',
	},
	{
		id: 'sti2d',
		logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGFWstgMP_1YdK7u8ULw3I1MJlWtgf0Ezgw&s',
		title: `BAC STI2D Option Systèmes d'Information et Numérique`,
		subtitle: 'Lycée Blaise Pascal, Longuenesse',
		description: `Ce cursus m'a permis d'explorer les bases de l'informatique et des systèmes numériques,
        notamment en développant avec Arduino (C++), en apprenant les fondamentaux de l'algorithmique,
        le fonctionnement des systèmes informatiques et électroniques, l'IoT et le réseau. Au-delà des compétences techniques,
        le programme favorise le travail en équipe et la communication. Il permet aussi de se préparer à l'avenir.`,
		techStack: [
			{ anchor: 'dev-web', title: 'HTML, CSS, PHP' },
			{ anchor: 'arduino', title: 'Arduino (C++)' },
			{ anchor: 'mobile', title: 'Android Studio' },
		],
		projects: [],
		link: 'https://www.bpascal.fr/',
		date: 'Septembre 2021 - Juin 2023',
	},
];

export default experiences;
