import type { Lang } from './site';
import { services } from './services';

// 常见问题页：前五题照祥鹤旧官网 Funeral Q&A；其余来自各服务页
const general: Record<Lang, [string, string][]> = {
  zh: [
    ['守灵要几天？', '在马来西亚，守灵一般是 3 到 7 天，看预算，也看有没有亲戚要从外地赶回来。'],
    ['家人在家里过世，要怎么办？', '先打我们的 24 小时热线 +60 16-777 3883，我们安排医生过来。医生确认后，我们协助你到警局拿死亡证明，再安排接送遗体和告别的场地。'],
    ['守灵可以在哪里办？', '殡仪馆、多用途礼堂、住宅区的公共礼堂、自己家里（有地房屋），或者宗教场所都可以。'],
    ['家里的镜子为什么要用红纸盖起来？', '在华人文化里，死亡被看作不吉利的事。用红纸或红布盖住镜子和神像，是不让神明「看到」白事，以示尊重。'],
    ['孕妇可以去守灵或参加丧礼吗？', '没有硬性规定。如果是以宾客身份去，最好先问丧家和自己家里的长辈，因为有些人会忌讳。'],
  ],
  en: [
    ['How many days should the wake be?', 'In Malaysia a wake usually lasts 3 to 7 days, depending on budget and whether relatives are travelling back.'],
    ['What should I do if my loved one passed away at home?', 'Call our 24-hour line at +60 16-777 3883 and we will arrange a doctor. Once the death is certified, we help you obtain the death certificate from the police station, then arrange the transfer and the farewell venue.'],
    ['Where can a wake be held in Malaysia?', 'At a funeral parlour, a multi-purpose hall, a community hall, a landed home or a place of worship.'],
    ['Why cover mirrors with red paper at home?', 'In Chinese culture death is regarded as inauspicious. Red paper or cloth covers mirrors and deity statues so they are not exposed to it, as a sign of respect.'],
    ['Can a pregnant woman attend a wake or funeral?', 'There is no fixed rule. If you are attending as a guest, check with the bereaved family and your own elders first, as some consider it taboo.'],
  ],
};

export const faqGroups = (lang: Lang) => [
  { title: lang === 'zh' ? '一般问题' : 'General', items: general[lang] },
  ...services.map((s) => ({ title: s.title[lang], items: s.faqs[lang], slug: s.slug })),
];
