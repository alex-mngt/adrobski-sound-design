import { IVideo } from '../helpers/types';
import {
  BLANSABLE,
  HEIRVEY,
  MATTHIEU_BRACCINI,
  MEKALABS,
  STRETCH_CLUB,
} from './artists';

export const videos: IVideo[] = [
  {
    id: 'cartier',
    name: 'Cartier',
    artists: [HEIRVEY],
    link: 'https://www.instagram.com/p/CH7w52rojbc',
    fallbackSource: {
      url: '/videos/square/cartier/cartier.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/cartier/cartier.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'chivas',
    name: 'Chivas',
    artists: [BLANSABLE],
    link: 'https://twitter.com/Blansable99/status/1311699137772040195?s=20&t=P4cl7a-460XkHbeX9Oy8Vg',
    fallbackSource: {
      url: '/videos/square/chivas/chivas.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/chivas/chivas.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'colors',
    name: 'Colors',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CLpA_EtHjmi/',
    fallbackSource: {
      url: '/videos/square/colors/colors.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/colors/colors.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'fleur',
    name: 'Fleur',
    artists: [HEIRVEY],
    link: 'https://www.instagram.com/p/CC5jOd8IfmF/',
    fallbackSource: {
      url: '/videos/square/fleur/fleur.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/fleur/fleur.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: '36-days-of-type',
    name: '36 Days of Type',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CNkO8dQHbVf/',
    fallbackSource: {
      url: '/videos/square/36-days-of-type/36-days-of-type.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/36-days-of-type/36-days-of-type.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable',
    name: 'Blansable',
    artists: [BLANSABLE],
    link: 'https://twitter.com/Blansable99/status/1290052948966412288?s=20&t=P4cl7a-460XkHbeX9Oy8Vg',
    fallbackSource: {
      url: '/videos/square/blansable/blansable.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable/blansable.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'planet',
    name: 'Planet',
    artists: [HEIRVEY],
    link: 'https://www.instagram.com/p/CJQnOTJIdfa/',
    fallbackSource: {
      url: '/videos/square/planet/planet.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/planet/planet.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'mekaverse',
    name: 'Mekaverse',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1438929989819379713?s=20&t=P4cl7a-460XkHbeX9Oy8Vg',
    fallbackSource: {
      url: '/videos/square/mekaverse/mekaverse.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse/mekaverse.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'robot',
    name: 'Robot',
    artists: [HEIRVEY],
    link: 'https://www.instagram.com/p/CEyvTRRoSZT/',
    fallbackSource: {
      url: '/videos/square/robot/robot.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/robot/robot.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'chess',
    name: 'Chess',
    artists: [HEIRVEY],
    link: 'https://www.instagram.com/p/B93_EdLIRkN/',
    fallbackSource: {
      url: '/videos/square/chess/chess.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/chess/chess.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'armadillo',
    name: 'Armadillo',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CVfrxqKDaV6/',
    fallbackSource: {
      url: '/videos/square/armadillo/armadillo.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/armadillo/armadillo.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'tetris',
    name: 'Tetris',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CITRh-dnkOM/',
    fallbackSource: {
      url: '/videos/square/tetris/tetris.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/tetris/tetris.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'falling-pieces',
    name: 'Falling Pieces',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CFZzkpEnXV6/',
    fallbackSource: {
      url: '/videos/square/falling-pieces/falling-pieces.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/falling-pieces/falling-pieces.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'yoplait-chocolat',
    name: 'Yoplait Chocolat',
    artists: [MATTHIEU_BRACCINI, STRETCH_CLUB],
    link: 'https://wearestretchclub.com/perle-de-lait/',
    fallbackSource: {
      url: '/videos/square/yoplait-chocolat/yoplait-chocolat.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/yoplait-chocolat/yoplait-chocolat.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'yoplait-lemon',
    name: 'Yoplait Lemon',
    artists: [MATTHIEU_BRACCINI, STRETCH_CLUB],
    link: 'https://wearestretchclub.com/perle-de-lait/',
    fallbackSource: {
      url: '/videos/square/yoplait-lemon/yoplait-lemon.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/yoplait-lemon/yoplait-lemon.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'yoplait-cream',
    name: 'Yoplait Cream',
    artists: [MATTHIEU_BRACCINI, STRETCH_CLUB],
    link: 'https://wearestretchclub.com/perle-de-lait/',
    fallbackSource: {
      url: '/videos/square/yoplait-cream/yoplait-cream.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/yoplait-cream/yoplait-cream.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'yoplait-strawberry',
    name: 'Yoplait Strawberry',
    artists: [MATTHIEU_BRACCINI, STRETCH_CLUB],
    link: 'https://wearestretchclub.com/perle-de-lait/',
    fallbackSource: {
      url: '/videos/square/yoplait-strawberry/yoplait-strawberry.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/yoplait-strawberry/yoplait-strawberry.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'yoplait-strawberry-mango',
    name: 'Yoplait Strawberry Mango',
    artists: [MATTHIEU_BRACCINI, STRETCH_CLUB],
    link: 'https://wearestretchclub.com/perle-de-lait/',
    fallbackSource: {
      url: '/videos/square/yoplait-strawberry-mango/yoplait-strawberry-mango.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/yoplait-strawberry-mango/yoplait-strawberry-mango.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
];
