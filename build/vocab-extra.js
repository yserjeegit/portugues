/* ===== shared session runner (used by Palavras: Números / Teste, Verbos: Teste) ===== */
const ACC=["á","à","â","ã","é","ê","í","ó","ô","õ","ú","ç"];
const accentKeys=()=>`<div class="keys"><span class="lbl">Accents</span>${ACC.map(c=>`<button class="key" type="button" data-c="${c}">${c}</button>`).join("")}</div>`;
function bindKeys(root,inp){root.querySelectorAll(".key").forEach(b=>b.onclick=()=>{const i=typeof inp==="function"?inp():inp;if(!i||i.disabled)return;const s=i.selectionStart??i.value.length,e=i.selectionEnd??s;i.value=i.value.slice(0,s)+b.dataset.c+i.value.slice(e);i.focus();i.setSelectionRange(s+1,s+1)})}
const KIND={type:"Type",mc:"Choose",tiles:"Build",listen:"Listen"};
// item: {kind:"type"|"mc"|"tiles"|"listen", label, prompt(html), accept[] | options[]+correct | tiles[]+answer, show, say, explain, onResult(ok)}
function runSession(g,items,title,again){
  let i=0,ok=0,streak=0,best=0;
  const typedShare=Math.round(items.filter(x=>x.kind==="type"||x.kind==="listen").length/items.length*100);
  function draw(){
    if(i>=items.length){g.innerHTML=`<div class="gcard done"><h2>${ok} / ${items.length}</h2><p>Best streak: ${best}</p><button class="btn" id="re">New set</button></div>`;$("#re").onclick=again;refreshDecks&&refreshDecks();typeof refreshVerbChips==="function"&&refreshVerbChips();return}
    const it=items[i];let body="";
    if(it.kind==="type"||it.kind==="listen")body=`${it.kind==="listen"?`<button class="btn ghost" id="play" type="button">${SPK} Play again</button>`:""}<input id="sin" class="sin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" inputmode="${it.numeric?"numeric":"text"}" placeholder="${esc(it.ph||"Type here")}">${it.numeric?"":accentKeys()}<div class="actions"><span></span><button class="btn" id="schk">Check</button></div>`;
    else if(it.kind==="mc")body=`<div class="tiles">${it.options.map((o,k)=>`<button class="tile" data-k="${k}">${esc(o)}</button>`).join("")}</div>`;
    else body=`<div class="built" id="built"><span class="hint">Tap the words in order</span></div><div class="tiles tw">${it.tiles.map((t,k)=>`<button class="tile tw" data-k="${k}">${esc(t)}</button>`).join("")}</div><div class="actions"><button class="btn ghost sm" id="undo">Undo</button><button class="btn" id="schk" disabled>Check</button></div>`;
    g.innerHTML=`<div class="cardtop"><span class="hint">${esc(title)} · ${i+1} / ${items.length} · <b class="okc">${ok}</b> correct · streak <b>${streak}</b></span><span class="hint">${typedShare}% typed</span></div>
      <div class="gcard sentc" id="sc"><span class="tl">${KIND[it.kind]} · ${esc(it.label)}</span><div class="sent">${it.prompt}</div>${body}<div id="sfb"></div></div>`;
    const finish=(good,given)=>{
      const sc=$("#sc");sc.classList.remove("ok","no");void sc.offsetWidth;sc.classList.add(good?"ok":"no");
      if(good){ok++;streak++;best=Math.max(best,streak)}else streak=0;it.onResult&&it.onResult(good);
      if(it.say)speak(it.say);
      const near=!good&&given&&it.accept&&it.accept.map(strip).includes(strip(vnorm(given)));
      $("#sfb").innerHTML=`<p class="${good?"okt":"badt"}"><b>${good?"Correct!":near?"Almost: check the accents.":"Not quite."}</b> ${good?"":`Answer: <b>${esc(it.show)}</b>`} ${it.say?spkBtn(it.say):""}</p>${it.explain?`<p class="hint">${it.explain}</p>`:""}<div class="actions"><span></span><button class="btn" id="snx">${i+1<items.length?"Next →":"Finish"}</button></div>`;
      g.querySelectorAll(".tile").forEach(t=>t.disabled=true);$("#snx").onclick=()=>{i++;draw()};$("#snx").focus();
    };
    if(it.kind==="type"||it.kind==="listen"){const inp=$("#sin");inp.focus();bindKeys(g,inp);
      if(it.kind==="listen"){const p=()=>speak(it.say);$("#play").onclick=p;setTimeout(p,250)}
      const chk=()=>{if(!inp.value.trim()||inp.disabled)return;inp.disabled=true;$("#schk").remove();finish(it.accept.includes(vnorm(inp.value)),inp.value)};
      $("#schk").onclick=chk;inp.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();chk()}}}
    else if(it.kind==="mc")g.querySelectorAll(".tile").forEach(t=>t.onclick=()=>{const k=+t.dataset.k,good=k===it.correct;t.classList.add(good?"right":"wrong");if(!good)g.querySelector(`.tile[data-k="${it.correct}"]`).classList.add("right");finish(good)});
    else{const picked=[];const built=$("#built");
      const redraw=()=>{built.innerHTML=picked.length?picked.map(k=>`<span class="bw">${esc(it.tiles[k])}</span>`).join(" "):`<span class="hint">Tap the words in order</span>`;$("#schk").disabled=!picked.length;g.querySelectorAll(".tile.tw").forEach(t=>t.classList.toggle("used",picked.includes(+t.dataset.k)))};
      g.querySelectorAll(".tile.tw").forEach(t=>t.onclick=()=>{const k=+t.dataset.k;if(picked.includes(k))return;picked.push(k);redraw()});
      $("#undo").onclick=()=>{picked.pop();redraw()};
      $("#schk").onclick=()=>{const s=picked.map(k=>it.tiles[k]).join(" ");$("#undo").remove();$("#schk").remove();finish(vnorm(s)===vnorm(it.answer),s)}}
  }
  draw();
}

/* ===== Números ===== */
const NU=["zero","um","dois","três","quatro","cinco","seis","sete","oito","nove","dez","onze","doze","treze","catorze","quinze","dezasseis","dezassete","dezoito","dezanove"];
const NT=["","","vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta","noventa"];
const NH=["","cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos"];
const numW=n=>{if(n===1000)return"mil";if(n===100)return"cem";const p=[];if(n>=100){p.push(NH[Math.floor(n/100)]);n%=100}if(n>0){if(n<20)p.push(NU[n]);else{p.push(NT[Math.floor(n/10)]);if(n%10)p.push(NU[n%10])}}return p.join(" e ")||"zero"};
const NRANGES=[["a","0–20",0,20],["b","21–100",21,100],["c","101–1000",101,1000],["all","Mix",0,1000]];
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
function numTip(n){if(n<=20)return "0–19 have their own words. European spelling: dezasseis, dezassete, dezanove.";if(n===100)return "Exactly 100 is <i>cem</i>; 101–199 use <i>cento e…</i>.";if(n===1000)return "1000 = <i>mil</i>.";return "Join every part with <b>e</b>: hundreds <i>e</i> tens <i>e</i> units. Irregular hundreds: duzentos, trezentos, quinhentos.";}
function gNumbers(g){
  const v=VS(),r=v.nrange||"all";
  g.innerHTML=`<div class="cardtop"><span class="hint">Range</span><span class="seg2">${NRANGES.map(([id,l])=>`<button class="btn ${r===id?"":"ghost"} sm" data-nr="${id}">${l}</button>`).join("")}</span></div><div id="ng"></div>`;
  g.querySelectorAll("[data-nr]").forEach(b=>b.onclick=()=>{v.nrange=b.dataset.nr;save();gNumbers(g)});
  const [, ,lo,hi]=NRANGES.find(x=>x[0]===r);const canSay=typeof speechSynthesis!=="undefined";
  const used=new Set(),pickN=()=>{let n,k=0;do{n=rnd(lo,hi);if(r==="c"&&Math.random()<.25)n=rnd(1,9)*100+(Math.random()<.5?0:rnd(1,99))}while(used.has(n)&&k++<50);used.add(n);return n};
  const kinds=["w","w","w","d","d",canSay?"l":"w","b","b"],items=[];
  for(let k=0;k<15;k++){const n=pickN(),w=numW(n),kd=kinds[k%kinds.length];
    const base={say:w,explain:`${n} = <b>${w}</b>. ${numTip(n)}`,onResult:ok=>{const card=VOCAB.find(x=>x.t==="num"&&x.pt===w);if(card)mark(card,ok)}};
    if(kd==="w")items.push({...base,kind:"type",label:"write in words",prompt:`<span class="numbig">${n}</span>`,accept:[vnorm(w)],show:w,ph:"por extenso"});
    else if(kd==="d")items.push({...base,kind:"type",numeric:true,label:"write the digits",prompt:`<span class="numw">${w}</span>`,accept:[String(n)],show:String(n),ph:"0–1000"});
    else if(kd==="l")items.push({...base,kind:"listen",label:"write what you hear",prompt:`<span class="hint">Listen and type the number, in digits or in words.</span>`,accept:[String(n),vnorm(w)],show:`${n} (${w})`,ph:"e.g. 921 or novecentos e vinte e um"});
    else{const parts=w.split(" ");const near=numW(Math.min(1000,Math.max(0,n+(Math.random()<.5?rnd(1,9):rnd(10,90))*(Math.random()<.5?1:-1)))).split(" ").filter(p=>p!=="e"&&!parts.includes(p));
      const tiles=shuffle([...parts,...near.slice(0,2)]);items.push({...base,kind:"tiles",label:"build the number",prompt:`<span class="numbig">${n}</span>`,tiles,answer:w,show:w})}}
  runSession($("#ng"),shuffle(items),"Números "+NRANGES.find(x=>x[0]===r)[1],()=>gNumbers(g));
}

/* ===== Palavras · Teste misto (40% typed) ===== */
function gTest(g,P){
  if(P.length<6){g.innerHTML=`<p class="hint">Select units with at least 6 words.</p>`;return}
  const words=shuffle(P).slice(0,15),items=[];
  words.forEach((w,k)=>{
    const others=n=>shuffle(P.filter(x=>x.en!==w.en)).slice(0,n);
    const base={say:w.pt.split(" / ")[0],explain:[w.ex,w.note].filter(Boolean).map(esc).join(" · "),onResult:ok=>mark(w,ok)};
    if(k<6)items.push({...base,kind:"type",label:tagLabel(w.t)||"word",prompt:`<span class="en">${esc(w.en)}</span>`,accept:[...new Set(VOCAB.filter(x=>x.en===w.en).flatMap(vAccept))],show:w.pt,ph:"em português"});
    else if(k<11){const o=shuffle([w,...others(3)]);items.push({...base,kind:"mc",label:"what does it mean?",prompt:esc(w.pt),options:o.map(x=>x.en),correct:o.indexOf(w),show:w.en})}
    else{const o=shuffle([w,...others(3)]);items.push({...base,kind:"mc",label:"how do you say it?",prompt:`<span class="en">${esc(w.en)}</span>`,options:o.map(x=>x.pt),correct:o.indexOf(w),show:w.pt})}
  });
  runSession(g,shuffle(items),"Teste",()=>gTest(g,shuffle(pool())));
}
