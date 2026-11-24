const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.route(/fonts/,r=>r.abort());await p.goto('file:///home/claude/passaporte-quiz.html');await p.waitForTimeout(700);
await p.screenshot({path:'/tmp/claude-0/v6-land.png',fullPage:true});
await p.click('[data-book="livro"]');await p.screenshot({path:'/tmp/claude-0/v6-livro.png',fullPage:true});
await p.click('[data-book="caderno"]');await p.screenshot({path:'/tmp/claude-0/v6-cad.png',fullPage:true});
await p.click('[data-book="palavras"]');await p.screenshot({path:'/tmp/claude-0/v6-pal.png',fullPage:true});
for(const m of ['cards','match','type','cloud','num','test']){await p.click(`[data-mode="${m}"]`);await p.waitForTimeout(200)}
await p.evaluate(()=>{VS().decks=VDECKS.map(d=>d.id);save()});await p.click('[data-mode="test"]');for(let k=0;k<15;k++){if(await p.$('#sin')){await p.fill('#sin','x');await p.click('#schk')}else{await p.click('.tile >> nth=0')}await p.click('#snx')}
await p.click('[data-book="verbos"]');await p.screenshot({path:'/tmp/claude-0/v6-verb.png',fullPage:true});
await p.evaluate(()=>{VBS().sel=VERBS.map(V=>V.v);save()});for(const m of ['table','link','choose','write','who','text','test']){await p.click(`[data-vmode="${m}"]`);await p.waitForTimeout(200)}
await p.click('[data-vmode="text"]');await p.click('#tHard');await p.click('#tnext');
await p.click('[data-vmode="test"]');for(let k=0;k<15;k++){if(await p.$('#sin')){await p.fill('#sin','x');await p.click('#schk')}else{await p.click('.tile >> nth=0')}await p.click('#snx')}
console.log(await p.textContent('.gcard h2'));console.log(errs);await b.close()})();
