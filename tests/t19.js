const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:860},deviceScaleFactor:2});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.setDefaultTimeout(5000);
await p.route(/fonts/,r=>r.abort());await p.goto('file:///home/claude/passaporte-quiz.html');await p.waitForTimeout(500);
await p.click('[data-book="livro"]');await p.click('.vgrid button.btn');await p.waitForTimeout(300);
await p.screenshot({path:'/tmp/claude-0/h1.png',clip:{x:0,y:400,width:400,height:460}});
await p.goto('file:///home/claude/passaporte-quiz.html');await p.waitForTimeout(400);await p.click('[data-book="verbos"]');await p.click('[data-vmode="text"]');await p.waitForTimeout(300);
await p.locator('.gin').first().focus().catch(()=>{});await p.screenshot({path:'/tmp/claude-0/h2.png'});
console.log(errs);await b.close()})();
