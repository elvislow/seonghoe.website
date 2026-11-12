# 预览版：把 CSS、JS 直接放进每一页（artifact 只允许内嵌的 CSS/JS）
import os, re, sys
root = sys.argv[1]
for dp, _, fs in os.walk(root):
    for f in fs:
        if not f.endswith('.html'): continue
        fp = os.path.join(dp, f); s = open(fp, encoding='utf-8').read()
        def css(m):
            path = os.path.normpath(os.path.join(dp, m.group(1)))
            return '<style>' + open(path, encoding='utf-8').read() + '</style>'
        def js(m):
            path = os.path.normpath(os.path.join(dp, m.group(2)))
            return '<script type="module">' + open(path, encoding='utf-8').read() + '</script>'
        s = re.sub(r'<link rel="stylesheet" href="([^"]*assets/[^"]+\.css)"\s*/?>', css, s)
        s = re.sub(r'<script type="module" src="()([^"]*assets/[^"]+\.js)"></script>', js, s)
        open(fp, 'w', encoding='utf-8').write(s)
print('inlined')
