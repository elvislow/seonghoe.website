import type { AreaPage } from './bp';

// 新文龙专页。新文龙在峇株巴辖县内，地点都在 Google 地图核对过。
const callZh = '新文龙分店 24 小时有人接，打 016-777 3883 或 WhatsApp 我们。';
const callEn = 'Our Senggarang branch answers 24 hours a day. Call +60 16-777 3883 or WhatsApp us.';

export const sgPages: AreaPage[] = [
  {
    slug: 'cremation',
    icon: 'flame',
    photo: '/img/work-procession.webp',
    service: 'cremation',
    zh: {
      title: '新文龙火化服务｜24 小时：出殡、火化、捡骨｜祥鹤新文龙',
      desc: '祥鹤殡仪新文龙分店是一家位于新文龙（Senggarang）的 24 小时殡仪服务分店。守灵、出殡、火化、捡骨到安置骨灰，一条龙安排，费用先讲清楚。电话 016-777 3883。',
      h1: '新文龙火化服务，',
      grey: '在地分店，随叫随到。',
      intro: `住在新文龙一带的家庭，不用从峇株巴辖市区叫人。祥鹤新文龙分店就在 Taman Sri Bahagia，从守灵、出殡到火化和捡骨，全程陪着家属。${callZh}`,
      sections: [
        { h: '新文龙的家庭，火化这样安排', steps: [
          ['守灵', '在自己家里、附近的礼堂，或者峇株巴辖市区的殡仪馆守灵，看家里方便。'],
          ['出殡', '守灵结束后出殡，灵车从新文龙送往火葬场。'],
          ['火化', '新文龙属于峇株巴辖县，火化一般去峇株巴辖，例如巴莪仙境山庄火葬场，时间我们帮你约好。'],
          ['捡骨、安置', '火化后陪家属捡骨，骨灰放骨灰塔、纪念园，或照家里的意思。'],
        ] },
        { h: '在地分店的好处', p: [
          '家里有人走了，最怕等。新文龙分店离家近，接到电话就能安排人过去，不用从别的地方赶来。需要更多人手或寿板，峇株巴辖总店就在附近支援。',
        ] },
      ],
      faqs: [
        ['新文龙有人走了，可以马上打来吗？', '可以，新文龙分店 24 小时有人接，电话 016-777 3883。'],
        ['新文龙火化要去哪里？', '新文龙属于峇株巴辖县，火化一般去峇株巴辖，例如巴莪仙境山庄火葬场。'],
        ['新文龙分店在哪里？', '1, Jalan Sri Bahagia 1, Taman Sri Bahagia, 83200 Senggarang, Johor。'],
      ],
    },
    en: {
      title: 'Cremation in Senggarang | 24/7, Procession to Ashes | Seong Hoe',
      desc: 'Seong Hoe Senggarang Branch is a 24-hour funeral service branch based in Senggarang, Johor. We arrange the wake, procession, cremation, bone collection and ashes, with costs explained upfront. Call +60 16-777 3883.',
      h1: 'Cremation in Senggarang,',
      grey: 'a local branch, close to home.',
      intro: `Families around Senggarang do not need to call someone from Batu Pahat town. Our Senggarang branch in Taman Sri Bahagia stays with you from the wake and procession to cremation and bone collection. ${callEn}`,
      sections: [
        { h: 'How a cremation works for Senggarang families', steps: [
          ['The wake', 'At home, at a nearby hall, or at a funeral parlour in Batu Pahat town.'],
          ['The procession', 'The hearse goes from Senggarang to the crematorium.'],
          ['Cremation', 'Senggarang is in Batu Pahat district, so cremation is usually in Batu Pahat, for example at the Bagan Fairy Park crematorium (巴莪仙境山庄). We book the time for you.'],
          ['Bone collection and ashes', 'We guide the family through bone collection; the ashes go to a columbarium, memorial park or as you wish.'],
        ] },
        { h: 'Why a local branch helps', p: [
          'When someone passes away, waiting is the hardest part. Our Senggarang branch is close by, so we can send someone as soon as you call. Our Batu Pahat HQ is nearby for extra support and caskets.',
        ] },
      ],
      faqs: [
        ['Someone has passed away in Senggarang. Can I call now?', 'Yes. Our Senggarang branch answers 24 hours a day on +60 16-777 3883.'],
        ['Where are cremations for Senggarang held?', 'Senggarang is in Batu Pahat district, so usually in Batu Pahat, for example at the Bagan Fairy Park crematorium.'],
        ['Where is your Senggarang branch?', '1, Jalan Sri Bahagia 1, Taman Sri Bahagia, 83200 Senggarang, Johor.'],
      ],
    },
  },
  {
    slug: 'burial',
    icon: 'mountain',
    photo: '/img/work-coffin-carry.webp',
    service: 'burial',
    zh: {
      title: '新文龙土葬｜广福义山墓地安排｜24 小时｜祥鹤新文龙',
      desc: '祥鹤殡仪新文龙分店是一家位于新文龙的 24 小时殡仪服务分店。土葬可选新文龙广福义山，或峇株巴辖的义山和纪念园，墓地、出殡和下葬我们帮你安排。电话 016-777 3883。',
      h1: '新文龙土葬，',
      grey: '义山、墓地帮你安排。',
      intro: `新文龙的家庭选择土葬，祥鹤新文龙分店协助安排墓地、出殡和下葬。${callZh}`,
      sections: [
        { h: '新文龙附近的华人墓地', steps: [
          ['广福义山', 'Perkuburan Bukit Batu Senggarang，就在新文龙。'],
          ['峇株巴辖华人义山', 'Jalan Tanjong Laboh，峇株巴辖市区。'],
          ['Banang Memorial Park', '峇株巴辖有人管理的纪念园，地势高、环境干净。'],
        ] },
        { h: '土葬的寿板', p: [
          '土葬要选耐潮、耐腐的木，例如胭脂梅（Keledang）或正艾木（Chengal）。可以到峇株巴辖总店的展示厅看实物。',
        ] },
      ],
      faqs: [
        ['新文龙有华人义山吗？', '有，例如新文龙的广福义山（Perkuburan Bukit Batu Senggarang），也可以选峇株巴辖的义山和纪念园。'],
        ['墓地要自己去问吗？', '不用，跟我们讲家里的想法，我们帮你安排。'],
        ['新文龙可以看寿板吗？', '寿板展示厅在峇株巴辖总店（13, Jalan Zamrud, Taman Dagang），离新文龙不远，先 WhatsApp 约时间。'],
      ],
    },
    en: {
      title: 'Burial in Senggarang | Chinese Cemetery Plots, 24/7 | Seong Hoe',
      desc: 'Burial in Senggarang: Seong Hoe arranges plots at Perkuburan Bukit Batu Senggarang or in Batu Pahat, plus the procession and burial. Open 24/7, call +60 16-777 3883.',
      h1: 'Burial in Senggarang,',
      grey: 'from the plot to the burial.',
      intro: `For Senggarang families choosing burial, our Senggarang branch helps arrange the plot, the procession and the burial. ${callEn}`,
      sections: [
        { h: 'Chinese burial grounds near Senggarang', steps: [
          ['Perkuburan Bukit Batu Senggarang (广福义山)', 'A Chinese cemetery in Senggarang itself.'],
          ['Batu Pahat Chinese Cemetery', 'Jalan Tanjong Laboh, Batu Pahat town.'],
          ['Banang Memorial Park', 'A managed memorial park in Batu Pahat on high ground.'],
        ] },
        { h: 'Choosing a casket for burial', p: [
          'Burial needs a wood that resists damp and decay, such as Keledang (胭脂梅) or Chengal (正艾木). You can see them at our Batu Pahat HQ showroom.',
        ] },
      ],
      faqs: [
        ['Is there a Chinese cemetery in Senggarang?', 'Yes, for example Perkuburan Bukit Batu Senggarang (广福义山). Batu Pahat\'s cemeteries and memorial parks are also options.'],
        ['Do we contact the cemetery ourselves?', 'No need. Tell us your wishes and we will arrange it.'],
        ['Can we see caskets near Senggarang?', 'Our casket showroom is at the Batu Pahat HQ (13, Jalan Zamrud, Taman Dagang), not far from Senggarang. WhatsApp us to book.'],
      ],
    },
  },
  {
    slug: 'taoist-funeral',
    icon: 'lotus',
    photo: '/img/work-taoist.webp',
    service: 'funeral-rites',
    zh: {
      title: '新文龙道教丧礼｜法事、打斋、做七｜24 小时｜祥鹤',
      desc: '祥鹤殡仪新文龙分店是一家位于新文龙的 24 小时殡仪服务分店。道教丧礼照籍贯和长辈的意思安排法事、出殡和做七，有地房屋也可以在家搭棚设灵堂。电话 016-777 3883。',
      h1: '新文龙道教丧礼，',
      grey: '老规矩照着做。',
      intro: `新文龙很多家庭还是照传统办丧事。祥鹤新文龙分店先问清楚籍贯和长辈的意思，再安排道士、法事和出殡。${callZh}`,
      sections: [
        { h: '道教丧礼的安排', steps: [
          ['入殓、封棺', '照时辰入殓、盖棺，什么时候回避会提醒。'],
          ['法事（打斋）', '守灵期间请道士做法事。'],
          ['出殡', '时辰、路线和规矩事先讲清楚。'],
          ['做七', '一般做单数的头七、三七、五七、七七。'],
        ] },
        { h: '在家里办也可以', p: [
          '新文龙不少家庭是有地房屋，可以在家门口搭棚设灵堂，亲戚邻居来往方便。法事做足或简化，看家里的意思，我们不会硬加项目。',
        ] },
      ],
      faqs: [
        ['新文龙可以在家里办丧事吗？', '可以，有地房屋可以在家门口搭棚设灵堂。'],
        ['做七一定要做满七次吗？', '不用，一般只做单数的头七、三七、五七、七七。'],
        ['不懂规矩怎么办？', '没关系，每一步我们都会在旁边提醒。'],
      ],
    },
    en: {
      title: 'Taoist Funeral in Senggarang | Rites & Prayers, 24/7 | Seong Hoe',
      desc: 'Taoist funerals in Senggarang, arranged by your dialect group\'s customs, with the wake at home if you wish. Open 24/7, call +60 16-777 3883.',
      h1: 'Taoist funerals in Senggarang,',
      grey: 'the traditional way.',
      intro: `Many Senggarang families still follow traditional rites. Our Senggarang branch first asks about your dialect group and your elders' wishes, then arranges the priests, rites and procession. ${callEn}`,
      sections: [
        { h: 'How we arrange a Taoist funeral', steps: [
          ['Encoffining and sealing', 'At an auspicious time, with guidance on when to turn away.'],
          ['Funeral rites', 'Taoist priests perform rites during the wake.'],
          ['The procession', 'Timing, route and customs explained in advance.'],
          ['The "sevens"', 'Usually only the 1st, 3rd, 5th and 7th are held.'],
        ] },
        { h: 'A wake at home', p: [
          'Many Senggarang families live in landed homes and can set up a tent at the front of the house for the wake. Rites can be full or simplified; we never add things you do not need.',
        ] },
      ],
      faqs: [
        ['Can we hold the wake at home in Senggarang?', 'Yes, landed homes can set up a tent at the front of the house.'],
        ['Must all seven "sevens" be held?', 'No. Usually only the 1st, 3rd, 5th and 7th.'],
        ['We do not know the customs. What should we do?', 'That is fine. We will guide you at every step.'],
      ],
    },
  },
  {
    slug: 'buddhist-funeral',
    icon: 'lotus',
    service: 'funeral-rites',
    zh: {
      title: '新文龙佛教丧礼｜助念、诵经、灵堂｜24 小时｜祥鹤',
      desc: '祥鹤殡仪新文龙分店是一家位于新文龙的 24 小时殡仪服务分店。佛教丧礼的助念、诵经、灵堂布置到出殡火化，都配合你熟悉的寺院安排。电话 016-777 3883。',
      h1: '新文龙佛教丧礼，',
      grey: '安静、庄严地送别。',
      intro: `家里信佛，祥鹤新文龙分店照佛教的方式安排：助念、诵经、灵堂，到出殡和火化。${callZh}`,
      sections: [
        { h: '佛教丧礼的安排', steps: [
          ['助念', '人刚走时，请人一起念佛。'],
          ['诵经', '守灵期间请法师或居士诵经，有熟悉的寺院照寺院安排。'],
          ['灵堂', '以佛像、鲜花为主，清净庄严。'],
          ['出殡、火化', '多数选择火化，火化一般去峇株巴辖。'],
        ] },
      ],
      faqs: [
        ['新文龙办佛教丧礼，要自己找法师吗？', '有熟悉的寺院照家里的安排，没有的话我们帮你联络。'],
        ['佛教丧礼一定要火化吗？', '不一定，多数选火化，土葬也可以。'],
      ],
    },
    en: {
      title: 'Buddhist Funeral in Senggarang | Chanting & Wake, 24/7 | Seong Hoe',
      desc: 'Buddhist funerals in Senggarang: recitation, sutra chanting, a calm wake, the procession and cremation, arranged with your temple. Open 24/7, call +60 16-777 3883.',
      h1: 'Buddhist funerals in Senggarang,',
      grey: 'a quiet, dignified farewell.',
      intro: `For Buddhist families, our Senggarang branch arranges recitation, chanting, the wake, the procession and cremation. ${callEn}`,
      sections: [
        { h: 'How we arrange a Buddhist funeral', steps: [
          ['Recitation', 'Reciting the Buddha\'s name together right after a death.'],
          ['Sutra chanting', 'By monks or lay practitioners; we follow your temple\'s arrangements if you have one.'],
          ['The wake', 'Calm and dignified, with a Buddha image and flowers.'],
          ['Procession and cremation', 'Most choose cremation, usually in Batu Pahat.'],
        ] },
      ],
      faqs: [
        ['Do we need to find the monks ourselves?', 'If you have a temple, we follow its arrangements; if not, we can contact one for you.'],
        ['Must a Buddhist funeral be a cremation?', 'No. Most choose cremation, but burial is also possible.'],
      ],
    },
  },
];
