// Units 7–14 release: variant integrity for every unit selection, a full UI run, Palavras units, Verbos sound toggle
const {chromium}=require('playwright');const PAGE=process.argv[2]||'file://'+require('path').resolve(__dirname,'../index.html');const OUT=process.argv[3]||'/tmp/shots';
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:900}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.route(/fonts/,r=>r.abort());await p.goto(PAGE);
// 1. every single unit + some combos: 6 variants × 50 q × 200 pts, ≥30% typed, no duplicates in a variant, correct answer acceptable
const res=await p.evaluate(()=>{const out=[];const sels=[...GIDS.map(g=>[g]),["u16","7"],["7","8","9"],["13","14"],GIDS.slice()];
 sels.forEach(sel=>{const V=makeVariants(sel);V.forEach((v,i)=>{const pts=v.qs.reduce((s,q)=>s+q.pts,0),typed=v.qs.filter(q=>q.type==="text").length,uniq=new Set(v.qs.map(q=>q.prompt+q.ask+(q.img||""))).size;
   const bad=v.qs.filter(q=>!(q.pts>=1&&q.pts<=10)||(q.type==="text"&&!q.accept.length)).length;
   if(v.qs.length!==50||pts!==200||typed<15||bad)out.push({sel:sel.join("+"),v:i,n:v.qs.length,pts,typed,bad});
   if(i===0)out.push({sel:sel.join("+"),comp:JSON.stringify(v.comp),uniq,fill:v.fill,typed})})});return out});
res.forEach(x=>console.log(JSON.stringify(x)));
// 2. UI: Testes tab, select Unit 13 only, play variant 1 with correct answers
await p.click('[data-book="testes"]');await p.screenshot({path:OUT+'/testes.png',fullPage:true});
await p.click('[data-unit="13"]');await p.click('[data-unit="u16"]');
console.log('label',await p.textContent('.vcard .vsub'));
await p.click('[data-start="0"]');
for(let i=0;i<50;i++){
  const info=await p.evaluate(()=>{const {k,q}=curQ();return {type:q.type,opt:run().opt[k],nRight:q.nRight,acc:q.accept&&q.accept[0]}});
  if(info.type==='text'){await p.fill('#ans',info.acc);await p.click('#check')}
  else if(info.type==='mc'){await p.click(`.opt >> nth=${info.opt.indexOf(0)}`)}
  else {const pos=info.opt.map((o,x)=>[o,x]).filter(([o])=>o<info.nRight).map(x=>x[1]);for(const x of pos) await p.click(`.opt >> nth=${x}`);await p.click('#check')}
  if(i===1)await p.screenshot({path:OUT+'/q13.png',fullPage:true});
  await p.click('#next');
}
console.log('Unit 13 V1 score',await p.textContent('.visa .big'));await p.screenshot({path:OUT+'/result.png',fullPage:true});
await p.click('#home');
// in-progress run on another selection shows a Continue button
await p.click('[data-start="1"]');await p.click('#home');await p.click('[data-unit="7"]');await p.click('[data-unit="13"]');
console.log('resume buttons',await p.locator('[data-resume]').count());
// 3. Palavras
await p.click('[data-book="palavras"]');console.log('modes',await p.locator('[data-mode]').allTextContents());
await p.click('[data-vunit="9"]');console.log('summary',(await p.textContent('#dw summary')).replace(/\s+/g,' '));
for(const m of ['cards','match','type','test']){await p.click(`[data-mode="${m}"]`);await p.waitForTimeout(150)}
await p.screenshot({path:OUT+'/palavras.png',fullPage:true});
// 4. Verbos
await p.click('[data-book="verbos"]');console.log('verb groups',await p.locator('.vgroup .tl').count(),'newbtn',await p.locator('#vU5').count(),'chips',await p.locator('[data-verb]').count());
await p.click('[data-vmode="table"]');console.log('spk visible before',await p.locator('.spk').first().isVisible());
await p.click('#vmute');console.log('muted',await p.evaluate(()=>verbsMuted()),'spk visible after',await p.locator('.spk').first().isVisible());
await p.screenshot({path:OUT+'/verbos.png',fullPage:true});
for(const m of ['link','choose','write','who','text','test']){await p.click(`[data-vmode="${m}"]`);await p.waitForTimeout(120)}
await p.click('[data-book="palavras"]');console.log('palavras speak allowed',await p.evaluate(()=>!verbsMuted()));
await p.click('[data-book="home"]');await p.screenshot({path:OUT+'/home.png',fullPage:true});
await p.setViewportSize({width:1200,height:900});await p.click('[data-book="testes"]');await p.screenshot({path:OUT+'/testes-desktop.png',fullPage:true});
console.log('errors',errs);await b.close()})();
