import os
HERE=os.path.dirname(os.path.abspath(__file__));ROOT=os.path.dirname(HERE)
s=open(os.path.join(HERE,'page.html')).read()
r={'/*DATA*/':'data.js','/*VOCAB*/':['vocab.js','vocab7.js'],'/*VOCABUI*/':'vocab-ui.js','/*VERBS*/':'verbs.js','/*VEXTRA*/':'vocab-extra.js','/*VERBX*/':'verbs-extra.js','/*EASY*/':'easy.js'}
for k,f in r.items(): s=s.replace(k,'\n'.join(open(os.path.join(HERE,x)).read() for x in ([f] if isinstance(f,str) else f)))
open(os.path.join(ROOT,'passaporte-quiz.html'),'w').write(s)

# standalone index.html for GitHub Pages
head=open(os.path.join(HERE,'standalone-head.html')).read()
open(os.path.join(ROOT,'index.html'),'w').write(head+'\n'+s+'\n</body>\n</html>\n')
print('built passaporte-quiz.html and index.html')
