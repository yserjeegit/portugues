/* ===== Easy / Hard mode: hints and extended explanations ===== */
const HINTS_PER_RUN=3;
const T_=(rows)=>`<table class="tipt">${rows.map(r=>`<tr>${r.map((c,i)=>i?`<td>${c}</td>`:`<th>${c}</th>`).join("")}</tr>`).join("")}</table>`;
const TIPS={
 greet:`<p><b>Greetings:</b> Bom dia (morning) · Boa tarde (afternoon) · Boa noite (evening/night, also goodbye).</p><p><b>chamar-se:</b> pronoun <i>after</i> the verb in statements (<i>Chamo-me Ana, Ele chama-se Rui</i>) but <i>before</i> it after question words and não (<i>Como te chamas? Não se chama</i>).</p>${T_([["eu","chamo-me","sou"],["tu","chamas-te","és"],["ele / você","chama-se","é"]])}`,
 prep:`<p><b>de</b> = origin, possession · <b>em</b> = location. Both merge with the article:</p>${T_([["","o","a","os","as"],["de","do","da","dos","das"],["em","no","na","nos","nas"]])}<p>No article: <i>Portugal, Angola, Marrocos</i>, most cities (<i>em Lisboa</i>), <i>em casa</i>. With article: <i>o Brasil, o Porto, os Estados Unidos</i>.</p>`,
 num:`<p><b>Numbers:</b> join every part with <b>e</b>: <i>trezentos e quarenta e cinco</i>. 100 = <i>cem</i>, 101 = <i>cento e um</i>. Irregular hundreds: duzentos, trezentos, quinhentos. European spelling: dezasseis, dezassete, dezanove.</p>`,
 nat:`<p><b>Nationalities</b> agree with the person:</p>${T_([["m.","f.","m. pl.","f. pl."],["inglês","inglesa","ingleses","inglesas"],["espanhol","espanhola","espanhóis","espanholas"],["alemão","alemã","alemães","alemãs"],["russo","russa","russos","russas"]])}<p>A mixed group takes the masculine plural.</p>`,
 cls:`<p><b>um / uma:</b> learn each noun with its gender (<i>o mapa, o dia</i> are masculine; <i>a parede</i> is feminine).</p><p><b>isto</b> near me · <b>isso</b> near you · <b>aquilo</b> far from both.</p><p><b>Colours</b> in -o agree: branco/branca/brancos/brancas; azul → azuis; verde → verdes.</p>`,
 pron:`<p><b>European Portuguese sounds:</b> unstressed final -o → [u]; unstressed e → [ɨ]; s at the end or before a consonant → [ʃ]; s between vowels → [z]; ss → [s]; initial r and rr → strong [ʁ]; -em → [ɐ̃j].</p>`,
 se:`${T_([["","ser","estar"],["eu","sou","estou"],["tu","és","estás"],["ele / você","é","está"],["nós","somos","estamos"],["eles / vocês","são","estão"]])}<p><b>ser</b>: identity, origin, nationality, profession, permanent location, days. <b>estar</b>: temporary states, feelings, where someone is now.</p>`,
 fic:`<p><b>ficar</b> (regular -ar): fico, ficas, fica, ficamos, ficam. Person + place = <i>to stay</i> (<i>Fico em casa</i>); place + place = <i>to be located</i> (<i>Onde fica Lisboa?</i>).</p>`,
 art:`${T_([["","singular","plural"],["masc.","o / um","os / uns"],["fem.","a / uma","as / umas"]])}<p><b>Plurals:</b> +s (livro → livros) · -r/-z/-s +es (andar → andares) · -l → -is (jornal → jornais) · -m → -ns (viagem → viagens) · -ão → -ões/-ães/-ãos.</p>`,
 verb:`${T_([["","-ar","-er","-ir"],["eu","-o","-o","-o"],["tu","-as","-es","-es"],["ele","-a","-e","-e"],["nós","-amos","-emos","-imos"],["eles","-am","-em","-em"]])}<p>-er and -ir only differ in the nós form.</p>`,
 ter:`${T_([["eu","tenho"],["tu","tens"],["ele / você","tem"],["nós","temos"],["eles / vocês","têm"]])}<p>Short answers repeat the verb: <i>Tens caneta? — Tenho. / Não, não tenho.</i></p>`,
 poss:`${T_([["","m.","f.","m. pl.","f. pl."],["eu","o meu","a minha","os meus","as minhas"],["tu","o teu","a tua","os teus","as tuas"],["você","o seu","a sua","os seus","as suas"],["nós","o nosso","a nossa","os nossos","as nossas"],["vocês","o vosso","a vossa","os vossos","as vossas"]])}<p>The possessive agrees with the <b>thing</b>, not the owner. For ele/ela/eles/elas use <b>dele, dela, deles, delas</b> after the noun: <i>o carro dela</i>.</p>`,
 place:`<p><b>aqui</b> near me · <b>aí</b> near you · <b>ali</b> far from both (like isto / isso / aquilo). <b>cá</b> ≈ here, <b>lá</b> = there, far away. <b>perto de / longe de</b> + article: <i>perto da escola</i>.</p><p><b>em casa</b> has no article; <i>no carro, na rua, no escritório</i>.</p>`,
 dem:`${T_([["","m.","f.","m. pl.","f. pl."],["near me","este","esta","estes","estas"],["near you","esse","essa","esses","essas"],["far","aquele","aquela","aqueles","aquelas"]])}<p>Before a noun they agree with it; alone, use isto / isso / aquilo for things.</p>`,
 eque:`<p><b>é que</b> goes right after the question word: <i>Onde é que moras? O que é que tens? Quem é que é?</i> It adds emphasis; the meaning doesn't change.</p>`,
 prof:`<p><b>Professions:</b> -o → -a (médico/médica) · -or → -ora (professor/professora) · ator → atriz · -e and -ista don't change (estudante, jornalista).</p><p>After <i>ser</i> there is <b>no article</b>: <i>Sou enfermeiro. Ela é advogada.</i></p>`,
 ord:`<p><b>Ordinals:</b> primeiro, segundo, terceiro, quarto, quinto, sexto, sétimo, oitavo, nono, décimo. Feminine: -a (a segunda rua). They go <b>before</b> the noun: <i>o terceiro andar</i>.</p><p>R/C = rés do chão · Esq. = esquerdo · Dto. = direito.</p>`,
 qw:`<p><b>Qual é…?</b> for a piece of information (nome, morada, profissão). <b>Que idade tem?</b> = Quantos anos tem? <b>Quanto</b> agrees with the noun: quanto dinheiro, quanta água, quantos anos, quantas línguas.</p>`,
 data:`<p><b>Personal data:</b> o nome / o apelido (surname) · a idade · a nacionalidade · o estado civil (solteiro, casado, divorciado) · a profissão · a morada · o código postal · o número de telefone · @ = arroba, . = ponto.</p>`,
 aviao:`<p><b>No avião:</b> café ou chá? · com / sem açúcar · água com gás / sem gás · faz favor = please · Mais alguma coisa? = anything else? · Aqui está = here it is.</p>`
};
const TIPMAP={U1:"greet",C1:"greet",U2:"prep",C2:"prep",P1:"prep",P2:"prep",P3:"prep",P4:"prep",P5:"prep",K5F:"place",NUM:"num",NAT:"nat",C3:"nat",U4:"cls",C4:"cls",
 PRON:"pron",C7:"pron",L5G:"pron",L6F:"pron",K6G:"pron",SE:"se",FIC:"fic",ART:"art",K5A:"art",K6B:"art",L5A:"art",VERB:"verb",
 L5B:"ter",K5B:"ter",K5C:"ter",C6:"poss",L5C:"poss",K5G:"poss",K5H:"poss",PA1:"poss",PA2:"poss",PA3:"poss",X5:"poss",K6E:"poss",K5E:"poss",
 L5D:"place",K5D:"place",PA4:"place",L5F:"dem",L5E:"eque",K5I:"eque",L6A:"prof",K6A:"prof",L6B:"ord",K6F:"ord",L6C:"qw",K6D:"qw",
 L6D:"data",L6E:"data",K6C:"data",X6:"prof",CX6:"data",C5:"aviao"};
Object.assign(TIPS,{
 adj:`<p><b>Adjectives</b> agree with the noun and usually come after it: <i>uma rua antiga</i>.</p>${T_([["m.","f.","m. pl.","f. pl."],["bonito","bonita","bonitos","bonitas"],["grande","grande","grandes","grandes"],["difícil","difícil","difíceis","difíceis"],["bom","boa","bons","boas"],["mau","má","maus","más"]])}<p><i>muito / bastante</i> go before the adjective (<i>muito caro</i>) and after the verb (<i>gosto muito</i>).</p>`,
 gostar:`<p><b>gostar de</b> + noun / infinitive. de joins the article: do, da, dos, das. <i>Gosto do Porto, da praia, de cozinhar.</i> de + isto = <b>disto</b>, de + aqui = <b>daqui</b>, em + isso = <b>nisso</b>.</p><p><b>adorar</b> and <b>detestar</b> take no de: <i>Adoro praia.</i></p>`,
 work:`<p>em + um = <b>num</b>, em + uma = <b>numa</b>, de + um = <b>dum</b>, de + uma = <b>duma</b> (a + um stays <i>a um</i>).</p><p><b>muito / pouco</b> agree with nouns (muitas horas, pouca água) but not with verbs (trabalha muito). <b>por</b> dia / semana = per day / week.</p>`,
 border:`<p><b>Na fronteira:</b> Qual é o motivo da sua visita? — Estou aqui <b>de</b> férias / <b>em</b> trabalho / <b>para</b> estudar. Quanto tempo fica? É a sua primeira vez? Boa estadia! Answer yes by repeating the verb: <i>Tenho. Fico.</i></p>`,
 fam:`<p><b>Family:</b> avô/avó, pai/mãe, tio/tia, primo/prima, irmão/irmã, filho/filha, neto/neta, marido/mulher, rapaz/rapariga, a sogra. Mixed groups use the masculine plural: <i>os pais</i> = parents, <i>os avós</i> = grandparents.</p>`,
 possPl:`${T_([["","m. pl.","f. pl."],["eu","os meus","as minhas"],["tu","os teus","as tuas"],["você","os seus","as suas"],["nós","os nossos","as nossas"],["vocês","os vossos","as vossas"]])}<p>For ele/ela/eles/elas: <b>dele, dela, deles, delas</b> after the noun.</p>`,
 dem:`${T_([["","m.","f.","m. pl.","f. pl.","thing"],["near me","este","esta","estes","estas","isto"],["near you","esse","essa","esses","essas","isso"],["far","aquele","aquela","aqueles","aquelas","aquilo"]])}`,
 look:`<p><b>ser</b> alto/baixo, magro/gordo, loiro/moreno/ruivo, careca, de altura média. <b>ter</b> cabelo curto/comprido, olhos azuis/claros/escuros, barba, bigode. <b>usar</b> óculos.</p>`,
 se2:`<p><b>ser</b> = permanent features (appearance, size, identity). <b>estar</b> = temporary states: cansado, doente, <b>com</b> fome / sede / frio / calor / sono.</p>`,
 verler:`${T_([["","ver","ler"],["eu","vejo","leio"],["tu","vês","lês"],["ele","vê","lê"],["nós","vemos","lemos"],["eles","veem","leem"]])}`,
 qual:`<p><b>Qual é…?</b> + singular, <b>Quais são…?</b> + plural.</p>`,
 ir:`${T_([["eu","vou"],["tu","vais"],["ele / você","vai"],["nós","vamos"],["eles / vocês","vão"]])}<p>ir <b>a</b>: a + o = <b>ao</b>, a + a = <b>à</b>, a + os = <b>aos</b>, a + as = <b>às</b>. Vou <b>a</b> casa, <b>a</b> Lisboa, <b>a</b> um restaurante.</p>`,
 tags:`<p><b>Confirmation tags:</b> affirmative → <i>não</i> + same verb (<i>És médica, não és?</i>); negative → always <b>pois não?</b> (<i>Não és médica, pois não?</i>).</p><p><b>cá</b> = here (my country/city), <b>lá</b> = there (far away).</p>`,
 cafe:`<p><b>Num café:</b> uma bica (cheia), uma meia de leite, um pastel de nata, uma tosta mista, um croissant simples, uma água natural/fresca. Para levar? A conta é junta ou separada? Quanto é? O seu troco. Não faz mal.</p>`,
 horas:`<p><b>Que horas são?</b> É uma / São duas (horas) / É meio-dia / É meia-noite. :15 e um quarto, :30 e meia; after :30 count down: <i>São vinte para as três, É um quarto para as três</i>.</p><p><b>A que horas…?</b> À uma, às duas, ao meio-dia, à meia-noite. <b>daqui a</b> 10 minutos; <b>faltam</b> 10 minutos <b>para</b>…</p>`,
 datas:`<p>Months are lower case: janeiro … dezembro. <b>em</b> + month/year/holiday (em maio, em 1990, no Natal, na Páscoa); <b>a</b> + date (a 10 de março) or <i>no dia</i> 10.</p>${T_([["fazer","faço, fazes, faz, fazemos, fazem"]])}<p><i>fazer anos</i> = to have a birthday. <i>Quantos são hoje?</i> = what's the date?</p>`,
 refl:`${T_([["eu","levanto-me","não me levanto"],["tu","levantas-te","não te levantas"],["ele","levanta-se","não se levanta"],["nós","levantamo-nos","não nos levantamos"],["eles","levantam-se","não se levantam"]])}<p>The pronoun goes before the verb after <i>não</i>, question words, <i>nunca, sempre, já, também, porque, que</i>.</p>`,
 apara:`<p>ir / voltar <b>a</b> = short visit (Vou a casa, volto já), <b>para</b> = to stay (Vou para casa). chegar <b>a</b>: chego a casa, ao escritório.</p>`,
 tempo:`<p><b>de</b> manhã, <b>à</b> tarde, <b>à</b> noite, <b>na</b> hora do almoço, <b>durante</b> a semana. Habit: <b>ao</b> sábado, <b>à</b> sexta. Once: <b>no</b> sábado, <b>na</b> sexta. <b>das</b> nove <b>às</b> cinco; <b>por volta das</b> dez.</p><p>sempre → normalmente → às vezes → raramente → nunca.</p>`
});
Object.assign(TIPMAP,{L7A:"adj",L7D:"adj",K7D:"adj",L7E:"adj",K7E:"adj",L7B:"gostar",L7C:"gostar",K7P:"pron",L8A:"work",L8B:"work",L8C:"work",L8D:"verb",L8E:"work",K8E:"art",K8P:"pron",L8F:"border",
 L9A:"fam",L9B:"fam",L9E:"fam",L9C:"possPl",L9D:"dem",L10A:"look",L10B:"se2",L10C:"se2",L10D:"verler",L10E:"qual",K10F:"look",K10P:"pron",
 L11A:"ir",L11B:"ir",L11C:"gostar",L11D:"ir",L11E:"art",K11P:"pron",L12A:"tags",L12B:"tags",L12C:"tags",L12D:"tags",L12E:"cafe",K12P:"pron",
 L13A:"horas",L13B:"horas",L13C:"horas",L13D:"datas",L13E:"datas",K13P:"pron",L14A:"refl",L14B:"refl",L14C:"refl",L14D:"apara",L14E:"tempo",L14F:"tempo",K14P:"pron"});
function tipFor(q){const k=TIPMAP[q.topic];if(k==="prof"&&/andar|ordinal|º/.test(q.prompt+q.ask))return TIPS.ord;if((q.topic==="X6"||q.topic==="CX6")&&/quant/i.test(q.prompt+q.ask))return TIPS.qw;return k?TIPS[k]:""}
const reEsc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
function answers(q){return q.type==="text"?q.accept:q.type==="mc"?[plain(q.options[0])]:q.options.slice(0,q.nRight).map(plain)}
function maskedRule(q){
  let t=plain(q.explain.replace(/<b>[\s\S]*?<\/b>/g,"<b>___</b>"));
  answers(q).forEach(a=>{if(a&&a.trim().length>1)t=t.replace(new RegExp(reEsc(a.trim()),"gi"),"___")});
  t=t.replace(/(___\s*)+/g,"___ ");
  const sents=t.match(/[^.!?]+[.!?]*/g)||[t];
  const words=x=>x.replace(/___/g,"").split(/\s+/).filter(w=>/[a-zà-ú]{2}/i.test(w)).length;
  let out=sents.find(x=>words(x)>=4)||sents[0];
  out=out.trim().replace(/^(___\s*[?!.:,→-]*\s*)+/,"").trim();
  return out?out.charAt(0).toUpperCase()+out.slice(1):"";
}
function letterPattern(a){const w=a.trim().split(/\s+/);
  if(w.length>=4)return `Starts with “${w[0]}” · ${w.length} words`;
  return w.map(x=>[...x].map((c,i)=>i===0?c:/[\-’']/.test(c)?c:"_").join(" ")).join("   ")+` · ${a.replace(/\s/g,"").length} letters`}
function makeHint(q,r,k){
  const rule=maskedRule(q);let main="";
  if(q.type==="text")main=`<b>Pattern:</b> <span class="pat">${esc(letterPattern(q.accept[0]))}</span>`;
  else if(q.type==="mc"){const wrong=r.opt[k].filter(oi=>oi!==0);const el=shuffle(wrong).slice(0,Math.min(2,wrong.length-1));r.elim[k]=el;main=el.length?`<b>${el.length===1?"One wrong option is":"Two wrong options are"} crossed out.</b>`:""}
  else{const good=r.opt[k].filter(oi=>oi<q.nRight);r.rev[k]=good[Math.floor(Math.random()*good.length)];main=`<b>One correct option is marked.</b> There are ${q.nRight} correct options in total.`}
  r.hint[k]={main,rule};
}
function editDiff(given,correct){ // returns HTML of the correct answer with letters the learner missed or got wrong highlighted
  const a=[...given.toLowerCase()],b=[...correct],B=[...correct.toLowerCase()],n=a.length,m=b.length;
  const D=Array.from({length:n+1},(_,i)=>Array(m+1).fill(0));for(let i=0;i<=n;i++)D[i][0]=i;for(let j=0;j<=m;j++)D[0][j]=j;
  for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)D[i][j]=Math.min(D[i-1][j]+1,D[i][j-1]+1,D[i-1][j-1]+(a[i-1]===B[j-1]?0:1));
  const mark=Array(m).fill(false);let i=n,j=m;
  while(i>0&&j>0){if(a[i-1]===B[j-1]&&D[i][j]===D[i-1][j-1]){i--;j--}else if(D[i][j]===D[i-1][j-1]+1){mark[j-1]=true;i--;j--}else if(D[i][j]===D[i][j-1]+1){mark[j-1]=true;j--}else i--}
  while(j>0){mark[j-1]=true;j--}
  return b.map((c,x)=>mark[x]?`<mark>${esc(c)}</mark>`:esc(c)).join("");
}
function easyExtra(q,a){
  let h="";
  if(q.type==="text"&&a.given){const c=q.accept[0];h+=`<div class="xrow"><span class="xl">You wrote</span><span class="xv bad">${esc(a.given)}</span></div><div class="xrow"><span class="xl">Correct</span><span class="xv">${editDiff(a.given,c)}</span></div><p class="hint">Highlighted letters are the ones that were missing or different${a.near?" (here only the accents)":""}.</p>`}
  else if(q.type==="mc"&&a.given)h+=`<div class="xrow"><span class="xl">You chose</span><span class="xv bad">${esc(a.given)}</span></div><div class="xrow"><span class="xl">Correct</span><span class="xv">${esc(plain(q.options[0]))}</span></div>`;
  const tip=tipFor(q);if(tip)h+=`<details class="tip" open><summary>Remember the rule</summary>${tip}</details>`;
  return h?`<div class="xbox">${h}</div>`:"";
}
