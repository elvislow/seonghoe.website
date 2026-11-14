// 祥鹤网站的所有基本资料都在这里。改电话、地址、链接，只改这个文件。
// 名称、地址、电话照 Linktree 和 Google 商家资料，一个字都不要自己改。

export type Lang = 'zh' | 'en';

export const brand = {
  zh: '祥鹤殡仪服务有限公司',
  en: 'Seong Hoe Funeral Service Sdn. Bhd.',
  tagline: {
    zh: '丧礼策划 ｜ 各式法事 ｜ 捐棺助葬守护',
    en: 'Funeral Planning | Various Funeral Services | Casket Sponsorship Program',
  },
  whatsapp: '60167773883',
  whatsappDisplay: '+60 16-777 3883',
  linktree: 'https://linktr.ee/seonghoe',
  founder: { zh: '蔡偉中', en: 'Chua Wee Chong', photo: '/img/founder-portrait.webp' }, // 英文名照旧官网
  social: {
    facebook: 'https://www.facebook.com/bpseonghoe',
    instagram: 'https://www.instagram.com/seonghoefuneralservices',
    tiktok: 'https://www.tiktok.com/@seonghoefuneral',
  },
};

export type Branch = {
  slug: string;
  name: Record<Lang, string>;
  area: Record<Lang, string>;
  company: string;
  googleName: string;
  address: string;
  street: string;
  locality: string;
  postalCode: string;
  phone: string;
  phoneDisplay: string;
  lat: number;
  lng: number;
  mapsUrl: string;
  isHQ?: boolean;
  photo?: string;
  photoPos?: string;
};

export const branches: Branch[] = [
  {
    slug: 'batu-pahat',
    name: { zh: '峇株巴辖总店', en: 'Batu Pahat HQ' },
    area: { zh: '峇株巴辖', en: 'Batu Pahat' },
    company: 'Seong Hoe Funeral Services Sdn. Bhd.',
    googleName: 'Seong Hoe Funeral Services Sdn. Bhd. Batu Pahat 祥鹤殡仪服务有限公司总公司',
    address: '13, Jalan Zamrud, Taman Dagang, 83000 Batu Pahat, Johor, Malaysia',
    street: '13, Jalan Zamrud, Taman Dagang',
    locality: 'Batu Pahat',
    postalCode: '83000',
    phone: '+60167773883',
    phoneDisplay: '+60 16-777 3883',
    lat: 1.8382976,
    lng: 102.9319203,
    mapsUrl: 'https://maps.app.goo.gl/JVQFjSnLzK9aXUSK6',
    photo: '/img/branch-batu-pahat.webp',
    photoPos: '50% 62%',
    isHQ: true,
  },
  {
    slug: 'johor-bahru',
    name: { zh: '新山分店', en: 'Johor Bahru Branch' },
    area: { zh: '新山', en: 'Johor Bahru' },
    company: 'Seong Hoe Nusajaya Sdn. Bhd.',
    googleName: 'Seong Hoe Nusajaya Sdn. Bhd Johor Bahru 祥鹤殡仪服务有限公司新山分店',
    address: '17, Jalan SILC 2/16, Kawasan Perindustrian SILC Iskandar Puteri, 79150 Johor Bahru, Johor, Malaysia',
    street: '17, Jalan SILC 2/16, Kawasan Perindustrian SILC Iskandar Puteri',
    locality: 'Johor Bahru',
    postalCode: '79150',
    phone: '+60132883883',
    phoneDisplay: '+60 13-288 3883',
    lat: 1.4754863,
    lng: 103.5910131,
    mapsUrl: 'https://maps.app.goo.gl/pd2m2ssGcAbqffVs6',
    photo: '/img/branch-johor-bahru.webp',
  },
  {
    slug: 'senggarang',
    name: { zh: '新文龙分店', en: 'Senggarang Branch' },
    area: { zh: '新文龙', en: 'Senggarang' },
    company: 'Seong Hoe Memorial Sdn. Bhd.',
    googleName: 'Seong Hoe Memorial Sdn. Bhd. Senggarang 祥鹤殡仪服务有限公司新文龙分店',
    address: '1, Jalan Sri Bahagia 1, Taman Sri Bahagia, 83200 Senggarang, Johor, Malaysia',
    street: '1, Jalan Sri Bahagia 1, Taman Sri Bahagia',
    locality: 'Senggarang',
    postalCode: '83200',
    phone: '+60167773883',
    phoneDisplay: '+60 16-777 3883',
    lat: 1.746921,
    lng: 103.0513829,
    mapsUrl: 'https://maps.app.goo.gl/8k4zqEgHzpYns4f59',
    photo: '/img/branch-senggarang.webp',
    photoPos: '50% 55%',
  },
];

// Google 评价原文（峇株巴辖总店），不改字
export const reviews = [
  "非常感谢你们专业又贴心的服务。在这段艰难的时间里，你们的团队做事非常有效率，每一个细节都安排得很好，也都非常配合，让我们家人感到很安心。\n整个流程都处理得很顺利，也减轻了我们很多负担。\n\n特别感谢老板小中耐心又认真地为我们讲解每一个细节，让我们对整个流程更加了解和放心。祥鹤团队也提供了非常多不同的款式选择，服务非常周到。\n\n谢谢你们的体贴与用心，真的帮了我们很大的忙，衷心推荐给有需要的人。🙏🙏",
  "谢谢祥鹤的服务，让我们能安心地送别沈爸。五天的葬礼，从礼节到宾客招待，祥鹤都面面俱到、一应俱全，而且收费合理。\n沈爸在生时，事事都讲求体面，他往生后，我们都希望能不负他的期望，办一场体面的葬礼。小中在了解我们的要求后，非常有效率地打点好一切。真心感谢祥鹤的小中和他的团队🙏🏻…...",
  "谢谢祥鹤的服务，已经卜杯问过沈爷爷，他很满意这场葬礼❤️ 感谢小中和团队的专业与细心，将整个仪式安排得井然有序、庄重且有温度，也给予了家属很大的安慰与支持。",
  "他们把阿嬷的丧事处理得非常好 精致时尚 但是又不失传统 👍🏻 我们的每个小要求都帮我们尽力做到 💪🏻 就连礼簿问题，都帮我们当天处理好，大力推荐！！是一群有热血的团队 💪🏻…...",
  'smooth planing. Great service. Accompany us though out the whole journey till the end. We don\'t have to worry about everything in planing and organising everything they planing and execute it. Strongly Recommended.',
  'Highly recommended undertaker in Batu Pahat. Very experienced. And also understand the difference in culture and religion within the same family. A new generation that merges the new and the old into 1 service',
  'Great service for my brother’s last journey in life. No unreasonable add-ons and well executed plans. Highly recommended.',
  'Good and professional burial service for my father\'s final journey in life. Thank you.',
];

export const googleRating = { value: '5.0', count: 29, branch: 'batu-pahat' };

export const waLink = (lang: Lang) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    lang === 'zh' ? '你好，我想询问祥鹤的殡仪服务。' : 'Hi, I would like to ask about your funeral services.'
  )}`;

export const mapEmbed = (b: Branch) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(b.googleName + ', ' + b.address)}&z=16&output=embed`;

// 报导过祥鹤的媒体：首页跑马灯会自动换成这一排。
// logo 放 public/press/，用媒体官方提供的 logo 档；没有 logo 就只显示名称。
export const press: { name: string; title: string; date: string; url: string; logo?: string }[] = [
  { name: '星洲日报', title: '祥鹤——让生命的最后一刻 不留遗憾', date: '2025-12-10', url: 'https://johor.sinchew.com.my/news/20251210/johor/7098601' },
  { name: '中国报', title: '峇株多个单位联办 成功筹获45包热血', date: '2026-09-24', url: 'https://johor.chinapress.com.my/20260924/%e5%b3%87%e6%a0%aa%e5%a4%9a%e4%b8%aa%e5%8d%95%e4%bd%8d%e8%81%94%e5%8a%9e-%e6%88%90%e5%8a%9f%e7%ad%b9%e8%8e%b745%e5%8c%85%e7%83%ad%e8%a1%80-2/' },
  { name: '中国报', title: '峇株联合捐血反应好 短短数小时筹获50包', date: '2026-06-24', url: 'https://johor.chinapress.com.my/20260624/%e5%b3%87%e6%a0%aa%e8%81%94%e5%90%88%e6%8d%90%e8%a1%80%e5%8f%8d%e5%ba%94%e5%a5%bd-%e7%9f%ad%e7%9f%ad%e6%95%b0%e5%b0%8f%e6%97%b6%e7%ad%b9%e8%8e%b750%e5%8c%85/' },
  { name: '中国报', title: '提供便捷专业服务 新文龙祥鹤殡仪服务开张', date: '2024-09-13', url: 'https://johor.chinapress.com.my/20240913/%E6%8F%90%E4%BE%9B%E4%BE%BF%E6%8D%B7%E4%B8%93%E4%B8%9A%E6%9C%8D%E5%8A%A1-%E6%96%B0%E6%96%87%E9%BE%99%E7%A5%A5%E9%B9%A4%E6%AE%A1%E4%BB%AA%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%BC%A0/' },
  { name: '星洲日报', title: '尊重生命 感恩生命 传承生命 祥鹤用心 家属安心', date: '2023-04-01', url: 'https://www.sinchew.com.my/news/20230401/johor/4580153' },
  { name: '东方日报', title: '兄弟投身殡葬业 推广捐棺助贫者', date: '2020-12-22', url: 'https://www.orientaldaily.com.my/news/nation/2020/12/22/382304' },
];

// 社交平台。followers 填数字（例如 52000），asOf 填统计日期；没有数字就只显示账号。
export const socials: { key: 'facebook' | 'instagram' | 'tiktok'; name: string; url: string; handle: string; followers?: number; asOf?: string }[] = [
  { key: 'facebook', name: 'Facebook', url: brand.social.facebook, handle: '祥鹤殡仪服务', followers: 22000 },
  { key: 'tiktok', name: 'TikTok', url: brand.social.tiktok, handle: '@seonghoefuneral', followers: 6600 },
  { key: 'instagram', name: 'Instagram', url: brand.social.instagram, handle: '@seonghoefuneralservices', followers: 4900 },
].filter((x) => x.url) as any;

export const socialsAsOf = '2026-11';
export const fmtFollowers = (n: number, lang: 'zh' | 'en') =>
  lang === 'zh' ? (n >= 10000 ? `${Math.floor(n / 1000) / 10}万` : n.toLocaleString('en')) : (n >= 1000 ? `${Math.floor(n / 100) / 10}K` : `${n}`);
