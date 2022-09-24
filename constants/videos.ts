import { IVideo } from '../helpers/types';
import {
  BLANSABLE,
  HEIRVEY,
  JUSTIN_BUISSON,
  MATTHIEU_BRACCINI,
  MEKALABS,
  STRETCH_CLUB,
  MATTEYYY,
  VYDER,
} from './artists';

export const videos: IVideo[] = [
  {
    id: 'mekaverse_meka-merch',
    name: 'Meka-Merch',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1570477509950537731',
    fallbackSource: {
      url: '/videos/square/mekaverse_meka-merch/mekaverse_meka-merch_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse_meka-merch/mekaverse_meka-merch_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'matteyyy_multiverse_run',
    name: 'Multiverse Run',
    artists: [MATTEYYY],
    link: 'https://www.instagram.com/p/COdPdRCnFU9/',
    fallbackSource: {
      url: '/videos/square/matteyyy_multiverse_run/matteyyy_multiverse_run_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/matteyyy_multiverse_run/matteyyy_multiverse_run_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_grue',
    name: 'Grue',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/reel/CYCNC0gJSsg/',
    fallbackSource: {
      url: '/videos/square/blansable_grue/blansable_grue_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_grue/blansable_grue_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_the_explorer_snake',
    name: 'The Explorer Snake',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CixeXzqjN6P/',
    fallbackSource: {
      url: '/videos/square/blansable_the_explorer_snake/blansable_the_explorer_snake_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_the_explorer_snake/blansable_the_explorer_snake_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'mekaverse_mekabot',
    name: 'Mekabot',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1496205880567685131?s=20&t=v2CVQtp8xqX4E92Dx7fHKQ',
    fallbackSource: {
      url: '/videos/square/mekaverse_mekabot/mekaverse_mekabot_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse_mekabot/mekaverse_mekabot_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'heirvey_heirvey_s_world',
    name: 'heirvey"s_world',
    artists: [HEIRVEY],
    link: 'https://vimeo.com/606875966',
    fallbackSource: {
      url: '/videos/square/heirvey_heirvey_s_world/heirvey_heirvey_s_world_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/heirvey_heirvey_s_world/heirvey_heirvey_s_world_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_rendering',
    name: 'Rendering',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CVQTxzlg7aJ/',
    fallbackSource: {
      url: '/videos/square/blansable_rendering/blansable_rendering_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_rendering/blansable_rendering_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'justinbuisson_DA',
    name: 'New DA',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CZZ6RFuIsmk/',
    fallbackSource: {
      url: '/videos/square/justinbuisson_DA/justinbuisson_DA_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/justinbuisson_DA/justinbuisson_DA_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'mekaverse',
    name: 'Rarity',
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
    id: 'mekaverse_background',
    name: 'Background',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1484995429825761286?s=20&t=v2CVQtp8xqX4E92Dx7fHKQ',
    fallbackSource: {
      url: '/videos/square/mekaverse_background/mekaverse_background_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse_background/mekaverse_background_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'mekaverse_blue',
    name: 'Blue',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1494012602493685764?s=20&t=v2CVQtp8xqX4E92Dx7fHKQ',
    fallbackSource: {
      url: '/videos/square/mekaverse_blue/mekaverse_blue_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse_blue/mekaverse_blue_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'mekaverse_lookup',
    name: 'Look Up',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1484642405026615298?s=20&t=v2CVQtp8xqX4E92Dx7fHKQ',
    fallbackSource: {
      url: '/videos/square/mekaverse_lookup/mekaverse_lookup_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse_lookup/mekaverse_lookup_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'mekaverse_lootboxopen',
    name: 'Lootbox Explosion',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1472709018439372801?s=20&t=v2CVQtp8xqX4E92Dx7fHKQ',
    fallbackSource: {
      url: '/videos/square/mekaverse_lootboxopen/mekaverse_lootboxopen_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse_lootboxopen/mekaverse_lootboxopen_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'mekaverse_mekabotcustom',
    name: 'Mekabot Customization',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1504585381664145412?s=20&t=v2CVQtp8xqX4E92Dx7fHKQ',
    fallbackSource: {
      url: '/videos/square/mekaverse_mekabotcusto/mekaverse_mekabotcusto_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse_mekabotcusto/mekaverse_mekabotcusto_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'mekaverse_meka-station',
    name: 'Meka-Station',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1553832677551345664',
    fallbackSource: {
      url: '/videos/square/mekaverse_meka-station/mekaverse_meka-station_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse_meka-station/mekaverse_meka-station_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'mekaverse_the_last_gadians',
    name: 'The Last Gādians',
    artists: [MEKALABS,MATTEYYY,MATTHIEU_BRACCINI],
    link: 'https://www.instagram.com/p/CX_lSXBNg4L/',
    fallbackSource: {
      url: '/videos/square/mekaverse_the_last_gadians/mekaverse_the_last_gadians_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/mekaverse_the_last_gadians/mekaverse_the_last_gadians_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'matteyyy_excalibur',
    name: 'Excalibur',
    artists: [MATTEYYY],
    link: 'https://www.instagram.com/p/CLwyXIRHfVp/',
    fallbackSource: {
      url: '/videos/square/matteyyy_excalibur/matteyyy_excalibur_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/matteyyy_excalibur/matteyyy_excalibur_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'matteyyy_mushroom_meditation',
    name: 'Mushroom Meditation',
    artists: [MATTEYYY],
    link: 'https://www.instagram.com/p/CL9qm2anjsQ/',
    fallbackSource: {
      url: '/videos/square/matteyyy_mushroom_meditation/matteyyy_mushroom_meditation_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/matteyyy_mushroom_meditation/matteyyy_mushroom_meditation_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'matthieubraccini_eternal_expectation',
    name: 'Eternal Expectation',
    artists: [MATTHIEU_BRACCINI],
    link: 'https://www.instagram.com/matthieubraccini/',
    fallbackSource: {
      url: '/videos/square/matthieubraccini_eternal_expectation/matthieubraccini_eternal_expectation_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/matthieubraccini_eternal_expectation/matthieubraccini_eternal_expectation_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_36days_0',
    name: '36days 0',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/Cb2j9y3D5qp/',
    fallbackSource: {
      url: '/videos/square/blansable_36days_0/blansable_36days_0_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_36days_0/blansable_36days_0_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_36days_4',
    name: '36days 4',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CcA2iJODsW1/',
    fallbackSource: {
      url: '/videos/square/blansable_36days_4/blansable_36days_4_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_36days_4/blansable_36days_4_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_grunt',
    name: 'Grunt',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CfWi6BMjY_o/',
    fallbackSource: {
      url: '/videos/square/blansable_grunt/blansable_grunt_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_grunt/blansable_grunt_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_99',
    name: '99',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CL9ugHMniYt/',
    fallbackSource: {
      url: '/videos/square/blansable_99/blansable_99_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_99/blansable_99_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_ange',
    name: 'Ange',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/reel/CXOk63DDEOx/',
    fallbackSource: {
      url: '/videos/square/blansable_ange/blansable_ange_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_ange/blansable_ange_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_C',
    name: 'C',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CNXcNqgnO__/',
    fallbackSource: {
      url: '/videos/square/blansable_C/blansable_C_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_C/blansable_C_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_fish',
    name: 'Fish',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/reel/CY4IfLjJX3f/',
    fallbackSource: {
      url: '/videos/square/blansable_fish/blansable_fish_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/blansable_fish/blansable_fish_VP9.webm',
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
    id: '36-days-of-type',
    name: 'H',
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
  {
    id: 'justinbuisson_Chindogu',
    name: 'Chindogu',
    artists: [JUSTIN_BUISSON],
    link: 'https://youtu.be/JzpaqERrtZE?t=53',
    fallbackSource: {
      url: '/videos/square/justinbuisson_Chindogu/justinbuisson_Chindogu_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/justinbuisson_Chindogu/justinbuisson_Chindogu_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'vyder_final_reveal',
    name: 'Final Reveal',
    artists: [VYDER],
    link: 'https://twitter.com/VYDERgg/status/1570472546218266625',
    fallbackSource: {
      url: '/videos/square/vyder_final_reveal/vyder_final_reveal_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/vyder_final_reveal/vyder_final_reveal_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
];
