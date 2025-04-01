const PATH_IMG = 'public/images/hobbies/';

const hobbies = [
    {
        id: 'chess',
        image: `${PATH_IMG}chess.jpg`,
        title: 'Échecs',
        description: 
        `Depuis l'enfance, je pratique les échecs qui sont devenus une réelle passion pour moi. 
        C'est un sport qui nécessite beaucoup de réflexion, de stratégie, de concentration et d'anticipation.`
    },
    {
        id: 'djing',
        image: `${PATH_IMG}djing.jpg`,
        title: 'DJing',
        description: 
        `Passion née ces dernières années, je me suis investi dans le DJing pour partager mon univers musical 
        et faire vibrer les autres. Grâce à des outils comme Rekordbox, SeratoDJ et FL Studio, 
        je prépare et réalise mes sets et mes remix avec soin, avec une base solide en autodidacte.`
    },
    {
        id: 'video-games',
        image: `${PATH_IMG}video-games.jpg`,
        title: 'Jeux Vidéo',
        description: 
        `Les jeux vidéo représentent pour moi bien plus qu’un simple divertissement : 
        ils ont été une source de créativité et d'imagination à travers des jeux de construction 
        comme Minecraft, que ce soit au niveau de leur interface, des mécaniques de gameplay ou de leur algorithmique.`
    }
];

export default hobbies;