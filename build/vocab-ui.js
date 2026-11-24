/* ================= PALAVRAS (vocabulary games) ================= */
const VS=()=>{const v=S.vocab||(S.vocab={decks:["u14"],mode:"cards",dir:"pt",stats:{}});
  if(!v.mig6){const st={};Object.entries(v.stats||{}).forEach(([k,x])=>{const n=k.includes("|")?k.split("|").slice(1).join("|"):k;st[n]=x});v.stats=st;v.decks=(v.decks||[]).filter(d=>VDECKS.some(x=>x.id===d));if(!v.decks.length)v.decks=["u14"];v.mig6=1}
  if(!v.units||!v.units.length)v.units=["u16"];
  if(v.mode==="cloud"||v.mode==="num")v.mode="cards";
  return v};
const VUNIT=d=>{const x=VDECKS.find(k=>k.id===d);return x&&x.unit?String(x.unit):"u16"};
const VUNITS=[{id:"u16",n:"Units 1–6",t:"All words so far"},...[7,8,9,10,11,12,13,14].map(n=>{const d=VDECKS.find(k=>k.unit===n);return {id:String(n),n:"Unit "+n,t:d?d.name.replace(/^Unidade \d+ · /,""):""}})];
const unitWords=u=>{const seen=new Set();return VOCAB.filter(w=>VUNIT(w.d)===u&&!seen.has(w.pt)&&seen.add(w.pt))};
const wkey=w=>w.pt;
const isNoun=w=>w.t&&w.t.startsWith("n-");
const bare=pt=>pt.replace(/^\((a|o)\)\s*/,"").replace(/^(o|a|os|as)\s+/,"");
const vnorm=t=>norm(String(t).replace(/[…()]/g," ").replace(/\s*\/\s*/g," / "));
const vAccept=w=>{const alts=w.pt.split(" / ");const out=[w.pt];alts.forEach(a=>{out.push(a,bare(a),a.replace(/^\((a|o)\)\s*/,"$1 "))});
  if(alts.length>1)out.push(alts.map(bare).join(" / "),alts.slice().reverse().join(" / "));return [...new Set(out.map(vnorm))]};
const tagLabel=t=>({"n-m":"noun · masculine","n-f":"noun · feminine","n-mp":"noun · masculine plural","n-fp":"noun · feminine plural","v-ar":"verb · -ar","v-er":"verb · -er","v-ir":"verb · -ir","v-irr":"verb · irregular",adj:"nationality / adjective",color:"colour",ph:"phrase",adv:"word",num:"number",ord:"ordinal number",pos:"possessive / demonstrative",advl:"adverb of place",day:"day of the week",month:"month",country:"country",city:"city"}[t]||"");
function pool(){const seen=new Set(),u=VS().units;return VOCAB.filter(w=>u.includes(VUNIT(w.d))&&!seen.has(w.pt)&&seen.add(w.pt))}
function mark(w,ok){const st=VS().stats,k=wkey(w),s=st[k]||(st[k]={r:0,w:0,s:0});if(ok){s.r++;s.s++}else{s.w++;s.s=0}save()}
const learned=w=>{const s=VS().stats[wkey(w)];return !!(s&&s.s>=2)};
let ptVoice=null;
function loadVoice(){try{const v=speechSynthesis.getVoices();ptVoice=v.find(x=>/pt[-_]PT/i.test(x.lang))||v.find(x=>/^pt/i.test(x.lang))||null}catch(e){}}
try{loadVoice();speechSynthesis.onvoiceschanged=loadVoice}catch(e){}
function speak(t){if(typeof verbsMuted==="function"&&verbsMuted())return;try{const u=new SpeechSynthesisUtterance(t.replace(/\s\/\s.*$/,"").replace(/[()]/g,""));u.lang="pt-PT";if(ptVoice)u.voice=ptVoice;u.rate=.9;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
const SPK=`<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const spkBtn=t=>`<button class="spk" type="button" data-say="${esc(t)}" aria-label="Listen">${SPK}</button>`;
let stopGame=null;
const MODES=[["cards","Cartões","Flip and swipe"],["match","Arrastar","Drag the meaning"],["type","Escrever","Type the word"],["test","Teste","Mixed · 40% typed"]];

function renderVocab(){
  if(stopGame){stopGame();stopGame=null}
  const v=VS(),P=pool();
  const U=VUNITS,all=v.units.length===U.length;
  app.innerHTML=tabsHTML()+`<section class="intro"><h1>Palavras</h1>
    <p>Learn the words from the units, the workbook and the verb worksheet. Pick one or more units, then a game. A word counts as learned after two correct answers in a row.</p></section>
    <details class="dwrap" id="dw" ${v.open===false?"":"open"}><summary><b>Units</b> <span class="newb">New</span> · ${all?"all":U.filter(u=>v.units.includes(u.id)).map(u=>u.n).join(", ")} · ${P.length} words</summary>
    <div class="decks udecks">${U.map(u=>{const ws=unitWords(u.id),l=ws.filter(learned).length,on=v.units.includes(u.id);
      return `<button class="deck ${on?"on":""} ${u.id!=="u16"?"isu5":""}" data-vunit="${u.id}" aria-pressed="${on}">${u.id!=="u16"?`<span class="u5b nb">New</span>`:""}<span class="dn">${u.n}</span><span class="ds">${esc(u.t)} · ${l}/${ws.length}</span><span class="db"><i style="width:${ws.length?Math.round(l/ws.length*100):0}%"></i></span></button>`}).join("")}</div>
    <div class="deckbar"><span class="hint"><b>${P.length}</b> words selected</span><button class="btn ghost sm" id="dAll">${all?"Clear":"Select all"}</button></div></details>
    <div class="modes" role="tablist">${MODES.map(([id,n,s])=>`<button class="mode ${v.mode===id?"on":""}" data-mode="${id}" role="tab" aria-selected="${v.mode===id}"><b>${n}</b><span>${s}</span></button>`).join("")}</div>
    <div id="game"></div>`;
  app.querySelectorAll("[data-book]").forEach(b=>b.onclick=()=>switchBook(b.dataset.book));
  app.querySelectorAll("[data-vunit]").forEach(b=>b.onclick=()=>{const id=b.dataset.vunit,d=v.units;const i=d.indexOf(id);if(i<0)d.push(id);else if(d.length>1)d.splice(i,1);v.units=U.map(u=>u.id).filter(x=>d.includes(x));save();renderVocab()});
  $("#dw").ontoggle=()=>{v.open=$("#dw").open;save()};
  $("#dAll").onclick=()=>{v.units=all?["u16"]:U.map(u=>u.id);save();renderVocab()};
  app.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{v.mode=b.dataset.mode;v.open=false;save();renderVocab();setTimeout(()=>{const m=document.querySelector(".modes");if(m)m.scrollIntoView({block:"start",behavior:"smooth"})},30)});
  const g=$("#game");
  g.addEventListener("click",e=>{const s=e.target.closest("[data-say]");if(s){e.stopPropagation();speak(s.dataset.say)}});
  ({cards:gCards,match:gMatch,type:gType,test:gTest}[v.mode]||gCards)(g,shuffle(P));
}
function refreshDecks(){app.querySelectorAll("[data-vunit]").forEach(b=>{const ws=unitWords(b.dataset.vunit),l=ws.filter(learned).length;b.querySelector(".ds").textContent=b.querySelector(".ds").textContent.replace(/\d+\/\d+$/,l+"/"+ws.length);b.querySelector(".db i").style.width=(ws.length?Math.round(l/ws.length*100):0)+"%"})}

/* ---------- 1. Cartões: flip + swipe ---------- */
function gCards(g,P){
  const v=VS();let q=P.slice(),known=0,again=0,total=P.length;
  function draw(){
    if(!q.length){g.innerHTML=`<div class="gcard done"><h2>Deck finished</h2><p>${known} known · ${again} to repeat</p><button class="btn" id="re">Shuffle and start again</button></div>`;$("#re").onclick=()=>gCards(g,shuffle(pool()));refreshDecks();return}
    const w=q[0],front=v.dir==="pt";
    g.innerHTML=`<div class="cardtop"><span class="hint">${total-q.length+1} / ${total} · <b class="okc">${known}</b> known · <b class="badc">${again}</b> again</span>
      <button class="btn ghost sm" id="dir">${front?"PT → EN":"EN → PT"}</button></div>
      <div class="stage"><div class="flash" id="fl" tabindex="0" aria-label="Flashcard, tap to flip">
        <div class="face front">${front?`<span class="big">${esc(w.pt)}</span><span class="tl">${tagLabel(w.t)}</span>${spkBtn(w.pt)}`:`<span class="big en">${esc(w.en)}</span><span class="tl">${tagLabel(w.t)}</span>`}<span class="tap">tap to flip</span></div>
        <div class="face back">${front?`<span class="big en">${esc(w.en)}</span>`:`<span class="big">${esc(w.pt)}</span>${spkBtn(w.pt)}`}${w.ex?`<span class="ex">${esc(w.ex)}</span>`:""}${w.note?`<span class="note">${esc(w.note)}</span>`:""}</div>
      </div><div class="swipe-l">Again</div><div class="swipe-r">Know it</div></div>
      <div class="cardbtns"><button class="btn ghost" id="no">← Again</button><button class="btn ghost" id="flip">Flip</button><button class="btn" id="yes">Know it →</button></div>
      <p class="hint center">Swipe the card right if you know it, left to see it again.</p>`;
    const fl=$("#fl");let flipped=false;
    const flip=()=>{flipped=!flipped;fl.classList.toggle("flipped",flipped);if(flipped&&!front)speak(w.pt)};
    const out=ok=>{fl.style.transition="transform .35s ease, opacity .35s";fl.style.transform=`translateX(${ok?520:-520}px) rotate(${ok?24:-24}deg)`;fl.style.opacity="0";
      mark(w,ok);q.shift();if(ok)known++;else{again++;q.splice(Math.min(q.length,4),0,w)}setTimeout(draw,300)};
    $("#flip").onclick=flip;$("#yes").onclick=()=>out(true);$("#no").onclick=()=>out(false);
    $("#dir").onclick=()=>{v.dir=front?"en":"pt";save();draw()};
    fl.onkeydown=e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();flip()}if(e.key==="ArrowRight")out(true);if(e.key==="ArrowLeft")out(false)};
    let sx=0,dx=0,down=false;
    fl.onpointerdown=e=>{if(e.target.closest("[data-say]"))return;down=true;sx=e.clientX;dx=0;fl.setPointerCapture(e.pointerId);fl.style.transition="none"};
    fl.onpointermove=e=>{if(!down)return;dx=e.clientX-sx;fl.style.transform=`translateX(${dx}px) rotate(${dx/18}deg)`;g.querySelector(".swipe-r").style.opacity=Math.max(0,dx/120);g.querySelector(".swipe-l").style.opacity=Math.max(0,-dx/120)};
    fl.onpointerup=fl.onpointercancel=()=>{if(!down)return;down=false;
      if(Math.abs(dx)>100)return out(dx>0);
      fl.style.transition="transform .25s";fl.style.transform="";g.querySelector(".swipe-r").style.opacity=0;g.querySelector(".swipe-l").style.opacity=0;
      if(Math.abs(dx)<6)flip()};
  }
  draw();
}

/* ---------- 2. Arrastar: drag meanings onto words ---------- */
function gMatch(g,P){
  let round=0,score=0,mist=0;const N=5;
  function next(){
    const used=new Set(),items=[];for(const w of shuffle(pool())){if(items.length>=N)break;if(!used.has(w.en)){used.add(w.en);items.push(w)}}
    round++;let left=items.length,sel=null;
    g.innerHTML=`<div class="cardtop"><span class="hint">Round ${round} · <b class="okc">${score}</b> matched · <b class="badc">${mist}</b> mistakes</span></div>
      <p class="hint">Drag each English meaning onto its Portuguese word (or tap a meaning, then tap the word).</p>
      <div class="match"><div class="slots">${items.map((w,i)=>`<div class="slot" data-i="${i}"><span class="sp">${esc(w.pt)}</span><span class="drop">drop here</span></div>`).join("")}</div>
      <div class="chips2">${shuffle(items.map((w,i)=>i)).map(i=>`<div class="mchip" data-i="${i}" tabindex="0">${esc(items[i].en)}</div>`).join("")}</div></div>`;
    const tryDrop=(chip,slot)=>{
      const i=+chip.dataset.i,w=items[i];
      if(slot&&+slot.dataset.i===i){slot.classList.add("ok","pop");slot.querySelector(".drop").textContent=w.en;chip.remove();mark(w,true);score++;speak(w.pt);
        if(--left===0){refreshDecks();setTimeout(()=>{g.querySelector(".match").insertAdjacentHTML("afterend",`<div class="actions"><span class="hint">Round complete.</span><button class="btn" id="nr">Next round →</button></div>`);$("#nr").onclick=next;$("#nr").focus()},250)}}
      else{chip.style.transition="transform .3s";chip.style.transform="";chip.classList.remove("shake");void chip.offsetWidth;chip.classList.add("shake");
        if(slot){slot.classList.remove("bad");void slot.offsetWidth;slot.classList.add("bad");mark(items[+slot.dataset.i],false);mist++;}}
      g.querySelector(".hint b.okc").textContent=score;g.querySelector(".hint b.badc").textContent=mist;
    };
    g.querySelectorAll(".mchip").forEach(chip=>{
      let sx,sy,dx=0,dy=0,down=false;
      chip.onpointerdown=e=>{down=true;sx=e.clientX;sy=e.clientY;dx=dy=0;chip.setPointerCapture(e.pointerId);chip.style.transition="none";chip.classList.add("drag")};
      chip.onpointermove=e=>{if(!down)return;dx=e.clientX-sx;dy=e.clientY-sy;chip.style.transform=`translate(${dx}px,${dy}px) scale(1.05)`;
        g.querySelectorAll(".slot").forEach(s=>s.classList.remove("over"));chip.style.pointerEvents="none";const el=document.elementFromPoint(e.clientX,e.clientY);chip.style.pointerEvents="";const s=el&&el.closest(".slot:not(.ok)");if(s)s.classList.add("over")};
      chip.onpointerup=e=>{if(!down)return;down=false;chip.classList.remove("drag");g.querySelectorAll(".slot").forEach(s=>s.classList.remove("over"));
        if(Math.abs(dx)+Math.abs(dy)<6){g.querySelectorAll(".mchip").forEach(c=>c.classList.remove("sel"));chip.style.transform="";sel=chip;chip.classList.add("sel");return}
        chip.style.pointerEvents="none";const el=document.elementFromPoint(e.clientX,e.clientY);chip.style.pointerEvents="";tryDrop(chip,el&&el.closest(".slot:not(.ok)"))};
      chip.onpointercancel=()=>{down=false;chip.style.transform=""};
      chip.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();g.querySelectorAll(".mchip").forEach(c=>c.classList.remove("sel"));sel=chip;chip.classList.add("sel")}};
    });
    g.querySelectorAll(".slot").forEach(s=>{s.tabIndex=0;const act=()=>{if(sel&&sel.isConnected&&!s.classList.contains("ok")){const c=sel;sel=null;c.classList.remove("sel");tryDrop(c,s)}};s.onclick=act;s.onkeydown=e=>{if(e.key==="Enter")act()}});
  }
  next();
}

/* ---------- 3. Escrever: type the Portuguese ---------- */
function gType(g,P){
  let q=P.slice(),ok=0,bad=0,streak=0;
  function draw(){
    if(!q.length){g.innerHTML=`<div class="gcard done"><h2>All done</h2><p>${ok} correct · ${bad} mistakes</p><button class="btn" id="re">Start again</button></div>`;$("#re").onclick=()=>gType(g,shuffle(pool()));refreshDecks();return}
    const w=q[0],acc=[...new Set(VOCAB.filter(x=>x.en===w.en).flatMap(vAccept))];let hints=0,answered=false;
    const target=w.pt.split(" / ")[0];
    g.innerHTML=`<div class="cardtop"><span class="hint"><b class="okc">${ok}</b> correct · <b class="badc">${bad}</b> mistakes · streak <b>${streak}</b> · ${q.length} left</span></div>
      <div class="gcard typec" id="tc"><span class="tl">${tagLabel(w.t)}${isNoun(w)?" · article optional":""}</span><span class="big en">${esc(w.en)}</span>
        <div class="reveal" id="rv" aria-live="polite">${target.replace(/[^\s\-\/!?.…()]/g,"_")}</div>
        <input id="tin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type in Portuguese">
        <div class="keys"><span class="lbl">Accents</span>${["á","à","â","ã","é","ê","í","ó","ô","õ","ú","ç"].map(c=>`<button class="key" type="button" data-c="${c}">${c}</button>`).join("")}</div>
        <div id="tfb"></div>
        <div class="actions"><button class="btn ghost sm" id="hint">Show a letter</button><button class="btn" id="tchk">Check</button></div></div>`;
    const inp=$("#tin");inp.focus();
    g.querySelectorAll(".key").forEach(b=>b.onclick=()=>{const s=inp.selectionStart??inp.value.length,e=inp.selectionEnd??s;inp.value=inp.value.slice(0,s)+b.dataset.c+inp.value.slice(e);inp.focus();inp.setSelectionRange(s+1,s+1)});
    $("#hint").onclick=()=>{hints++;let n=0;$("#rv").textContent=[...target].map(c=>/[\s\-\/!?.…()]/.test(c)?c:(n++<hints?c:"_")).join("")};
    const check=()=>{
      if(answered){q.shift();draw();return}
      const g2=vnorm(inp.value);if(!g2)return;answered=true;
      const good=acc.includes(g2),near=!good&&acc.map(strip).includes(strip(g2));
      const tc=$("#tc");tc.classList.remove("ok","no");void tc.offsetWidth;tc.classList.add(good?"ok":"no");
      if(good){ok++;streak++;mark(w,hints<2)}else{bad++;streak=0;mark(w,false);q.splice(Math.min(q.length,5),0,w)}
      $("#rv").textContent=w.pt;inp.disabled=true;speak(w.pt);
      $("#tfb").innerHTML=`<p class="${good?"okt":"badt"}"><b>${good?"Correct!":near?"Almost: check the accents.":"Not quite."}</b> ${esc(w.pt)} ${spkBtn(w.pt)}</p>${w.ex?`<p class="ex">${esc(w.ex)}</p>`:""}${w.note?`<p class="note">${esc(w.note)}</p>`:""}`;
      $("#tchk").textContent="Next →";$("#tchk").focus();$("#hint").disabled=true;
    };
    $("#tchk").onclick=check;inp.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();check()}};
    $("#tchk").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();check()}};
  }
  draw();
}

/* ---------- 4. Nuvem: catch the floating words ---------- */
function gCloud(g,P){
  const best=VS().best||{};
  g.innerHTML=`<div class="cloudmenu">
      <button class="cmode" data-cm="tr"><b>Catch the translation</b><span>An English word appears. Tap its Portuguese twin among the floating words.</span><span class="hint">Best: ${best.tr||0}</span></button>
      <button class="cmode" data-cm="cat"><b>Catch the category</b><span>Catch every word that fits: colours, -er verbs, feminine nouns… Uses all topics.</span><span class="hint">Best: ${best.cat||0}</span></button></div>`;
  g.querySelectorAll("[data-cm]").forEach(b=>b.onclick=()=>playCloud(g,b.dataset.cm));
}
function playCloud(g,mode){
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const P=mode==="tr"?pool():(()=>{const s=new Set();return VOCAB.filter(w=>!s.has(w.pt)&&s.add(w.pt))})();
  if(mode==="tr"&&P.length<6){g.innerHTML=`<p class="hint">Select units with at least 6 words.</p>`;return}
  let score=0,lives=3,time=60,combo=0,target=null,cat=null,need=0,bubbles=[],raf=0,tmr=0,over=false;
  g.innerHTML=`<div class="cloudhud"><span class="lives" id="lv"></span><span class="ctarget" id="ct"></span><span class="cscore"><b id="cs">0</b> pts · <b id="cti">60</b>s</span></div>
    <div class="cloud" id="cl"></div>`;
  const cl=$("#cl");
  const W=()=>cl.clientWidth,H=()=>cl.clientHeight;
  const hud=()=>{$("#lv").textContent="♥".repeat(lives)+"♡".repeat(3-lives);$("#cs").textContent=score;$("#cti").textContent=time};
  function spawn(w){
    const el=document.createElement("button");el.className="bub";el.type="button";const t0=w.pt.split(" / ")[0];el.textContent=mode==="cat"?bare(t0):t0;cl.appendChild(el);
    const bw=el.offsetWidth,bh=el.offsetHeight,sp=reduce?.25:(.5+Math.random()*.7);const a=Math.random()*Math.PI*2;
    let x=0,y=0;for(let k=0;k<30;k++){x=Math.random()*Math.max(1,W()-bw);y=Math.random()*Math.max(1,H()-bh);if(!bubbles.some(o=>!o.dead&&x<o.x+o.bw+6&&x+bw+6>o.x&&y<o.y+o.bh+6&&y+bh+6>o.y))break}
    const b={w,el,x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,bw,bh,dead:false};
    el.onclick=()=>hit(b);bubbles.push(b);return b;
  }
  function pickTarget(){const live=bubbles.filter(b=>!b.dead);target=live[Math.floor(Math.random()*live.length)];$("#ct").innerHTML=`Catch: <b>${esc(target.w.en)}</b>`}
  function newCat(){
    bubbles.forEach(b=>b.el.remove());bubbles=[];
    const opts=CATS.filter(c=>P.filter(c.f).length>=4&&c!==cat);cat=opts[Math.floor(Math.random()*opts.length)];
    const yes=shuffle(P.filter(cat.f)).slice(0,4),no=shuffle(P.filter(w=>!cat.f(w))).slice(0,5);need=yes.length;
    shuffle([...yes,...no]).forEach(spawn);$("#ct").innerHTML=`Catch <b>${cat.label}</b> · <span id="nd">${need}</span> left`;
  }
  function fresh(){const on=new Set(bubbles.filter(b=>!b.dead).map(b=>b.w.pt));const c=shuffle(P).find(w=>!on.has(w.pt));return c||P[0]}
  function hit(b){
    if(over||b.dead)return;
    const good=mode==="tr"?b===target:cat.f(b.w);
    if(good){b.dead=true;combo++;const add=10+Math.min(combo-1,5)*2;score+=add;b.el.classList.add("popped");b.el.insertAdjacentHTML("beforeend",`<span class="plus">+${add}</span>`);mark(b.w,true);speak(b.w.pt);
      setTimeout(()=>{b.el.remove();bubbles=bubbles.filter(x=>x!==b);
        if(mode==="tr"){spawn(fresh());pickTarget()}else if(--need<=0){score+=20;newCat()}else{const nd=$("#nd");if(nd)nd.textContent=need}hud()},280)}
    else{combo=0;lives--;b.el.classList.remove("wrongb");void b.el.offsetWidth;b.el.classList.add("wrongb");cl.classList.remove("hurt");void cl.offsetWidth;cl.classList.add("hurt");
      if(mode==="tr")mark(target.w,false);hud();if(lives<=0)end()}
    hud();
  }
  function loop(){
    const w=W(),h=H();
    bubbles.forEach(b=>{if(b.dead)return;b.x+=b.vx;b.y+=b.vy;if(b.x<0){b.x=0;b.vx=Math.abs(b.vx)}if(b.x>w-b.bw){b.x=w-b.bw;b.vx=-Math.abs(b.vx)}if(b.y<0){b.y=0;b.vy=Math.abs(b.vy)}if(b.y>h-b.bh){b.y=h-b.bh;b.vy=-Math.abs(b.vy)}b.el.style.transform=`translate(${b.x}px,${b.y}px)`});
    raf=requestAnimationFrame(loop);
  }
  function end(){
    if(over)return;over=true;cancelAnimationFrame(raf);clearInterval(tmr);
    const v=VS();v.best=v.best||{};const rec=score>(v.best[mode]||0);if(rec)v.best[mode]=score;save();refreshDecks();
    cl.insertAdjacentHTML("beforeend",`<div class="cover"><h2>${lives<=0?"Out of lives":"Time's up"}</h2><p class="bigscore">${score} pts</p>${rec?`<p class="okt"><b>New best!</b></p>`:`<p class="hint">Best: ${v.best[mode]}</p>`}<div class="row"><button class="btn" id="pa">Play again</button><button class="btn ghost" id="pm">Change game</button></div></div>`);
    $("#pa").onclick=()=>playCloud(g,mode);$("#pm").onclick=()=>gCloud(g,P);
  }
  if(mode==="tr"){shuffle(P).slice(0,8).forEach(spawn);pickTarget()}else newCat();
  hud();loop();
  tmr=setInterval(()=>{if(document.visibilityState!=="visible")return;time--;hud();if(time<=0)end()},1000);
  stopGame=()=>{over=true;cancelAnimationFrame(raf);clearInterval(tmr)};
}
