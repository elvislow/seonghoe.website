#!/bin/sh
# 构建可以放在 Claude artifact 上看的预览版（相对链接、没有页面过场）
set -e
rm -rf dist-preview
PUBLIC_PREVIEW=1 npx astro build --outDir dist-preview >/dev/null
python3 scripts/relink.py dist-preview
mv dist-preview/_astro dist-preview/assets
grep -rl "_astro/" dist-preview --include=*.html --include=*.css --include=*.js | xargs -r sed -i 's#_astro/#assets/#g'
python3 scripts/inline-preview.py dist-preview
rm -rf dist-preview/assets dist-preview/sitemap* dist-preview/robots.txt
