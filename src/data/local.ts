import type { Lang } from './site';
import type { Section } from './services';

// 分店所在地区的本地内容（为地区关键字写的）。地点都在 Google 地图上核对过。
export type LocalGuide = { intro: string; sections: Section[]; faqs: [string, string][] };

export const localGuides: Record<string, Record<Lang, LocalGuide>> = {
  'batu-pahat': {
    zh: {
      intro: '祥鹤殡仪服务有限公司是一家位于峇株巴辖的 24 小时殡仪服务公司。总店就在峇株巴辖（也有人写作峇株吧辖，英文 Batu Pahat，大家常叫 BP）Taman Dagang（13, Jalan Zamrud），2020 年从这里开始，半夜打来也有人接。家里有人走了，不管是在医院、在家里还是在疗养院，打 016-777 3883 或 WhatsApp 我们，我们马上安排人和车过去。',
      sections: [
        { h: '在峇株巴辖办丧事，祥鹤从头陪到尾', p: [
          '从接遗体、布置灵堂、安排法事和司仪，到出殡、火化或土葬，祥鹤都可以一手包办。家里不懂规矩没关系，每一步要做什么、什么时候做，我们会在旁边提醒。',
          '佛教、道教、基督教、天主教和自由信仰的丧礼，我们都办过。同一个家庭里信仰不一样，也可以一起商量出大家都能接受的做法。',
        ] },
        { h: '峇株巴辖的灵堂可以设在哪里', p: ['看家里方便和来吊唁的人数，峇株巴辖常见的选择有这几种：'], steps: [
          ['仙境生命纪念馆（Fairy Park Funeral Parlour）', 'Jalan Dapat, Kampung Pegawai。室内殡仪馆，有冷气大厅、休息室和冲凉间，家属守夜比较方便。'],
          ['柔佛诚敬善堂', 'Jalan Jenang, Kampung Pegawai，峇株巴辖市区的殡仪场地。'],
          ['会馆礼堂', '有些会馆可以借来办丧事，例如 Jalan Sultanah 的云诏东会馆，后面就有办白事的场地。'],
          ['自己家里', '有地房屋可以在家门口搭棚设灵堂，亲戚邻居来往方便。'],
        ] },
        { h: '火化和土葬', p: [
          '选火化的话，例如巴莪仙境山庄火葬场。选土葬的话，峇株巴辖有华人义山（Jalan Tanjong Laboh），也有 Banang Memorial Park 这类有人管理的纪念园。',
          '每个地方的空档、收费和规矩都不一样，家属不用自己一间一间去问，跟我们讲家里的想法，我们帮你安排。',
        ] },
        { h: '峇株巴辖县内还有新文龙分店', p: [
          '住在新文龙一带的家庭，可以直接找祥鹤新文龙分店，一样 24 小时。新山也有分店，家里有人在新山走了，一样可以找我们。',
        ] },
      ],
      faqs: [
        ['祥鹤殡仪是哪里的公司？', '祥鹤殡仪服务有限公司是一家位于峇株巴辖的 24 小时殡仪服务公司，2020 年在峇株巴辖创办，总店在 Taman Dagang，新山、新文龙也有分店。'],
        ['峇株巴辖半夜有人走了，可以马上打来吗？', '可以。祥鹤峇株巴辖总店 24 小时有人接，电话 016-777 3883，也可以直接 WhatsApp。'],
        ['祥鹤在峇株巴辖哪里？', '总店地址是 13, Jalan Zamrud, Taman Dagang, 83000 Batu Pahat, Johor。峇株巴辖县内另有新文龙分店。'],
        ['峇株巴辖的灵堂一般设在哪里？', '常见的有仙境生命纪念馆、柔佛诚敬善堂、会馆礼堂，或者在自己家里（有地房屋）。我们会看人数和家里方便，帮你安排。'],
        ['在峇株巴辖可以火化吗？', '可以。火化、土葬都可以安排，例如巴莪仙境山庄火葬场，或者峇株巴辖的华人义山和纪念园。'],
        ['峇株巴辖有宠物殡葬吗？', '有。祥鹤也做宠物殡葬，包括接送、告别仪式、单独火化和骨灰安放，宠物专线 018-909 3883。'],
      ],
    },
    en: {
      intro: 'Seong Hoe Funeral Service is a 24-hour funeral service company based in Batu Pahat (BP), Johor. Our headquarters is in Taman Dagang (13, Jalan Zamrud). We started here in 2020 and answer the phone 24 hours a day. If someone in your family has passed away, at hospital, at home or in a care home, call +60 16-777 3883 or WhatsApp us and we will send our team and vehicle straight away.',
      sections: [
        { h: 'A funeral in Batu Pahat, handled from start to finish', p: [
          'From collecting the deceased and setting up the wake to arranging rites, a master of ceremonies, the funeral procession, cremation or burial, Seong Hoe can take care of everything. If you are unsure of the customs, we will tell you what to do and when, step by step.',
          'We have arranged Buddhist, Taoist, Christian, Catholic and freethinker funerals. When family members hold different beliefs, we help you agree on an arrangement everyone is comfortable with.',
        ] },
        { h: 'Where to hold a wake in Batu Pahat', p: ['Depending on your family and the number of visitors, common choices in Batu Pahat include:'], steps: [
          ['Fairy Park Funeral Parlour (仙境生命纪念馆)', 'Jalan Dapat, Kampung Pegawai. An indoor funeral parlour with an air-conditioned hall, rest rooms and showers, convenient for families keeping vigil.'],
          ['Johore Seng Keng Sian T\'ng (柔佛诚敬善堂)', 'Jalan Jenang, Kampung Pegawai, in Batu Pahat town.'],
          ['Clan association halls', 'Some associations make their halls available for funerals, such as Hoon Cheow Tong on Jalan Sultanah, which has a funeral space at the back.'],
          ['At home', 'Landed homes can set up a tent at the front of the house for the wake, which makes it easy for relatives and neighbours to visit.'],
        ] },
        { h: 'Cremation and burial', p: [
          'For cremation, one option is the crematorium at Fairy Park Memorial Park in Bagan (巴莪仙境山庄). For burial, Batu Pahat has the Chinese cemetery on Jalan Tanjong Laboh and managed memorial parks such as Banang Memorial Park.',
          'Availability, fees and rules differ at each place. You do not need to call around yourself: tell us what your family has in mind and we will arrange it.',
        ] },
        { h: 'Also in Batu Pahat district: our Senggarang branch', p: [
          'Families around Senggarang can contact our Senggarang branch directly, also open 24 hours. We also have a branch in Johor Bahru.',
        ] },
      ],
      faqs: [
        ['Where is Seong Hoe based?', 'Seong Hoe Funeral Service is a 24-hour funeral service company based in Batu Pahat, Johor. It was founded in Batu Pahat in 2020, with its HQ in Taman Dagang and branches in Johor Bahru and Senggarang.'],
        ['Someone has passed away in Batu Pahat at night. Can I call now?', 'Yes. Our Batu Pahat HQ answers 24 hours a day on +60 16-777 3883, or you can WhatsApp us.'],
        ['Where is Seong Hoe in Batu Pahat?', 'Our HQ is at 13, Jalan Zamrud, Taman Dagang, 83000 Batu Pahat, Johor. We also have a branch in Senggarang, within Batu Pahat district.'],
        ['Where are wakes usually held in Batu Pahat?', 'Common choices are Fairy Park Funeral Parlour, Johore Seng Keng Sian T\'ng, clan association halls, or at home for landed houses. We will help you choose based on your family and the number of visitors.'],
        ['Can I arrange a cremation in Batu Pahat?', 'Yes. We arrange both cremation and burial, for example at the Bagan Fairy Park crematorium, or at Batu Pahat\'s Chinese cemetery and memorial parks.'],
        ['Do you offer pet funerals in Batu Pahat?', 'Yes. Seong Hoe also provides pet funerals, including collection, a farewell ceremony, individual cremation and an ash resting place. Pet hotline: +60 18-909 3883.'],
      ],
    },
  },
  'johor-bahru': {
    zh: {
      intro: '祥鹤殡仪新山分店是一家位于新山（Johor Bahru，JB）的 24 小时殡仪服务分店，在依斯干达公主城（Iskandar Puteri，以前叫努沙再也 Nusajaya）SILC 工业区（17, Jalan SILC 2/16），往士古来、振林山、新山市区都方便。家里有人走了，打 013-288 3883 或 WhatsApp 我们，我们马上安排人和车过去。',
      sections: [
        { h: '在新山办丧事，祥鹤从头陪到尾', p: [
          '从接遗体、布置灵堂、安排法事和司仪，到出殡、火化或土葬，祥鹤新山分店都可以一手包办。佛教、道教、基督教、天主教和自由信仰的丧礼都可以安排，家里不懂规矩也没关系，每一步我们会在旁边提醒。',
        ] },
        { h: '新山的灵堂可以设在哪里', p: ['看家里方便和来吊唁的人数，新山常见的选择有：'], steps: [
          ['中华公会绵裕亭殡仪馆', '1A, Jalan Ulu Air Molek，新山中华公会辖下，24 小时，靠近新山市区。'],
          ['振林山的殡仪馆', 'Jalan Hang Kasturi, Taman Skudai Baru，靠近振林山中华墓园，离依斯干达公主城不远。'],
          ['自己家里', '有地房屋可以在家门口搭棚设灵堂。'],
        ] },
        { h: '火化和土葬', p: [
          '新山中华公会辖下的绵裕亭和振林山一带，有殡仪馆、墓园和火化、骨灰安置服务；也有家属选择富贵山庄（乌鲁地南）这类私人纪念园。每个地方的时间、收费和规矩不一样，我们帮你问好、安排。',
        ] },
        { h: '新山分店有展示厅', p: [
          '寿板可以到新山分店的展示厅看实物，先打 013-288 3883 或 WhatsApp 约时间。',
        ] },
      ],
      faqs: [
        ['依斯干达公主城、士古来、振林山一带，也可以叫你们吗？', '可以。新山分店就在依斯干达公主城 SILC，去士古来、振林山和新山市区都方便，24 小时打 013-288 3883。'],
        ['新山半夜有人走了，可以马上打来吗？', '可以。祥鹤新山分店 24 小时有人接，专线 013-288 3883，也可以 WhatsApp。'],
        ['祥鹤新山分店在哪里？', '17, Jalan SILC 2/16, Kawasan Perindustrian SILC, Iskandar Puteri, 79150 Johor。'],
        ['新山的灵堂一般设在哪里？', '例如中华公会绵裕亭殡仪馆、Taman Skudai Baru 振林山的殡仪馆，或者有地房屋的家里。'],
        ['新山可以火化吗？', '可以，例如新山中华公会辖下的墓园，或者富贵山庄这类私人纪念园。'],
        ['新山分店可以看寿板吗？', '可以，新山分店有展示厅，先约时间。'],
      ],
    },
    en: {
      intro: 'Seong Hoe Johor Bahru Branch is a 24-hour funeral service branch based in Johor Bahru (JB), in the SILC industrial area of Iskandar Puteri, formerly Nusajaya (17, Jalan SILC 2/16), close to Skudai, Gelang Patah and JB town. If someone in your family has passed away, call +60 13-288 3883 or WhatsApp us and we will send our team and vehicle straight away.',
      sections: [
        { h: 'A funeral in Johor Bahru, handled from start to finish', p: [
          'From collecting the deceased and setting up the wake to rites, a master of ceremonies, the procession, cremation or burial, our JB branch can take care of everything. We arrange Buddhist, Taoist, Christian, Catholic and freethinker funerals, and guide you through every custom.',
        ] },
        { h: 'Where to hold a wake in Johor Bahru', p: ['Common choices in JB include:'], steps: [
          ['Tiong Hua Memorial Park funeral parlour (绵裕亭殡仪馆)', '1A, Jalan Ulu Air Molek, run by the Johor Bahru Tiong Hua Association, open 24 hours, near JB town.'],
          ['The funeral parlour at Taman Skudai Baru', 'Jalan Hang Kasturi, next to the Tiong Hua Memorial Park in Gelang Patah, not far from Iskandar Puteri.'],
          ['At home', 'Landed homes can set up a tent at the front of the house.'],
        ] },
        { h: 'Cremation and burial', p: [
          'The Johor Bahru Tiong Hua Association runs funeral parlours, cemeteries, cremation and columbarium services at Jalan Ulu Air Molek and Gelang Patah. Some families choose private memorial parks such as Nirvana in Ulu Tiram. Times, fees and rules differ, and we arrange it all for you.',
        ] },
        { h: 'A showroom at our JB branch', p: [
          'You can see our caskets at the JB branch showroom. Call +60 13-288 3883 or WhatsApp us to book a time.',
        ] },
      ],
      faqs: [
        ['Do you also serve Iskandar Puteri, Skudai and Gelang Patah?', 'Yes. Our JB branch is in SILC, Iskandar Puteri, close to Skudai, Gelang Patah and JB town. Call +60 13-288 3883, 24 hours a day.'],
        ['Someone has passed away in Johor Bahru at night. Can I call now?', 'Yes. Our JB branch answers 24 hours a day on +60 13-288 3883, or WhatsApp us.'],
        ['Where is your Johor Bahru branch?', '17, Jalan SILC 2/16, Kawasan Perindustrian SILC, Iskandar Puteri, 79150 Johor.'],
        ['Where are wakes usually held in Johor Bahru?', 'For example, the Tiong Hua Memorial Park funeral parlour, the funeral parlour at Taman Skudai Baru, or at home for landed houses.'],
        ['Can we arrange a cremation in Johor Bahru?', 'Yes, for example at the Tiong Hua Association cemeteries or a private memorial park such as Nirvana.'],
        ['Can we see caskets at the JB branch?', 'Yes, our JB branch has a showroom. Book a time first.'],
      ],
    },
  },
  senggarang: {
    zh: {
      intro: '祥鹤新文龙分店在 Taman Sri Bahagia（1, Jalan Sri Bahagia 1），24 小时有人接电话。新文龙一带的家庭，有人走了不用从峇株巴辖市区叫人，打 016-777 3883 或 WhatsApp 我们，我们就近安排人和车过去。',
      sections: [
        { h: '在地分店，离家近', p: [
          '家里有人走了，最怕等。新文龙分店就在附近，接到电话就能安排；需要更多人手、寿板或法事安排，峇株巴辖总店就在附近支援。',
          '从接遗体、布置灵堂、法事，到出殡、火化或土葬，祥鹤都可以一手包办，不懂规矩没关系，每一步我们会提醒。',
        ] },
        { h: '新文龙的灵堂', p: [
          '新文龙不少家庭是有地房屋，可以在家门口搭棚设灵堂，亲戚邻居来往方便。想在殡仪馆办的，也可以到峇株巴辖市区，例如仙境生命纪念馆。',
        ] },
        { h: '火化和土葬', p: [
          '新文龙属于峇株巴辖县，火化一般去峇株巴辖，例如巴莪仙境山庄火葬场。土葬可以选新文龙的广福义山（Perkuburan Bukit Batu Senggarang），或者峇株巴辖的华人义山和 Banang Memorial Park。',
        ] },
      ],
      faqs: [
        ['新文龙有人走了，可以马上打来吗？', '可以，新文龙分店 24 小时有人接，电话 016-777 3883，也可以 WhatsApp。'],
        ['祥鹤新文龙分店在哪里？', '1, Jalan Sri Bahagia 1, Taman Sri Bahagia, 83200 Senggarang, Johor。'],
        ['新文龙可以在家里办丧事吗？', '可以，有地房屋可以在家门口搭棚设灵堂。'],
        ['新文龙火化去哪里？', '新文龙属于峇株巴辖县，火化一般去峇株巴辖，例如巴莪仙境山庄火葬场。'],
      ],
    },
    en: {
      intro: 'Our Senggarang branch is in Taman Sri Bahagia (1, Jalan Sri Bahagia 1), open 24 hours. Families around Senggarang do not need to call someone from Batu Pahat town: call +60 16-777 3883 or WhatsApp us and we will send our team from nearby.',
      sections: [
        { h: 'A local branch, close to home', p: [
          'When someone passes away, waiting is the hardest part. Our Senggarang branch is close by and can respond quickly, with our Batu Pahat HQ nearby for extra support, caskets and rites.',
          'From collecting the deceased and setting up the wake to rites, the procession, cremation or burial, we take care of everything and guide you through every custom.',
        ] },
        { h: 'Wakes in Senggarang', p: [
          'Many Senggarang families live in landed homes and hold the wake under a tent at the front of the house. Families who prefer a funeral parlour can use one in Batu Pahat town, such as Fairy Park Funeral Parlour.',
        ] },
        { h: 'Cremation and burial', p: [
          'Senggarang is in Batu Pahat district, so cremation is usually in Batu Pahat, for example at the Bagan Fairy Park crematorium (巴莪仙境山庄). For burial, there is Perkuburan Bukit Batu Senggarang (广福义山) in Senggarang, or Batu Pahat\'s Chinese cemetery and Banang Memorial Park.',
        ] },
      ],
      faqs: [
        ['Someone has passed away in Senggarang. Can I call now?', 'Yes. Our Senggarang branch answers 24 hours a day on +60 16-777 3883, or WhatsApp us.'],
        ['Where is your Senggarang branch?', '1, Jalan Sri Bahagia 1, Taman Sri Bahagia, 83200 Senggarang, Johor.'],
        ['Can we hold the wake at home in Senggarang?', 'Yes, landed homes can set up a tent at the front of the house.'],
        ['Where are cremations for Senggarang held?', 'Usually in Batu Pahat, for example at the Bagan Fairy Park crematorium.'],
      ],
    },
  },
};
