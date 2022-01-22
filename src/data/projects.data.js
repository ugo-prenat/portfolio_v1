/* Du plus vieux au plus récent */

export const projects = [
  {
    id: 0,
    title: 'Twitch chanel points claimer',
    description: undefined,
    githubLink: 'https://github.com/ugo-prenat/Auto_Click_Twitch_Extension',
    projectLink: 'https://chrome.google.com/webstore/detail/twitch-channel-points-aut/pcpdcimepgbgcaeaapkhllpompmmefod?hl=fr&authuser=0',
    technologies: ['JavaScript', 'Chrome extension'],
    launchDate: 'Janvier 2021',
    showInProjects: false,
    logo: undefined,
  },
  {
    id: 1,
    title: 'Twitt-r',
    description: undefined,
    githubLink: 'https://github.com/coding-factory-classrooms/Twitt-r',
    projectLink: undefined,
    technologies: ['JavaScript'],
    launchDate: 'Avril 2021',
    showInProjects: false,
    logo: undefined,
  },
  {
    id: 2,
    title: 'Coin Market Wrap',
    description: undefined,
    githubLink: 'https://github.com/Dobrota-D/Project_Vue2_Gr4',
    projectLink: undefined,
    technologies: ['Vue'],
    launchDate: 'Octobre 2021',
    showInProjects: false,
    logo: undefined, // Si pas de logo, en générer un avec la 1er lettre du title
  },
  {
    id: 3,
    title: 'Formation par l\'innovation',
    description: "Entreprise d'enseignement offrant des prestations aux entreprises et écoles. Leur engagement est défini par 4 critères de qualités : rigueur, bienveillance, adaptabilité et accompagnement",
    githubLink: 'https://github.com/ugo-prenat/FPI_startup_project',
    projectLink: 'https://fpi.digital',
    technologies: ['JavaScript'],
    launchDate: 'Octobre 2021',
    showInProjects: true,
    logo: require(`../assets/images/projects/fpi.png`), // Si pas de logo, en générer un avec la 1er lettre du title
  },
  {
    id: 4,
    title: 'Le Jeu Pour Tous',
    description: "Le Jeu Pour Tous est une association qui s’engage pour la reconnaissance du jeu en tant que pratique culturelle et populaire. En plus de sa ludothêque, l'association propose de nombreuses activitÈs en île-de-France comme la \"ludo'mobile\" ou des ludothêques éphémères",
    githubLink: 'https://github.com/ugo-prenat/theme_LJPT',
    projectLink: 'https://lejeupourtous.org',
    technologies: ['PHP', 'WordPress'],
    launchDate: 'Mai 2021',
    showInProjects: true,
    logo: require(`../assets/images/projects/ljpt.png`),
  },
  {
    id: 5,
    title: 'Cod\'Ring',
    description: "Destiné aux entreprise et écoles, Cod'Ring est une plateforme de bien être et de suivi de performances ludique. L'objectif de la plateforme étant d'améliorer la qualité de vie au travail.",
    githubLink: 'https://github.com/ugo-prenat/codring',
    projectLink: undefined,
    technologies: ['React', 'Node js', 'express', 'mongoDB', 'Discord API', 'Slack API'],
    launchDate: undefined,
    showInProjects: true,
    logo: require(`../assets/images/projects/codring.png`),
  },
  {
    id: 6,
    title: 'Play With Crypto',
    description: "Avec un capital de départ de 100€, Play With Crypto est une plateforme qui vous permet de jouer avec les échanges de cryptomonnaies. A vous de faire les bons placements pour vous enrichir ou vous appauvrir !",
    githubLink: 'https://github.com/ugo-prenat/play_with_crypto',
    projectLink: 'https://play-with-crypto.fr',
    technologies: ['React', 'Node js', 'express', 'mongoDB', 'Coinbase API'],
    launchDate: 'Janvier 2022',
    showInProjects: true,
    logo: require(`../assets/images/projects/playWithCrypto.png`),
  },
  {
    id: 7,
    title: 'Generics',
    description: " Développer plus rapidement ses applications en utilisant ",
    githubLink: 'https://github.com/ugo-prenat/generics',
    projectLink: undefined,
    technologies: ['React', 'Node js', 'express', 'mongoDB'],
    launchDate: undefined,
    showInProjects: true,
    logo: require(`../assets/images/projects/generics.png`),
  },
]