const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.setDefaultTimeout(5000);
await p.route(/fonts/,r=>r.abort());await p.goto('file:///home/claude/passaporte-quiz.html');await p.waitForTimeout(500);
await p.evaluate(()=>{const s=JSON.parse(localStorage.getItem('passaporte-quiz-v4')||'{}');s.runs=s.runs||{};s.runs['caderno-6']={i:3,ans:[]};s.best=s.best||{};s.best['caderno-6|easy']=150;s.cur='caderno-6';localStorage.setItem('passaporte-quiz-v4',JSON.stringify(s))});
await p.reload();await p.waitForTimeout(500);
for(const t of ['livro','caderno','palavras','verbos'])await p.click(`[data-book="${t}"]`);
console.log(await p.locator('.vgrid .lcard, .vgrid > *').count(), errs);
await p.screenshot({path:'/tmp/claude-0/cad7.png',fullPage:true});
await p.click('[data-book="caderno"]');await p.screenshot({path:'/tmp/claude-0/cad7.png',fullPage:true});await b.close()})();
