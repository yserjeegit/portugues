// Livro do aluno · Unit 6 variant (L6*) + Unit 5/6 pools for the mixed 1–6 variants (X5, X6)
const G=require("./gen6.js");
const bank=[];const {mc,multi,text}=G.maker(bank);
const r=G.rng(606),sh=G.shuffler(r),cap=G.cap;

/* ================= Unit 6 pools ================= */
// professions
const profItems=[];
G.PROF.forEach(([m,f,en],i)=>{
  if(m!==f)profItems.push(k=>text(k,4,"Write the feminine form.",`o ${m} → a ___`,[f],`${G.profRule(m,f)}`));
  profItems.push(k=>text(k,4,"Write the profession in Portuguese.",`${i%2?"A Joana":"O Pedro"} é ___. <small>(${en.split(" / ")[i%2?1:0]||en})</small>`,[i%2?f:m],`Profession after <i>ser</i> has <b>no article</b>: <i>${i%2?"A Joana é "+f:"O Pedro é "+m}</i>. ${G.profRule(m,f)}`));
});
G.PROF.slice(0,10).forEach(([m,f,en],i)=>{const others=sh(G.PROF.filter(x=>x[0]!==m)).slice(0,3);
  profItems.push(k=>mc(k,2,"What is this profession in Portuguese?",`${en.split(" / ")[0]} = ___`,[m,...others.map(x=>x[0])],`<b>${m}</b> (feminine: ${f}).`))});
const profFixed=[
 k=>mc(k,4,"Choose the correct sentence (European Portuguese).","“I'm a doctor.”",["Sou médico.","Sou o médico.","Sou uma médico.","Estou médico."],"With <i>ser</i> + profession there is <b>no article</b>: <i>Sou médico. Ela é professora.</i> A profession uses <i>ser</i>, not <i>estar</i>."),
 k=>mc(k,5,"Which pair is correct?","masculino / feminino",["o ator / a atriz","o ator / a atora","o atriz / a ator","o actor / a actriza"],"<b>ator → atriz</b> is irregular. (Pre-reform spelling was <i>actor/actriz</i>.)"),
 k=>multi(k,5,3,"Select ALL the professions that are the same for men and women.","o / a …",["estudante","jornalista","dentista","professor","médico","cantor"],"Words in <i>-e</i> and <i>-ista</i> don't change: <b>o/a estudante, o/a jornalista, o/a dentista</b>. <i>Professor → professora, médico → médica, cantor → cantora</i>."),
 k=>text(k,5,"Answer the question (you are a nurse, a man).","Qual é a sua profissão? ___",["Sou enfermeiro","Eu sou enfermeiro"],"Answer with <i>ser</i> and no article: <b>Sou enfermeiro.</b>"),
 k=>mc(k,3,"What does it mean?","Qual é a tua profissão?",["What's your job?","Where do you work?","What's your name?","Are you a student?"],"<b>A profissão</b> = job, profession. <i>Qual é a tua profissão?</i> (informal) / <i>Qual é a sua profissão?</i> (formal).")
];
// ordinals
const ordItems=[];
G.ORD.forEach((o,i)=>{
  ordItems.push(k=>text(k,3+(i>5?1:0),"Write the ordinal number (masculine).",`${G.CARD[i]} → ___ <small>(${i+1}.º)</small>`,[o],`${i+1}.º = <b>${o}</b> (feminine ${G.ordF(o)}, ${i+1}.ª).`));
  ordItems.push(k=>text(k,4,"Complete with the ordinal.",`Moro no ___ andar. <small>(${i+1}.º)</small>`,[o],`<i>O andar</i> is masculine: ${i+1}.º = <b>${o}</b>. Ordinals go before the noun.`));
});
[[1,"a ___ rua à direita"],[2,"a ___ porta à esquerda"],[4,"a ___ semana de aulas"],[9,"a ___ vez"]].forEach(([i,p])=>ordItems.push(k=>text(k,5,"Complete with the ordinal (feminine).",`${p} <small>(${i+1}.ª)</small>`,[G.ordF(G.ORD[i])],`Ordinals agree in gender: ${G.ORD[i]} → <b>${G.ordF(G.ORD[i])}</b> (${i+1}.ª).`)));
const ordFixed=[
 k=>mc(k,4,"How do you read the sign?","Praça D. Pedro IV",["Praça Dom Pedro Quarto","Praça Dom Pedro Quatro","Praça Dom Pedro Quarenta","Praça Dom Pedro Décimo"],"Kings and queens are read with ordinals: <b>D. Pedro IV = Dom Pedro Quarto</b>; Teatro D. Maria II = Dona Maria Segunda."),
 k=>text(k,5,"What does R/C mean? Write it in full.","R/C = ___",["rés do chão","rés-do-chão"],"<b>R/C = rés do chão</b> (ground floor). Esq. = esquerdo, Dto. = direito."),
 k=>mc(k,4,"Read the address.","1.º Esq.",["primeiro esquerdo","primeiro direito","um esquerdo","primeira esquerda"],"<b>1.º Esq.</b> = primeiro (andar) esquerdo: first floor, left-hand flat."),
 k=>text(k,5,"Answer: you live on the 3rd floor.","Em que andar moras? — No ___.",["terceiro"],"<b>No terceiro</b> (andar). em + o = no."),
 k=>mc(k,5,"Choose the correct word order.","the first name",["o primeiro nome","o nome primeiro","primeiro o nome","o nome o primeiro"],"Ordinals come <b>before</b> the noun: <i>o primeiro nome, o último nome</i>; but <i>completo</i> comes after: <i>o nome completo</i>.")
];
// quanto
const QA={dinheiro:"Vinte euros.",água:"Dois litros.",anos:"Trinta e dois.",línguas:"Três.",alunos:"Doze.",malas:"Duas.",lápis:"Cinco.",carros:"Um.",países:"Dez.",cidades:"Quatro.",irmãos:"Dois.",filhos:"Três.",café:"Muito pouco.",horas:"Oito.",pessoas:"Vinte.",tempo:"Pouco."};
const quItems=G.QN.map(([n,g,rest])=>k=>text(k,g===0||g===2?4:5,"Type quanto, quanta, quantos or quantas.",`___ ${n} ${rest}? — ${QA[n]}`,[G.QF[g]],`<i>Quanto</i> agrees with the noun: <i>${n}</i> is ${G.GD[g]} → <b>${G.QF[g]}</b>.`));
// question words / dados pessoais
const qwItems=[
 k=>text(k,3,"Complete the question.","___ é o seu nome? — Paulo Albuquerque.",["Qual"],"<b>Qual é…?</b> asks for a piece of information: o nome, a morada, a profissão, o estado civil."),
 k=>text(k,4,"Complete the question.","___ idade tem? — 24 anos.",["Que"],"<b>Que idade tem?</b> = <i>Quantos anos tem?</i>"),
 k=>text(k,4,"Complete the question.","___ anos tem? — 24.",["Quantos"],"<i>Anos</i> is masculine plural → <b>Quantos anos</b> tem?"),
 k=>text(k,4,"Complete the question.","___ é a sua morada? — Rua das Flores, 18.",["Qual"],"<b>Qual é a sua morada?</b> = What's your address?"),
 k=>text(k,5,"Complete the question.","___ se escreve o seu apelido? — C-O-S-T-A.",["Como"],"<b>Como se escreve…?</b> = How do you spell…?"),
 k=>text(k,4,"Complete the question.","Em ___ andar mora? — No segundo.",["que"],"<b>Em que andar</b> mora? = Which floor do you live on?"),
 k=>mc(k,4,"Which questions ask for the same information?","Quantos anos tem?",["Que idade tem?","Qual é o seu nome?","É casado?","Onde mora?"],"<b>Quantos anos tem?</b> = <b>Que idade tem?</b> (age)."),
 k=>mc(k,4,"Which questions ask for the same information?","Onde é que mora?",["Qual é a sua morada?","Qual é o seu estado civil?","Como se chama?","Que idade tem?"],"<b>Onde (é que) mora?</b> ≈ <b>Qual é a sua morada?</b>"),
 k=>mc(k,4,"Which question fits the answer?","___ — Sou casado.",["Qual é o seu estado civil?","Qual é a sua profissão?","Onde mora?","Quantos anos tem?"],"<b>O estado civil</b> = marital status: solteiro, casado, divorciado.")
];
const datItems=[
 ["Chamo-me Mafalda Lemos.","nome"],["Sou portuguesa.","nacionalidade"],["Tenho 32 anos.","idade"],["Sou advogada.","profissão"],["Moro em Lisboa.","morada"],["Sou casada.","estado civil"]
].map(([s,f],i,a)=>k=>mc(k,3,"Which personal detail is this?",`“${s}”`,[f,...a.filter(x=>x[1]!==f).slice(0,3).map(x=>x[1])],`“${s}” → <b>${f}</b>.`));
const datFixed=[
 k=>mc(k,3,"What does it mean?","o apelido",["surname","nickname","address","first name"],"<b>O apelido</b> = surname (last name). A nickname is <i>a alcunha</i>."),
 k=>mc(k,3,"What does it mean?","o código postal",["postcode","phone number","ID number","street"],"<b>O código postal</b> = postcode, e.g. 1200-015 Lisboa."),
 k=>text(k,5,"Write the word (a woman, married).","A Mafalda é ___.",["casada"],"<i>Casado</i> agrees with the person: <b>casada</b>. Also: solteira, divorciada."),
 k=>text(k,4,"How do you say @ in an email address?","@ = ___",["arroba"],"<b>@ = arroba</b>, <b>. = ponto</b>: christrek arroba gmail ponto com."),
 k=>mc(k,3,"Choose the word for “single” (not married).","Sou ___.",["solteiro","casado","divorciado","sozinho"],"<b>Solteiro / solteira</b> = single."),
 k=>mc(k,4,"What is a “ficha de inscrição”?","ficha de inscrição",["registration form","ID card","driving licence","job interview"],"<b>A ficha de inscrição</b> = registration form (name, age, address…).")
];
const abcItems=[
 k=>mc(k,3,"Which letter is it?","agá",["H","A","G","J"],"The letter <b>H</b> is called <i>agá</i>. It is silent in Portuguese: <i>hotel</i> [ɔˈtɛɫ]."),
 k=>mc(k,3,"Which letter is it?","jota",["J","G","I","Y"],"<b>J</b> = <i>jota</i>; G = <i>gê</i>; I = <i>i</i>."),
 k=>mc(k,4,"Which letter is it?","xis",["X","S","Z","C"],"<b>X</b> = <i>xis</i>; S = <i>esse</i>; Z = <i>zê</i>."),
 k=>mc(k,4,"Which letter is it?","erre",["R","E","L","H"],"<b>R</b> = <i>erre</i>; L = <i>ele</i>."),
 k=>mc(k,3,"What does B.I. stand for?","B.I.",["bilhete de identidade","banco internacional","boletim informativo","bilhete individual"],"<b>B.I. = bilhete de identidade</b> (ID card; today the <i>Cartão de Cidadão</i>)."),
 k=>mc(k,3,"What does it mean?","Como se escreve o seu nome?",["How do you spell your name?","What is your full name?","Where do you write your name?","Can you repeat your name?"],"<b>Como se escreve…?</b> = How is it spelled?"),
 k=>text(k,6,"Write a sentence with these words.","andar / no / mora / terceiro / ela",["Ela mora no terceiro andar"],"<b>Ela mora no terceiro andar.</b> The ordinal goes before <i>andar</i>."),
 k=>text(k,7,"Write a question with these words.","seu / é / nome / qual / completo / o",["Qual é o seu nome completo"],"<b>Qual é o seu nome completo?</b> <i>Completo</i> comes after the noun."),
 k=>text(k,7,"Write a sentence with these words.","dele / último / Pereira / nome / o / é",["O último nome dele é Pereira"],"<b>O último nome dele é Pereira.</b> <i>Último</i> before the noun, <i>dele</i> after it."),
 k=>text(k,7,"Write a question with these words.","teu / primeiro / se / como / nome / escreve / o",["Como se escreve o teu primeiro nome"],"<b>Como se escreve o teu primeiro nome?</b>")
];
const pronItems=[
 k=>mc(k,4,"How is ss pronounced?","pa<b>ss</b>aporte · Rú<b>ss</b>ia · no<b>ss</b>o",["[s]","[z]","[ʃ]","silent"],"<b>ss</b> is always [s]: passaporte, Rússia, nosso, dezassete."),
 k=>mc(k,5,"How is the s pronounced?","ca<b>s</b>ado · ingle<b>s</b>a · pa<b>í</b>s → casado",["[z]","[s]","[ʃ]","silent"],"A single <b>s between vowels</b> sounds [z]: casado, inglesa, mesa, brasileiro."),
 k=>multi(k,6,3,"Select ALL the words where s sounds [ʃ].","s → [ʃ]",["Espanha","nós","Marrocos","casado","inglesa","professor"],"<b>s</b> at the end of a word or before a consonant → [ʃ]: Espanha, nós, Marrocos. <i>casado, inglesa</i> → [z]; <i>professor</i> (ss) → [s]."),
 k=>mc(k,4,"How does en-/em- at the start of a word sound?","enfermeiro · engenheiro · empregado",["nasal [ẽ]","open [ɛ]","[i]","silent"],"Initial <b>en-/em-</b> is a nasal vowel [ẽ]: enfermeiro, engenheiro, empregado, empresário."),
 k=>mc(k,5,"In which word is the highlighted letter pronounced differently?","<b>s</b>olteiro · profi<b>ss</b>ão · ca<b>s</b>ado · <b>s</b>étimo",["ca<b>s</b>ado","<b>s</b>olteiro","profi<b>ss</b>ão","<b>s</b>étimo"],"<i>casado</i>: s between vowels = [z]. The others are [s].")
];
/* ---- assign Unit 6: variant (L6*) first, rest to X6 pool ---- */
const P=sh(profItems),O=sh(ordItems),Qu=sh(quItems);
profFixed.slice(0,4).forEach(f=>f("L6A"));P.slice(0,8).forEach(f=>f("L6A"));
ordFixed.slice(0,4).forEach(f=>f("L6B"));O.slice(0,5).forEach(f=>f("L6B"));
qwItems.slice(0,6).forEach(f=>f("L6C"));Qu.slice(0,4).forEach(f=>f("L6C"));
datItems.slice(0,4).forEach(f=>f("L6D"));datFixed.slice(0,5).forEach(f=>f("L6D"));
abcItems.slice(0,3).forEach(f=>f("L6E"));abcItems.slice(6,9).forEach(f=>f("L6E"));
pronItems.slice(0,4).forEach(f=>f("L6F"));
// X6: unused ones
[profFixed[4],...P.slice(8,16),ordFixed[4],...O.slice(5,11),...qwItems.slice(6),...Qu.slice(4,9),...datItems.slice(4),datFixed[5],...abcItems.slice(3,6),abcItems[9],pronItems[4]].forEach(f=>f("X6"));

/* ================= Unit 5 pool for mixed variants (X5) ================= */
const {pre,post}=G.possItems();
sh(pre).slice(0,8).forEach((x,i)=>{
  if(i%2)text("X5",5,"Complete with the article and the possessive.",`___ ${x.n} ${x.p}. <small>(${x.o})</small>`,[`${G.ART[x.g]} ${x.ans}`],G.possExplainPre(x));
  else mc("X5",4,"Choose the possessive.",`${cap(G.ART[x.g])} ___ ${x.n} ${x.p}. <small>(${x.o})</small>`,[x.ans,...x.forms.filter(f=>f!==x.ans)],G.possExplainPre(x));
});
sh(post).slice(0,4).forEach(x=>text("X5",6,"Type dele, dela, deles or delas.",`${cap(G.ART[x.g])} ${x.n} ___ ${x.p}. <small>(${x.o})</small>`,[x.ans],G.possExplainPost(x)));
const dn=sh(G.DNOUN);["me","you","far","me","you"].forEach((pl,i)=>{const [n,g,p]=dn[i];const a=G.DEM[pl][g];
  text("X5",5,"Type the demonstrative (este / esse / aquele in the right form).",`___ ${n} ${p}. <small>(${G.DPL[pl]})</small>`,[cap(a)],`${G.DPL[pl]} → ${G.DEM[pl].join(" / ")}. <i>${n}</i> is ${G.GD[g]} → <b>${cap(a)}</b>.`)});
[["Eles","têm"],["A Ana","tem"],["Tu","tens"],["Nós","temos"]].forEach(([s,f])=>text("X5",4,"Type the correct form of ter.",`${s} ___ a carta de condução?`,[f],`<i>Ter</i>: tenho, tens, tem, temos, <b>têm</b>. ${s} → <b>${f}</b>.`));
mc("X5",4,"The pen is next to the person you are talking to.","A tua caneta está ___.",["aí","aqui","ali","lá"],"Near the listener → <b>aí</b>. Near me → aqui; far from both → ali.");
mc("X5",3,"The keys are far from both of you.","As chaves estão ___.",["ali","aqui","aí","isto"],"Far from both → <b>ali</b>.");
text("X5",5,"Type no, na or em.","Não estou ___ casa, estou ___ rua.".replace(" ___ rua"," na rua"),["em"],"<b>em casa</b> has no article; <i>na rua</i> (em + a).");
text("X5",4,"Answer with a possessive (José).","De quem é o carro? — É ___ José.",["do"],"de + o José = <b>do</b>: É do José.");
text("X5",5,"Answer with a possessive (ela).","De quem é a mala? — É ___.",["dela"],"de + ela = <b>dela</b>.");
mc("X5",3,"What is this object?","Onde estão os meus ___ de sol?",["óculos","chaves","malas","moedas"],"<b>Os óculos de sol</b> = sunglasses (always plural).");
text("X5",4,"Write the plural with the article.","o telemóvel → ___",["os telemóveis"],"-el → -eis: <b>os telemóveis</b>.");
module.exports=bank;
