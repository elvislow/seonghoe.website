import type { Branch, Lang } from './data/site';

export const tr = (lang: Lang) => (zh: string, en: string) => (lang === 'zh' ? zh : en);
export const pfx = (lang: Lang) => (lang === 'en' ? '/en' : '');
export const altPath = (lang: Lang, path: string) => (lang === 'zh' ? `/en${path}` : path);

export function branchSchema(b: Branch, site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FuneralHome',
    '@id': new URL(`/branches/${b.slug}/#place`, site).href,
    name: b.googleName,
    legalName: b.company,
    url: new URL(`/branches/${b.slug}/`, site).href,
    logo: new URL('/brand/logo-ink.png', site).href,
    telephone: b.phone,
    hasMap: b.mapsUrl,
    address: { '@type': 'PostalAddress', streetAddress: b.street, addressLocality: b.locality, postalCode: b.postalCode, addressRegion: 'Johor', addressCountry: 'MY' },
    geo: { '@type': 'GeoCoordinates', latitude: b.lat, longitude: b.lng },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
    parentOrganization: { '@id': new URL('/#org', site).href },
  };
}
