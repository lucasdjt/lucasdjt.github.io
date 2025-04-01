const techStack = [
    {
        id: 'java',
        title: 'Java',
        description: 
        `Java est l'un des langages de programmation les plus populaires et polyvalents. 
        Durant mes années en BUT, j'ai développé une solide expertise des bases de Java 
        et des principes fondamentaux de la programmation orientée objet (POO). 
        Ces compétences ont été mises en pratique dans plusieurs projets marquants, 
        notamment le développement d'un jeu d'échecs utilisant la bibliothèque Swing, 
        ainsi que la création d'un réseau social en s'appuyant sur Jakarta.`,
        experiences: 'but-info',
        projects: ['dwidder', 'chess', 'classification', 'miniagile'],
        categories: 'dev'
    },
    {
        id: 'javase',
        title: 'JavaFx, Swing, Maven',
        description: 
        `J'ai acquis une solide expertise dans le développement d'applications Java, 
        notamment grâce à l'utilisation de frameworks tels que JavaFX et Swing, 
        ainsi qu'à l'usage de Maven. Mes compétences se sont illustrées à travers la 
        réalisation de deux projets significatifs : le développement d'une application 
        de classification de données et la création d'un jeu d'échecs doté d'une interface graphique. 
        Maven a été essentielle pour gérer les dépendances et renforcer la structure du projet.`,
        experiences: 'but-info',
        projects: ['chess', 'classification'],
        categories: 'dev'
    },
    {
        id: 'javaee',
        title: 'JDBC, JavaEE, JSP, Tomcat',
        description: 
        `J'ai développé de solides compétences en JavaEE, me permettant de concevoir et d'implémenter 
        des applications web en utilisant JDBC, JEE, JSP et le serveur applicatif Tomcat. Ces compétences 
        ont été pleinement mobilisées dans le cadre du projet Dwidder, où j'ai démontré ma capacité à intégrer 
        efficacement les technologies de l'écosystème JavaEE.`,
        experiences: 'but-info',
        projects: ['dwidder'],
        categories: 'dev'
    },
    {
        id: 'dev-web',
        title: 'HTML, CSS, PHP',
        description: 
        `Je maîtrise les fondamentaux du développement web, notamment HTML, CSS et PHP, qui ont été largement 
        utilisés dans la majorité de mes projets web.`,
        experiences: 'sti2d',
        projects: ['portfolio', 'hagario'],
        categories: 'dev'
    },
    {
        id: 'css',
        title: 'Bootstrap, TailwindCSS',
        description: 
        `J'ai eu l'occasion d'utiliser différents frameworks CSS, tels que Bootstrap et TailwindCSS, 
        que j'ai intégrés dans plusieurs projets pour concevoir des interfaces utilisateur modernes et réactives. 
        Ces outils m'ont permis de gagner en efficacité dans le développement front-end. Leur utilisation a été 
        mise en valeur dans des projets tels que Dwidder et mon Portfolio.`,
        experiences: 'but-info',
        projects: ['dwidder','portfolio'],
        categories: 'dev'
    },
    {
        id: 'javascript',
        title: 'JavaScript, TypeScript',
        description: 
        `Je maîtrise les fondamentaux de JavaScript et de TypeScript, ce qui me permet de développer des applications 
        web interactives. Mes compétences incluent la manipulation du DOM, la gestion des événements utilisateur,
        l'utilisation d'API et d'appels asynchrones, ainsi que la mise en œuvre de la POO avec TypeScript. 
        Ces connaissances ont été appliquées dans deux projets majeurs : un jeu interactif inspiré de Hagario 
        et la création de mon portfolio.`,
        experiences: 'but-info',
        projects: ['portfolio', 'hagario'],
        categories: 'dev'
    },
    {
        id: 'react',
        title: 'React',
        description: 
        `J'ai acquis des compétences de base en ReactJS de manière autodidacte, ce qui m'a permis de comprendre 
        ses principes fondamentaux, tels que le système de composants, le cycle de vie et la gestion d'état à l'aide 
        d'outils comme useState et useEffect. Ces connaissances en ReactJS ont été appliquées notamment dans mon 
        portfolio, où j'ai tiré parti des capacités de ReactJS pour concevoir une expérience utilisateur fluide.`,
        experiences: 'personal',
        projects: ['portfolio'],
        categories: 'dev'
    },
    {
        id: 'angular',
        title: 'Angular',
        description: 
        `Je suis actuellement en train d'apprendre cette technologie qu'est Angular, une des frameworks de JS les 
        plus utilisés avec ReactJS et Vue.js`,
        experiences: 'personal',
        projects: [],
        categories: 'learning'
    },
    {
        id: 'nodejs',
        title: 'Node.js, NPM',
        description: 
        `J'utilise Node.js et son gestionnaire de paquets par défaut, NPM, pour installer et intégrer des bibliothèques, 
        ainsi que pour exécuter des applications en JavaScript. Ces packages sont essentiels dans la plupart de mes 
        projets utilisant JavaScript, me permettant de développer des solutions efficaces.`,
        experiences: 'but-info',
        projects: ['portfolio', 'hagario'],
        categories: 'dev'
    },
    {
        id: 'socketio',
        title: 'Socket.io',
        description: 
        `J'ai appris et utilisé Socket.IO lors d'un de mes projets en JavaScript, où j'ai mis en œuvre et géré des 
        connexions WebSocket pour établir une communication fluide entre le client et le serveur. 
        Cette expérience m'a permis de maîtriser les bases des interactions en temps réel et de concevoir des 
        solutions efficaces pour la gestion des connexions client/serveur.`,
        experiences: 'but-info',
        projects: ['hagario'],
        categories: 'dev'
    },
    {
        id: 'api',
        title: 'API REST',
        description: 
        `J'ai appris à utiliser et intégrer une API REST, permettant à mon réseau social 
        d'envoyer et de recevoir des données via des requêtes HTTP.`,
        experiences: 'but-info',
        projects: ['dwidder'],
        categories: 'dev'
    },
    {
        id: 'postgresql',
        title: 'PostgreSQL',
        description: 
        `J'ai acquis des compétences dans les bases de données relationnelles, en particulier avec PostgreSQL, 
        ainsi que dans l'écriture de requêtes SQL avancées permettant de manipuler et d'analyser les données. 
        Ces compétences sont mises en œuvre dans le projet Dwidder, où PostgreSQL est utilisé pour stocker 
        les données de l'application.`,
        experiences: 'but-info',
        projects: ['dwidder'],
        categories: 'dev'
    },
    {
        id: 'c',
        title: 'C',
        description: 
        `J'ai acquis de solides bases en langage C, notamment dans la gestion de la mémoire dynamique 
        à l'aide des pointeurs et des fonctions telles que malloc() et free(). Je maîtrise également la manipulation 
        de fichiers ainsi que l'écriture de programmes structurés en exploitant des fonctions, des 
        structures et des tableaux.`,
        experiences: 'but-info',
        projects: [],
        categories: 'dev'
    },
    {
        id: 'arduino',
        title: 'Arduino',
        description: 
        `J'ai acquis des compétences en Arduino, l'un des premiers langages grâce auquel j'ai appris la programmation, 
        ainsi que le contrôle de capteurs et de modules externes.`,
        experiences: 'sti2d',
        projects: [],
        categories: 'dev'
    },
    {
        id: 'python',
        title: 'Python',
        description: 
        `Je suis actuellement en train d'apprendre cette technologie qu'est Python, 
        le langage le plus populaire en 2025.`,
        experiences: 'personal',
        projects: [],
        categories: 'learning'
    },
    {
        id: 'git',
        title: 'Git (GitHub, GitLab)',
        description: 
        `Je maîtrise Git et l'utilise dans tous mes projets, ce qui me permet de gérer les différentes versions, 
        de suivre les modifications et de faciliter le travail collaboratif. 
        Ces compétences ont été appliqués sur deux plateformes de gestion de dépôts distants : GitHub et GitLab.`,
        experiences: 'but-info',
        projects: ['portfolio', 'hagario', 'dwidder', 'chess', 'classification', 'miniagile'],
        categories: 'env'
    },
    {
        id: 'conteneurs',
        title: 'Docker, Podman',
        description: 
        `Je maîtrise les bases de la virtualisation via des conteneurs, en utilisant des outils tels que Docker et Podman. 
        Cela inclut la création et la gestion de conteneurs pour isoler les applications et optimiser leur déploiement, 
        et l'utilisation d'images conteneurisées et de Dockerfile pour simplifier l'intégration des solutions.`,
        experiences: 'but-info',
        projects: [],
        categories: 'env'
    },
    {
        id: 'linux',
        title: 'Linux',
        description: 
        `J'ai développé des compétences solides en administration système, en réseau, et en scripting shell, 
        grâce à l'utilisation du système d'exploitation Linux. Cela inclut la création de scripts Shell 
        pour automatiser et optimiser les processus, la maîtrise des commandes essentielles de Linux pour la 
        gestion des fichiers, des permissions, et des configurations réseau et une compréhension des bases de 
        l'environnement Linux, permettant de travailler efficacement dans divers contextes.`,
        experiences: 'but-info',
        projects: ['dwidder', 'classification'],
        categories: 'env'
    },
    {
        id: 'windows',
        title: 'Windows',
        description: 
        `J'ai aussi acquis des compétences sur le système d'exploitation Windows, notamment dans l'utilisation 
        et la création de scripts Batch, à l'instar de ce que j'ai appris sous Linux pour pouvoir simplifier 
        l'exécution des commandes sur mon PC Windows.`,
        experiences: 'personal',
        projects: ['dwidder', 'chess'],
        categories: 'env'
    },
    {
        id: 'outils-production',
        title: 'Suite Office, Google Drive, Markdown, Photoshop, Figma, Canva',
        description: 
        `Je maîtrise une variété d'outils de production, adaptés à divers besoins professionnels et créatifs, 
        tels que Figma pour la création de maquettes et le prototypage d'UI, Markdown pour la rédaction de 
        documentation, Photoshop pour les besoins graphiques occasionnels, ainsi que les suites bureautiques 
        pour répondre à certaines exigences de projets.`,
        experiences: 'personal',
        projects: [],
        categories: 'env'
    },
    {
        id: 'ide',
        title: 'Visual Studio Code, IntelliJ IDEA',
        description: 
        `J'utilise actuellement Visual Studio Code, un IDE que je maîtrise particulièrement. 
        Cet outil incroyable me permet de travailler efficacement dans divers contextes et 
        d'optimiser mon workflow de développement. J'ai également eu l'occasion d'utiliser 
        IntelliJ IDEA pour répondre à des exigences en matière de qualité de développement.`,
        experiences: 'personal',
        projects: [],
        categories: 'env'
    },
    {
        id: 'mobile',
        title: 'Android Studio',
        description: 
        `J'ai acquis des compétences en développement mobile en utilisant Android Studio, 
        l'environnement de développement intégré pour Android. Ces compétences incluent la programmation en Java 
        pour concevoir des applications mobiles, l'utilisation de fichiers XML pour définir et personnaliser 
        les interfaces utilisateur et la maîtrise des différents outils d'Android Studio pour le débogage, 
        les tests, et le déploiement.`,
        experiences: 'but-info',
        projects: [],
        categories: 'dev'
    },
    {
        id: 'agile',
        title: 'Méthodologie Agile',
        description: 
        `J'ai acquis des compétences solides en gestion de projet grâce à la méthodologie Agile. 
        Cela inclut le framework Scrum, avec l'organisation des sprints, les réunions régulières 
        et la gestion des backlogs, que j'ai appliqués lors de mon projet MiniAgile, ainsi que le 
        framework Kanban, avec l'utilisation de tableaux visuels pour suivre et optimiser les flux de 
        travail, mis en œuvre durant les projets MiniAgile et Hagario.`,
        experiences: 'but-info',
        projects: ['hagario', 'miniagile'],
        categories: 'env'
    },
    {
        id: 'mvc-model',
        title: 'Architecture MVC',
        description: 
        `J'ai appris à réaliser des projets sous une architecture MVC (Modèle-Vue-Contrôleur), 
        où j'ai structuré et organisé mon code de manière efficace. Cette architecture a été 
        mise en œuvre dans trois projets différents.`,
        experiences: 'but-info',
        projects: ['chess', 'classification','dwidder'],
        categories: 'env'
    },
    {
        id: 'tdd',
        title: 'Test Driven Development',
        description: 
        `J'ai acquis des compétences solides dans l'utilisation du modèle TDD (Test Driven Development) 
        pour le développement. Cette approche m'a permis de structurer et d'organiser efficacement 
        les cycles de développement, et de l'appliquer dans mon projet personnel Chess.`,
        experiences: 'but-info',
        projects: ['chess','hagario'],
        categories: 'env'
    }
];

const knowledges = [
    {
        title: 'Créatif',
        description: 
        `Ma créativité est l'un de mes atouts majeurs dans le développement. 
        J'aime trouver de nouvelles idées pour concevoir des projets innovants.`
    },
    {
        title: 'Logique',
        description: 
        `J'aborde les problèmes de manière logique, ce qui constitue une force en algorithmique 
        et en résolution de problèmes complexes.`
    },
    {
        title: 'Autonome',
        description: 
        `Je suis également capable de travailler de manière autonome, en recherchant par moi-même 
        les informations nécessaires pour avancer efficacement.`
    },
    {
        title: 'Curieux',
        description: 
        `Je m'informe régulièrement et me tiens à jour des avancées dans le domaine de l'informatique 
        pour ne pas être obsolète.`
    },
    {
        title: 'Gestion',
        description: 
        `Je sais travailler en équipe, coopérer, communiquer efficacement et écouter attentivement. 
        J'ai également été introduit à l'agilité, renforçant ainsi mes compétences dans la gestion d'équipe.`
    },
    {
        title: 'Langues',
        description: 
        `Français : Langue maternelle, 
        Anglais : Niveau B2, 
        Espagnol : Niveau B1`
    }
];

const languages = [
            { title: 'Français', level: 'Langue maternelle' },
            { title: 'Anglais', level: 'Niveau B2' },
            { title: 'Espagnol', level: 'Niveau B1' }
];

export default {techStack, knowledges, languages};