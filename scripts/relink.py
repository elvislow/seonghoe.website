import os, re, sys, posixpath
root = sys.argv[1]
def rel(target, cur_dir):
    path = target.split('#')[0].split('?')[0]; frag = target[len(path):]
    if path.endswith('/'): path += 'index.html'
    r = posixpath.relpath(path, cur_dir)
    return r + frag
for dp, _, fs in os.walk(root):
    for f in fs:
        if not f.endswith(('.html', '.css', '.js')): continue
        fp = os.path.join(dp, f); cur = '/' + os.path.relpath(dp, root).replace(os.sep, '/')
        if cur == '/.': cur = '/'
        s = open(fp, encoding='utf-8').read()
        if f.endswith('.html'):
            s = re.sub(r'(href|src|content)="(/(?!/)[^"]*)"', lambda m: f'{m.group(1)}="{rel(m.group(2), cur)}"' if m.group(1) != 'content' or m.group(2).startswith('/_astro') else m.group(0), s)
        else:
            s = re.sub(r'url\((/(?!/)[^)]*)\)', lambda m: f'url({rel(m.group(1), cur)})', s)
        open(fp, 'w', encoding='utf-8').write(s)
print('ok')
