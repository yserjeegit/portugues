// Caderno de exercícios · Unit 5 variant (K5*), Unit 6 variant (K6*), Possessivos & advérbios de lugar (PA*), Unit 6 pool for mixed variants (CX6)
const G=require("./gen6.js");
const bank=[];const {mc,multi,text}=G.maker(bank);
const r=G.rng(707),sh=G.shuffler(r),cap=G.cap;

/* ================= K5 · Caderno Unidade 5 ================= */
[["garrafa",1,"garrafas"],["nota",1,"notas"],["carro",0,"carros"],["passaporte",0,"passaportes"],["moeda",1,"moedas"],["cigarro",0,"cigarros"],["carteira",1,"carteiras"],["chave",1,"chaves"]].forEach(([n,g,p])=>
  text("K5A",4,"Write the definite article and the noun in the plural.",`${n} → ___`,[`${g?"as":"os"} ${p}`],`<i>${n}</i> is ${g?"feminine":"masculine"} → <b>${g?"as":"os"} ${p}</b>.${n==="lápis"?" <i>Lápis</i> doesn't change in the plural.":""}`));
[["você","tem"],["a minha irmã","tem"],["nós","temos"],["eles","têm"],["as senhoras","têm"],["tu e o Rui","têm"],["a Ana e eu","temos"],["o Hugo","tem"]].forEach(([s,f])=>
  text("K5B",f==="têm"?5:3,"Write the correct form of ter.",`${s} ___`,[f],`<i>Ter</i>: eu tenho, tu tens, você/ele tem, nós temos, vocês/eles <b>têm</b>. ${s} → <b>${f}</b>.`));
[["A: Têm as chaves de casa? (+)",["Temos","Sim, temos"],"vocês → nós: <b>Temos.</b>"],["A: Ele tem passaporte francês? (−)",["Não, não tem","Não tem"],"<b>Não, não tem.</b>"],["A: Vocês têm dinheiro? (−)",["Não, não temos","Não temos"],"vocês → nós: <b>Não, não temos.</b>"],["A: Tens água? (−)",["Não, não tenho","Não tenho"],"tu → eu: <b>Não, não tenho.</b>"],["A: A senhora tem caneta? (+)",["Tenho","Sim, tenho"],"a senhora → eu: <b>Tenho.</b>"]].forEach(([q,a,ex])=>
  text("K5C",5,"Answer with a short answer.",`${q} B: ___`,a,`Short answers repeat the verb. ${ex}`));
mc("K5D",3,"Your phone is right next to you (the listener).","O teu telemóvel está ___.",["aí","aqui","ali","lá"],"Near the listener → <b>aí</b>.");
mc("K5D",4,"You point at a school far away.","A escola fica ___.",["ali","aqui","aí","isto"],"Far from speaker and listener → <b>ali</b>.");
mc("K5D",4,"The sunglasses are next to the speaker.","Os óculos de sol estão ___.",["aqui","aí","ali","esse"],"Near the speaker → <b>aqui</b>.");
mc("K5D",4,"Pedro is standing far away.","O Pedro está ___.",["ali","aqui","aí","este"],"Far from both → <b>ali</b>.");
[["óculos / Pedro / estar / ali","Os óculos do Pedro estão ali"],["minha / mala / estar / tua / secretária","A minha mala está na tua secretária"],["sua / carta / condução / estar / aqui","A sua carta de condução está aqui"],["casa / amarela / ser / nossa","A casa amarela é nossa"]].forEach(([w,a])=>
  text("K5E",7,"Make a sentence: conjugate the verb and add articles and prepositions. Don't change the word order.",w,[a],`<b>${a}.</b> Possessives need the article (<i>a minha</i>), and <i>de/em</i> merge with it (<i>do Pedro, na tua secretária</i>).`));
[["Ela está ___ rua agora.","na","<i>a rua</i> → <b>na</b>."],["Estamos ___ aula de português.","na","<i>a aula</i> → <b>na</b>."],["Eles estão ___ Lisboa.","em","Cities have no article: <b>em Lisboa</b>."],["A chave não está ___ carro.","no","<i>o carro</i> → <b>no</b>."],["A Rita está ___ Porto.","no","<i>o Porto</i> has an article → <b>no</b>."]].forEach(([p,a,ex])=>
  text("K5F",a==="em"?5:3,"Type no, na or em.",p,[a],ex));
[["Ela tem um carro verde.","O carro dela","é verde"],["O senhor tem passaporte português.","O seu passaporte","é português"],["Tenho um telemóvel Nokia.","O meu telemóvel","é um Nokia"],["Tens um lápis amarelo.","O teu lápis","é amarelo"],["A senhora tem um relógio suíço.","O seu relógio","é suíço"],["Vocês têm um dicionário chinês.","O vosso dicionário","é chinês"],["Elas têm um computador Asus.","O computador delas","é um Asus"],["Temos uma mesa cinzenta.","A nossa mesa","é cinzenta"]].forEach(([s,a,rest])=>
  text("K5G",6,"Rewrite the sentence using a possessive.",`${s} → ___ ${rest}.`,[a],`<b>${a}</b> ${rest}. ${/dela|delas|dele|deles/.test(a)?"For ele/ela/eles/elas the possessive goes after the noun.":"The article comes before the possessive."}`));
[["De quem é a mala azul? (nós)",["É nossa","Nossa"],"nós → <b>nossa</b>."],["De quem é aquilo? (o senhor)",["É seu","Seu","É do senhor"],"o senhor → <b>seu</b> (or <i>do senhor</i>)."],["De quem é a casa amarela? (eles)",["É deles","Deles"],"eles → <b>deles</b>."],["De quem é a chave? (tu)",["É tua","Tua"],"tu + <i>a chave</i> (feminine) → <b>tua</b>."],["De quem é isso? (você)",["É seu","Seu","É de você"],"você → <b>seu</b>."]].forEach(([q,a,ex])=>
  text("K5H",5,"Answer the question.",`${q} → ___`,a,`${ex}`));
[["é / estão / que / chaves / onde / as","Onde é que estão as chaves"],["fala / é / línguas / que / que","Que línguas é que fala"],["que / se / é / chama / como","Como é que se chama"]].forEach(([w,a])=>
  text("K5I",7,"Write the question with these words.",w,[a],`<b>${a}?</b> Question word + <i>é que</i> + verb.`));

/* ================= Unit 6 pools (K6 variant + CX6) ================= */
const K6={A:[],B:[],C:[],D:[],E:[],F:[],G:[]};
// A · professions: missing letters + gender
[["_ _ F E R _ E I R O","enfermeiro"],["P _ _ F E _ _ O R","professor"],["E S T _ D _ _ T _","estudante"],["A _ _ O G A _ O","advogado"],["S E _ _ _ T _ _ I O","secretário"],["_ N _ _ N _ E I R O","engenheiro"],["I _ _ _ R M _ _ I C O","informático"],["A _ _ I Z","atriz"],["_ _ _ _  _ E  C A S A","dona de casa"],["E _ _ R _ _ _ D O  _ _  M E S A","empregado de mesa"],["M _ _ _ C O","médico"],["A L _ _ O","aluno"],["C _ N _ _ R","cantor"]].forEach(([p,a])=>
  K6.A.push(k=>text(k,a.length>10?5:4,"Write the profession (fill in the missing letters).",p,[a],`<b>${a}</b>.`)));
G.PROF.filter(x=>x[0]!==x[1]).forEach(([m,f])=>K6.A.push(k=>text(k,4,"Write the masculine form.",`a ${f} → o ___`,[m],`${G.profRule(m,f)}`)));
// B · article + plural
[["ano","os anos"],["nome","os nomes"],["idade","as idades"],["atriz","as atrizes"],["andar","os andares"],["profissão","as profissões"],["prédio","os prédios"],["apartamento","os apartamentos"],["apelido","os apelidos"],["nacionalidade","as nacionalidades"]].forEach(([n,a])=>
  K6.B.push(k=>text(k,/ões|izes|ares/.test(a)?6:4,"Write the definite article and the noun in the plural.",`${n} → ___`,[a],`<b>${a}</b>. ${/ões/.test(a)?"-ão → -ões here.":/izes|ares/.test(a)?"Words ending in -z or -r add -es.":"Add -s."}`)));
// C · personal data: matching, questions, ficha
[["estado","civil"],["código","postal"],["número","de telefone"],["último","nome"],["número","de telemóvel"]].forEach(([a,b])=>
  K6.C.push(k=>text(k,4,"Complete the expression.",`${a} ___`,a==="número"?["de telefone","de telemóvel"]:[b],a==="número"?"<b>número de telefone</b> / <b>número de telemóvel</b>.":`<b>${a} ${b}</b>.`)));
[["Qual é o seu nome?","(Qual é … nome?)",["Qual é o seu nome"]],["Como se escreve o seu último nome?","(… escreve … seu último nome?)",["Como se escreve o seu último nome"]],["Qual é a sua morada?","(… … sua morada?)",["Qual é a sua morada"]],["Em que andar mora?","(… … andar mora?)",["Em que andar mora"]],["Qual é o seu número de telemóvel?","(… … seu número … telemóvel?)",["Qual é o seu número de telemóvel"]],["Que idade tem?","(… idade tem?)",["Que idade tem"]],["Qual é o seu código postal?","(… … o seu … postal?)",["Qual é o seu código postal"]],["Qual é a sua profissão?","(… … sua profissão?)",["Qual é a sua profissão"]],["Qual é o seu estado civil?","(… … seu … civil?)",["Qual é o seu estado civil"]],["Qual é a sua nacionalidade?","(… … … nacionalidade?)",["Qual é a sua nacionalidade"]]].forEach(([full,hint,acc])=>
  K6.C.push(k=>text(k,6,"Write the complete question.",hint,acc,`<b>${full}</b> ${/Que idade/.test(full)?"(= Quantos anos tem?)":"<i>Qual é…?</i> asks for a specific piece of information."}`)));
[["Erika","primeiro nome"],["Gabler","último nome"],["28","idade"],["alemã","nacionalidade"],["T222000128","número de B.I. ou passaporte"],["casada","estado civil"],["advogada","profissão"],["Augsburger Straße, 41, Berlim","morada"],["10719","código postal"],["(49) 30 503 82 77","número de telefone"],["erikamn@yahoo.de","e-mail"]].forEach(([v,f],i,all)=>
  K6.C.push(k=>mc(k,3,"Registration form: which field is it?",`“${v}”`,[f,...sh(all.filter(x=>x[1]!==f)).slice(0,3).map(x=>x[1])],`“${v}” → <b>${f}</b>.`)));
// D · quanto
G.QN.forEach(([n,g,rest])=>K6.D.push(k=>text(k,g%2?5:4,"Write the correct form of quanto.",`quant___ ${n}`,[G.QF[g].toLowerCase().slice(5)||"o"],`<i>${n}</i> is ${G.GD[g]} → <b>${G.QF[g].toLowerCase()}</b> ${n} ${rest}?`)));
// E · possessives in context
[["Ele é italiano. O apelido ___ é Ciancio.","dele","ele → <b>dele</b>, after the noun."],["A: Qual é o nome do ___ país? (você) B: Moldávia.","seu","asking <i>você</i> → <b>seu</b>."],["Somos estudantes. O último nome da ___ professora é Gonçalves.","nossa","nós + <i>professora</i> → <b>nossa</b>."],["A: Qual é a ___ morada? (você)","sua","você + <i>morada</i> (feminine) → <b>sua</b>."],["B: A ___ morada é Rua da Boavista, 28. (eu)","minha","eu + <i>morada</i> → <b>minha</b>."],["Ela é de Espanha. O primeiro nome ___ é Rocío.","dela","ela → <b>dela</b>."]].forEach(([p,a,ex])=>
  K6.E.push(k=>text(k,5,"Complete with: sua / nossa / dela / seu / minha / dele.",p,[a],ex)));
// F · ordinals
G.ORD.forEach((o,i)=>K6.F.push(k=>text(k,i>5?5:4,"Write the corresponding ordinal.",`${G.CARD[i]} → ___`,[o],`${G.CARD[i]} → <b>${o}</b> (${i+1}.º).`)));
G.ORD.forEach((o,i)=>{if(i%2)K6.F.push(k=>text(k,4,"Write the corresponding cardinal number.",`___ ← ${o}`,[G.CARD[i]],`<b>${G.CARD[i]}</b> → ${o}.`))});
// G · pronunciation
K6.G.push(k=>mc(k,5,"In which word is the highlighted s pronounced differently?","<b>s</b>olteiro · profi<b>ss</b>ão · ca<b>s</b>ado · <b>s</b>étimo",["ca<b>s</b>ado","<b>s</b>olteiro","profi<b>ss</b>ão","<b>s</b>étimo"],"<i>casado</i>: s between vowels → [z]; the others → [s]."));
K6.G.push(k=>mc(k,4,"How is ss pronounced?","pa<b>ss</b>aporte",["[s]","[z]","[ʃ]","silent"],"<b>ss</b> = [s] always."));
K6.G.push(k=>mc(k,5,"How is the s pronounced?","Marroco<b>s</b>",["[ʃ]","[s]","[z]","silent"],"Final s → [ʃ]."));
// assign: K6 variant quotas A10 B7 C12 D6 E5 F8 G2; rest → CX6
const take={A:10,B:7,C:12,D:6,E:5,F:8,G:2};
Object.keys(K6).forEach(key=>{const L=sh(K6[key]);L.forEach((f,i)=>f(i<take[key]?"K6"+key:"CX6"))});

/* ================= PA · Possessivos e advérbios de lugar ================= */
const {pre,post}=G.possItems();
const preS=sh(pre.filter(x=>x.g<2)),preP=sh(pre.filter(x=>x.g>=2));
preS.slice(0,15).forEach((x,i)=>{
  if(i%3===2)mc("PA1",4,"Choose the possessive (singular).",`${cap(G.ART[x.g])} ___ ${x.n} ${x.p}. <small>(${x.o})</small>`,[x.ans,...x.forms.filter(f=>f!==x.ans)],G.possExplainPre(x));
  else text("PA1",i%3?5:4,i%3?"Write the article and the possessive.":"Write the possessive.",i%3?`___ ${x.n} ${x.p}. <small>(${x.o})</small>`:`${cap(G.ART[x.g])} ___ ${x.n} ${x.p}. <small>(${x.o})</small>`,[i%3?`${G.ART[x.g]} ${x.ans}`:x.ans],G.possExplainPre(x));
});
preP.slice(0,15).forEach((x,i)=>{
  if(i%3===2)mc("PA2",5,"Choose the possessive (plural).",`${cap(G.ART[x.g])} ___ ${x.n} ${x.p}. <small>(${x.o})</small>`,[x.ans,...x.forms.filter(f=>f!==x.ans)],G.possExplainPre(x));
  else text("PA2",i%3?6:5,i%3?"Write the article and the possessive.":"Write the possessive.",i%3?`___ ${x.n} ${x.p}. <small>(${x.o})</small>`:`${cap(G.ART[x.g])} ___ ${x.n} ${x.p}. <small>(${x.o})</small>`,[i%3?`${G.ART[x.g]} ${x.ans}`:x.ans],G.possExplainPre(x));
});
sh(post).slice(0,7).forEach(x=>text("PA3",5,"Type dele, dela, deles or delas.",`${cap(G.ART[x.g])} ${x.n} ___ ${x.p}. <small>(${x.o})</small>`,[x.ans],G.possExplainPost(x)));
multi("PA3",6,3,"Select ALL the correct sentences.","dele / dela / deles / delas",["A casa dele é grande.","Os livros delas estão aqui.","O carro deles é preto.","A dele casa é grande.","Os delas livros estão aqui.","O carro dela é dos pais."].slice(0,6),"Correct: the form with <b>dele/dela/deles/delas after the noun</b>. <i>A dele casa</i> is wrong. (<i>O carro dela é dos pais</i> is grammatical but says something else, so it isn't one of the three model answers.)".replace(" (<i>O carro dela é dos pais</i> is grammatical but says something else, so it isn't one of the three model answers.)",""),{options:["A casa dele é grande.","Os livros delas estão aqui.","O carro deles é preto.","A dele casa é grande.","Os delas livros estão aqui.","O deles carro é preto."]});
// PA4 · advérbios de lugar
mc("PA4",3,"The book is in your own hand.","O livro está ___.",["aqui","aí","ali","lá"],"<b>aqui</b> = here, near the speaker.");
mc("PA4",4,"The book is next to the person you're talking to.","O livro está ___.",["aí","aqui","ali","cá"],"<b>aí</b> = there, near the listener.");
mc("PA4",4,"The book is far from both of you.","O livro está ___.",["ali","aqui","aí","cá"],"<b>ali</b> = over there, far from both.");
text("PA4",5,"Type aqui, aí or ali. (On the phone: the other person is at home.)","— Está tudo bem ___ em casa?",["aí"],"The place is where the <b>listener</b> is → <b>aí</b>.");
text("PA4",4,"Type aqui, aí or ali. (You point to a car far away.)","O meu carro está ___.",["ali"],"Far from both → <b>ali</b>.");
text("PA4",4,"Type aqui, aí or ali. (The glasses are in your hand.)","Os meus óculos estão ___.",["aqui"],"Near the speaker → <b>aqui</b>.");
mc("PA4",5,"What does “cá” mean?","Vens cá amanhã?",["here (to where I am)","there","far away","at home"],"<b>cá</b> ≈ <i>aqui</i> (here, where I am), used especially with movement: <i>Vem cá!</i>");
mc("PA4",5,"What does “lá” mean?","Moro em Lisboa, mas os meus pais moram lá no Porto.",["there (far away, a place we mention)","here","near you","inside"],"<b>lá</b> = there (far, or a place already mentioned). Pairs: <i>cá / lá</i>, <i>aqui / ali</i>.");
mc("PA4",4,"Choose the opposite of “perto”.","perto ↔ ___",["longe","aqui","dentro","cá"],"<b>perto</b> (near) ↔ <b>longe</b> (far): <i>A escola fica perto de casa.</i>");
text("PA4",5,"Type de, da, do or dos.","A farmácia fica perto ___ escola.",["da"],"<b>perto de</b> / <b>longe de</b> + article: de + a escola = <b>da</b> escola.");
multi("PA4",5,3,"Select ALL the adverbs of place.","advérbios de lugar",["aqui","ali","longe","agora","sempre","muito"],"Place: <b>aqui, ali, longe</b> (also aí, cá, lá, perto). <i>Agora, sempre</i> are time; <i>muito</i> is quantity.");
mc("PA4",4,"Match the pairs: aqui / aí / ali ≈ isto / ___ / aquilo","isto · ? · aquilo",["isso","este","esse","lá"],"The same three distances: <b>isto–aqui</b>, <b>isso–aí</b>, <b>aquilo–ali</b>.");
module.exports=bank;
