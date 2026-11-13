import { bpPages, type AreaPage } from './bp';
import { jbPages } from './jb';
import { sgPages } from './sg';

// 地区专页：网址前缀 = 分店 slug，例如 /johor-bahru/cremation/
export const areaPages: Record<string, AreaPage[]> = {
  'batu-pahat': bpPages,
  'johor-bahru': jbPages,
  senggarang: sgPages,
};
