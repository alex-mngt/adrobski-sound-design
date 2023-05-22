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
  BALO,
  MAGNANE,
  Hurrah,
} from './artists';

export const videos: IVideo[] = [
  {
    id: 'Magnane_LVMH',
    name: 'LVMH',
    artists: [MAGNANE],
    link: 'https://magnane.com/projects/lvmh-data-summit',
    fallbackSource: {
      url: '/videos/square/Magnane_LVMH/Magnane_LVMH_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Magnane_LVMH/Magnane_LVMH_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
    {
    id: 'Mekaverse_MekaDriver_trailer',
    name: 'MekaDriver Trailer',
    artists: [MEKALABS],
    link: 'https://twitter.com/MekaVerse/status/1616538052310216704',
    fallbackSource: {
      url: '/videos/square/Mekaverse_MekaDriver_trailer/Mekaverse_MekaDriver_trailer_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Mekaverse_MekaDriver_trailer/Mekaverse_MekaDriver_trailer_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
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
    id: 'vyder_FreeMint',
    name: 'Free Mint',
    artists: [VYDER],
    link: 'https://twitter.com/vydergg',
    fallbackSource: {
      url: '/videos/square/Vyder_FreeMint/Vyder_FreeMint_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Vyder_FreeMint/Vyder_FreeMint_VP9.webm',
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
    name: 'heirveys world',
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
    id: 'Hurrah.Group_Virtex_Trailer_music',
    name: 'Virtex Stadium Music Trailer',
    artists: [Hurrah],
    link: 'https://www.virtexstadium.com/',
    fallbackSource: {
      url: '/videos/square/Hurrah.Group_Virtex_Trailer_musicHurrah.Group_Virtex_Trailer_music_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Hurrah.Group_Virtex_Trailer_music/Hurrah.Group_Virtex_Trailer_music_VP9.webm',
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
    artists: [MEKALABS, MATTEYYY, MATTHIEU_BRACCINI],
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
    link: 'https://www.instagram.com/p/CdLyx0btNbY/',
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
    id: 'matthieubraccini_Melancholy',
    name: 'Melancholy',
    artists: [MATTHIEU_BRACCINI],
    link: 'https://www.instagram.com/p/CpiR0u7Nt71/',
    fallbackSource: {
      url: '/videos/square/Matthieu_Braccini_Melancholy/Matthieu_Braccini_Melancholy_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Matthieu_Braccini_Melancholy/Matthieu_Braccini_Melancholy_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'matthieubraccini_The_Og_Meka_Driver',
    name: 'The Og Meka Driver',
    artists: [MATTHIEU_BRACCINI],
    link: 'https://www.instagram.com/p/CnkKyqSNLzQ/',
    fallbackSource: {
      url: '/videos/square/Matthieu_Braccini_The_Og_Meka_Driver/Matthieu_Braccini_The_Og_Meka_Driver_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Matthieu_Braccini_The_Og_Meka_Driver/Matthieu_Braccini_The_Og_Meka_Driver_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'matthieubraccini_THE_SNEAKER_GIRL',
    name: 'The Sneaker Girl',
    artists: [MATTHIEU_BRACCINI],
    link: 'https://www.instagram.com/p/Cn4lNGtNCwG/',
    fallbackSource: {
      url: '/videos/square/Matthieu_Braccini_THE_SNEAKER_GIRL/Matthieu_Braccini_THE_SNEAKER_GIRL_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Matthieu_Braccini_THE_SNEAKER_GIRL/Matthieu_Braccini_THE_SNEAKER_GIRL_VP9.webm',
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
    id: 'blansable_Haunted',
    name: 'Haunted',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/CkJINDDjM0K/',
    fallbackSource: {
      url: '/videos/square/Blansable_Haunted/Blansable_Haunted_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Blansable_Haunted/Blansable_Haunted_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
  {
    id: 'blansable_Millionflowers',
    name: 'Million flowers',
    artists: [BLANSABLE],
    link: 'https://www.instagram.com/p/Com3biVjTM5/',
    fallbackSource: {
      url: '/videos/square/Blansable_Millionflowers/Blansable_Millionflowers_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Blansable_Millionflowers/Blansable_Millionflowers_VP9.webm',
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
    id: 'Balo_flashboy',
    name: 'Flashboy',
    artists: [BALO],
    link: 'https://www.instagram.com/p/Cm1QHfXDQvE/',
    fallbackSource: {
      url: '/videos/square/Balo_flashboy/Balo_flashboy_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Balo_flashboy/Balo_flashboy_VP9.webm',
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
    id: 'justinbuisson_botani',
    name: 'Botani',
    artists: [JUSTIN_BUISSON],
    link: 'https://www.instagram.com/p/Cp0fFbDscTm/',
    fallbackSource: {
      url: '/videos/square/Justin_buisson_botani/Justin_buisson_botani_h264.mp4',
      type: 'video/mp4',
    },
    sources: [
      {
        url: '/videos/square/Justin_buisson_botani/Justin_buisson_botani_VP9.webm',
        type: 'video/webm',
      },
    ],
    format: 'square',
  },
];
