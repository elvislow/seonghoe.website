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
  // TODO：Elvis 提供后填上
  social: {
    facebook: 'https://www.facebook.com/bpseonghoe',
    instagram: 'https://www.instagram.com/seonghoefuneralservice.sdn.bhd',
    tiktok: '',
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
  'smooth planing. Great service. Accompany us though out the whole journey till the end. We don\'t have to worry about everything in planing and organising everything they planing and execute it. Strongly Recommended.',
  'Highly recommended undertaker in Batu Pahat. Very experienced. And also understand the difference in culture and religion within the same family. A new generation that merges the new and the old into 1 service',
  'Great service for my brother’s last journey in life. No unreasonable add-ons and well executed plans. Highly recommended.',
  'Good and professional burial service for my father\'s final journey in life. Thank you.',
];

export const googleRating = { value: '4.9', count: 13, branch: 'batu-pahat' };

export const waLink = (lang: Lang) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    lang === 'zh' ? '你好，我想询问祥鹤的殡仪服务。' : 'Hi, I would like to ask about your funeral services.'
  )}`;

export const mapEmbed = (b: Branch) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(b.googleName + ', ' + b.address)}&z=16&output=embed`;

// 报导过祥鹤的媒体：首页跑马灯会自动换成这一排。
// logo 放 public/press/，用媒体官方提供的 logo 档；没有 logo 就只显示名称。
export const press: { name: string; logo?: string; url?: string }[] = [];
