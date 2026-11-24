/* ===== Verbos: more sentences, short texts, mixed test, falling-blocks game ===== */
const MOREC={
 ser:["do Japão.","de Marrocos.","dos Estados Unidos."],
 estar:["na rua agora.","no aeroporto.","de férias.","na aula de português."],
 ter:["aula de português hoje.","uma reunião às dez.","muito trabalho.","um cão."],
 ir:["à praia no domingo.","ao supermercado.","para o trabalho de metro.","de férias em agosto."],
 poder:["estudar à noite.","ficar mais um dia.","pagar com cartão."],
 fazer:["o pequeno-almoço.","natação às terças.","as compras ao sábado.","uma pausa."],
 ficar:["no Porto até domingo.","com os amigos.","aqui mais um dia."],
 falar:["com a professora.","ao telefone."],morar:["perto da praia.","num apartamento pequeno."],
 trabalhar:["numa fábrica.","de manhã.","muito."],estudar:["todos os dias.","para o teste."],
 gostar:["do Porto.","de futebol.","da comida portuguesa."],comer:["fruta todos os dias.","em casa ao jantar."],
 beber:["leite com café.","sumo de laranja."],viver:["em Portugal.","com os pais."],perceber:["o texto.","as instruções."],
 abrir:["a mala.","as janelas de manhã."],partir:["para o Brasil em agosto.","às sete."],decidir:["o jantar."],
 preferir:["o mar.","chá a café."],dormir:["pouco.","até tarde ao domingo."],sentir:["sono."]
};
VERBS.forEach(V=>{if(V.c&&MOREC[V.v])V.c.push(...MOREC[V.v])});

const B=(v,f)=>({v,f});
const TEXTS=[
 {t:"Eu e a minha família",p:["Eu ",B("chamar-se","chamo-me")," Ana e ",B("ser","sou")," da Ucrânia. Agora ",B("morar","moro")," em Lisboa com o meu irmão. Ele ",B("trabalhar","trabalha")," num escritório e eu ",B("estudar","estudo")," português. Nós ",B("gostar","gostamos")," muito da cidade."]},
 {t:"Um dia normal",p:["De manhã, eu ",B("beber","bebo")," café e ",B("comer","como")," pão com manteiga. Depois ",B("ir","vou")," para o trabalho de metro. Os meus colegas ",B("ser","são")," simpáticos. À noite, nós ",B("fazer","fazemos")," o jantar e eu ",B("dormir","durmo")," cedo."]},
 {t:"No fim de semana",p:["No sábado, a Rita e o João ",B("ir","vão")," ao cinema. Eu não ",B("poder","posso")," ir porque ",B("ter","tenho")," aula de português. No domingo, nós ",B("ficar","ficamos")," em casa e ",B("abrir","abrimos")," as janelas. E tu, o que ",B("fazer","fazes"),"?"]},
 {t:"No café",p:["— Bom dia! O que é que você ",B("beber","bebe"),"? — Eu ",B("preferir","prefiro")," um chá com limão. — E o senhor ",B("comer","come")," alguma coisa? — Não, obrigado. Nós ",B("estar","estamos")," com pressa."]},
 {t:"Onde estás?",p:["— Olá, Pedro! Onde ",B("estar","estás")," agora? — ",B("estar","Estou")," no Porto. Os meus pais ",B("viver","vivem")," aqui. — E quando ",B("partir","partes")," para Lisboa? — Nós ",B("partir","partimos")," amanhã de manhã."]},
 {t:"O Maxim",p:["O Maxim ",B("ser","é")," ucraniano. Ele ",B("falar","fala")," ucraniano, russo e um pouco de inglês. Agora ",B("estudar","estuda")," português porque ",B("morar","mora")," em Portugal. Os amigos dele ",B("perceber","percebem")," tudo, mas ele ainda não ",B("perceber","percebe")," tudo."]},
 {t:"A aula",p:["A professora ",B("abrir","abre")," a porta e os alunos ",B("entrar","entram")," na sala. Nós ",B("ter","temos")," aula às nove. A professora ",B("dividir","divide")," as tarefas e eu ",B("decidir","decido")," trabalhar com a Inês. — Professora, ",B("poder","pode")," repetir, por favor?"]},
 {t:"Planos para as férias",p:["Amanhã eu ",B("ir","vou")," ao Algarve. ",B("ficar","Fico")," num hotel três noites. A minha irmã não ",B("ir","vai")," porque ",B("ter","tem")," muito trabalho. Eu e o Rui ",B("fazer","fazemos")," a viagem de carro."]},
 {t:"Gostos diferentes",p:["Eu ",B("gostar","gosto")," de música, mas o meu irmão ",B("preferir","prefere")," desporto. Ele ",B("fazer","faz")," natação todas as semanas. Nós ",B("ser","somos")," muito diferentes! E tu, de que ",B("gostar","gostas"),"?"]},
 {t:"Hoje não estou bem",p:["Hoje eu não ",B("estar","estou")," bem. ",B("sentir","Sinto")," frio e ",B("ter","tenho")," dores de cabeça. Por isso, ",B("ficar","fico")," em casa e ",B("dormir","durmo")," muito. Os meus amigos ",B("poder","podem")," vir amanhã."]},
 {t:"Na cidade",p:["— Vocês ",B("morar","moram")," no centro? — Não, nós ",B("viver","vivemos")," em Sintra, mas ",B("trabalhar","trabalhamos")," em Lisboa. Todos os dias ",B("ir","vamos")," de comboio. A viagem ",B("ser","é")," bonita."]},
 {t:"Onde está a minha carteira?",u5:1,p:["— Ricardo, ",B("saber","sabes")," onde está a minha carteira? — Não ",B("saber","sei"),". Não está na tua mala? — Não. Eu só ",B("ter","tenho")," o telemóvel e as chaves. — Então eu ",B("ir","vou")," ao escritório e ",B("trazer","trago")," a tua carteira. — Obrigada! Tu ",B("ser","és")," um amigo!"]},
 {t:"No restaurante",isnew:1,p:["— Boa noite! O que é que vocês ",B("querer","querem")," beber? — Eu ",B("querer","quero")," uma água. A Rita ",B("pedir","pede")," um sumo de laranja. — E para comer? — Nós ",B("pedir","pedimos")," peixe. — Muito bem! Eu ",B("trazer","trago")," já o pão."]},
 {t:"Apresentações",p:["— Olá! Como te ",B("chamar-se","chamas"),"? — ",B("chamar-se","Chamo-me")," Sofia. E tu? — Eu ",B("ser","sou")," o Tiago. De onde ",B("ser","és"),"? — ",B("ser","Sou")," do Porto, mas ",B("estar","estou")," em Coimbra esta semana."]}
];
function trackForm(v,f){const V=vby(v);if(!V)return null;const i=V.f.indexOf(f.toLowerCase());return i<0?null:i}

const TEXTS_HARD=[
 {t:"Ao fim de semana",isnew:1,p:["Ao sábado, eu ",B("acordar","acordo")," tarde e ",B("ler","leio")," o jornal. À tarde, ",B("sair","saio")," com os amigos. Nós ",B("ver","vemos")," um filme ou ",B("ir","vamos")," à praia. Os meus pais ",B("vir","vêm")," jantar connosco ao domingo."]},
 {t:"A Sofia em Lisboa",p:["A Sofia ",B("ser","é")," brasileira, mas ",B("viver","vive")," em Lisboa há dois anos. Ela ",B("trabalhar","trabalha")," numa escola e ",B("ensinar","ensina")," inglês. Ao fim de semana, ",B("ir","vai")," à praia com os amigos e ",B("comer","come")," sardinhas."]},
 {t:"Uma conversa",p:["— Tu ",B("falar","falas")," inglês? — ",B("falar","Falo"),", mas não muito bem. ",B("perceber","Percebo")," quase tudo, mas ",B("ter","tenho")," dificuldade em falar. — Nós ",B("poder","podemos")," praticar juntos às sextas! E onde ",B("estudar","estudas"),"?"]},
 {t:"O sábado da família Costa",p:["Aos sábados, os Costa ",B("acordar","acordam")," tarde. O pai ",B("fazer","faz")," o pequeno-almoço e as crianças ",B("brincar","brincam")," no jardim. À tarde, eles ",B("ir","vão")," ao parque e ",B("ficar","ficam")," lá até às seis. À noite, a família ",B("jantar","janta")," em casa."]},
 {t:"No escritório",p:["Eu ",B("chegar","chego")," ao escritório às nove. Primeiro, ",B("abrir","abro")," o computador e ",B("responder","respondo")," aos emails. Os meus colegas ",B("beber","bebem")," café comigo. Ao meio-dia, nós ",B("almoçar","almoçamos")," juntos. Às seis, ",B("voltar","volto")," para casa."]},
 {t:"Mensagem para a Inês",p:["Olá, Inês! Hoje não ",B("poder","posso")," ir à aula porque ",B("estar","estou")," doente. ",B("ter","Tenho")," febre e ",B("sentir","sinto")," muito frio. ",B("ficar","Fico")," em casa e ",B("dormir","durmo")," um pouco. Tu ",B("ter","tens")," os apontamentos da aula? Beijinhos!"]},
 {t:"Viagem ao Porto",p:["Na sexta-feira, nós ",B("partir","partimos")," para o Porto de comboio. A viagem ",B("ser","é")," longa, mas bonita. Lá, ",B("ficar","ficamos")," num hotel perto do rio. Os meus pais ",B("preferir","preferem")," o centro, mas eu ",B("preferir","prefiro")," a Ribeira. No domingo, ",B("voltar","voltamos")," para Lisboa."]}
];
/* ---- Texto: fill every verb in a short text (with hints / harder: verbs listed in the title) ---- */
function vText(g){
  const st=VBS(),hard=st.thard===true,L=hard?TEXTS_HARD:TEXTS,key=hard?"tih":"ti";if(st[key]==null)st[key]=0;
  const T=L[st[key]%L.length];let n=0;
  const gaps=T.p.filter(x=>typeof x!=="string");
  const cnt={};gaps.forEach(x=>cnt[x.v]=(cnt[x.v]||0)+1);
  const verbsBox=hard?`<div class="tverbs"><span class="tl">Verbs to use · hover or tap a verb for its meaning</span><div class="tvl">${Object.keys(cnt).sort((a,b)=>a.localeCompare(b,"pt")).map(v=>{const V=vby(v);return `<span class="tvc" tabindex="0" data-tip="${esc(V?V.en:"")}" aria-label="${esc(v)}: ${esc(V?V.en:"")}">${esc(v)}${cnt[v]>1?` <b>×${cnt[v]}</b>`:""}</span>`}).join("")}</div></div>`:"";
  g.innerHTML=`<div class="cardtop"><span class="seg2"><button class="btn ${hard?"ghost":""} sm" id="tEasy">With hints · ${TEXTS.length}</button><button class="btn ${hard?"":"ghost"} sm" id="tHard">Harder · ${TEXTS_HARD.length}</button></span>
     <span class="row"><span class="hint">${st[key]%L.length+1} / ${L.length}</span><button class="btn ghost sm" id="tprev">←</button><button class="btn ghost sm" id="tnext">→</button></span></div>
   <div class="gcard textc"><h2>${esc(T.t)}${T.isnew?` <span class="u5b nb inl">New</span>`:""}</h2>${verbsBox}<p class="hint">${hard?"Choose the right verb for each gap and write it in the present tense.":"Write every verb in the present tense. The infinitive is in brackets."}</p>
   <p class="ptext">${T.p.map(x=>typeof x==="string"?esc(x):`<span class="gap"><input class="gin" data-n="${n++}" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${hard?10:Math.max(4,x.f.length+1.5)}ch">${hard?"":`<small>(${esc(x.v)})</small>`}</span>`).join("")}</p>
   ${accentKeys()}<div id="tfb"></div><div class="actions"><button class="btn ghost" id="tshow">Show answers</button><button class="btn" id="tchk">Check</button></div></div>`;
  const ins=[...g.querySelectorAll(".gin")];let last=ins[0];
  ins.forEach((x,k)=>{x.onfocus=()=>last=x;x.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();ins[k+1]?ins[k+1].focus():$("#tchk").click()}}});
  bindKeys(g,()=>last);ins[0].focus();
  const go=d=>{st[key]=(st[key]+d+L.length)%L.length;save();vText(g)};
  $("#tprev").onclick=()=>go(-1);$("#tnext").onclick=()=>go(1);
  $("#tEasy").onclick=()=>{st.thard=false;save();vText(g)};$("#tHard").onclick=()=>{st.thard=true;save();vText(g)};
  const check=reveal=>{let ok=0;ins.forEach((x,k)=>{const a=gaps[k].f,good=!reveal&&norm(x.value)===norm(a);ok+=good;
      if(!reveal){const i=trackForm(gaps[k].v,a);if(i!=null)vmark(gaps[k].v,i,good)}
      x.disabled=true;x.classList.add(good?"right":"wrong");if(!good){x.value=a}
      if(hard&&!good){x.insertAdjacentHTML("afterend",`<small>(${esc(gaps[k].v)})</small>`)}
      setTimeout(()=>{x.parentElement.classList.add(good?"gok":"gno")},k*80)});
    $("#tfb").innerHTML=reveal?"":`<p class="center ${ok===ins.length?"okt":"badt"}"><b>${ok} / ${ins.length} correct.</b> ${ok===ins.length?"Excelente!":"Wrong answers are replaced by the correct form in red."}</p>`;
    refreshVerbChips();$("#tshow").remove();$("#tchk").textContent="Next text →";$("#tchk").onclick=()=>go(1)};
  $("#tchk").onclick=()=>check(false);$("#tshow").onclick=()=>check(true);
}


/* ---- Teste: 15 mixed items, 40% typed ---- */
function vTestMix(g){
  const all=shuffle(sentences());
  if(all.length<15){g.innerHTML=`<p class="hint">Select more verbs (at least 2 besides chamar-se).</p>`;return}
  const kinds=[..."tttttt",..."ccccc",..."wwww"],items=all.slice(0,15).map((it,k)=>{
    const V=it.V,form=V.f[it.p],full=`${it.subj} ${form} ${it.c}`,kd=kinds[k];
    const base={say:full,explain:`${esc(V.v)}: ${V.f.map((f,j)=>j===it.p?`<b>${esc(f)}</b>`:esc(f)).join(", ")}`,onResult:ok=>vmark(V.v,it.p,ok)};
    if(kd==="t")return {...base,kind:"type",label:`${V.v} · ${V.en}`,prompt:`${esc(it.subj)} <span class="blank">&nbsp;</span> ${esc(it.c)} <small class="vh">(${esc(V.v)})</small>`,accept:[vnorm(form)],show:form};
    if(kd==="c"){const o=shuffle(uniqForms(V,it.p));return {...base,kind:"mc",label:`${V.v} · ${V.en}`,prompt:`${esc(it.subj)} <span class="blank">&nbsp;</span> ${esc(it.c)}`,options:o,correct:o.indexOf(form),show:form}}
    return {...base,kind:"mc",label:"who is it?",prompt:`<span class="blank">&nbsp;</span> ${esc(form)} ${esc(it.c)}`,options:PSHORT,correct:it.p,show:PSHORT[it.p]};
  });
  runSession(g,shuffle(items),"Teste",()=>vTestMix(g));
}

/* ---- Blocos: a brick wall of verb forms falls towards the sentence ---- */
function vBlocksPage(){
  if(stopGame){stopGame();stopGame=null}
  const st=VBS();
  app.innerHTML=`<div class="bgame"><div class="bgtop"><button class="btn ghost sm" id="bback">← Verbos</button><h1 class="bgt">Blocos</h1><span class="hint">${st.sel.length} verbs</span></div>
    <div class="bstats" id="bst"></div><div id="bgame"></div></div>`;
  $("#bback").onclick=()=>{if(stopGame){stopGame();stopGame=null}st.mode=st.prevMode&&st.prevMode!=="blocks"?st.prevMode:"table";save();renderVerbs();scrollTo({top:0})};
  bStats({score:0,level:1,ok:0,bad:0,need:3,prog:0});
  const g=$("#bgame");
  g.innerHTML=`<div class="gcard bintro"><h2>Wall of verbs</h2>
    <p>A wall of bricks slides down towards the sentence. Tap the brick with the correct verb form in the <b>lowest row</b>: it fills the gap and the row crumbles. A wrong brick shakes the wall and drops it one row lower at once. If the wall reaches the sentence, the game is over.</p>
    <ul class="brules"><li><b>Levels 1–9:</b> two verb forms to choose from.</li><li><b>Level 10+:</b> three verb forms, and the wall falls faster.</li><li>Every 3 correct bricks = next level.</li></ul>
    <p class="hint">Verbs in play: ${st.sel.filter(v=>vby(v).c).join(", ")||"none"}. Change them on the Verbos page.</p>
    <button class="btn" id="bgo">Start</button></div>`;
  $("#bgo").onclick=()=>playBlocks(g);
}
function bStats(s){const st=VBS(),el=$("#bst");if(!el)return;const acc=s.ok+s.bad?Math.round(s.ok/(s.ok+s.bad)*100):0;
  el.innerHTML=[["Pontos",s.score],["Nível",s.level],["Recorde",st.bbest||0],["Certos",s.ok],["Erros",s.bad],["Precisão",acc+"%"]].map(([l,v])=>`<div class="bstat"><b>${v}</b><span>${l}</span></div>`).join("")+
   `<div class="blvl"><span>${s.level<10?`Level ${s.level} · 2 words`:`Level ${s.level} · 3 words · fast`}</span><i><em style="width:${Math.round(s.prog/s.need*100)}%"></em></i></div>`}
function playBlocks(g){
  const st=VBS(),reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let pool=shuffle(sentences());if(pool.length<4){g.innerHTML=`<p class="hint">Select more verbs on the Verbos page first.</p>`;return}
  let pi=0;const nextTask=()=>{if(pi>=pool.length){pool=shuffle(pool);pi=0}return pool[pi++]};
  g.innerHTML=`<div class="bwrap" id="bw"><div class="bfield" id="bf"><div class="bflash" id="bfl"></div><div class="bbanner" id="bban"></div></div><div class="bsent" id="bsn"></div></div>`;
  const bf=$("#bf"),bw=$("#bw"),RH=54;
  let H=bf.clientHeight,rows=[],bottom=RH*1.4,extra=0,score=0,combo=0,level=1,okN=0,badN=0,over=false,raf=0,last=performance.now(),lock=false,rc=0;
  const speedFor=l=>(l<10?9+(l-1)*1.3:22+(l-10)*2.2)*(reduce?.7:1);
  const stats=()=>bStats({score,level,ok:okN,bad:badN,need:3,prog:okN%3});
  function makeRow(){
    const t=nextTask(),V=t.V,form=V.f[t.p],nW=level<10?2:3,odd=rc++%2===1;
    const others=shuffle([...new Set(V.f.filter(f=>f!==form))]).slice(0,nW-1);
    const slots=odd?3:4,words=shuffle([form,...others]),cells=Array(slots).fill(null);
    shuffle([...Array(slots).keys()]).slice(0,words.length).forEach((pos,k)=>cells[pos]=words[k]);
    const el=document.createElement("div");el.className="brow wait"+(odd?" odd":"");
    const brick=c=>c?`<button class="brick w" data-f="${esc(c)}" style="--r:${(Math.random()*6-3).toFixed(1)}deg"><span>${esc(c)}</span></button>`:`<span class="brick"></span>`;
    el.innerHTML=(odd?`<span class="brick half"></span>`:"")+cells.map(brick).join("")+(odd?`<span class="brick half"></span>`:"");
    bf.appendChild(el);const r={t,form,el};el.querySelectorAll("button.brick").forEach(b=>b.onclick=()=>tap(r,b));return r;
  }
  function showSentence(){const r=rows[0];if(!r)return;const t=r.t;
    $("#bsn").innerHTML=`<span class="tl">${esc(t.V.v)} · ${esc(t.V.en)}</span><p class="sent">${esc(t.subj)} <span class="blank" id="bbl">&nbsp;</span> ${esc(t.c)}</p>`;
    rows.forEach((x,k)=>{x.el.classList.toggle("wait",k>0);x.el.classList.toggle("active",k===0)})}
  function banner(txt){const b=$("#bban");b.textContent=txt;b.classList.remove("on");void b.offsetWidth;b.classList.add("on")}
  function tap(r,b){
    if(over||lock||r!==rows[0])return;
    if(b.dataset.f===r.form){lock=true;combo++;okN++;score+=10+Math.min(combo-1,5)*2+(level>=10?5:0);b.classList.add("bok");
      const bl=$("#bbl");if(bl){bl.textContent=r.form;bl.classList.add("filled")}vmark(r.t.V.v,r.t.p,true);speak(`${r.t.subj} ${r.form} ${r.t.c}`);
      r.el.querySelectorAll(".brick").forEach((x,k)=>{x.style.setProperty("--dx",(k-1.5)*14+"px");x.style.setProperty("--rot",(Math.random()*50-25)+"deg")});
      setTimeout(()=>r.el.classList.add("crumble"),180);
      const nl=1+Math.floor(okN/3);if(nl>level){level=nl;banner(level===10?"Nível 10! Three words, faster wall":`Nível ${level}`)}
      stats();
      setTimeout(()=>{r.el.remove();rows.shift();bottom=Math.max(RH*1.5,bottom-RH);showSentence();lock=false},520)}
    else{combo=0;badN++;extra+=RH;b.classList.add("bbad");vmark(r.t.V.v,r.t.p,false);stats();
      bw.classList.remove("shake2");void bw.offsetWidth;bw.classList.add("shake2");const fl=$("#bfl");fl.classList.remove("on");void fl.offsetWidth;fl.classList.add("on");
      try{navigator.vibrate&&navigator.vibrate(180)}catch(e){}
      setTimeout(()=>b.classList.remove("bbad"),420)}
  }
  function frame(now){
    const dt=Math.min(.05,(now-last)/1000);last=now;H=bf.clientHeight;
    if(document.visibilityState==="visible"){bottom+=speedFor(level)*dt;if(extra>0){const m=Math.min(extra,420*dt);bottom+=m;extra-=m}}
    while(!rows.length||bottom-rows.length*RH>-RH){rows.push(makeRow());if(rows.length===1)showSentence()}
    rows.forEach((r,k)=>{r.el.style.transform=`translateY(${bottom-(k+1)*RH}px)`});
    if(bottom>=H)return end();
    raf=requestAnimationFrame(frame);
  }
  function end(){over=true;cancelAnimationFrame(raf);const rec=score>(st.bbest||0);if(rec)st.bbest=score;save();stats();refreshVerbChips();
    const acc=okN+badN?Math.round(okN/(okN+badN)*100):0;
    bf.insertAdjacentHTML("beforeend",`<div class="cover"><h2>The wall reached the sentence</h2><p class="bigscore">${score} pts</p><p class="hint">Level ${level} · ${okN} correct · ${badN} mistakes · ${acc}% accuracy</p>${rec?`<p class="okt"><b>New record!</b></p>`:`<p class="hint">Record: ${st.bbest}</p>`}<div class="row"><button class="btn" id="bagain">Play again</button></div></div>`);
    $("#bagain").onclick=()=>playBlocks(g)}
  stats();showSentence();raf=requestAnimationFrame(frame);
  stopGame=()=>{over=true;cancelAnimationFrame(raf)};
}
