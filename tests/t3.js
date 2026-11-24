const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:400,height:900}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.route(/fonts/,r=>r.abort());
await p.goto('file:///home/claude/passaporte-quiz.html');
for(const book of ['caderno','livro']){
 await p.click(`[data-book="${book}"]`);
 if(book==='caderno') await p.screenshot({path:'/tmp/claude-0/home-c.png',fullPage:true});
 const nv=await p.evaluate(()=>VARS().length);
 for(let v=0;v<nv;v++){
  await p.click(`[data-start="${v}"]`);
  for(let i=0;i<50;i++){
   const info=await p.evaluate(()=>{const {k,q}=curQ();return {type:q.type,opt:run().opt[k],nRight:q.nRight,acc:q.accept&&q.accept[0]}});
   if(info.type==='text'){await p.fill('#ans',info.acc);await p.click('#check')}
   else if(info.type==='mc'){await p.click(`.opt >> nth=${info.opt.indexOf(0)}`)}
   else {const pos=info.opt.map((o,x)=>[o,x]).filter(([o])=>o<info.nRight).map(x=>x[1]);for(const x of pos) await p.click(`.opt >> nth=${x}`);await p.click('#check')}
   if(book==='caderno'&&v==1&&i==3) await p.screenshot({path:'/tmp/claude-0/cq.png',fullPage:true});
   await p.click('#next');
  }
  console.log(book,'V'+(v+1),await p.textContent('.visa .big'));
  await p.click('#home');
 }
}
console.log(errs);await b.close()})();
