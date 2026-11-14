import type { Lang } from './site';
import type { Section } from './services';

// 峇株巴辖专页：每页对准一个「峇株巴辖 + 服务」的搜索。
// 地点都在 Google 地图核对过；祥鹤自己的做法写得比较概括，细节等祥鹤补。
export type AreaPageLang = { title: string; desc?: string; h1: string; grey: string; intro: string; sections: Section[]; faqs: [string, string][] };
export type AreaPage = { slug: string; icon: string; photo?: string; service?: string; zh: AreaPageLang; en: AreaPageLang };

const callZh = '24 小时都有人接，打 016-777 3883 或 WhatsApp 我们。';
const callEn = 'We answer 24 hours a day. Call +60 16-777 3883 or WhatsApp us.';

export const bpPages: AreaPage[] = [
  {
    slug: 'cremation',
    icon: 'flame',
    photo: '/img/work-hearse-classic.webp',
    service: 'cremation',
    zh: {
      title: '峇株巴辖火化服务｜24 小时一条龙：出殡、火化、捡骨｜祥鹤',
      desc: '峇株巴辖家里有人走了，祥鹤 24 小时有人接。守灵、出殡、火化、捡骨到安置骨灰，一条龙安排，费用先讲清楚。电话 016-777 3883。',
      h1: '峇株巴辖火化服务，',
      grey: '从出殡陪到捡骨。',
      intro: `家里选择火化，祥鹤峇株巴辖总店从出殡、到火化场、最后告别，到捡骨和安置骨灰，全程陪着家属走。${callZh}`,
      sections: [
        { h: '在峇株巴辖火化，流程是这样', steps: [
          ['守灵', '在殡仪馆、会馆礼堂或家里守灵，天数看家里安排。'],
          ['出殡', '守灵结束后出殡，灵车送往火葬场，家属送最后一程。'],
          ['到火葬场', '峇株巴辖家属可以选巴莪仙境山庄火葬场，我们会先帮家属确认时间。'],
          ['最后告别', '火化前做最后的告别，有什么规矩、要不要回避，到时会提醒。'],
          ['捡骨', '火化完成后，我们陪家属捡骨，放进骨灰罐。'],
          ['安置骨灰', '放骨灰塔、纪念园，或者照家里的意思安排。'],
        ] },
        { h: '火化前，家里要先想好的几件事', p: [
          '守灵几天、灵堂设在哪里、做什么宗教仪式、骨灰之后放在哪里。这几样决定了整个丧礼怎么安排，也决定了费用。不用一次想好，先跟我们讲家里的情况，我们一样一样列出来给你看。',
        ] },
        { h: '火化用什么棺木', p: [
          '火化一般不需要选最重最硬的木。祥鹤有不同木料的寿板，颜色、雕花、价钱都不一样，可以来峇株巴辖总店的展示厅看实物再决定。',
        ] },
      ],
      faqs: [
        ['峇株巴辖的火葬场在哪里？', '峇株巴辖家属可以选巴莪仙境山庄火葬场。火化时间要先约，我们会帮你安排。'],
        ['火化后什么时候可以捡骨？', '火化完成后就会安排捡骨，时间看火葬场当天的安排，我们会陪家属一起。'],
        ['骨灰可以放在哪里？', '可以放骨灰塔、纪念园，也可以照家里的意思安排。我们会把选择列出来给你比较。'],
        ['峇株巴辖可以直接火化，不办守灵吗？', '可以。有的家庭选择简单处理，直接火化。WhatsApp 我们讲家里的想法，我们帮你安排。'],
      ],
    },
    en: {
      title: 'Cremation in Batu Pahat | 24/7, Procession to Ashes | Seong Hoe',
      desc: 'Someone has passed away in Batu Pahat? Seong Hoe answers 24/7 and arranges the wake, procession, cremation, bone collection and ashes, with costs explained upfront. Call +60 16-777 3883.',
      h1: 'Cremation in Batu Pahat,',
      grey: 'from the procession to the ashes.',
      intro: `If your family chooses cremation, our Batu Pahat HQ stays with you from the funeral procession and the final farewell to bone collection and placing the ashes. ${callEn}`,
      sections: [
        { h: 'How a cremation works in Batu Pahat', steps: [
          ['The wake', 'Held at a funeral parlour, an association hall or at home, for as many days as the family decides.'],
          ['The procession', 'After the wake, the hearse takes your loved one to the crematorium, with the family.'],
          ['At the crematorium', 'Batu Pahat families can use the crematorium at Fairy Park Memorial Park in Bagan (巴莪仙境山庄). We confirm the time for you.'],
          ['The final farewell', 'A last goodbye before cremation, with any customs explained on the day.'],
          ['Bone collection', 'After cremation, we guide the family through collecting the remains into the urn.'],
          ['Placing the ashes', 'In a columbarium, a memorial park, or as the family wishes.'],
        ] },
        { h: 'Things to decide before a cremation', p: [
          'How many days the wake will be, where it will be held, which religious rites to follow and where the ashes will rest. These shape the whole funeral and its cost. You do not need to decide everything at once. Tell us about your family and we will set out each option for you.',
        ] },
        { h: 'Choosing a casket for cremation', p: [
          'A cremation usually does not need the heaviest hardwood. We have caskets in different woods, colours and carving styles, and you are welcome to see them at our Batu Pahat showroom.',
        ] },
      ],
      faqs: [
        ['Where is the crematorium for Batu Pahat?', 'Batu Pahat families can use the crematorium at Fairy Park Memorial Park in Bagan (巴莪仙境山庄). Cremation times must be booked, and we arrange this for you.'],
        ['When is bone collection done?', 'After the cremation is complete, depending on the crematorium\'s schedule that day. We stay with the family throughout.'],
        ['Where can the ashes be placed?', 'In a columbarium, a memorial park, or as your family wishes. We will lay out the options for you to compare.'],
        ['Can we arrange a direct cremation without a wake in Batu Pahat?', 'Yes. Some families prefer a simple direct cremation. WhatsApp us and we will arrange it.'],
      ],
    },
  },
  {
    slug: 'burial',
    icon: 'mountain',
    photo: '/img/work-hearse-arch.webp',
    service: 'burial',
    zh: {
      title: '峇株巴辖土葬服务｜义山、纪念园墓地安排｜24 小时｜祥鹤',
      desc: '峇株巴辖土葬，祥鹤帮你安排义山或纪念园墓地、出殡和下葬，寿板可以到总店展示厅看实物。24 小时服务，电话 016-777 3883。',
      h1: '峇株巴辖土葬，',
      grey: '从墓地陪到下葬。',
      intro: `选择土葬的家庭，祥鹤峇株巴辖总店协助安排墓地、出殡和下葬，每一步都陪着家属。${callZh}`,
      sections: [
        { h: '峇株巴辖的墓地选择', steps: [
          ['峇株巴辖华人义山', 'Jalan Tanjong Laboh。传统的华人义山。'],
          ['Banang Memorial Park', '有人管理的纪念园，地势高、环境干净，家属来扫墓比较方便。'],
        ] },
        { h: '土葬的流程', steps: [
          ['选墓地', '跟家属一起看墓地，确认位置和手续。'],
          ['守灵', '在殡仪馆、会馆礼堂或家里守灵。'],
          ['出殡', '守灵结束后出殡，灵车送往墓地。'],
          ['下葬', '到墓地后安排下葬仪式，有什么规矩到时会提醒。'],
        ] },
        { h: '土葬用什么棺木', p: [
          '土葬的寿板要耐潮、耐腐，入土不容易烂。华人传统常选胭脂梅（Keledang）做土葬棺木，尤其是梅花棺。正艾木（Chengal）天然耐腐、抗白蚁，也很适合。可以来峇株巴辖总店的展示厅看实物。',
        ] },
      ],
      faqs: [
        ['峇株巴辖有哪些华人墓地？', '例如 Jalan Tanjong Laboh 的峇株巴辖华人义山，以及 Banang Memorial Park 这类有人管理的纪念园。'],
        ['土葬选什么棺木比较好？', '要选耐潮、耐腐的木，例如胭脂梅或正艾木。我们会按家里的预算和意思推荐。'],
        ['墓地要自己去问吗？', '不用。跟我们讲家里的想法，我们帮你问好、安排。'],
      ],
    },
    en: {
      title: 'Burial in Batu Pahat | Cemetery Plots Arranged, 24/7 | Seong Hoe',
      desc: 'Burial in Batu Pahat: Seong Hoe arranges the cemetery plot, procession and burial, and you can see caskets at our HQ showroom. Open 24/7, call +60 16-777 3883.',
      h1: 'Burial in Batu Pahat,',
      grey: 'from the plot to the final rites.',
      intro: `For families choosing burial, our Batu Pahat HQ helps arrange the burial plot, the procession and the burial itself, staying with you at every step. ${callEn}`,
      sections: [
        { h: 'Burial grounds in Batu Pahat', steps: [
          ['Batu Pahat Chinese Cemetery', 'Jalan Tanjong Laboh. A traditional Chinese cemetery.'],
          ['Banang Memorial Park', 'A managed memorial park on high ground, clean and easy for families to visit.'],
        ] },
        { h: 'How a burial works', steps: [
          ['Choosing the plot', 'We look at options with the family and confirm the location.'],
          ['The wake', 'Held at a funeral parlour, an association hall or at home.'],
          ['The procession', 'After the wake, the hearse takes your loved one to the burial ground.'],
          ['The burial', 'The burial rites are held at the graveside, with any customs explained on the day.'],
        ] },
        { h: 'Choosing a casket for burial', p: [
          'A burial casket should resist damp and decay. Keledang (胭脂梅) is a traditional Chinese choice for burial, and Chengal (正艾木) is naturally resistant to rot and termites. You are welcome to see them at our Batu Pahat showroom.',
        ] },
      ],
      faqs: [
        ['Where are the Chinese burial grounds in Batu Pahat?', 'For example, the Batu Pahat Chinese Cemetery on Jalan Tanjong Laboh, and managed memorial parks such as Banang Memorial Park.'],
        ['Which casket is best for burial?', 'A wood that resists damp and decay, such as Keledang or Chengal. We will recommend options to suit your family and budget.'],
        ['Do we need to contact the cemetery ourselves?', 'No. Tell us what your family has in mind and we will arrange it.'],
      ],
    },
  },
  {
    slug: 'buddhist-funeral',
    icon: 'lotus',
    service: 'funeral-rites',
    zh: {
      title: '峇株巴辖佛教丧礼｜助念、诵经、灵堂｜24 小时｜祥鹤',
      desc: '峇株巴辖佛教丧礼，祥鹤安排助念、诵经、灵堂布置，到出殡和火化，配合你熟悉的寺院。24 小时服务，电话 016-777 3883。',
      h1: '峇株巴辖佛教丧礼，',
      grey: '庄严、清净地送别。',
      intro: `家里信佛，祥鹤峇株巴辖总店按佛教的方式安排丧礼：请法师或居士诵经念佛、布置灵堂，到出殡和火化。${callZh}`,
      sections: [
        { h: '佛教丧礼一般会有什么', steps: [
          ['助念', '人刚走的时候，很多佛教家庭会请人一起念佛。'],
          ['诵经', '守灵期间请法师或居士诵经，送往生者一程。'],
          ['灵堂', '灵堂布置得清净庄严，以佛像、鲜花为主。'],
          ['出殡、火化或土葬', '照家里的意思安排，佛教家庭多数选择火化。'],
        ] },
        { h: '每个家庭的做法不一样', p: [
          '有的家庭跟某一间寺院或佛教会比较熟，有的家庭只想简单念几场经。祥鹤会先听家里的想法，配合寺院、法师的安排，不会硬加项目。',
          '同一个家庭里，有人信佛、有人不信，也很常见。我们会帮大家商量一个都能接受的做法。',
        ] },
      ],
      faqs: [
        ['峇株巴辖办佛教丧礼，要自己找法师吗？', '跟我们讲家里的想法就好。有熟悉的寺院可以照家里的安排，没有的话我们帮你联络。'],
        ['佛教丧礼一定要火化吗？', '不一定，佛教家庭多数选火化，土葬也可以，照家里的意思。'],
        ['家里有人不信佛，可以怎么办？', '可以一起商量，佛教仪式加上大家都能接受的告别方式。我们办过很多这样的家庭。'],
      ],
    },
    en: {
      title: 'Buddhist Funeral in Batu Pahat | Chanting & Wake, 24/7 | Seong Hoe',
      desc: 'Buddhist funerals in Batu Pahat: recitation, sutra chanting, a calm wake, the procession and cremation, arranged with your temple. Open 24/7, call +60 16-777 3883.',
      h1: 'Buddhist funerals in Batu Pahat,',
      grey: 'a calm and dignified farewell.',
      intro: `For Buddhist families, our Batu Pahat HQ arranges the funeral the Buddhist way: monks or lay practitioners for chanting, a serene wake, the procession and cremation. ${callEn}`,
      sections: [
        { h: 'What a Buddhist funeral usually includes', steps: [
          ['Recitation', 'Right after a death, many Buddhist families gather to recite the Buddha\'s name together.'],
          ['Sutra chanting', 'Monks or lay practitioners chant sutras during the wake.'],
          ['The wake', 'A calm, dignified setting, usually with a Buddha image and fresh flowers.'],
          ['Procession, cremation or burial', 'As the family wishes. Most Buddhist families choose cremation.'],
        ] },
        { h: 'Every family does it differently', p: [
          'Some families are close to a particular temple or Buddhist society; others prefer a few simple chanting sessions. We listen to your family first and work with your temple and monks, without adding things you do not need.',
          'It is common for only some family members to be Buddhist. We help everyone agree on an arrangement they are comfortable with.',
        ] },
      ],
      faqs: [
        ['Do we need to find the monks ourselves?', 'Just tell us what your family has in mind. If you have a temple you are close to, we follow its arrangements; if not, we can contact one for you.'],
        ['Does a Buddhist funeral have to be a cremation?', 'No. Most Buddhist families choose cremation, but burial is also possible.'],
        ['Some of our family are not Buddhist. What can we do?', 'We can combine Buddhist rites with a farewell everyone is comfortable with. We have helped many families like this.'],
      ],
    },
  },
  {
    slug: 'taoist-funeral',
    icon: 'lotus',
    photo: '/img/work-taoist.webp',
    service: 'funeral-rites',
    zh: {
      title: '峇株巴辖道教丧礼｜法事、打斋、做七｜24 小时｜祥鹤',
      desc: '峇株巴辖道教丧礼，祥鹤照籍贯和长辈的意思安排法事、打斋、出殡和做七，不硬加项目。24 小时服务，电话 016-777 3883。',
      h1: '峇株巴辖道教丧礼，',
      grey: '照籍贯的规矩来做。',
      intro: `家里照传统做道教丧礼，祥鹤峇株巴辖总店安排道士做法事、灵堂布置、出殡，各籍贯的讲究都可以配合。${callZh}`,
      sections: [
        { h: '道教丧礼一般会有什么', steps: [
          ['入殓、封棺', '照时辰入殓、盖棺，什么时候要回避，到时会提醒。'],
          ['法事（打斋）', '守灵期间请道士做法事，为往生者超度。'],
          ['出殡', '出殡的时辰、路线和规矩，事先跟家属讲清楚。'],
          ['做七', '人走后每七天算一个七，一般做单数的头七、三七、五七、七七。'],
        ] },
        { h: '福建、潮州、客家、广东，做法都不一样', p: [
          '同样是道教丧礼，每个籍贯的规矩、法事的场数、做七的方法都不一样。祥鹤会先问清楚家里是什么籍贯、长辈希望怎么做，再照着安排。',
          '法事可以照规矩做足，也可以简化。家里预算和时间不同，我们帮你一起拿捏，不会硬加项目。',
        ] },
      ],
      faqs: [
        ['峇株巴辖做道教法事，要做几场？', '看籍贯和家里的意思，有的做足，有的简化。我们会先问清楚，再跟道士安排。'],
        ['做七一定要做满七次吗？', '不用。一般只做单数的头七、三七、五七、七七。各籍贯做法不同，可以跟长辈商量。'],
        ['不懂规矩怎么办？', '没关系，每一步要做什么、什么时候回避，我们都会在旁边提醒。'],
      ],
    },
    en: {
      title: 'Taoist Funeral in Batu Pahat | Rites & Prayers, 24/7 | Seong Hoe',
      desc: 'Taoist funerals in Batu Pahat, arranged by your dialect group\'s customs: rites, prayers, the procession and the "sevens", with nothing added you do not need. Open 24/7, call +60 16-777 3883.',
      h1: 'Taoist funerals in Batu Pahat,',
      grey: 'following your dialect group\'s customs.',
      intro: `For families following traditional Taoist rites, our Batu Pahat HQ arranges the Taoist priests, the wake and the procession, in line with your dialect group's customs. ${callEn}`,
      sections: [
        { h: 'What a Taoist funeral usually includes', steps: [
          ['Encoffining and sealing', 'Done at an auspicious time, with guidance on when family members should turn away.'],
          ['Funeral rites', 'Taoist priests perform rites during the wake to guide the deceased.'],
          ['The procession', 'The timing, route and customs are explained to the family beforehand.'],
          ['The "sevens"', 'Each seven days after a death is one "seven". Usually only the 1st, 3rd, 5th and 7th are held.'],
        ] },
        { h: 'Hokkien, Teochew, Hakka, Cantonese: each is different', p: [
          'Even within Taoist funerals, customs, the number of rites and the way the sevens are held differ by dialect group. We first ask about your family\'s background and your elders\' wishes, then arrange accordingly.',
          'Rites can be done in full or simplified. We help you balance custom, budget and time, without adding things you do not need.',
        ] },
      ],
      faqs: [
        ['How many Taoist rites should we hold?', 'It depends on your dialect group and your family\'s wishes. We ask first, then arrange with the priests.'],
        ['Must all seven "sevens" be held?', 'No. Usually only the 1st, 3rd, 5th and 7th are held. Practices differ, so check with your elders.'],
        ['We do not know the customs. What should we do?', 'That is fine. We will tell you what to do at each step, including when to turn away.'],
      ],
    },
  },
  {
    slug: 'christian-funeral',
    icon: 'book',
    service: 'funeral-rites',
    zh: {
      title: '峇株巴辖基督教、天主教丧礼｜追思礼拜｜24 小时｜祥鹤',
      desc: '峇株巴辖基督教、天主教丧礼，祥鹤配合教会安排追思礼拜或安息弥撒、灵堂、出殡，以及火化或土葬。24 小时服务，电话 016-777 3883。',
      h1: '峇株巴辖基督教丧礼，',
      grey: '天主教也一样安排。',
      intro: `家里是基督徒或天主教徒，祥鹤峇株巴辖总店配合教会安排追思礼拜或弥撒、灵堂布置、出殡和火化或土葬。${callZh}`,
      sections: [
        { h: '基督教、天主教丧礼一般会有什么', steps: [
          ['联络教会', '先跟家里的教会、牧师或神父联络，确认礼拜或弥撒的时间。'],
          ['灵堂布置', '以十字架、鲜花和遗照为主，简洁庄重。'],
          ['追思礼拜或安息弥撒', '基督教由牧师主持追思礼拜，天主教由神父主持弥撒，亲友一起唱诗、祷告。'],
          ['出殡、火化或土葬', '照家里和教会的意思安排。'],
        ] },
        { h: '家里信仰不一样也没关系', p: [
          '很多家庭是长辈拜神、孩子信教，或者反过来。祥鹤办过很多这样的丧礼，会帮大家商量出一个尊重往生者、家人也都能接受的做法。',
        ] },
      ],
      faqs: [
        ['峇株巴辖办基督教丧礼，教会和祥鹤怎么分工？', '礼拜、讲道由教会负责，灵堂、接送、出殡、火化或土葬这些由祥鹤安排，我们会跟教会配合时间。'],
        ['家里一半人信教、一半人拜神，怎么办？', '可以一起商量。我们办过很多不同信仰的家庭，会帮大家找到都能接受的做法。'],
        ['可以在家里或殡仪馆办追思礼拜吗？', '可以，看教会和家里的安排，我们帮你布置场地。'],
      ],
    },
    en: {
      title: 'Christian & Catholic Funeral in Batu Pahat, 24/7 | Seong Hoe',
      desc: 'Christian and Catholic funerals in Batu Pahat: we work with your church on the memorial service or Mass, the wake, the procession and cremation or burial. Open 24/7, call +60 16-777 3883.',
      h1: 'Christian and Catholic funerals in Batu Pahat,',
      grey: 'working with your church.',
      intro: `For Christian and Catholic families, our Batu Pahat HQ works with your church on the memorial service or funeral Mass, the wake, the procession and cremation or burial. ${callEn}`,
      sections: [
        { h: 'What a Christian or Catholic funeral usually includes', steps: [
          ['Contacting the church', 'We start with your church, pastor or priest to confirm the service or Mass time.'],
          ['The wake', 'Simple and dignified, with a cross, flowers and a portrait.'],
          ['Memorial service or funeral Mass', 'A pastor leads a Christian memorial service; a priest celebrates a Catholic funeral Mass, with hymns and prayers.'],
          ['Procession, cremation or burial', 'As your family and church wish.'],
        ] },
        { h: 'Mixed beliefs in the family are fine', p: [
          'Many families have elders who follow Chinese traditions and children who are Christian, or the other way round. We have arranged many such funerals and help everyone find a way that respects the deceased and suits the family.',
        ] },
      ],
      faqs: [
        ['How do the church and Seong Hoe share the work?', 'The church leads the service and sermon. We arrange the wake, transport, procession and cremation or burial, and coordinate timing with the church.'],
        ['Half our family is Christian and half is not. What can we do?', 'We can work it out together. We have helped many families of mixed beliefs find an arrangement everyone accepts.'],
        ['Can the memorial service be held at home or at a funeral parlour?', 'Yes, depending on your church and family. We will set up the venue for you.'],
      ],
    },
  },
  {
    slug: 'pet-cremation',
    icon: 'paw',
    service: 'pet-funeral',
    zh: {
      title: '峇株巴辖宠物火化｜单炉火化、接送、怀宠阁｜祥鹤宠物殡葬',
      desc: '峇株巴辖宠物火化，祥鹤宠物殡葬安排上门接送、单炉火化和骨灰安放，怀宠阁首月免费。宠物专线 018-909 3883。',
      h1: '峇株巴辖宠物火化，',
      grey: '好好送它最后一程。',
      intro: '猫、狗、兔子，养久了就是家人。祥鹤在峇株巴辖提供宠物殡葬：接送、告别仪式、单炉火化，到骨灰安放。宠物专线 018-909 3883。',
      sections: [
        { h: '我们提供的宠物殡葬服务', steps: [
          ['专业遗体接送', '打电话或 WhatsApp 我们，我们安排接毛孩子。'],
          ['温馨告别仪式', '火化前，主人可以陪它最后一段时间，讲完要讲的话。'],
          ['单炉火化', '每只宠物单独火化，骨灰不会跟其他宠物混在一起。'],
          ['骨灰捡拾与骨灰罐', '火化后捡拾骨灰，放进骨灰罐交回主人。'],
          ['怀宠阁骨灰安放', '想让它有个地方安放的，可以放在祥鹤的宠物骨灰阁怀宠阁。'],
        ] },
        { h: '怀宠阁首月免费', p: [
          '凡由祥鹤协助处理后事的宠物，放在怀宠阁的第一个月费用全免。主人可以先慢慢想清楚，要带它回家，还是让它在怀宠阁安放。',
        ] },
      ],
      faqs: [
        ['峇株巴辖宠物火化是单独火化吗？', '是，祥鹤提供单炉火化，每只宠物单独火化。'],
        ['可以来家里接宠物吗？', '可以，我们提供专业遗体接送，打宠物专线 018-909 3883 安排。'],
        ['骨灰可以带回家吗？', '可以，骨灰会放进骨灰罐交回主人。也可以放在怀宠阁，首月免费。'],
      ],
    },
    en: {
      title: 'Pet Cremation in Batu Pahat | Individual Cremation | Seong Hoe Pet Funeral',
      desc: 'Pet cremation in Batu Pahat: pick-up, individual cremation and a place for the ashes at our pet columbarium, first month free. Pet line +60 18-909 3883.',
      h1: 'Pet cremation in Batu Pahat,',
      grey: 'a proper goodbye.',
      intro: 'Cats, dogs, rabbits: after years together, they are family. Seong Hoe provides pet funerals in Batu Pahat, from collection and a farewell ceremony to individual cremation and a resting place for the ashes. Pet hotline: +60 18-909 3883.',
      sections: [
        { h: 'Our pet funeral services', steps: [
          ['Pet collection', 'Call or WhatsApp us and we will arrange to collect your pet.'],
          ['Farewell ceremony', 'Spend some last moments together before cremation.'],
          ['Individual cremation', 'Each pet is cremated on its own, so the ashes are never mixed.'],
          ['Ash collection and urn', 'The ashes are collected into an urn and returned to you.'],
          ['Pet columbarium (怀宠阁)', 'If you would like a resting place, the ashes can stay at our pet columbarium.'],
        ] },
        { h: 'First month free at our pet columbarium', p: [
          'For every pet we lay to rest, the first month at our pet columbarium is free. Take your time to decide whether to bring them home or let them rest with us.',
        ] },
      ],
      faqs: [
        ['Is pet cremation in Batu Pahat done individually?', 'Yes. Each pet is cremated individually.'],
        ['Can you collect my pet from home?', 'Yes. Call our pet hotline on +60 18-909 3883 to arrange collection.'],
        ['Can we take the ashes home?', 'Yes, in an urn. They can also rest at our pet columbarium, with the first month free.'],
      ],
    },
  },
  {
    slug: 'caskets',
    icon: 'scroll',
    photo: '/img/showroom.webp',
    service: 'funeral-planning',
    zh: {
      title: '峇株巴辖寿板、棺木｜4 种木料怎么选｜祥鹤展示厅',
      desc: '峇株巴辖寿板、棺木：正艾木、柚木、胭脂梅、硅化木 4 种木料，火化、土葬怎么选一次讲清楚，可以到祥鹤总店展示厅看实物。电话 016-777 3883。',
      h1: '峇株巴辖寿板、棺木，',
      grey: '来展示厅看实物。',
      intro: `祥鹤峇株巴辖总店设有棺木展示厅，家属可以亲眼看木料、颜色和雕花再决定。${callZh}`,
      sections: [
        { h: '祥鹤常用的四种木', steps: [
          ['正艾木（Chengal）', '东南亚特有的顶级重硬木，天然耐腐、抗白蚁，被称为「木材之王」。'],
          ['柚木（Kayu Jati）', '「万木之王」，天然油脂防潮防霉，不易变形开裂，越用越亮。'],
          ['胭脂梅（Keledang）', '红褐色、木纹细，耐潮、入土不易腐烂，华人传统常用来做土葬棺木，尤其是梅花棺。'],
          ['硅化木（Membatu）', '也叫 Red Balau，密度高、非常坚硬耐久，名字取的是像石头一样坚固。'],
        ] },
        { h: '怎样选寿板', p: [
          '火化一般不需要选最重最硬的木；土葬就要选耐潮、耐腐的木。颜色和雕花看家里喜欢，也可以照长辈的意思。每种木的价钱不一样，来展示厅看过、问清楚了再决定。',
        ] },
      ],
      faqs: [
        ['峇株巴辖哪里可以看寿板？', '祥鹤峇株巴辖总店有棺木展示厅，地址 13, Jalan Zamrud, Taman Dagang, 83000 Batu Pahat。先 WhatsApp 我们约时间。'],
        ['火化和土葬的寿板有什么不同？', '火化一般不需要最重最硬的木；土葬要选耐潮、耐腐的木，例如胭脂梅或正艾木。'],
        ['寿板多少钱？', '看木料、尺寸和雕花，价钱都不一样。WhatsApp 我们，我们把选择和价钱列出来给你看。'],
      ],
    },
    en: {
      title: 'Caskets in Batu Pahat | 4 Woods Compared | Seong Hoe Showroom',
      desc: 'Caskets in Batu Pahat: Chengal, Teak, Keledang and Membatu compared, which wood suits cremation or burial, and where to see them at our HQ showroom. Call +60 16-777 3883.',
      h1: 'Caskets in Batu Pahat,',
      grey: 'see them in our showroom.',
      intro: `Our Batu Pahat HQ has a casket showroom, so families can see the wood, colour and carving in person before deciding. ${callEn}`,
      sections: [
        { h: 'The four woods we mainly use', steps: [
          ['Chengal (正艾木)', 'A top-grade Southeast Asian heavy hardwood, naturally resistant to rot and termites, often called the "king of timbers".'],
          ['Teak (Kayu Jati, 柚木)', 'The "king of woods". Natural oils resist damp and mould, and it rarely warps or cracks.'],
          ['Keledang (胭脂梅)', 'A warm reddish-brown hardwood with a fine grain that resists decay underground, a traditional Chinese choice for burial caskets.'],
          ['Membatu (硅化木)', 'Also called Red Balau. Dense, very hard and durable; the name means "strong as stone".'],
        ] },
        { h: 'How to choose a casket', p: [
          'For cremation, the heaviest woods are usually not needed; for burial, choose a wood that resists damp and decay. Colour and carving are up to your family. Prices vary by wood, so visit the showroom and ask before deciding.',
        ] },
      ],
      faqs: [
        ['Where can I see caskets in Batu Pahat?', 'At our Batu Pahat HQ showroom, 13, Jalan Zamrud, Taman Dagang, 83000 Batu Pahat. WhatsApp us to arrange a visit.'],
        ['What is the difference between caskets for cremation and burial?', 'Cremation usually does not need the heaviest wood; burial needs a wood that resists damp and decay, such as Keledang or Chengal.'],
        ['How much does a casket cost?', 'It depends on the wood, size and carving. WhatsApp us and we will list the options and prices for you.'],
      ],
    },
  },
];
