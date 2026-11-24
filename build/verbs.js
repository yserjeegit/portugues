/* ================= VERBOS (conjugation trainer) ================= */
const PERS=["eu","tu","ele / ela / você","nós","eles / elas / vocês"];
const PSHORT=["Eu","Tu","Ele","Nós","Eles"];
const SUBJ5=[["Eu"],["Tu"],["O Pedro","A Ana","Você"],["Nós"],["Eles","Vocês","A Rita e o João"]];
const REG={ar:["o","as","a","amos","am"],er:["o","es","e","emos","em"],ir:["o","es","e","imos","em"]};
const vreg=(inf,over={})=>{const st=inf.slice(0,-2),e=REG[inf.slice(-2)];return e.map((x,i)=>over[i]||st+x)};
// f: forms; g: group; en: meaning; note; c: complements that fit every person
const VERBS=[
 {v:"ser",en:"to be (permanent)",g:"irr",f:["sou","és","é","somos","são"],note:"Identity, origin, nationality, profession, days: Sou de Lisboa. Hoje é sábado.",c:["de Lisboa.","do Brasil.","da Ucrânia.","de Coimbra."]},
 {v:"estar",en:"to be (temporary)",g:"irr",f:["estou","estás","está","estamos","estão"],note:"Temporary states and where you are now: Estou em casa. Como estás?",c:["em casa.","no escritório agora.","em Lisboa esta semana.","no Porto hoje."]},
 {v:"ter",u5:1,en:"to have",g:"irr",f:["tenho","tens","tem","temos","têm"],note:"Plural têm has a circumflex; tem (singular) does not.",c:["um carro.","uma casa no Porto.","dois irmãos.","aula às nove."]},
 {v:"ir",en:"to go",g:"irr",f:["vou","vais","vai","vamos","vão"],note:"ir a + o = ao: Vou ao cinema. Also ir para: Vamos para casa.",c:["ao cinema.","para casa.","ao teatro amanhã.","a Lisboa no sábado."]},
 {v:"poder",u5:1,en:"can, to be able to",g:"irr",f:["posso","podes","pode","podemos","podem"],note:"Only eu is irregular (posso). Followed by an infinitive: Posso abrir a janela?",c:["abrir a janela.","ir ao cinema hoje.","falar português.","ajudar amanhã."]},
 {v:"fazer",u5:1,en:"to do, to make",g:"irr",f:["faço","fazes","faz","fazemos","fazem"],note:"eu faço (with ç), ele faz (no final -e). ",c:["o jantar.","desporto todos os dias.","os exercícios.","o almoço."]},
 {v:"saber",u5:1,en:"to know (facts, how to)",g:"irr",f:["sei","sabes","sabe","sabemos","sabem"],note:"Only eu is irregular: sei. Saber + infinitive = to know how to: Sei nadar.",c:["falar português.","a resposta.","onde fica a estação.","nadar.","o caminho para a escola."]},
 {v:"trazer",u5:1,en:"to bring",g:"irr",f:["trago","trazes","traz","trazemos","trazem"],note:"eu trago (g!), ele traz (no final -e, like faz).",c:["o almoço.","os livros para a aula.","o passaporte.","água para todos.","as chaves de casa."]},
 {v:"chamar-se",en:"to be called",g:"ar",f:["chamo-me","chamas-te","chama-se","chamamo-nos","chamam-se"],note:"In statements the pronoun comes after the verb. Nós: chamamo-nos (the -s of chamamos drops).",c:null},
 {v:"ficar",en:"to stay; to be located",g:"ar",f:vreg("ficar"),note:"Fico em casa (I stay at home). Onde fica Lisboa? (where is it located)",c:["em casa hoje.","no hotel três noites.","em Lisboa até sexta-feira."]},
 {v:"falar",en:"to speak",g:"ar",f:vreg("falar"),c:["português.","inglês muito bem.","um pouco de francês."]},
 {v:"morar",en:"to live (reside)",g:"ar",f:vreg("morar"),c:["em Lisboa.","no centro.","em Sintra."]},
 {v:"trabalhar",en:"to work",g:"ar",f:vreg("trabalhar"),c:["no escritório.","em Braga.","numa empresa de automóveis."]},
 {v:"estudar",en:"to study",g:"ar",f:vreg("estudar"),c:["português.","na faculdade.","à noite."]},
 {v:"gostar",en:"to like (gostar de)",g:"ar",f:vreg("gostar"),note:"Always with de: Gosto de música. Gosto muito do Porto (de + o).",c:["de música.","muito de café.","de ler."]},
 {v:"comer",en:"to eat",g:"er",f:vreg("comer"),c:["uma salada ao almoço.","pão ao pequeno-almoço.","peixe ao jantar."]},
 {v:"beber",en:"to drink",g:"er",f:vreg("beber"),c:["café de manhã.","muita água.","chá com limão."]},
 {v:"viver",en:"to live",g:"er",f:vreg("viver"),c:["em Braga.","no Porto.","perto de Lisboa."]},
 {v:"perceber",en:"to understand",g:"er",f:vreg("perceber"),c:["português.","a pergunta.","tudo."]},
 {v:"abrir",en:"to open",g:"ir",f:vreg("abrir"),c:["a janela.","a porta.","os livros."]},
 {v:"partir",en:"to leave; to break",g:"ir",f:vreg("partir"),c:["amanhã para Tóquio.","na segunda-feira.","de manhã cedo."]},
 {v:"decidir",en:"to decide",g:"ir",f:vreg("decidir"),c:["hoje.","amanhã.","depressa."]},
 {v:"preferir",en:"to prefer",g:"ir",f:vreg("preferir",{0:"prefiro"}),note:"Only eu changes the vowel: prefiro (e → i).",c:["o teatro.","café sem açúcar.","ir a pé."]},
 {v:"dormir",en:"to sleep",g:"ir",f:vreg("dormir",{0:"durmo"}),note:"Only eu changes the vowel: durmo (o → u).",c:["oito horas.","em casa da Joana.","muito bem."]},
 {v:"sentir",en:"to feel",g:"ir",f:vreg("sentir",{0:"sinto"}),note:"Only eu changes the vowel: sinto (e → i). Ele sente, not “sento”.",c:["frio.","calor.","o mesmo."]},
 {v:"querer",isnew:1,en:"to want",g:"irr",f:["quero","queres","quer","queremos","querem"],note:"ele quer (no final -e). Quero um café, por favor.",c:["um café.","aprender português.","ir à praia.","uma casa maior."]},
 {v:"ver",isnew:1,en:"to see, to watch",g:"irr",f:["vejo","vês","vê","vemos","veem"],note:"eu vejo; plural veem (two e's, no accent).",c:["televisão à noite.","o mar da janela.","os amigos ao sábado."]},
 {v:"ler",isnew:1,en:"to read",g:"irr",f:["leio","lês","lê","lemos","leem"],note:"Like ver: eu leio, ele lê, eles leem.",c:["o jornal de manhã.","um livro por mês.","muito."]},
 {v:"dar",isnew:1,en:"to give",g:"irr",f:["dou","dás","dá","damos","dão"],note:"Like estar: dou, dás, dá, damos, dão.",c:["um presente à Ana.","aulas de inglês.","um passeio no parque."]},
 {v:"dizer",isnew:1,en:"to say, to tell",g:"irr",f:["digo","dizes","diz","dizemos","dizem"],note:"eu digo (g!), ele diz (no final -e).",c:["olá aos vizinhos.","a verdade.","bom dia ao professor."]},
 {v:"vir",isnew:1,en:"to come",g:"irr",f:["venho","vens","vem","vimos","vêm"],note:"Compare ter: venho/tenho, vem/tem, vêm/têm.",c:["à aula de carro.","a Lisboa amanhã.","do trabalho às seis."]},
 {v:"sair",isnew:1,en:"to go out, to leave",g:"irr",f:["saio","sais","sai","saímos","saem"],note:"eu saio, nós saímos (with an accent).",c:["de casa às oito.","à noite.","do trabalho tarde."]},
 {v:"ouvir",isnew:1,en:"to hear, to listen",g:"irr",f:["ouço","ouves","ouve","ouvimos","ouvem"],note:"Only eu is irregular: ouço.",c:["música no carro.","as notícias.","bem."]},
 {v:"pedir",isnew:1,en:"to ask for, to order",g:"irr",f:["peço","pedes","pede","pedimos","pedem"],note:"Only eu is irregular: peço. Peço um café.",c:["um café.","a conta.","ajuda ao professor."]},
 {v:"conhecer",isnew:1,en:"to know (people, places)",g:"er",f:vreg("conhecer",{0:"conheço"}),note:"eu conheço (ç keeps the [s] sound). Saber = facts; conhecer = people and places.",c:["Lisboa muito bem.","a Ana.","o Porto."]},
 {v:"chegar",isnew:1,en:"to arrive",g:"ar",f:vreg("chegar"),c:["a casa às sete.","tarde à aula.","ao Porto de comboio."]},
 {v:"voltar",isnew:1,en:"to come back, to return",g:"ar",f:vreg("voltar"),c:["para casa às seis.","a Portugal em agosto.","amanhã."]},
 {v:"jantar",isnew:1,en:"to have dinner",g:"ar",f:vreg("jantar"),c:["em casa.","às oito.","fora ao sábado."]},
 {v:"almoçar",isnew:1,en:"to have lunch",g:"ar",f:vreg("almoçar"),c:["no escritório.","ao meio-dia.","com os colegas."]},
 {v:"entrar",isnew:1,en:"to enter, to go in",g:"ar",f:vreg("entrar"),c:["na sala.","no carro.","em casa."]},
 {v:"ensinar",isnew:1,en:"to teach",g:"ar",f:vreg("ensinar"),c:["inglês numa escola.","português.","matemática."]},
 {v:"acordar",isnew:1,en:"to wake up",g:"ar",f:vreg("acordar"),c:["cedo.","às sete.","tarde ao domingo."]},
 {v:"comprar",isnew:1,en:"to buy",g:"ar",f:vreg("comprar"),c:["pão.","o jornal.","fruta no mercado."]},
 {v:"ajudar",isnew:1,en:"to help",g:"ar",f:vreg("ajudar"),c:["os colegas.","a Ana.","em casa."]},
 {v:"brincar",isnew:1,en:"to play (children)",g:"ar",f:vreg("brincar"),c:["no jardim.","com o cão.","no parque."]},
 {v:"responder",isnew:1,en:"to answer",g:"er",f:vreg("responder"),c:["aos emails.","à pergunta.","bem."]},
 {v:"escrever",isnew:1,en:"to write",g:"er",f:vreg("escrever"),note:"Como se escreve? = How is it spelled?",c:["um email.","o nome.","em português."]},
 {v:"aprender",isnew:1,en:"to learn",g:"er",f:vreg("aprender"),c:["português.","a nadar.","muito na aula."]},
 {v:"dividir",isnew:1,en:"to divide, to share",g:"ir",f:vreg("dividir"),c:["a pizza.","as tarefas.","o trabalho."]}
];
const VGROUPS=[["irr","Irregulares"],["ar","Verbos em -ar"],["er","Verbos em -er"],["ir","Verbos em -ir"]];
const verbsMuted=()=>S.book==="verbos"&&!!(S.verbs&&S.verbs.mute);
const VBS=()=>S.verbs||(S.verbs={sel:["ser","estar","ter","ir","poder","fazer"],mode:"table",cur:"ser",stats:{}});
const vby=v=>VERBS.find(x=>x.v===v);
const vk=(v,p)=>v+"|"+p;
function vmark(v,p,ok){const st=VBS().stats,k=vk(v,p),s=st[k]||(st[k]={s:0,r:0,w:0});if(ok){s.r++;s.s++}else{s.w++;s.s=0}save()}
const vlearned=v=>[0,1,2,3,4].filter(p=>{const s=VBS().stats[vk(v,p)];return s&&s.s>=2}).length;
function hiForm(V,i){const f=V.f[i];if(V.g==="irr")return `<b class="irr">${esc(f)}</b>`;const st=V.v.replace(/-se$/,"").slice(0,-2);
  if(f.startsWith(st)&&V.f[i]===vreg(V.v.replace(/-se$/,""))[i])return esc(st)+`<b>${esc(f.slice(st.length))}</b>`;return `<b class="irr">${esc(f)}</b>`}
const VMODES=[["table","Tabela","Learn the forms"],["link","Ligar","Pronoun ↔ form"],["choose","Escolher","Pick the form"],["write","Escrever","Type the form"],["who","Quem?","Find the subject"],["text","Texto","Verbs in a text"],["test","Teste","Mixed · 40% typed"]];
function sentences(){
  const out=[];VBS().sel.forEach(v=>{const V=vby(v);if(!V.c)return;V.c.forEach(c=>[0,1,2,3,4].forEach(p=>{const subs=SUBJ5[p];out.push({V,p,c,subj:subs[(c.length+p)%subs.length]})}))});return out;
}

function renderVerbs(){
  if(stopGame){stopGame();stopGame=null}
  const st=VBS();if(!st.sel.length)st.sel=["ser"];if(!st.sel.includes(st.cur))st.cur=st.sel[0];
  if(st.mode==="blocks")st.mode="table";
  app.innerHTML=tabsHTML()+`<section class="intro"><h1>Verbos</h1><p>First learn the present-tense forms for eu, tu, ele/ela/você, nós and eles/vocês. Then practise them in short sentences. A form counts as learned after two correct answers in a row.</p></section>
   <details class="dwrap" id="vw" ${st.open===false?"":"open"}><summary><b>Verbs</b> <span class="newb">New</span> · ${st.sel.length} selected</summary>
   <div class="vgroup"><div class="vchips">${VERBS.slice().sort((a,b)=>a.v.localeCompare(b.v,"pt")).map(V=>{const on=st.sel.includes(V.v),l=vlearned(V.v);
     return `<button class="vchip ${on?"on":""} ${V.isnew?"isu5":""}" data-verb="${V.v}" aria-pressed="${on}">${V.isnew?`<span class="u5b nb">New</span>`:""}<b>${V.v}</b><span class="vdots">${[0,1,2,3,4].map(i=>`<i class="${i<l?"on":""}"></i>`).join("")}</span></button>`}).join("")}</div></div>
   <div class="deckbar"><span class="hint">Tip: start with the irregular verbs.</span><span class="row"><button class="btn ghost sm" id="vIrr">Only irregular</button><button class="btn ghost sm" id="vAll">All verbs</button></span></div></details>
   <div class="soundrow"><span class="hint">Sound</span><div class="modeseg"><span class="mlab ${st.mute?"":"on"}">On</span><button class="mtog ${st.mute?"hard":""}" role="switch" aria-checked="${!st.mute}" aria-label="Sound" id="vmute"><i></i></button><span class="mlab ${st.mute?"on":""}">Off</span></div></div>
   <div class="modes m8" role="tablist">${VMODES.map(([id,n,s])=>`<button class="mode ${st.mode===id?"on":""}" data-vmode="${id}" role="tab" aria-selected="${st.mode===id}"><b>${n}</b><span>${s}</span></button>`).join("")}</div>
   <div id="game"></div>`;
  app.querySelectorAll("[data-book]").forEach(b=>b.onclick=()=>switchBook(b.dataset.book));
  app.classList.toggle("mute",!!st.mute);
  $("#vmute").onclick=()=>{st.mute=!st.mute;if(st.mute)try{speechSynthesis.cancel()}catch(e){};save();renderVerbs()};
  $("#vw").ontoggle=()=>{st.open=$("#vw").open;save()};
  app.querySelectorAll("[data-verb]").forEach(b=>b.onclick=()=>{const v=b.dataset.verb,i=st.sel.indexOf(v);if(i<0){st.sel.push(v);st.cur=v}else if(st.sel.length>1)st.sel.splice(i,1);save();renderVerbs()});
  $("#vIrr").onclick=()=>{st.sel=VERBS.filter(V=>V.g==="irr").map(V=>V.v);save();renderVerbs()};
  $("#vAll").onclick=()=>{st.sel=VERBS.map(V=>V.v);save();renderVerbs()};
  app.querySelectorAll("[data-vmode]").forEach(b=>b.onclick=()=>{st.mode=b.dataset.vmode;st.open=false;save();renderVerbs();setTimeout(()=>{const m=document.querySelector(".modes");if(m)m.scrollIntoView({block:"start",behavior:"smooth"})},30)});
  const g=$("#game");g.addEventListener("click",e=>{const s=e.target.closest("[data-say]");if(s){e.stopPropagation();speak(s.dataset.say)}});
  ({table:vTable,link:vLink,choose:vSent,write:vSent,who:vSent,text:vText,test:vTestMix}[st.mode]||vTable)(g,st.mode);
}
function refreshVerbChips(){app.querySelectorAll("[data-verb]").forEach(b=>{const l=vlearned(b.dataset.verb);b.querySelectorAll(".vdots i").forEach((d,i)=>d.classList.toggle("on",i<l))})}

/* ---- Tabela: study + fill the table ---- */
function vTable(g){
  const st=VBS(),V=vby(st.cur),idx=st.sel.indexOf(st.cur);
  const nav=`<div class="vnav"><button class="btn ghost sm" id="vp" ${st.sel.length<2?"disabled":""}>←</button><div class="vtitle"><b>${V.v}</b><span>${esc(V.en)}</span></div><button class="btn ghost sm" id="vn" ${st.sel.length<2?"disabled":""}>→</button></div>`;
  const go=d=>{st.cur=st.sel[(idx+d+st.sel.length)%st.sel.length];save();vTable(g)};
  function study(){
    g.innerHTML=nav+`<div class="vtable">${PERS.map((p,i)=>`<div class="vrow" style="animation-delay:${i*60}ms"><span class="vp">${p}</span><span class="vf">${hiForm(V,i)}</span>${spkBtn((i===2?"ele ":i===4?"eles ":p+" ")+V.f[i])}</div>`).join("")}</div>
      ${V.note?`<p class="vnote">${esc(V.note)}</p>`:V.g!=="irr"?`<p class="vnote">Regular -${V.g} verb: stem <b>${esc(V.v.slice(0,-2))}-</b> + ${REG[V.g].map(e=>"-"+e).join(", ")}.</p>`:""}
      <div class="actions"><button class="btn ghost" id="vsay">Listen to all</button><button class="btn" id="vtest">Test me →</button></div>`;
    $("#vp").onclick=()=>go(-1);$("#vn").onclick=()=>go(1);
    $("#vsay").onclick=()=>{if(verbsMuted())return;try{speechSynthesis.cancel()}catch(e){};PERS.forEach((p,i)=>{try{const u=new SpeechSynthesisUtterance((i===2?"ele ":i===4?"eles ":p+" ")+V.f[i]);u.lang="pt-PT";if(ptVoice)u.voice=ptVoice;u.rate=.85;speechSynthesis.speak(u)}catch(e){}})};
    $("#vtest").onclick=test;
  }
  function test(){
    g.innerHTML=nav+`<p class="hint center">Fill in the whole table, then check.</p><div class="vtable">${PERS.map((p,i)=>`<div class="vrow"><label class="vp" for="vi${i}">${p}</label><input class="vin" id="vi${i}" data-i="${i}" autocomplete="off" autocapitalize="off" spellcheck="false"><span class="vres" id="vr${i}"></span></div>`).join("")}</div>
      <div class="keys"><span class="lbl">Accents</span>${["á","à","â","ã","é","ê","í","ó","ô","õ","ú","ç"].map(c=>`<button class="key" type="button" data-c="${c}">${c}</button>`).join("")}</div>
      <div class="actions"><button class="btn ghost" id="vback">Show table</button><button class="btn" id="vchk">Check</button></div>`;
    $("#vp").onclick=()=>go(-1);$("#vn").onclick=()=>go(1);
    let last=$("#vi0");last.focus();g.querySelectorAll(".vin").forEach(x=>{x.onfocus=()=>last=x;x.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();const n=$("#vi"+(+x.dataset.i+1));n?n.focus():$("#vchk").click()}}});
    g.querySelectorAll(".key").forEach(b=>b.onclick=()=>{const i=last,s=i.selectionStart??i.value.length,e=i.selectionEnd??s;i.value=i.value.slice(0,s)+b.dataset.c+i.value.slice(e);i.focus();i.setSelectionRange(s+1,s+1)});
    $("#vback").onclick=study;
    $("#vchk").onclick=()=>{
      if($("#vchk").dataset.done){$("#vchk").dataset.done="";return test()}
      let n=0;g.querySelectorAll(".vin").forEach((x,i)=>{const ok=norm(x.value)===norm(V.f[i]);n+=ok;vmark(V.v,i,ok);x.disabled=true;const row=x.closest(".vrow");
        setTimeout(()=>{row.classList.add(ok?"ok":"no");$("#vr"+i).innerHTML=ok?"✓":`<b>${esc(V.f[i])}</b>`},i*90)});
      setTimeout(()=>{refreshVerbChips();g.querySelector(".actions").insertAdjacentHTML("beforebegin",`<p class="center ${n===5?"okt":"badt"}"><b>${n} / 5 correct.</b> ${n===5?"Perfeito!":"Look at the corrections, then try again."}</p>`)},500);
      $("#vchk").textContent="Try again";$("#vchk").dataset.done="1";
      if(n===5&&st.sel.length>1){$("#vback").textContent="Next verb →";$("#vback").onclick=()=>go(1)}
    };
  }
  study();
}

/* ---- Ligar: drag forms onto pronouns ---- */
function vLink(g){
  const st=VBS();let score=0,mist=0,round=0;
  function next(){
    const V=vby(shuffle(st.sel)[0]);round++;let left=5,sel=null;
    g.innerHTML=`<div class="cardtop"><span class="hint">Round ${round} · <b class="okc">${score}</b> matched · <b class="badc">${mist}</b> mistakes</span></div>
      <div class="vtitle center"><b>${V.v}</b><span>${esc(V.en)}</span></div>
      <p class="hint">Drag each form onto its pronoun (or tap a form, then tap the pronoun).</p>
      <div class="match"><div class="slots">${PERS.map((p,i)=>`<div class="slot" data-i="${i}"><span class="sp">${p}</span><span class="drop">…</span></div>`).join("")}</div>
      <div class="chips2">${shuffle([0,1,2,3,4]).map(i=>`<div class="mchip" data-i="${i}" tabindex="0">${esc(V.f[i])}</div>`).join("")}</div></div>`;
    const tryDrop=(chip,slot)=>{const i=+chip.dataset.i;
      if(slot&&+slot.dataset.i===i){slot.classList.add("ok","pop");slot.querySelector(".drop").textContent=V.f[i];chip.remove();vmark(V.v,i,true);score++;speak(V.f[i]);
        if(--left===0){refreshVerbChips();g.querySelector(".match").insertAdjacentHTML("afterend",`<div class="actions"><span class="hint">All five forms matched.</span><button class="btn" id="nr">Next verb →</button></div>`);$("#nr").onclick=next}}
      else{chip.style.transition="transform .3s";chip.style.transform="";chip.classList.remove("shake");void chip.offsetWidth;chip.classList.add("shake");
        if(slot){slot.classList.remove("bad");void slot.offsetWidth;slot.classList.add("bad");vmark(V.v,+slot.dataset.i,false);mist++}}
      g.querySelector(".okc").textContent=score;g.querySelector(".badc").textContent=mist};
    g.querySelectorAll(".mchip").forEach(chip=>{let sx,sy,dx=0,dy=0,down=false;
      chip.onpointerdown=e=>{down=true;sx=e.clientX;sy=e.clientY;dx=dy=0;chip.setPointerCapture(e.pointerId);chip.style.transition="none";chip.classList.add("drag")};
      chip.onpointermove=e=>{if(!down)return;dx=e.clientX-sx;dy=e.clientY-sy;chip.style.transform=`translate(${dx}px,${dy}px) scale(1.05)`;g.querySelectorAll(".slot").forEach(s=>s.classList.remove("over"));chip.style.pointerEvents="none";const el=document.elementFromPoint(e.clientX,e.clientY);chip.style.pointerEvents="";const s=el&&el.closest(".slot:not(.ok)");if(s)s.classList.add("over")};
      chip.onpointerup=e=>{if(!down)return;down=false;chip.classList.remove("drag");g.querySelectorAll(".slot").forEach(s=>s.classList.remove("over"));
        if(Math.abs(dx)+Math.abs(dy)<6){g.querySelectorAll(".mchip").forEach(c=>c.classList.remove("sel"));chip.style.transform="";sel=chip;chip.classList.add("sel");return}
        chip.style.pointerEvents="none";const el=document.elementFromPoint(e.clientX,e.clientY);chip.style.pointerEvents="";tryDrop(chip,el&&el.closest(".slot:not(.ok)"))};
      chip.onpointercancel=()=>{down=false;chip.style.transform=""};
      chip.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();g.querySelectorAll(".mchip").forEach(c=>c.classList.remove("sel"));sel=chip;chip.classList.add("sel")}}});
    g.querySelectorAll(".slot").forEach(s=>{s.tabIndex=0;const act=()=>{if(sel&&sel.isConnected&&!s.classList.contains("ok")){const c=sel;sel=null;c.classList.remove("sel");tryDrop(c,s)}};s.onclick=act;s.onkeydown=e=>{if(e.key==="Enter")act()}});
  }
  next();
}

/* ---- Frases: choose / write / who ---- */
function vSent(g,mode){
  const all=sentences();
  if(!all.length){g.innerHTML=`<p class="hint">Select at least one verb other than chamar-se.</p>`;return}
  const N=12;let items=shuffle(all).slice(0,N),i=0,ok=0,streak=0,best=0;
  function draw(){
    if(i>=items.length){g.innerHTML=`<div class="gcard done"><h2>${ok} / ${items.length}</h2><p>Best streak: ${best}</p><button class="btn" id="re">New set of sentences</button></div>`;$("#re").onclick=()=>vSent(g,mode);refreshVerbChips();return}
    const it=items[i],V=it.V,form=V.f[it.p],full=`${it.subj} ${form} ${it.c}`;
    let body,prompt;
    if(mode==="who"){prompt=`<span class="blank">&nbsp;</span> ${esc(form)} ${esc(it.c)}`;
      body=`<div class="tiles">${PSHORT.map((s,k)=>`<button class="tile" data-k="${k}">${s}</button>`).join("")}</div>`}
    else{prompt=`${esc(it.subj)} <span class="blank">&nbsp;</span> ${esc(it.c)}`;
      body=mode==="choose"
        ?`<div class="tiles">${shuffle(uniqForms(V,it.p)).map(f=>`<button class="tile" data-f="${esc(f)}">${esc(f)}</button>`).join("")}</div>`
        :`<input id="sin" class="sin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(V.v)} → ?"><div class="keys"><span class="lbl">Accents</span>${["á","à","â","ã","é","ê","í","ó","ô","õ","ú","ç"].map(c=>`<button class="key" type="button" data-c="${c}">${c}</button>`).join("")}</div><div class="actions"><span></span><button class="btn" id="schk">Check</button></div>`}
    g.innerHTML=`<div class="cardtop"><span class="hint">${i+1} / ${items.length} · <b class="okc">${ok}</b> correct · streak <b>${streak}</b></span></div>
      <div class="gcard sentc" id="sc"><span class="tl">${mode==="who"?"Who is it? Pick the pronoun":`${esc(V.v)} · ${esc(V.en)}`}</span><p class="sent">${prompt}</p>${body}<div id="sfb"></div></div>`;
    const finish=(good,given)=>{
      const sc=$("#sc");sc.classList.remove("ok","no");void sc.offsetWidth;sc.classList.add(good?"ok":"no");
      vmark(V.v,it.p,good);if(good){ok++;streak++;best=Math.max(best,streak)}else streak=0;
      g.querySelector(".sent").innerHTML=`${esc(it.subj)} <b class="${good?"okt":"badt"}">${esc(form)}</b> ${esc(it.c)} ${spkBtn(full)}`;speak(full);
      $("#sfb").innerHTML=`<p class="${good?"okt":"badt"}"><b>${good?"Correct!":"Not quite."}</b> ${good?"":`${mode==="who"?`“${esc(form)}” is the <b>${PERS[it.p]}</b> form.`:`${PERS[it.p]} → <b>${esc(form)}</b>${given&&strip(norm(given))===strip(norm(form))?" (check the accents)":""}.`}`}</p>
        <p class="hint">${esc(V.v)}: ${V.f.map((f,k)=>k===it.p?`<b>${esc(f)}</b>`:esc(f)).join(", ")}</p>
        <div class="actions"><span></span><button class="btn" id="snx">${i+1<items.length?"Next →":"Finish"}</button></div>`;
      g.querySelectorAll(".tile").forEach(t=>t.disabled=true);
      $("#snx").onclick=()=>{i++;draw()};$("#snx").focus();
    };
    if(mode==="who")g.querySelectorAll(".tile").forEach(t=>t.onclick=()=>{const k=+t.dataset.k,good=k===it.p;t.classList.add(good?"right":"wrong");if(!good)g.querySelector(`.tile[data-k="${it.p}"]`).classList.add("right");finish(good)});
    else if(mode==="choose")g.querySelectorAll(".tile").forEach(t=>t.onclick=()=>{const good=t.dataset.f===form;t.classList.add(good?"right":"wrong");if(!good)g.querySelectorAll(".tile").forEach(x=>{if(x.dataset.f===form)x.classList.add("right")});finish(good,t.dataset.f)});
    else{const inp=$("#sin");inp.focus();
      g.querySelectorAll(".key").forEach(b=>b.onclick=()=>{const s=inp.selectionStart??inp.value.length,e=inp.selectionEnd??s;inp.value=inp.value.slice(0,s)+b.dataset.c+inp.value.slice(e);inp.focus();inp.setSelectionRange(s+1,s+1)});
      const chk=()=>{if(!inp.value.trim()||inp.disabled)return;inp.disabled=true;$("#schk").remove();finish(norm(inp.value)===norm(form),inp.value)};
      $("#schk").onclick=chk;inp.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();chk()}}}
  }
  draw();
}
function uniqForms(V,p){const others=shuffle([0,1,2,3,4].filter(k=>k!==p&&V.f[k]!==V.f[p])).slice(0,3).map(k=>V.f[k]);return [V.f[p],...new Set(others)]}
