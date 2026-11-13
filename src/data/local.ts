import type { Lang } from './site';
import type { Section } from './services';

// 分店所在地区的本地内容（为地区关键字写的）。地点都在 Google 地图上核对过。
export type LocalGuide = { intro: string; sections: Section[]; faqs: [string, string][] };

export const localGuides: Record<string, Record<Lang, LocalGuide>> = {
  'batu-pahat': {
    zh: {
      intro: '祥鹤总店就在峇株巴辖 Taman Dagang（13, Jalan Zamrud），2020 年从这里开始，24 小时有人接电话。家里有人走了，不管是在医院、在家里还是在疗养院，打 016-777 3883 或 WhatsApp 我们，我们马上安排人和车过去。',
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
        ['峇株巴辖半夜有人走了，可以马上打来吗？', '可以。祥鹤峇株巴辖总店 24 小时有人接，电话 016-777 3883，也可以直接 WhatsApp。'],
        ['祥鹤在峇株巴辖哪里？', '总店地址是 13, Jalan Zamrud, Taman Dagang, 83000 Batu Pahat, Johor。峇株巴辖县内另有新文龙分店。'],
        ['峇株巴辖的灵堂一般设在哪里？', '常见的有仙境生命纪念馆、柔佛诚敬善堂、会馆礼堂，或者在自己家里（有地房屋）。我们会看人数和家里方便，帮你安排。'],
        ['在峇株巴辖可以火化吗？', '可以。火化、土葬都可以安排，例如巴莪仙境山庄火葬场，或者峇株巴辖的华人义山和纪念园。'],
        ['峇株巴辖有宠物殡葬吗？', '有。祥鹤也做宠物殡葬，包括接送、告别仪式、单独火化和骨灰安放，宠物专线 018-909 3883。'],
      ],
    },
    en: {
      intro: 'Seong Hoe\'s headquarters is in Taman Dagang, Batu Pahat (13, Jalan Zamrud). We started here in 2020 and answer the phone 24 hours a day. If someone in your family has passed away, at hospital, at home or in a care home, call +60 16-777 3883 or WhatsApp us and we will send our team and vehicle straight away.',
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
        ['Someone has passed away in Batu Pahat at night. Can I call now?', 'Yes. Our Batu Pahat HQ answers 24 hours a day on +60 16-777 3883, or you can WhatsApp us.'],
        ['Where is Seong Hoe in Batu Pahat?', 'Our HQ is at 13, Jalan Zamrud, Taman Dagang, 83000 Batu Pahat, Johor. We also have a branch in Senggarang, within Batu Pahat district.'],
        ['Where are wakes usually held in Batu Pahat?', 'Common choices are Fairy Park Funeral Parlour, Johore Seng Keng Sian T\'ng, clan association halls, or at home for landed houses. We will help you choose based on your family and the number of visitors.'],
        ['Can I arrange a cremation in Batu Pahat?', 'Yes. We arrange both cremation and burial, for example at the Bagan Fairy Park crematorium, or at Batu Pahat\'s Chinese cemetery and memorial parks.'],
        ['Do you offer pet funerals in Batu Pahat?', 'Yes. Seong Hoe also provides pet funerals, including collection, a farewell ceremony, individual cremation and an ash resting place. Pet hotline: +60 18-909 3883.'],
      ],
    },
  },
};
