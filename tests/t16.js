const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.route(/fonts/,r=>r.abort());await p.goto('file:///home/claude/passaporte-quiz.html');
await p.click('[data-book="livro"]');await p.screenshot({path:'/tmp/claude-0/e-sec.png',fullPage:true});
await p.click('[data-start="5"]');let shots={text:0,mc:0,multi:0};
for(let i=0;i<50;i++){const t=await p.evaluate(()=>curQ().q.type);
  const canHint=await p.$('#hintb:not([disabled])');
  if(canHint&&!shots[t]){await p.click('#hintb');shots[t]=1;await p.screenshot({path:`/tmp/claude-0/e-hint-${t}.png`,fullPage:true})}
  if(t==='text'){await p.fill('#ans','xx');await p.click('#check')}
  else if(t==='mc'){await p.click('.opt:not([disabled]) >> nth=0')}
  else{await p.click('.opt >> nth=0');await p.click('#check')}
  if(t==='text'&&!shots.wrongText){shots.wrongText=1;await p.screenshot({path:'/tmp/claude-0/e-wrong.png',fullPage:true})}
  await p.click('#next')}
console.log('easy',await p.textContent('.visa .big'),await p.evaluate(()=>run().hints));
await p.click('#home');await p.click('[data-diff="hard"]');await p.click('[data-start="0"]');
await p.screenshot({path:'/tmp/claude-0/e-hard.png'});console.log('keys in hard:',await p.$$eval('.key',x=>x.length),'hintbtn:',!!await p.$('#hintb'));
await p.goto('file:///home/claude/passaporte-quiz.html');await p.click('[data-book="verbos"]');await p.click('[data-vmode="text"]');await p.click('#tHard');
await p.focus('.tvc');await p.screenshot({path:'/tmp/claude-0/e-tip.png'});
console.log(errs);await b.close()})();
