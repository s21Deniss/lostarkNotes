export default {
  title: 'Lost Ark notes',
  description: 'lost ark notes',
  lang: 'en-US',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/pinkpheon.webp' }],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/path/to/icon.svg' }], for svg
  ],
  themeConfig: {
    nav: nav(),
    lastUpdatedText: 'Updated Date',
    logo: '/pinkpheon.webp',
    // socials
    socialLinks: [
      { icon: 'github', link: 'https://github.com/s21Deniss/lostarkNotes' },
    ],

    //sidebar
    sidebar: [
      {
        text: 'Community',
        items: [
          { text: 'Links', link: '/links' }
        ]
      },
      // {
      //   text: 'Argos',
      //   collapsible: true,
      //   items: [
      //     { text: 'Gate 1', link: '/vykas/' },
      //     { text: 'Gate 2', link: '/vykas/gate2' },
      //     { text: 'Gate 3', link: '/vykas/gate3' },
      //   ]
      // },
      {
        text: 'Valtan',
        collapsible: true,
        items: [
          { text: 'Gate 1', link: '/valtan/' },
          { text: 'Gate 2', link: '/valtan/gate2' },
        ]
      },
      {
        text: 'Vykas',
        collapsible: true,
        items: [
          { text: 'Gate 1', link: '/vykas/' },
          { text: 'Gate 2', link: '/vykas/gate2' },
          { text: 'Gate 3', link: '/vykas/gate3' },
        ]
      },
      // {
      //   text: 'Kakul-Saydon',
      //   collapsible: true,
      //   items: [
      //     { text: 'Gate 1', link: '/kakul-saydon/' },
      //     { text: 'Gate 2', link: '/kakul-saydon/gate2' },
      //     { text: 'Gate 3', link: '/kakul-saydon/gate3' },
      //   ]
      // },
      {
        text: 'Other',
        collapsible: true,
        items: [
          { text: 'Damage Multipliers table', link: 'other/damageMultipliers' },
          { text: 'Relic set converting', link: 'other/relicsets' },
        ]
      },
      {
        text: '3rd Party Tools & Resources',
        collapsible: true,
        items: [
          { text: 'Merchants tracker', link: 'https://lostmerchants.com/' },
          { text: 'Casino stone calculator', link: 'https://lostark.meta-game.gg/ability-stone-calculator' },
          { text: 'KR Ladder', link: 'https://loawa.com/rank' },
          { text: 'KR Calculator', link: 'https://loa.icepeng.com/' },
          { text: 'Daily activity tracker', link: 'https://ark.bynn.kr/home' },
          { text: 'Vykas boomer test practice', link: 'https://marsunpaisti.github.io/lostarktypingpractice/' },
        ]
      }
    ],


    editLink: {
      pattern: 'https://github.com/s21Deniss/lostarkNotes/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}



function nav() {
  return [
    { text: 'Lost Ark', link: '#', activeMatch: '/' },
    { text: 'BDO', link: 'https://bdo.s21.dev' },
  ]
}