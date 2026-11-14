import type { AreaPage } from './bp';

// 新山专页。地点都在 Google 地图核对过；新山分店在依斯干达公主城 SILC。
const callZh = '新山分店 24 小时有人接，打 013-288 3883 或 WhatsApp 我们。';
const callEn = 'Our Johor Bahru branch answers 24 hours a day. Call +60 13-288 3883 or WhatsApp us.';

export const jbPages: AreaPage[] = [
  {
    slug: 'cremation',
    icon: 'flame',
    photo: '/img/work-cortege.webp',
    service: 'cremation',
    zh: {
      title: '新山火化服务｜24 小时：出殡、火化、捡骨｜祥鹤殡仪新山分店',
      desc: '祥鹤殡仪新山分店是一家位于新山的 24 小时殡仪服务分店，在依斯干达公主城 SILC。守灵、出殡、火化、捡骨到安置骨灰，一条龙安排，费用先讲清楚。电话 013-288 3883。',
      h1: '新山火化服务，',
      grey: '出殡到骨灰都安排好。',
      intro: `家里在新山选择火化，祥鹤新山分店从守灵、出殡、火化，到捡骨和安置骨灰，全程陪着家属。分店在依斯干达公主城 SILC，往士古来、振林山、新山市区都方便。${callZh}`,
      sections: [
        { h: '在新山火化，一般这样走', steps: [
          ['先打电话', '人在医院、家里或疗养院走了，打新山分店专线，我们派人和车过去。'],
          ['选灵堂', '新山可以在中华公会绵裕亭殡仪馆、振林山的殡仪馆，或者有地房屋的家里守灵。'],
          ['出殡、火化', '守灵结束后出殡，送往火葬场。新山中华公会辖下的墓园设有火化服务，也有家属选择富贵山庄这类私人纪念园。'],
          ['捡骨、安置', '火化后陪家属捡骨，骨灰可以放骨灰楼、纪念园，或者照家里的意思。'],
        ] },
        { h: '新山的火化选择', p: [
          '新山中华公会管理绵裕亭和振林山一带的殡仪馆、墓园，提供华人社会常用的火化和骨灰安置服务。想要私人纪念园的，也可以选择富贵山庄（乌鲁地南）这类地方。',
          '每个地方的时间、收费和规矩都不一样。家属不用自己一间一间去问，讲清楚家里的想法，我们帮你比较、安排。',
        ] },
      ],
      faqs: [
        ['新山半夜有人走了，可以马上打来吗？', '可以。祥鹤新山分店 24 小时有人接，专线 013-288 3883，也可以 WhatsApp。'],
        ['新山火化可以去哪里？', '例如新山中华公会辖下的墓园，或者富贵山庄这类私人纪念园。我们会按家里的预算和地点帮你安排。'],
        ['新山分店在哪里？', '17, Jalan SILC 2/16, Kawasan Perindustrian SILC, Iskandar Puteri, 79150 Johor。'],
        ['可以直接火化，不办守灵吗？', '可以。有的家庭想简单处理，我们一样帮你安排。'],
      ],
    },
    en: {
      title: 'Cremation in Johor Bahru | 24/7, Procession to Ashes | Seong Hoe JB',
      desc: 'Seong Hoe Johor Bahru Branch is a 24-hour funeral service branch based in Iskandar Puteri, Johor Bahru. We arrange the wake, procession, cremation, bone collection and ashes, with costs explained upfront. Call +60 13-288 3883.',
      h1: 'Cremation in Johor Bahru,',
      grey: 'from the wake to the ashes.',
      intro: `If your family chooses cremation in Johor Bahru, our JB branch stays with you through the wake, procession and cremation to bone collection and placing the ashes. We are in SILC, Iskandar Puteri, close to Skudai, Gelang Patah and JB town. ${callEn}`,
      sections: [
        { h: 'How a cremation works in Johor Bahru', steps: [
          ['Call us first', 'Whether at hospital, at home or in a care home, call our JB line and we will send our team and vehicle.'],
          ['Choose a wake venue', 'Options include the Tiong Hua Memorial Park funeral parlour (绵裕亭殡仪馆), the funeral parlour at Taman Skudai Baru, or at home for landed houses.'],
          ['Procession and cremation', 'After the wake, the procession goes to the crematorium. The cemeteries run by the Johor Bahru Tiong Hua Association offer cremation, and some families choose private memorial parks such as Nirvana in Ulu Tiram.'],
          ['Bone collection and ashes', 'We guide the family through bone collection. The ashes can go to a columbarium, a memorial park or as the family wishes.'],
        ] },
        { h: 'Cremation options in Johor Bahru', p: [
          'The Johor Bahru Tiong Hua Association manages funeral parlours and cemeteries at Jalan Ulu Air Molek and Gelang Patah, with cremation and columbarium services commonly used by Chinese families. Private memorial parks such as Nirvana in Ulu Tiram are another option.',
          'Times, fees and rules differ at each place. Tell us what your family has in mind and we will compare and arrange it for you.',
        ] },
      ],
      faqs: [
        ['Someone has passed away in Johor Bahru at night. Can I call now?', 'Yes. Our JB branch answers 24 hours a day on +60 13-288 3883, or WhatsApp us.'],
        ['Where can we hold a cremation in Johor Bahru?', 'For example, at the cemeteries run by the Johor Bahru Tiong Hua Association, or at private memorial parks such as Nirvana. We arrange it to suit your budget and location.'],
        ['Where is your Johor Bahru branch?', '17, Jalan SILC 2/16, Kawasan Perindustrian SILC, Iskandar Puteri, 79150 Johor.'],
        ['Can we arrange a direct cremation without a wake?', 'Yes. Some families prefer a simple direct cremation, and we can arrange that too.'],
      ],
    },
  },
  {
    slug: 'burial',
    icon: 'mountain',
    photo: '/img/work-lotus-casket.webp',
    service: 'burial',
    zh: {
      title: '新山土葬｜绵裕亭、振林山义山墓地安排｜24 小时｜祥鹤新山',
      desc: '祥鹤殡仪新山分店是一家位于新山的 24 小时殡仪服务分店。新山土葬可选绵裕亭义山、振林山中华墓园或私人纪念园，墓地、出殡和下葬我们帮你安排。电话 013-288 3883。',
      h1: '新山土葬，',
      grey: '义山、墓园帮你安排。',
      intro: `家里在新山选择土葬，祥鹤新山分店协助安排墓地、出殡和下葬。${callZh}`,
      sections: [
        { h: '新山的华人墓地', steps: [
          ['绵裕亭义山', 'Jalan Ulu Air Molek，新山中华公会辖下的华人义山，靠近新山市区。'],
          ['振林山中华墓园', 'Gelang Patah（Jalan Melawati），也是新山中华公会辖下，离依斯干达公主城的新山分店不远。'],
          ['私人纪念园', '例如富贵山庄（乌鲁地南）这类有人管理的纪念园。'],
        ] },
        { h: '土葬用什么寿板', p: [
          '土葬要选耐潮、耐腐的木，例如胭脂梅（Keledang）或正艾木（Chengal）。新山分店有展示厅，可以先约时间来看实物。',
        ] },
      ],
      faqs: [
        ['新山有哪些华人义山？', '例如新山中华公会辖下的绵裕亭义山和振林山中华墓园，也有富贵山庄这类私人纪念园。'],
        ['墓地要自己去申请吗？', '不用自己一间一间跑，跟我们讲家里的想法，我们帮你问好、安排。'],
        ['新山可以看寿板吗？', '可以，新山分店有展示厅，地址 17, Jalan SILC 2/16, Iskandar Puteri，先 WhatsApp 约时间。'],
      ],
    },
    en: {
      title: 'Burial in Johor Bahru | Chinese Cemetery Plots, 24/7 | Seong Hoe JB',
      desc: 'Burial in Johor Bahru: Seong Hoe JB Branch arranges plots at the Tiong Hua Memorial Parks or private memorial parks, plus the procession and burial. Open 24/7, call +60 13-288 3883.',
      h1: 'Burial in Johor Bahru,',
      grey: 'from the plot to the burial.',
      intro: `For families choosing burial in Johor Bahru, our JB branch helps arrange the plot, the procession and the burial. ${callEn}`,
      sections: [
        { h: 'Chinese burial grounds in Johor Bahru', steps: [
          ['Tiong Hua Memorial Park (绵裕亭义山)', 'Jalan Ulu Air Molek, run by the Johor Bahru Tiong Hua Association, close to JB town.'],
          ['Tiong Hua Memorial Park, Gelang Patah (振林山)', 'Jalan Melawati, Gelang Patah, also run by the association and near our Iskandar Puteri branch.'],
          ['Private memorial parks', 'Such as Nirvana in Ulu Tiram.'],
        ] },
        { h: 'Choosing a casket for burial', p: [
          'Burial needs a wood that resists damp and decay, such as Keledang (胭脂梅) or Chengal (正艾木). Our JB branch has a showroom; book a time to see the caskets in person.',
        ] },
      ],
      faqs: [
        ['Which Chinese cemeteries are in Johor Bahru?', 'For example, the Tiong Hua Memorial Parks at Jalan Ulu Air Molek and Gelang Patah, and private memorial parks such as Nirvana.'],
        ['Do we apply for the plot ourselves?', 'No need. Tell us what your family has in mind and we will arrange it.'],
        ['Can we see caskets in Johor Bahru?', 'Yes, at our JB branch showroom, 17, Jalan SILC 2/16, Iskandar Puteri. WhatsApp us to book a time.'],
      ],
    },
  },
  {
    slug: 'buddhist-funeral',
    icon: 'lotus',
    service: 'funeral-rites',
    zh: {
      title: '新山佛教丧礼｜助念、诵经、灵堂｜24 小时｜祥鹤新山',
      desc: '祥鹤殡仪新山分店是一家位于新山的 24 小时殡仪服务分店。佛教丧礼的助念、诵经、灵堂布置到出殡火化，都配合你熟悉的寺院安排。电话 013-288 3883。',
      h1: '新山佛教丧礼，',
      grey: '清净、庄严地送别。',
      intro: `家里信佛，祥鹤新山分店照佛教的方式安排：助念、请法师或居士诵经、灵堂布置，到出殡和火化。${callZh}`,
      sections: [
        { h: '佛教丧礼的安排', steps: [
          ['助念', '人刚走时，很多佛教家庭会请人一起念佛。'],
          ['诵经', '守灵期间请法师或居士诵经。家里有熟悉的寺院，照寺院安排；没有的话我们帮你联络。'],
          ['灵堂', '以佛像、鲜花为主，清净庄严。'],
          ['出殡、火化', '佛教家庭多数选择火化，也可以土葬。'],
        ] },
        { h: '照家里的意思，不硬加项目', p: [
          '有的家庭想做足，有的只想简单念几场经。祥鹤新山分店会先听家里的想法，配合寺院和法师，不会硬加项目。家里信仰不一样的，也可以一起商量出大家都能接受的做法。',
        ] },
      ],
      faqs: [
        ['新山办佛教丧礼，要自己找法师吗？', '有熟悉的寺院可以照家里的安排，没有的话我们帮你联络。'],
        ['佛教丧礼可以在哪里守灵？', '例如中华公会绵裕亭殡仪馆、振林山的殡仪馆，或者有地房屋的家里。'],
        ['佛教丧礼一定要火化吗？', '不一定，多数选火化，土葬也可以。'],
      ],
    },
    en: {
      title: 'Buddhist Funeral in Johor Bahru | Chanting & Wake, 24/7 | Seong Hoe JB',
      desc: 'Buddhist funerals in Johor Bahru: recitation, sutra chanting, a calm wake, the procession and cremation, arranged with your temple by Seong Hoe JB Branch. Open 24/7, call +60 13-288 3883.',
      h1: 'Buddhist funerals in Johor Bahru,',
      grey: 'a calm, dignified farewell.',
      intro: `For Buddhist families, our JB branch arranges recitation, chanting by monks or lay practitioners, a serene wake, the procession and cremation. ${callEn}`,
      sections: [
        { h: 'How we arrange a Buddhist funeral', steps: [
          ['Recitation', 'Right after a death, many Buddhist families gather to recite the Buddha\'s name.'],
          ['Sutra chanting', 'Monks or lay practitioners chant during the wake. We follow your temple\'s arrangements, or contact one for you.'],
          ['The wake', 'Calm and dignified, with a Buddha image and fresh flowers.'],
          ['Procession and cremation', 'Most Buddhist families choose cremation; burial is also possible.'],
        ] },
        { h: 'Your family\'s way, nothing added', p: [
          'Some families want the full rites; others prefer a few chanting sessions. We listen first and work with your temple, without adding things you do not need. Families with mixed beliefs can agree on a farewell together.',
        ] },
      ],
      faqs: [
        ['Do we need to find the monks ourselves?', 'If you have a temple, we follow its arrangements. If not, we can contact one for you.'],
        ['Where can a Buddhist wake be held in JB?', 'For example, at the Tiong Hua Memorial Park funeral parlour, the funeral parlour at Taman Skudai Baru, or at home for landed houses.'],
        ['Must a Buddhist funeral be a cremation?', 'No. Most choose cremation, but burial is also possible.'],
      ],
    },
  },
  {
    slug: 'taoist-funeral',
    icon: 'lotus',
    photo: '/img/work-taoist.webp',
    service: 'funeral-rites',
    zh: {
      title: '新山道教丧礼｜法事、打斋、做七｜24 小时｜祥鹤新山',
      desc: '祥鹤殡仪新山分店是一家位于新山的 24 小时殡仪服务分店。道教丧礼照福建、潮州、客家、广东各籍贯的规矩，安排法事、打斋、出殡和做七，不硬加项目。电话 013-288 3883。',
      h1: '新山道教丧礼，',
      grey: '各籍贯的规矩都照做。',
      intro: `新山华人家庭福建、潮州、客家、广东都有，祥鹤新山分店先问清楚家里的籍贯和长辈的意思，再安排道士、法事和出殡。${callZh}`,
      sections: [
        { h: '道教丧礼的安排', steps: [
          ['入殓、封棺', '照时辰入殓、盖棺，什么时候要回避，到时会提醒。'],
          ['法事（打斋）', '守灵期间请道士做法事，为往生者超度。'],
          ['纸扎', '纸屋、纸人这些纸扎，照家里需要准备。'],
          ['出殡', '出殡的时辰、路线和规矩，事先讲清楚。'],
          ['做七', '一般做单数的头七、三七、五七、七七。'],
        ] },
        { h: '做足或简化，家里决定', p: [
          '法事可以照规矩做足，也可以简化。家里预算和时间不一样，我们一起拿捏，不会硬加项目。不懂规矩没关系，每一步都会在旁边提醒。',
        ] },
      ],
      faqs: [
        ['新山做道教法事，要做几场？', '看籍贯和家里的意思，我们先问清楚，再跟道士安排。'],
        ['做七一定要做满七次吗？', '不用。一般只做单数的头七、三七、五七、七七，各籍贯做法不同。'],
        ['纸扎可以帮忙准备吗？', '可以，照家里的需要准备。'],
      ],
    },
    en: {
      title: 'Taoist Funeral in Johor Bahru | Rites & Prayers, 24/7 | Seong Hoe JB',
      desc: 'Taoist funerals in Johor Bahru, arranged by your dialect group\'s customs: rites, prayers, the procession and the "sevens", with nothing added you do not need. Open 24/7, call +60 13-288 3883.',
      h1: 'Taoist funerals in Johor Bahru,',
      grey: 'by your dialect group\'s customs.',
      intro: `JB families come from Hokkien, Teochew, Hakka, Cantonese and other backgrounds. Our JB branch first asks about your family's customs and your elders' wishes, then arranges the priests, rites and procession. ${callEn}`,
      sections: [
        { h: 'How we arrange a Taoist funeral', steps: [
          ['Encoffining and sealing', 'At an auspicious time, with guidance on when to turn away.'],
          ['Funeral rites', 'Taoist priests perform rites during the wake.'],
          ['Paper offerings', 'Paper houses and figures prepared as your family needs.'],
          ['The procession', 'Timing, route and customs explained in advance.'],
          ['The "sevens"', 'Usually only the 1st, 3rd, 5th and 7th are held.'],
        ] },
        { h: 'Full or simplified: your family decides', p: [
          'Rites can be done in full or simplified to suit your budget and time, without anything added that you do not need. If you do not know the customs, we will guide you at every step.',
        ] },
      ],
      faqs: [
        ['How many Taoist rites should we hold?', 'It depends on your dialect group and wishes. We ask first, then arrange with the priests.'],
        ['Must all seven "sevens" be held?', 'No. Usually only the 1st, 3rd, 5th and 7th.'],
        ['Can you prepare paper offerings?', 'Yes, as your family needs.'],
      ],
    },
  },
  {
    slug: 'christian-funeral',
    icon: 'book',
    service: 'funeral-rites',
    zh: {
      title: '新山基督教、天主教丧礼｜追思礼拜｜24 小时｜祥鹤新山',
      desc: '祥鹤殡仪新山分店是一家位于新山的 24 小时殡仪服务分店。基督教、天主教丧礼，我们配合教会安排追思礼拜或安息弥撒、灵堂、出殡，以及火化或土葬。电话 013-288 3883。',
      h1: '新山基督教丧礼，',
      grey: '天主教也一样安排。',
      intro: `家里是基督徒或天主教徒，祥鹤新山分店配合教会安排追思礼拜或弥撒、灵堂、出殡和火化或土葬。${callZh}`,
      sections: [
        { h: '教会丧礼的安排', steps: [
          ['联络教会', '先跟牧师或神父确认礼拜、弥撒的时间。'],
          ['灵堂', '以十字架、鲜花和遗照为主，简洁庄重。'],
          ['追思礼拜或安息弥撒', '由教会主持，亲友一起唱诗、祷告。'],
          ['出殡、火化或土葬', '照家里和教会的意思。'],
        ] },
        { h: '分工清楚', p: [
          '礼拜和讲道由教会负责，灵堂、接送、出殡、火化或土葬由祥鹤安排，时间我们跟教会对好。家里信仰不一样的，也可以一起商量出大家都能接受的告别方式。',
        ] },
      ],
      faqs: [
        ['新山办基督教丧礼，教会和祥鹤怎么分工？', '礼拜由教会负责，其他安排由祥鹤负责，时间我们跟教会配合。'],
        ['追思礼拜可以在殡仪馆办吗？', '可以，看教会和家里的安排，我们帮你布置。'],
        ['家里一半人信教，可以吗？', '可以，我们会帮大家商量出都能接受的做法。'],
      ],
    },
    en: {
      title: 'Christian & Catholic Funeral in Johor Bahru, 24/7 | Seong Hoe JB',
      desc: 'Christian and Catholic funerals in Johor Bahru: Seong Hoe JB Branch works with your church on the memorial service or Mass, the wake, the procession and cremation or burial. Call +60 13-288 3883.',
      h1: 'Christian funerals in Johor Bahru,',
      grey: 'Catholic funerals too.',
      intro: `For Christian and Catholic families, our JB branch works with your church on the memorial service or funeral Mass, the wake, the procession and cremation or burial. ${callEn}`,
      sections: [
        { h: 'How we arrange a church funeral', steps: [
          ['Contacting the church', 'We confirm the service or Mass time with your pastor or priest.'],
          ['The wake', 'Simple and dignified, with a cross, flowers and a portrait.'],
          ['Memorial service or funeral Mass', 'Led by your church, with hymns and prayers.'],
          ['Procession, cremation or burial', 'As your family and church wish.'],
        ] },
        { h: 'Clear roles', p: [
          'Your church leads the service; we arrange the wake, transport, procession and cremation or burial, and coordinate the timing. Families with mixed beliefs can agree on a farewell together.',
        ] },
      ],
      faqs: [
        ['How do the church and Seong Hoe share the work?', 'The church leads the service; we handle everything else and coordinate timing.'],
        ['Can the memorial service be held at a funeral parlour?', 'Yes, depending on your church and family. We will set up the venue.'],
        ['Only part of our family is Christian. Is that fine?', 'Yes. We help everyone agree on an arrangement.'],
      ],
    },
  },
  {
    slug: 'caskets',
    icon: 'scroll',
    photo: '/img/branch-johor-bahru.webp',
    service: 'funeral-planning',
    zh: {
      title: '新山长生店｜寿板、棺材，4 种木料怎么选｜祥鹤新山展示厅',
      desc: '新山寿板、棺材：正艾木、柚木、胭脂梅、硅化木 4 种木料，火化、土葬怎么选一次讲清楚，可以到祥鹤新山分店展示厅（依斯干达公主城 SILC）看实物。电话 013-288 3883。',
      h1: '新山寿板、棺木，',
      grey: '来新山分店看实物。',
      intro: `祥鹤新山分店有展示厅，在依斯干达公主城 SILC（17, Jalan SILC 2/16）。家属可以亲眼看木料、颜色和雕花再决定，先打 013-288 3883 或 WhatsApp 约时间。`,
      sections: [
        { h: '常用的四种木', steps: [
          ['正艾木（Chengal）', '东南亚顶级重硬木，耐腐、抗白蚁，被称为「木材之王」。'],
          ['柚木（Kayu Jati）', '「万木之王」，天然油脂防潮防霉，不易变形开裂。'],
          ['胭脂梅（Keledang）', '红褐色、木纹细，入土不易烂，华人传统常用来做土葬棺木。'],
          ['硅化木（Membatu）', '也叫 Red Balau，密度高、坚硬耐久。'],
        ] },
        { h: '火化、土葬怎么选', p: [
          '火化一般不需要最重最硬的木；土葬要选耐潮、耐腐的木。颜色和雕花看家里喜欢，每种木价钱不一样，来展示厅看过、问清楚再决定。',
        ] },
      ],
      faqs: [
        ['新山哪里可以看寿板？', '祥鹤新山分店展示厅，17, Jalan SILC 2/16, Kawasan Perindustrian SILC, Iskandar Puteri。先 WhatsApp 约时间。'],
        ['寿板多少钱？', '看木料、尺寸和雕花。WhatsApp 我们，我们把选择和价钱列出来给你看。'],
        ['火化和土葬的寿板一样吗？', '不一样。土葬要选耐潮、耐腐的木，例如胭脂梅或正艾木。'],
      ],
    },
    en: {
      title: 'Caskets in Johor Bahru | 4 Woods Compared | Seong Hoe JB Showroom',
      desc: 'Caskets in Johor Bahru: Chengal, Teak, Keledang and Membatu compared, which wood suits cremation or burial, and where to see them at our showroom in SILC, Iskandar Puteri. Call +60 13-288 3883.',
      h1: 'Caskets in Johor Bahru,',
      grey: 'see them at our JB showroom.',
      intro: 'Our JB branch has a casket showroom in SILC, Iskandar Puteri (17, Jalan SILC 2/16). See the wood, colour and carving in person before deciding. Call +60 13-288 3883 or WhatsApp us to book a time.',
      sections: [
        { h: 'The four woods we mainly use', steps: [
          ['Chengal (正艾木)', 'A top-grade Southeast Asian hardwood, resistant to rot and termites, the "king of timbers".'],
          ['Teak (Kayu Jati, 柚木)', 'The "king of woods". Natural oils resist damp and mould; it rarely warps or cracks.'],
          ['Keledang (胭脂梅)', 'Reddish-brown with a fine grain, resists decay underground; a traditional Chinese choice for burial.'],
          ['Membatu (硅化木)', 'Also called Red Balau. Dense, hard and durable.'],
        ] },
        { h: 'Cremation or burial?', p: [
          'Cremation usually does not need the heaviest wood; burial needs a wood that resists damp and decay. Prices vary by wood, so visit the showroom and ask before deciding.',
        ] },
      ],
      faqs: [
        ['Where can I see caskets in Johor Bahru?', 'At our JB branch showroom, 17, Jalan SILC 2/16, Kawasan Perindustrian SILC, Iskandar Puteri. WhatsApp us to book.'],
        ['How much does a casket cost?', 'It depends on the wood, size and carving. WhatsApp us for options and prices.'],
        ['Are caskets for cremation and burial the same?', 'No. Burial needs a wood that resists damp and decay, such as Keledang or Chengal.'],
      ],
    },
  },
];
