const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const errs=[];
for(const w of [400,1200]){const p=await b.newPage({viewport:{width:w,height:900}});p.on('pageerror',e=>errs.push(e.message));p.setDefaultTimeout(5000);
await p.route(/fonts/,r=>r.abort());await p.goto('file:///home/claude/passaporte-quiz.html');await p.waitForTimeout(600);
await p.screenshot({path:`/tmp/claude-0/land${w}.png`,fullPage:true});
await p.click('[data-book="livro"]');await p.click('.mtog');console.log(await p.evaluate(()=>S.diff));await p.screenshot({path:`/tmp/claude-0/tog${w}.png`});await p.close()}
console.log(errs);await b.close()})();
