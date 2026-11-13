import type { Lang } from './site';

// 服务页内容。
// 祥鹤自己的做法写得比较概括；上线前请祥鹤逐页确认（见 Elvis 的确认清单）。
export type Section = { h: string; p?: string[]; steps?: [string, string][] };
export type Service = {
  slug: string;
  title: Record<Lang, string>;
  intro: Record<Lang, string>;
  body: Record<Lang, Section[]>;
  faqs: Record<Lang, [string, string][]>;
  photo?: string;
};

export const services: Service[] = [
  {
    slug: 'funeral-planning',
    photo: '/img/work-handover.webp',
    title: { zh: '丧礼策划', en: 'Funeral Planning' },
    intro: {
      zh: '家里有人走了，很多事情要在很短的时间里决定。祥鹤从接到电话开始，陪家属把每一步安排好，一直到出殡、火化或土葬。',
      en: 'When a loved one passes, many decisions have to be made in a short time. From the first call, Seong Hoe walks the family through every step, all the way to the funeral procession, cremation or burial.',
    },
    body: {
      zh: [
        { h: '家里有人走了，第一步做什么', p: [
          '先打给我们，24 小时都有人接。电话里我们会先问几件事：人在医院还是在家里、家里拜什么、打算火化还是土葬。不用一次想好，我们一步一步跟你讲。',
        ] },
        { h: '祥鹤的服务流程', steps: [
          ['咨询', '电话或当面，先了解家里的需要，再建议适合的服务。'],
          ['确认合约', '服务内容和费用讲清楚，双方签合约才开始。'],
          ['遗体处理', '清洁、穿衣、化妆，照家属的需要做。'],
          ['丧礼安排', '灵堂布置、仪式和各种细节，照家里的意思安排。'],
          ['告别仪式', '尊重家里的信仰和习俗，好好送最后一程。'],
          ['火化与捡骨', '选择火化的，陪家属到火化场，之后捡骨。'],
          ['骨灰安置', '骨灰放骨灰塔、墓园，或者海葬，我们帮你一起选。'],
          ['土葬', '选择土葬的，协助准备墓地和下葬。'],
        ] },
        { h: '守灵要几天、在哪里办', p: [
          '在马来西亚，守灵一般是 3 到 7 天，看预算，也看有没有亲戚要从外地赶回来。',
          '守灵可以在殡仪馆、多用途礼堂、住宅区的公共礼堂、自己家里（有地房屋），或者宗教场所办。',
        ] },
        { h: '配套和费用', p: [
          '祥鹤有经济、实惠和量身定做的配套，价格透明。直接火化配套 RM3,800 起，标准配套 RM9,800 起。',
          '最后的费用看几样：办几天、灵堂在哪里、选什么棺木、做什么仪式。先 WhatsApp 我们讲一下家里的情况，我们把每一项列出来给你看，你看清楚了再决定。',
        ] },
        { h: '棺木', p: [
          '祥鹤的寿板用柚木、Chengal 木等好木料，雕花细致，里面也做得舒服。想先看棺木的，联络我们安排。',
        ] },
      ],
      en: [
        { h: 'What to do first when someone passes', p: [
          'Call us first. Someone answers 24 hours a day. We will ask a few things: whether your loved one is at a hospital or at home, the family’s religion, and whether you plan cremation or burial.',
        ] },
        { h: 'Our service process', steps: [
          ['Consultation', 'By phone or in person, we learn what you need and suggest suitable services.'],
          ['Contract', 'Services and fees are agreed in a signed contract before we begin.'],
          ['Preparing the deceased', 'Cleansing, dressing and make-up, as the family needs.'],
          ['Funeral arrangements', 'Hall set-up, rituals and details, following your family’s wishes.'],
          ['Farewell ceremony', 'Respecting your beliefs and customs.'],
          ['Cremation and bone collection', 'For cremation, we accompany you to the crematorium and the bone collection.'],
          ['Placing the ashes', 'Columbarium, cemetery or sea scattering. We help you choose.'],
          ['Burial', 'For burial, we help prepare the grave and the interment.'],
        ] },
        { h: 'How long the wake lasts and where', p: [
          'In Malaysia a wake usually lasts 3 to 7 days, depending on budget and whether relatives are travelling back.',
          'A wake can be held at a funeral parlour, a multi-purpose hall, a community hall, a landed home or a place of worship.',
        ] },
        { h: 'Packages and cost', p: [
          'We offer economical, affordable and customised packages with transparent pricing. Direct cremation packages start from RM3,800 and standard packages from RM9,800.',
          'The final cost depends on the number of days, the venue, the casket and the rites. WhatsApp us and we will list every item before you decide.',
        ] },
        { h: 'Caskets', p: [
          'Our caskets are made from quality woods such as teak and chengal, with detailed carving and comfortable interiors. Contact us to arrange a viewing.',
        ] },
      ],
    },
    faqs: {
      zh: [
        ['半夜家里有人走了，可以马上打来吗？', '可以。祥鹤 24 小时都有人接电话，任何时间打来或 WhatsApp 都可以。'],
        ['家人在家里过世，要怎么办？', '先打我们的 24 小时热线 +60 16-777 3883，我们安排医生过来。医生确认后，我们协助你到警局拿死亡证明，再安排接送遗体和告别的场地。'],
        ['配套大概多少钱？', '直接火化配套 RM3,800 起，标准配套 RM9,800 起。最后的费用看天数、地点、棺木和仪式，我们会先列清楚给你看。'],
        ['家里每个人拜的不一样，怎么办？', '这种情况很常见。我们会先跟家里人一起商量，照长辈的意思，把大家都顾到。'],
        ['费用会不会越加越多？', '我们会先把每一项列给你看。要加什么，会先跟你讲清楚，你同意了才加。'],
      ],
      en: [
        ['Can I call in the middle of the night?', 'Yes. Someone at Seong Hoe answers 24 hours a day, by phone or WhatsApp.'],
        ['What should I do if my loved one passed away at home?', 'Call our 24-hour line at +60 16-777 3883 and we will arrange a doctor. Once the death is certified, we help you obtain the death certificate from the police station, then arrange the transfer and the venue for the farewell.'],
        ['How much does a package cost?', 'Direct cremation packages start from RM3,800 and standard packages from RM9,800. The final cost depends on days, venue, casket and rites, and we list every item first.'],
        ['Our family members follow different religions. What should we do?', 'This is common. We talk it through with the whole family first and follow your elders’ wishes.'],
        ['Will the cost keep going up?', 'We list every item first. Anything extra is explained and only added with your agreement.'],
      ],
    },
  },
  {
    slug: 'funeral-rites',
    photo: '/img/work-taoist.webp',
    title: { zh: '各式法事', en: 'Funeral Rites' },
    intro: {
      zh: '不同宗教、不同籍贯，法事的做法都不一样。祥鹤会先了解家里的信仰和习惯，再安排合适的仪式。',
      en: 'Rites differ by religion and by dialect group. Seong Hoe first learns the family’s beliefs and customs, then arranges the ceremonies that fit.',
    },
    body: {
      zh: [
        { h: '先问清楚，再安排', p: [
          '同样是华人丧礼，福建、潮州、广东、客家的讲究都不一样。祥鹤服务佛教、道教、基督教、天主教和没有宗教信仰的家庭，所以我们第一件事，是问清楚家里拜什么、长辈有什么交代。',
          '家里人意见不一样也不要紧，我们会陪大家一起商量，找一个大家都可以接受的做法。',
        ] },
        { h: '常见的法事和仪式', steps: [
          ['守夜期间的仪式', '灵堂上香、诵经、家属行礼，什么时候做、怎么做，到时有人引导。'],
          ['出殡前的告别', '盖棺前让家属见最后一面，讲完要讲的话。'],
          ['司仪主持', '仪式由司仪带着走，家属照着做就好，不用自己记规矩。'],
          ['做七、百日', '人走后每七天算一个「七」，一共七个七，到七七四十九天，之后还有百日。一般只做单数的头七、三七、五七、七七，二七、四七、六七不做。各籍贯做法不同，照长辈的意思就好。'],
        ] },
        { h: '规矩不懂，问我们', p: [
          '盖棺为什么要转身、手边的钱是做什么的、守孝能不能办婚事……这些规矩我们整理成文章放在「习俗知识」。家里正在办事，直接 WhatsApp 问我们会比较快。',
        ] },
      ],
      en: [
        { h: 'We ask first, then arrange', p: [
          'Chinese funerals differ between Hokkien, Teochew, Cantonese and Hakka families. We serve Buddhist, Taoist, Christian, Roman Catholic and freethinker families, so the first thing we do is ask about your beliefs and your elders’ wishes.',
          'If family members disagree, we sit down together and find a way everyone can accept.',
        ] },
        { h: 'Common rites and ceremonies', steps: [
          ['During the wake', 'Offering incense, chanting and family rites, with someone guiding you through each one.'],
          ['Farewell before sealing the coffin', 'A last moment for the family before the coffin is sealed.'],
          ['A master of ceremonies', 'Our MC leads each rite so the family can simply follow.'],
          ['Seventh-day and hundredth-day rites', 'The 49 days after a death are counted in seven "sevens". Usually only the odd ones are held: the 1st, 3rd, 5th and 7th; the 2nd, 4th and 6th are skipped. The 100th day follows. Practices differ by dialect group, so follow your elders’ wishes.'],
        ] },
        { h: 'Not sure about a custom? Ask us', p: [
          'We explain common customs in our Customs articles. If your family is arranging a funeral now, WhatsApp us for a quicker answer.',
        ] },
      ],
    },
    faqs: {
      zh: [
        ['我们什么规矩都不懂，怎么办？', '不用担心，每一步我们都会在旁边提醒，家属照着做就可以。'],
        ['法事可以简化吗？', '可以。做多做少，照家里的意思和长辈的交代决定。'],
        ['做七一定要做满七次吗？', '不用。一共有七个七，一般只做单数的头七、三七、五七、七七，二七、四七、六七不做。各籍贯做法也不同，可以跟长辈商量。'],
      ],
      en: [
        ['We do not know any of the customs. What should we do?', 'Do not worry. We remind you at every step, and you simply follow.'],
        ['Can the rites be simplified?', 'Yes. How much to do is up to your family and your elders.'],
        ['Must the seventh-day rites be held seven times?', 'No. Of the seven "sevens", usually only the 1st, 3rd, 5th and 7th are held; the 2nd, 4th and 6th are skipped. Practices differ by dialect group, so check with your elders.'],
      ],
    },
  },
  {
    slug: 'cremation',
    photo: '/img/work-hearse-classic.webp',
    title: { zh: '火化服务', en: 'Cremation' },
    intro: {
      zh: '从出殡到火化，再到骨灰安置，祥鹤协助家属安排整个过程。',
      en: 'From the funeral procession to cremation and the placement of ashes, Seong Hoe helps the family arrange the whole process.',
    },
    body: {
      zh: [
        { h: '火化当天的流程', steps: [
          ['出殡', '守夜结束后出殡，家属送最后一程。'],
          ['到火化场', '灵车把过世的人送到火化场，家属一起到。'],
          ['最后告别', '火化前家属做最后的告别，有什么规矩到时会提醒。'],
          ['捡骨', '火化完成后，陪家属捡骨。'],
          ['安置骨灰', '放进骨灰塔、纪念园，照家里的意思安排。'],
        ] },
        { h: '骨灰放在哪里', p: [
          '骨灰可以放在骨灰塔、墓园，也可以选择海葬。每个地方的环境和费用都不同，家里想怎么安置，我们帮你一起比较，再做决定。',
        ] },
      ],
      en: [
        { h: 'On the day', steps: [
          ['The procession', 'After the wake, the family accompanies the final journey.'],
          ['To the crematorium', 'The hearse brings your loved one to the crematorium, with the family.'],
          ['The final farewell', 'A last farewell before cremation, with any customs explained.'],
          ['Bone collection', 'After cremation, we guide the family through the bone collection.'],
          ['Placing the ashes', 'In a columbarium or memorial park, as the family wishes.'],
        ] },
        { h: 'Where to place the ashes', p: [
          'Ashes can go to a columbarium or a cemetery, or be scattered at sea. Options differ in setting and cost, and we compare them with you before you decide.',
        ] },
      ],
    },
    faqs: {
      zh: [
        ['火化后骨灰一定要放骨灰塔吗？', '不一定。可以放骨灰塔、墓园，也可以海葬，照家里的意思决定，我们帮你一起比较。'],
        ['火化当天家属要做什么？', '家属跟着送最后一程、做最后的告别，其他的事我们会处理，有什么规矩到时会先讲。'],
      ],
      en: [
        ['Must the ashes go to a columbarium?', 'Not necessarily. A columbarium, a cemetery or sea scattering, as your family wishes. We help you compare.'],
        ['What does the family do on the day?', 'Accompany the final journey and say goodbye. We take care of the rest and explain any customs beforehand.'],
      ],
    },
  },
  {
    slug: 'burial',
    photo: '/img/work-hearse-arch.webp',
    title: { zh: '土葬服务', en: 'Burial' },
    intro: {
      zh: '选择土葬的家庭，祥鹤协助安排墓地、出殡和下葬。',
      en: 'For families who choose burial, Seong Hoe helps arrange the burial plot, the procession and the interment.',
    },
    body: {
      zh: [
        { h: '先决定葬在哪里', p: [
          '土葬第一件事是墓地。可以选义山，也可以选私人纪念园，地点、环境和费用都不一样。有的家庭已经预先买好墓地，有的要现在才找，我们都可以帮忙安排。',
          '墓地定了，才能定出殡的日子和路线，所以这一步越早决定越好。',
        ] },
        { h: '土葬当天的流程', steps: [
          ['出殡', '守夜结束后出殡，家属扶灵送行。'],
          ['到墓地', '灵车把过世的人送到墓地，家属一起到。'],
          ['下葬', '照家里的规矩下葬，什么时候要回避、要做什么，到时会提醒。'],
          ['之后的事', '立碑、扫墓这些，之后有问题还是可以问我们。'],
        ] },
      ],
      en: [
        { h: 'First, choose the burial place', p: [
          'The first decision is the plot: a community cemetery (义山) or a private memorial park, each with a different setting and cost. Some families have bought a plot in advance; others need one now. We can help either way.',
          'The date and route of the procession depend on the plot, so it helps to decide early.',
        ] },
        { h: 'On the day', steps: [
          ['The procession', 'After the wake, the family accompanies the casket.'],
          ['To the cemetery', 'The hearse brings your loved one to the cemetery, with the family.'],
          ['The interment', 'Following your family’s customs, with each step explained beforehand.'],
          ['Afterwards', 'For the headstone and grave visits, you can still ask us.'],
        ] },
      ],
    },
    faqs: {
      zh: [
        ['还没有墓地，来得及吗？', '来得及，我们可以帮你一起找。墓地定了，出殡的日子才能定，所以越早讲越好。'],
        ['义山和私人纪念园有什么不同？', '地点、环境、管理和费用都不一样。家里想要什么，跟我们讲，我们帮你一起比较。'],
      ],
      en: [
        ['We do not have a plot yet. Is there time?', 'Yes. We can help you find one. The procession date depends on the plot, so let us know early.'],
        ['What is the difference between a community cemetery and a private memorial park?', 'Location, setting, management and cost. Tell us what your family wants and we will compare the options with you.'],
      ],
    },
  },
  {
    slug: 'funeral-mc',
    photo: '/img/work-mc.webp',
    title: { zh: '司仪与礼生', en: 'Funeral MC & Ritual Attendants' },
    intro: {
      zh: '奠礼由专业司仪主持、礼生在旁引导，让告别仪式庄重、有序，家属不用担心做错。',
      en: 'Our professional masters of ceremony and ritual attendants lead the farewell with dignity, so the family never has to worry about getting it wrong.',
    },
    body: {
      zh: [
        { h: '为什么要有司仪和礼生', p: [
          '告别仪式只有一次，家属当下都很难过，没办法记住每一个规矩。有司仪主持、礼生在旁边引导，仪式可以照顺序走，家属只要照着做就好。',
        ] },
        { h: '司仪和礼生做什么', steps: [
          ['司仪主持', '带着整场奠礼走，提醒每一步什么时候开始。'],
          ['礼生引导', '在家属旁边，教大家上香、行礼、站位。'],
          ['照家里的信仰', '仪式内容照家里的宗教和习俗安排。'],
        ] },
      ],
      en: [
        { h: 'Why an MC and ritual attendants', p: [
          'A farewell happens only once, and grieving families cannot remember every custom. With an MC leading and attendants guiding, the ceremony runs in order and the family simply follows.',
        ] },
        { h: 'What they do', steps: [
          ['The MC leads', 'Guides the whole ceremony and announces each step.'],
          ['Attendants guide', 'Stand beside the family to show incense offering, bows and positions.'],
          ['Following your beliefs', 'The ceremony follows your family’s religion and customs.'],
        ] },
      ],
    },
    faqs: {
      zh: [['仪式我们不懂，会不会做错？', '不会。司仪和礼生会一直在旁边引导，照着做就可以。']],
      en: [['We do not know the ceremony. Will we get it wrong?', 'No. The MC and attendants guide you throughout.']],
    },
  },
  {
    slug: 'casket-sponsorship',
    photo: '/img/work-casket-check.webp',
    title: { zh: '捐棺助葬守护', en: 'Casket Sponsorship Program' },
    intro: {
      zh: '祥鹤的捐棺助葬计划，帮助有需要的家庭让亲人体面地走完最后一程。',
      en: 'Seong Hoe’s casket sponsorship program helps families in need give their loved ones a dignified farewell.',
    },
    body: {
      zh: [
        { h: '为什么有这个计划', p: [
          '有些家庭，家人走了，却连办一场简单的丧礼都很吃力。祥鹤做的是街坊的生意，我们希望每个人走的时候，都可以走得体面。',
        ] },
        { h: '怎么申请', steps: [
          ['联络我们', 'WhatsApp 或打电话给任何一间分店，讲一下家里的情况。'],
          ['了解情况', '我们会跟你了解家里的需要。'],
          ['安排', '确认后，我们会跟你一起把丧礼安排好。'],
        ] },
        { h: '回馈社会', p: [
          '取之社会，回馈社会。除了捐棺助葬，祥鹤每个月都有慈善活动，像派送物资、为本地医院办捐血活动，也派过免费鸡饭给街坊。',
        ] },
      ],
      en: [
        { h: 'Why this program exists', p: [
          'For some families, even a simple funeral is hard to afford. We serve our neighbours, and we believe everyone deserves a dignified farewell.',
        ] },
        { h: 'How to apply', steps: [
          ['Contact us', 'WhatsApp or call any branch and tell us about your situation.'],
          ['Understanding your needs', 'We will learn about your family’s needs.'],
          ['Arranging the funeral', 'Once confirmed, we arrange the funeral with you.'],
        ] },
        { h: 'Giving back', p: [
          'Besides casket sponsorship, Seong Hoe holds charity activities every month, such as distributing supplies, blood donation drives for local hospitals, and free chicken rice for our neighbours.',
        ] },
      ],
    },
    faqs: {
      zh: [
        ['谁可以申请捐棺助葬？', '家里经济有困难的家庭都可以先联络我们，讲一下情况。'],
        ['要怎么申请？', 'WhatsApp 或打电话给任何一间分店就可以。'],
      ],
      en: [
        ['Who can apply?', 'Families facing financial difficulty can contact us first and tell us their situation.'],
        ['How do we apply?', 'WhatsApp or call any of our branches.'],
      ],
    },
  },
  {
    slug: 'pet-funeral',
    title: { zh: '宠物殡葬（怀宠阁）', en: 'Pet Funeral (怀宠阁)' },
    intro: {
      zh: '怀宠阁是祥鹤的宠物殡葬服务，陪主人好好送别家里的毛孩子。',
      en: '怀宠阁 is Seong Hoe’s pet funeral service, helping owners say a proper goodbye to their companions.',
    },
    body: {
      zh: [
        { h: '它陪了我们很多年', p: [
          '猫、狗、兔子，甚至一缸鱼，养久了就是家里的一份子。它走的时候，主人会难过，也是正常的。怀宠阁想做的，就是陪主人好好送它一程。',
        ] },
        { h: '我们怎么陪你', steps: [
          ['联络我们', 'WhatsApp 或打电话给我们，讲一下毛孩子的情况。'],
          ['接回毛孩子', '我们安排把它接过来。'],
          ['好好告别', '火化前，主人可以陪它最后一段时间，讲完要讲的话。'],
          ['火化', '照主人的意思安排火化。'],
          ['带它回家', '骨灰交回主人，让它继续陪着你。'],
        ] },
      ],
      en: [
        { h: 'They were family for years', p: [
          'Cats, dogs, rabbits, even a tank of fish become part of the family. Grief is natural when they go. 怀宠阁 is here to help you say goodbye properly.',
        ] },
        { h: 'How we help', steps: [
          ['Contact us', 'WhatsApp or call us and tell us about your companion.'],
          ['Bringing them to us', 'We arrange to bring your pet to us.'],
          ['A proper goodbye', 'Spend some last moments together before cremation.'],
          ['Cremation', 'Arranged according to your wishes.'],
          ['Bringing them home', 'The ashes are returned to you.'],
        ] },
      ],
    },
    faqs: {
      zh: [
        ['什么动物都可以办吗？', '猫、狗、兔子、鱼都可以先联络我们，讲一下情况。'],
        ['骨灰可以带回家吗？', '可以，火化后骨灰会交回主人。'],
      ],
      en: [
        ['Which animals can you help with?', 'Cats, dogs, rabbits and fish. Contact us and tell us about your pet.'],
        ['Can we take the ashes home?', 'Yes. The ashes are returned to you after cremation.'],
      ],
    },
  },
];

export const serviceIcon: Record<string, string> = {
  'funeral-planning': 'scroll', 'funeral-rites': 'lotus', 'funeral-mc': 'book', cremation: 'flame', burial: 'mountain', 'casket-sponsorship': 'heart', 'pet-funeral': 'paw',
};

// 首页滚动照片墙（家属已同意公开）
export const gallery = [
  { src: '/img/showroom.webp', zh: '棺木展示厅', en: 'Casket showroom' },
  { src: '/img/work-family-walk.webp', zh: '陪家属走最后一程', en: 'Walking with the family' },
  { src: '/img/work-altar.webp', zh: '灵堂布置', en: 'The memorial altar' },
  { src: '/img/work-mc.webp', zh: '司仪主持仪式', en: 'Our master of ceremonies' },
  { src: '/img/work-team-coffin.webp', zh: '团队护送灵柩', en: 'The team moving the casket' },
  { src: '/img/work-hands.webp', zh: '家属最后的整理', en: 'A final touch from the family' },
  { src: '/img/work-team-bw.webp', zh: '一步一步引导家属', en: 'Guiding the family step by step' },
  { src: '/img/work-band.webp', zh: '出殡乐队', en: 'The procession band' },
  { src: '/img/work-coffin-carry.webp', zh: '扶灵出殡', en: 'Carrying the casket out' },
  { src: '/img/work-hearse-classic.webp', zh: '灵车出发', en: 'The hearse sets off' },
  { src: '/img/work-guide.webp', zh: '引导家属行礼', en: 'Guiding the family through the rites' },
  { src: '/img/work-procession.webp', zh: '家属随灵车步行', en: 'Family walking behind the hearse' },
  { src: '/img/work-hearse-low.webp', zh: '最后一程', en: 'The final journey' },
  { src: '/img/founder-showroom.webp', zh: '创办人在棺木展示厅', en: 'Our founder in the casket showroom' },
  { src: '/img/branch-batu-pahat.webp', zh: '峇株巴辖总店', en: 'Batu Pahat HQ' },
  { src: '/img/branch-johor-bahru.webp', zh: '新山分店', en: 'Johor Bahru branch' },
  { src: '/img/founder-standing.webp', zh: '挑选寿板', en: 'Choosing a casket' },
  { src: '/img/work-casket-check.webp', zh: '检查棺木', en: 'Checking the casket' },
  { src: '/img/work-handover.webp', zh: '交给家属', en: 'Handing over to the family' },
  { src: '/img/work-hearse-arch.webp', zh: '祥鹤拱门', en: 'The Seong Hoe arch' },
  { src: '/img/work-white-casket.webp', zh: '团队扶灵', en: 'The team carrying the casket' },
  { src: '/img/work-kowtow-bw.webp', zh: '孝子叩拜', en: 'A son paying respects' },
  { src: '/img/work-silence.webp', zh: '全体默哀', en: 'A moment of silence' },
  { src: '/img/work-lotus-casket.webp', zh: '扶灵出殡', en: 'Carrying the casket to the procession' },
  { src: '/img/work-taoist.webp', zh: '道教法事', en: 'Taoist funeral rites' },
  { src: '/img/work-white-lion.webp', zh: '白狮致哀', en: 'The white lion pays respects' },
  { src: '/img/work-paper-figure.webp', zh: '纸扎', en: 'Paper offerings' },
  { src: '/img/work-rope.webp', zh: '封棺绑绳', en: 'Securing the casket' },
  { src: '/img/work-cortege.webp', zh: '出殡车队', en: 'The funeral cortege' },
  { src: '/img/work-road-kowtow.webp', zh: '路边叩别', en: 'A farewell bow on the road' },
  { src: '/img/work-lotus-elder.webp', zh: '手捧莲花', en: 'Holding a paper lotus' },
  { src: '/img/work-bow.webp', zh: '礼生答谢', en: 'Our attendants bow in thanks' },
];
