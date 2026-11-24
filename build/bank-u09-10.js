// Units 9–10. Topics L9*/K9* → Unit 9, L10*/K10* → Unit 10
const G=require("./gen7.js");
const bank=[];const {mc,multi,text}=G.maker(bank);
const r=G.rng(9009),sh=G.shuffler(r),cap=G.cap;
const pick=(arr,n,not)=>sh(arr.filter(x=>x!==not)).slice(0,n);

/* ================= UNIDADE 9 · Tenho um irmão ================= */
// L9A · family relations
const REL=[["O pai do meu pai é o meu ___.","avô"],["A mãe da minha mãe é a minha ___.","avó"],["A irmã da minha mãe é a minha ___.","tia"],["O irmão do meu pai é o meu ___.","tio"],
 ["A filha da minha tia é a minha ___.","prima"],["O filho do meu tio é o meu ___.","primo"],["O filho do meu filho é o meu ___.","neto"],["A filha da minha filha é a minha ___.","neta"],
 ["A mãe do meu marido é a minha ___.","sogra"],["O marido da minha mãe é o meu ___.","pai"],["A filha dos meus pais é a minha ___.","irmã"],["A mulher do meu filho é a minha ___.","nora"]];
const FAMW=["avô","avó","tio","tia","primo","prima","neto","neta","sogra","pai","mãe","irmão","irmã","filho","filha"];
REL.forEach(([p,a],i)=>{if(a==="nora"){mc("L9A",7,"Family puzzle. Choose the word.",p,["nora","sogra","neta","prima"],"The wife of my son is my <b>nora</b> (daughter-in-law). I am her <i>sogra / sogro</i>.");return}
  (i%2?mc:text)("L9A",a==="sogra"?6:4,i%2?"Family puzzle. Choose the word.":"Family puzzle. Write the word.",p,i%2?[a,...pick(FAMW,3,a)]:[a],`→ <b>${a}</b>. Family words: avô/avó, pai/mãe, tio/tia, primo/prima, irmão/irmã, filho/filha, neto/neta; <i>a sogra</i> = mother-in-law.`)});
[["o pai + a mãe","os pais"],["o filho + a filha","os filhos"],["o avô + a avó","os avós"],["o irmão + a irmã","os irmãos"],["o tio + a tia","os tios"],["o neto + a neta","os netos"],["o primo + a prima","os primos"]].forEach(([p,a],i)=>
  text("L9A",i?4:5,"Write the plural that covers both.",`${p} = ___`,[a],`A mixed group takes the masculine plural: <b>${a}</b>.${a==="os pais"?" Careful: <i>os pais</i> = parents (not “fathers”).":""}${a==="os avós"?" Note the accent: avô/avó → <i>avós</i>.":""}`));
// L9B · masculine / feminine
[["o pai","a mãe"],["o irmão","a irmã"],["o filho","a filha"],["o rapaz","a rapariga"],["o marido","a mulher"],["o homem","a mulher"],["o namorado","a namorada"],["o avô","a avó"],["o amigo","a amiga"],["o primo","a prima"]].forEach(([m,f],i)=>
  i%2? text("L9B",m==="o rapaz"||m==="o marido"?6:3,"Write the masculine form.",`___ ↔ ${f}`,[m,m.slice(2)],`<b>${m}</b> ↔ ${f}.`)
     : text("L9B",m==="o rapaz"||m==="o marido"?6:3,"Write the feminine form.",`${m} ↔ ___`,[f,f.slice(2)],`${m} ↔ <b>${f}</b>.${m==="o rapaz"?" (rapaz = boy, rapariga = girl in PT-PT)":""}`));
[["A Ana não tem marido. Não é ___.","casada"],["A Beatriz não tem irmãos. É filha ___.","única"],["A minha avó ___ não trabalha. Tem 83 anos.","já"],["A Célia ___ tem 33 anos, mas ainda é estudante.","já"],["A Alice já não tem marido. É ___.","divorciada"],["A Mariana é pequena. ___ não anda na escola.","Ainda"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L9E",5,i%2?"Choose the missing word.":"Write the missing word (casada, única, já, ainda, divorciada).",p,i%2?[a,...["casada","única","já","ainda","divorciada","solteira"].filter(x=>x.toLowerCase()!==a.toLowerCase()).slice(0,3)]:[a],
   {casada:"not married → <b>não é casada</b>.",única:"<b>filho único / filha única</b> = only child.",já:"<b>já não</b> = no longer; <b>já</b> = already.",divorciada:"No longer has a husband → <b>divorciada</b>.",Ainda:"<b>ainda não</b> = not yet."}[a]));
mc("L9E",4,"React to bad news.","A: O meu irmão não vem à festa. B: ___",["Que pena!","Parabéns!","Ainda bem!","Boa estadia!"],"<b>Que pena!</b> = What a pity!");
mc("L9E",4,"Afonso is in your class. He is…","O Afonso está na minha ___.",["turma","família","escola primária","sala"],"<b>a turma</b> = class (group of students).");
mc("L9E",4,"Your cousin's boyfriend is good-looking. Informally:","O namorado dela é muito ___.",["giro","gira","feio","velha"],"<b>giro / gira</b> = cute, good-looking (informal PT-PT).");

// L9C · plural possessives
const PP=[["nós","filhos","os nossos"],["tu","malas","as tuas"],["você","filhas","as suas"],["vocês","carros","os vossos"],["ele","irmãos","dele"],["eu","chaves","as minhas"],["o senhor","filhos","os seus"],["ela","primas","dela"],["eles","pais","deles"],["elas","casas","delas"]];
PP.forEach(([o,n,a],i)=>{const post=/^de/.test(a);
  const prompt=post?`Os/As ${n} ___ moram em França. (${o})`:`___ ${n} estão aqui. (${o})`;
  const P=post?`${n.endsWith("as")?"As":"Os"} ${n} ___ moram em França. (${o})`:prompt;
  const opts=post?[a,"dele","dela","deles","delas"].filter((x,k,arr)=>arr.indexOf(x)===k):[a];
  if(post) mc("L9C",5,"Choose the possessive.",P,[a,...["dele","dela","deles","delas","seus"].filter(x=>x!==a).slice(0,3)],`For <i>${o}</i> we use <b>${a}</b> after the noun: <i>${n.endsWith("as")?"as":"os"} ${n} ${a}</i>.`);
  else text("L9C",5,"Write the article and possessive.",prompt,[a,cap(a)],`<i>${o}</i> + plural noun <i>${n}</i> → <b>${a}</b> ${n}. The possessive agrees with the thing, and takes the article.`);
});
text("L9C",6,"Write the sentence in the plural.","Este é o meu filho. → ___",["Estes são os meus filhos"],"este → <b>estes</b>, é → <b>são</b>, o meu filho → <b>os meus filhos</b>.");
text("L9C",6,"Write the sentence in the plural.","Aquela é a tia dele. → ___",["Aquelas são as tias dele"],"aquela → <b>aquelas</b>, é → <b>são</b>; <i>dele</i> doesn't change.");
text("L9C",6,"Write the sentence in the plural.","Essa é a vossa casa. → ___",["Essas são as vossas casas"],"essa → <b>essas</b>, a vossa casa → <b>as vossas casas</b>.");

// L9D · demonstratives
[["___ é a minha mãe. (near me)","Esta"],["___ são as minhas primas. (near me)","Estas"],["___ telemóvel é meu. (near me)","Este"],["___ são os meus pais. (near me)","Estes"],
 ["___ livro é teu. (near you)","Esse"],["___ cadeira é tua. (near you)","Essa"],["___ relógio é da Ana. (far)","Aquele"],["___ mesas são nossas. (far)","Aquelas"],["___ quadros são dele. (near me)","Estes"]].forEach(([p,a],i)=>{
  const all=["Este","Esta","Estes","Estas","Esse","Essa","Esses","Essas","Aquele","Aquela","Aqueles","Aquelas"];
  (i%2?mc:text)("L9D",4,i%2?"Choose the demonstrative.":"Write the correct demonstrative.",p,i%2?[a,...sh(all.filter(x=>x!==a&&x.slice(0,3)===a.slice(0,3)||x!==a&&x.length===a.length)).slice(0,3)]:[a],
   `este (near me) / esse (near you) / aquele (far) agree with the noun: masc./fem., sing./plural. → <b>${a}</b>.`)});
[["O que é ___? (a thing, near me)","isto","isto"],["___ senhora é a minha tia.","Esta","esta"],["___ é o meu amigo Jaime.","Este","este"],["Como se diz ___ em português? (a thing)","isto","isto"],["___ relógio é muito caro.","Este","este"]].forEach(([p,a])=>
  mc("L9D",5,"isto, este or esta?",p,[a,...["isto","este","esta"].filter(x=>x!==a.toLowerCase()).map(x=>/^___/.test(p)?cap(x):x)],`<b>isto</b> = “this thing” (never with a noun). <b>este/esta</b> = “this” + a noun, or a person: <i>Este é o Jaime.</i>`));

/* ================= UNIDADE 10 · Tenho olhos azuis ================= */
// L10A · appearance
[["Ele não é baixo. É ___.","alto"],["Ela não é gorda. É ___.","magra"],["Ele não tem cabelo. É ___.","careca"],["O cabelo dela não é curto. É ___.","comprido"],["Os olhos dele não são escuros. São ___.","claros"],["Ela não é morena. É ___.","loira"],["Ele tem cabelo vermelho. É ___.","ruivo"]].forEach(([p,a],i)=>
  (i%2?text:mc)("L10A",4,i%2?"Write the missing adjective.":"Choose the missing adjective.",p,i%2?[a,a==="loira"?"loura":a]:[a,...["alto","magra","careca","comprido","claros","loira","ruivo","gordo","baixa"].filter(x=>x!==a).slice(0,3)],
   `Opposites: alto ↔ baixo, magro ↔ gordo, curto ↔ comprido, claro ↔ escuro, loiro ↔ moreno. <i>careca</i> = bald, <i>ruivo</i> = red-haired. → <b>${a}</b>.`));
[["O Carlos tem ___. (moustache)","bigode"],["O Tiago tem ___. (beard)","barba"],["O Diogo usa ___. (glasses)","óculos"],["A Inês tem cabelo ___. (short)","curto"],["O Mário tem cabelo ___. (white)","branco"]].forEach(([p,a])=>
  text("L10A",4,"Write the word in Portuguese.",p,[a],`<b>${a}</b>. Remember: <i>ter</i> barba / bigode / cabelo…; <i>usar</i> óculos.`));
mc("L10A",5,"Which verb? “She wears glasses.”","Ela ___ óculos.",["usa","tem","é","está"],"In Portuguese you <b>usar</b> (use/wear) glasses: <i>Ela usa óculos.</i>");
mc("L10A",5,"Which verb? “He is of medium height.”","Ele ___ de altura média.",["é","tem","está","usa"],"<b>ser de altura média</b>. Height and build use <i>ser</i>; hair, eyes, beard use <i>ter</i>.");
mc("L10A",5,"Which is correct?","short hair",["Ela tem cabelo curto.","Ela tem cabelos curtos.","Ela é cabelo curto.","Ela tem o cabelo curta."],"In Portuguese <i>cabelo</i> is singular and uncountable: <b>tem cabelo curto</b>.");
mc("L10A",4,"About how old?","A minha tia tem ___ de 50 anos.",["cerca","perto","quase de","volta"],"<b>cerca de</b> = about, approximately.");
text("L10A",5,"Write the missing word.","A minha irmã é casada ___ um espanhol.",["com"],"<b>casado/a com</b> = married to.");
multi("L10A",5,3,"Select ALL the words that describe hair.","o cabelo…",["curto","loiro","comprido","alto","magro","cansado"],"Hair can be <b>curto, comprido, loiro</b> (castanho, escuro, branco…). <i>alto, magro</i> describe the person, <i>cansado</i> a state.");

// L10B · ser vs estar
[["Ela ___ muito cansada.","está"],["Estou em casa porque ___ doente.","estou"],["O meu irmão ___ loiro.","é"],["___ com fome! (nós)","Estamos"],["Este hotel ___ muito grande.","é"],["___ com frio? (tu)","Estás"],["Este prédio ___ muito velho.","é"],["Ele ___ careca.","é"],["___ com muito calor. (eu)","Estou"],["Xangai ___ uma cidade grande.","é"],["Não ___ com fome agora. (eu)","estou"],["A Sara ___ com sono.","está"],["Olá! ___ boa? (tu)","Estás"],["___ casada. (eu)","Sou"],["___ de férias. (nós)","Estamos"],["___ moreno ou loiro? (tu)","És"]].forEach(([p,a],i)=>{
  const lc=a.toLowerCase(),isSer=["é","és","sou","somos","são"].includes(lc);
  const alts={"está":"é","estou":"sou","é":"está","estamos":"somos","estás":"és","sou":"estou","és":"estás"};
  (i%2?mc:text)("L10B",5,i%2?"ser or estar? Choose.":"ser or estar? Write the correct form.",p,i%2?[a,/^___/.test(p)?cap(alts[lc]):alts[lc]]:[a],
   isSer?`Permanent features — appearance, size, age of a building, identity, marital status → <b>ser</b>: <b>${a}</b>.`:`Temporary states — tired, ill, hungry (estar com fome), on holiday, where you are now → <b>estar</b>: <b>${a}</b>.`)});
// L10C · estar com…
[["Quero beber água. Estou com ___.","sede"],["Quero comer. Estou com ___.","fome"],["Quero dormir. Estou com ___.","sono"],["Preciso de um casaco. Estou com ___.","frio"],["Abre a janela! Estou com ___.","calor"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L10C",4,i%2?"Choose the word.":"Write the word.",p,i%2?[a,...["sede","fome","sono","frio","calor"].filter(x=>x!==a).slice(0,3)]:[a],`<b>estar com ${a}</b> = to be ${({sede:"thirsty",fome:"hungry",sono:"sleepy",frio:"cold",calor:"hot"})[a]}. Not <i>ser</i>, and not <i>estar em</i>.`));
mc("L10C",5,"Find the correct sentence.","to be hot",["O Jorge está com calor.","O Jorge está em calor.","O Jorge é com calor.","O Jorge tem com calor."],"<b>estar com calor</b> (not “em calor”).");
// L10D · ver / ler
const VER=["vejo","vês","vê","vemos","veem"],LER=["leio","lês","lê","lemos","leem"],PS=["eu","tu","ele","nós","eles"];
[[0,"ler","muitos livros.","nós",3],[1,"ver","televisão.","eu",0],[2,"ler","muitos livros.","o Diogo",2],[3,"ver","pouca televisão.","eles",4],[4,"ler","normalmente?","tu",1],[5,"ver","muitos filmes.","a Sara",2],[6,"ler","jornais.","eles",4],[7,"ver","bem.","tu",1],[8,"ver","o mar daqui.","nós",3],[9,"ler","o jornal.","eu",0]].forEach(([i,v,c,s,p])=>{
  const F=v==="ver"?VER:LER,f=F[p];
  (i%3===1?mc:text)("L10D",p===4||p===1?6:5,i%3===1?`Choose the form of ${v}.`:`Write the correct form of ${v}.`,`${cap(s)} ___ ${c}`,i%3===1?[f,...F.filter(x=>x!==f).slice(0,3)]:[f],
   `<i>${v}</i> is irregular: ${F.join(", ")}. ${s} → <b>${f}</b>. Note the accents (vês, vê, lês, lê) and double e (veem, leem).`)});
mc("L10D",4,"Match: ler ___","ler ___",["jornais","televisão","tango","cigarros"],"<b>ler jornais</b>; ver televisão; dançar tango; fumar cigarros.");
mc("L10D",4,"Match: dançar ___","dançar ___",["tango","jornais","óculos","televisão"],"<b>dançar tango</b>.");
// L10E · qual / quais
[["___ é a sua morada?","Qual"],["___ são os seus filhos?","Quais"],["___ é o teu carro?","Qual"],["___ de vocês é o Rui?","Qual"],["___ são os livros da Susana?","Quais"],["___ são as tuas canetas?","Quais"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L10E",4,i%2?"qual or quais?":"Write qual or quais.",p,i%2?[a,a==="Qual"?"Quais":"Qual","Que","Quem"]:[a],`<b>Qual</b> + singular, <b>quais</b> + plural (é / são). → <b>${a}</b>.`));
// L10F · likes & error correction
[["Como são os filho da Diana?","Como são os filhos da Diana?"],["Qual são as tuas canetas?","Quais são as tuas canetas?"],["O Jorge está em calor.","O Jorge está com calor."],["O Daniel é com altura média.","O Daniel é de altura média."],["A minha irmã está muito baixa.","A minha irmã é muito baixa."],["Ela é casado com um brasileiro.","Ela é casada com um brasileiro."]].forEach(([w,a])=>
  text("K10F",7,"The sentence has a mistake. Write it correctly.",w,[a],`Correct: <b>${a}</b>`));
mc("K10F",4,"Which word is NOT about physical appearance?","odd one out",["sogra","barba","gordo","careca"],"<b>sogra</b> (mother-in-law) is family. barba, gordo, careca describe appearance.");
mc("K10F",4,"Which word is NOT about family?","odd one out",["escritório","primo","marido","tia"],"<b>escritório</b> (office) is about work.");
mc("K10P",4,"In which word is x pronounced differently (not [ʃ])?","x",["próxima","México","baixo","Xangai"],"In <b>próxima</b> x sounds [s]. In México, baixo, Xangai, sexta x = [ʃ].");
mc("K10P",5,"Which pair sounds exactly the same?","sounds",["vês / vez","avó / avô","país / pais","é / e"],"<b>vês</b> (you see) and <b>vez</b> (time) are both [veʃ]. The others differ: avó (open ó) / avô (closed ô); país (two syllables) / pais (one); é [ɛ] / e [i].");

module.exports=bank;
