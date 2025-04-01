const experiences = [
    {
        id: 'stage-info',
        logo: null,
        title: 'Stage - Mise en conformité du parc et réseau informatique',
        subtitle: null,
        description: 'Bientôt : Réseaux, Systèmes, Cloud',
        skills: [
            { anchor: 'windows', title: 'Windows' },
            { anchor: 'linux', title: 'Linux' },
            { anchor: 'outils-production', title: 'Office 365' }
        ],
        projects: [],
        link: null,
        date: 'Avril 2025 - Juin 2025'
    },
    {
        id: 'but-info',
        logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQE4TCoGVGb_tw/company-logo_200_200/company-logo_200_200/0/1683019038335/iut_de_lille_logo?e=2147483647&v=beta&t=wyaar0k1HAPvJFpxL3OsNFVNwP0WuRtT1q7CIHd_8No',
        title: `BUT Informatique, parcours Réalisation d'Applications : Conception, Développement, Validation`,
        subtitle: `IUT de Lille - Université de Lille, Villeneuve d'Ascq`,
        description: 
        `Ce cursus a couvert des domaines essentiels de l'informatique, 
        notamment le développement web et logiciel, la gestion de bases de données, 
        ainsi que les systèmes et réseaux. Au-delà des compétences techniques, 
        le programme a mis l'accent sur la gestion de groupe et le travail en équipe. 
        Toutes ces compétences ont été évaluées durant divers projets réalisés pendant ce cursus.`,
        techStack: [
            { anchor: 'java', title: 'Java' },
            { anchor: 'postgresql', title: 'PostgreSQL' },
            { anchor: 'conteneurs', title: 'Docker, Podman' },
            { anchor: 'linux', title: 'Linux' },
            { anchor: 'agile', title: 'Méthodologie Agile' },
            { anchor: 'javascript', title: 'JavaScript' },
            { anchor: 'c', title: 'C' },
            { anchor: 'git', title: 'GitLab' }
        ],
        projects: [
            { anchor: 'hagario', title: 'Hagar.io', description: 'Projet réalisé pendant le S4 utilisant JavaScript, Node.js et Socket.io' },
            { anchor: 'dwidder', title: 'Dwidder', description: 'Projet réalisé pendant le S4 utilisant JavaEE, PostgreSQL et Tomcat.' },
            { anchor: 'classification', title: 'Application de Classification', description: 'Projet réalisé pendant le S3 utilisant Java, JavaFX, Modèle MVC et les fichiers CSV.' },
            { anchor: 'miniagile', title: 'Projet en méthodologie Agile', description: 'Projet réalisé pendant le S3 en Java suivant la méthodologie Agile.' }
        ],
        link: 'https://iut.univ-lille.fr/',
        date: 'Septembre 2023 - Septembre 2026'
    },
    {
        id: 'sti2d',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGFWstgMP_1YdK7u8ULw3I1MJlWtgf0Ezgw&s',
        title: `BAC STI2D Option Systèmes d'Information et Numérique`,
        subtitle: 'Lycée Blaise Pascal, Longuenesse',
        description: 
        `Ce cursus m'a permis d'explorer les bases de l'informatique et des systèmes numériques, 
        notamment en développant avec Arduino (C++), en apprenant les fondamentaux de l'algorithmique, 
        le fonctionnement des systèmes informatiques et électroniques, l'IoT et le réseau. Au-delà des compétences techniques, 
        le programme favorise le travail en équipe et la communication. Il permet aussi de se préparer à l'avenir.`,
        techStack: [
            { anchor: 'dev-web', title: 'HTML, CSS, PHP' },
            { anchor: 'arduino', title: 'Arduino (C++)' },
            { anchor: 'mobile', title: 'Android Studio' }
        ],
        projects: [],
        link: 'https://www.bpascal.fr/',
        date: 'Septembre 2021 - Juin 2023'
    }
];

export default experiences;