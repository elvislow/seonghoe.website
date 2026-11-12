# 祥鹤殡仪服务有限公司 网站

Astro 静态网站，中英双语。

## 本地预览
npm install
npm run dev

## 上线（Vercel）
Framework 选 Astro；Build Command `npm run build`；Output Directory `dist`。

## 常改的地方
- 分店、电话、地图、社交媒体、媒体报导：src/data/site.ts
- 服务页内容：src/data/services.ts
- 习俗文章：src/data/customs.ts
- 常见问题：src/data/faq.ts
- 正式网域定了之后：改 astro.config.mjs 的 site 和 public/robots.txt
