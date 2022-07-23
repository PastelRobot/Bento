// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Riley',
  imageBackground: false,
  openInNewTab: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Good night',

    // Weather
  weatherKey: 'ba7ae8b206aa8aaf37339c7748e2a260',
  weatherIcons: 'Dark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '44.636501',
  defaultLongitude: '-123.106018',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com',
    },
    {
      id: '3',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '4',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://www.twitch.tv/',
    },
    {
      id: '5',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/home',
    },
    {
      id: '6',
      name: 'YGOProDeck',
      icon: 'book',
      link: 'https://ygoprodeck.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'book-open',
  secondListIcon: 'dollar-sign',

  // Links
  lists: {
    firstList: [
      {
        name: 'Dotfiles',
        link: 'https://github.com/PastelRobot/dotfiles',
      },
      {
        name: 'CertMaster',
        link: 'https://learn.comptia.org/login',
      },
      {
        name: 'ArchWiki',
        link: 'https://wiki.archlinux.org/',
      },
      {
        name: 'Blog',
        link: 'https://pastelrobot.gay',
      },
    ],
    secondList: [
      {
        name: 'Acorns',
        link: 'https://app.acorns.com/present',
      },
      {
        name: 'Progressive',
        link: 'https://www.progressive.com/',
      },
      {
        name: 'USBank',
        link: 'https://www.usbank.com/index.html',
      },
      {
        name: 'Kraken',
        link: 'https://www.kraken.com/u/trade',
      },
    ],
  },
};
