// Units 11–12 (+ Português em ação 3 · Num café). Topics L11*/K11* → Unit 11, L12*/K12* → Unit 12
const G=require("./gen7.js");
const bank=[];const {mc,multi,text}=G.maker(bank);
const r=G.rng(1111),sh=G.shuffler(r),cap=G.cap;
const pick=(arr,n,not)=>sh(arr.filter(x=>x!==not)).slice(0,n);

/* ================= UNIDADE 11 · Gostas de música clássica? ================= */
// L11A · ir
const IR=["vou","vais","vai","vamos","vão"];
[["___ ao cinema com o Diogo. (eu)",0],["Quem ___ ao ginásio?",2],["___ muito ao teatro. (nós)",3],["___ à praia? (tu)",1],["O João e a Joana ___ ao Japão.",4],["Onde é que ela ___?",2],["Eles não ___ às compras.",4],["Não sei quando ___ a Paris. (eu)",0],["Vocês ___ ao concerto?",4],["A Rita e eu ___ ao Algarve.",3]].forEach(([p,k],i)=>{
  const f=IR[k],F=/^___/.test(p)?cap(f):f;
  (i%3===2?mc:text)("L11A",k===4?5:4,i%3===2?"Choose the form of ir.":"Write the correct form of ir.",p,i%3===2?[F,...IR.filter(x=>x!==f).slice(0,3).map(x=>/^___/.test(p)?cap(x):x)]:[f],
   `<i>ir</i> is irregular: vou, vais, vai, vamos, vão. → <b>${f}</b>.`)});
// L11B · a + article
const A_=[["Gosto de ir ___ restaurantes italianos.","aos","os restaurantes"],["Vais ___ cinema?","ao","o cinema"],["Quem vai ___ praia?","à","a praia"],["Vamos ___ teatro.","ao","o teatro"],["O Pedro não vai ___ ginásio.","ao","o ginásio"],["Adoro ir ___ compras.","às","as compras"],["O Pedro vai ___ uma discoteca hoje?","a","uma discoteca (no contraction!)"],["Eles vão ___ jogo do Benfica.","ao","o jogo"],["O Marco vai ___ estrangeiro.","ao","o estrangeiro"],["Vou ___ Lisboa amanhã.","a","Lisboa (no article)"],["Vamos ___ Estados Unidos.","aos","os Estados Unidos"],["Ela vai ___ escola de manhã.","à","a escola"]];
A_.forEach(([p,a,why],i)=>(i%3===1?mc:text)("L11B",a==="a"?6:4,i%3===1?"Choose ao, aos, à, às or a.":"Write ao, aos, à, às or a.",p,i%3===1?[a,...["ao","aos","à","às","a"].filter(x=>x!==a).slice(0,3)]:[a],
  `ir <b>a</b> + ${why} → <b>${a}</b>. a + o = ao, a + os = aos, a + a = à, a + as = às. <i>a</i> never joins um/uma.`));
mc("L11B",5,"Which is correct?","going home",["Vou a casa.","Vou à casa.","Vou ao casa.","Vou na casa."],"<b>casa</b> (home) has no article: <i>Vou a casa. Estou em casa.</i>");
mc("L11B",5,"Find the expression with “a”.","at night",["à noite","na noite","de noite à","ao noite"],"Fixed expressions: <b>à noite</b>, <b>às vezes</b>, <b>à tarde</b>.");
// L11C · gostar / adorar / detestar / nem / preferido
[["++ (love)","adoro"],["+ (like)","gosto de"],["− (don't like)","não gosto de"],["−− (hate)","detesto"]].forEach(([s,a],i)=>
  mc("L11C",3,"Choose the verb for the symbol.",`${s}: Eu ___ praia.`,[a,...["adoro","gosto de","não gosto de","detesto"].filter(x=>x!==a)],`++ <b>adorar</b> (adorar = gostar muito), + gostar de, − não gostar de, −− <b>detestar</b>. Note: adorar and detestar take <b>no</b> de: <i>Adoro praia.</i>`));
[["A Sónia ___ animais. (adorar)","adora"],["Eles ___ música clássica. (detestar)","detestam"],["Onde ___ as tuas férias? (tu/passar)","passas"],["Nós também ___ ténis. (jogar)","jogamos"],["A Rita ___ jazz. (detestar)","detesta"],["Eles não ___ férias em casa. (passar)","passam"]].forEach(([p,a])=>
  text("L11C",4,"Write the verb in the correct form.",p,[a],`Regular -ar verb → <b>${a}</b>.`));
mc("L11C",6,"“She likes neither football nor tennis.”","Ela não gosta de futebol ___ de ténis.",["nem","e","ou","mas"],"<b>não… nem…</b> = neither… nor: <i>Não gosto de café nem de chá.</i>");
mc("L11C",5,"Which is correct?","adorar",["Adoro cinema.","Adoro de cinema.","Adoro do cinema.","Adoro ao cinema."],"<b>adorar</b> takes no preposition (unlike gostar <i>de</i>).");
text("L11C",5,"Agreement: write preferido in the right form.","Qual é a tua comida ___?",["preferida"],"<i>a comida</i> is feminine → <b>preferida</b>.");
text("L11C",5,"Agreement: write preferido in the right form.","Quais são os teus livros ___?",["preferidos"],"masculine plural → <b>preferidos</b>.");
mc("L11C",4,"Ask about a favourite film.","___ é o teu filme preferido?",["Qual","Que","Quem","Quais"],"<b>Qual é o teu … preferido?</b> = What's your favourite …?");
// L11D · leisure expressions
[["___ à praia","ir"],["___ ténis","jogar"],["___ um cão","ter"],["___ as férias em casa","passar"],["___ Medicina","estudar"],["___ de música clássica","gostar"],["___ às compras","ir"],["___ ao ginásio","ir"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L11D",3,i%2?"Choose the verb for the expression.":"Write the verb that fits (ir, jogar, ter, passar, estudar, gostar).",p,i%2?[a,...["ir","jogar","ter","passar","estudar","gostar"].filter(x=>x!==a).slice(0,3)]:[a],`<b>${a} ${p.replace("___ ","")}</b>.`));
mc("L11D",4,"“Go shopping” in Portuguese:","shopping",["ir às compras","ir à compra","fazer compra","ir aos compras"],"<b>ir às compras</b> (as compras → às).");
mc("L11D",4,"“Spend the holidays abroad”:","abroad",["passar férias no estrangeiro","passar férias em estrangeiro","passar férias fora país","ir férias ao fora"],"<b>o estrangeiro</b> = abroad: <i>no estrangeiro</i>, <i>ir ao estrangeiro</i>.");
// L11E · nouns, text
[["ginásio","os ginásios"],["cão","os cães"],["animal","os animais"],["filme","os filmes"],["clube","os clubes"],["bar","os bares"],["revista","as revistas"],["jogo","os jogos"],["praia","as praias"]].forEach(([n,a],i)=>
  text("L11E",["cão","animal","bar"].includes(n)?6:4,"Write the article and the plural.",`${n} → ___`,[a],`${n} → <b>${a}</b>.${n==="cão"?" -ão → -ães here (irregular).":n==="animal"?" -al → -ais.":n==="bar"?" -r → -res.":""}`));
mc("L11E",5,"Sónia: “A minha cor preferida é o vermelho. Porquê? Porque sou ___!”","red = ?",["benfiquista","sportinguista","portista","vegetariana"],"Benfica plays in red → <b>benfiquista</b>. (Sporting = green, FC Porto = blue.)");
mc("L11E",4,"Sónia is a student of Medicine and has a dog called Micas. What does she adore?","A Sónia adora…",["o cão dela e ir ao teatro.","política.","ler jornais.","futebol e fast food."],"<i>Adoro o meu Micas! … Adoro ir ao cinema e ao teatro. Detesto política.</i>");
mc("L11E",5,"Why does João spend holidays in Canada?","Porque é que o João passa férias no Canadá?",["Porque a irmã dele mora em Toronto.","Porque detesta futebol.","Porque gosta da natureza.","Porque é do Benfica."],"<b>Porque a irmã dele mora em Toronto.</b>");
mc("K11P",4,"In which word is g pronounced differently?","g",["ginásio","gato","jogo","gordo"],"<b>g</b> before e/i = [ʒ] (gi-násio, relógio). Before a/o/u = [g] (gato, jogo, gordo).");
mc("K11P",4,"In which word is g pronounced differently?","g",["água","gelo","giro","relógio"],"<b>água</b>: g = [g]. gelo, giro, relógio: g = [ʒ].");

/* ================= UNIDADE 12 · Como são os portugueses? ================= */
// L12A · confirmation tags
const TAG=[["Ela é médica, ___?","não é"],["Falas russo, ___?","não falas"],["Trabalhas muito, ___?","não trabalhas"],["Não gostas do teu trabalho, ___?","pois não"],["Estás no Algarve, ___?","não estás"],["Este não é o teu pai, ___?","pois não"],["Vocês vão ao cinema, ___?","não vão"],["Ele não mora em Lisboa, ___?","pois não"],["Isto não é teu, ___?","pois não"],["Usa óculos, ___?","não usa"],["Vocês são da China, ___?","não são"],["Gosta de cerveja, ___?","não gosta"],["Ele está no estrangeiro, ___?","não está"],["Não está doente, ___?","pois não"],["Os portugueses adoram café, ___?","não adoram"],["Tens irmãos, ___?","não tens"]];
TAG.forEach(([p,a],i)=>{const neg=a==="pois não";
  const wrong=neg?["não é","pois sim","não"]:["pois não",a.replace("não ",""),"não é"].filter(x=>x!==a);
  (i%2?mc:text)("L12A",neg?6:5,i%2?"Choose the confirmation tag.":"Write the confirmation tag.",p,i%2?[a,...[...new Set(wrong)].slice(0,3)]:[a],
   neg?`After a <b>negative</b> sentence the tag is always <b>pois não?</b>`:`After an affirmative sentence: <b>não + the same verb</b> → <b>${a}?</b>`)});
mc("L12A",6,"Find the mistake-free sentence.","tags",["Não estás doente, pois não?","Não estás doente, não?","Não estás doente, não estás?","Não estás doente, pois sim?"],"Negative sentence → <b>pois não?</b>");
// L12B · cá / lá / aqui / ali
[["___, em Portugal, as pessoas tomam muito café. (I'm in Portugal)","Cá"],["___, na Bélgica, as bicicletas são muito populares. (I'm in Portugal)","Lá"],["O Serhiy está em Lisboa agora? — Não, está ___ na Ucrânia.","lá"],["O que é isso ___? (near you)","aí"],["Sou alemão, mas agora estou ___ em Portugal.","cá"],["___ carro ali é o novo BMW.","Aquele"],["O teu telemóvel está ___ no meu quarto. (I'm in the room)","aqui"]].forEach(([p,a],i)=>
  (i%2?text:mc)("L12B",5,i%2?"Write cá, lá, aqui, aí or the right word.":"Choose the right word.",p,i%2?[a]:[a,...["cá","lá","aqui","aí","ali","Cá","Lá","Aquele"].filter(x=>x.toLowerCase()!==a.toLowerCase()&&(/^[A-Z]/.test(a)===/^[A-Z]/.test(x))).slice(0,3)],
   `<b>cá</b> = here, in the general place where I am (my country, my city); <b>lá</b> = there, a general place where I'm not. <i>aqui / aí / ali</i> point to a concrete spot. → <b>${a}</b>.`));
// L12C · expressions
[["apanhar","sol"],["tomar","banho no mar"],["andar","de bicicleta"],["estacionar","o carro"],["pagar","o estacionamento"],["almoçar","fora"],["tomar","café"]].forEach(([v,c],i)=>
  (i%2?mc:text)("L12C",3,i%2?"Choose the verb.":"Write the verb (apanhar, tomar, andar, estacionar, pagar, almoçar).",`___ ${c}`,i%2?[v,...["apanhar","tomar","andar","estacionar","pagar","almoçar","jogar"].filter(x=>x!==v).slice(0,3)]:[v],`<b>${v} ${c}</b>.`));
[["O meu cão gosta de andar ___ carro.","de"],["Adoro tomar banho ___ mar.","no"],["Estaciono o carro ___ parque.","no"],["Sou muito boa ___ línguas.","em"],["Não tenho interesse ___ música clássica.","em"],["Este parque ___ estacionamento é muito caro.","de"],["Passo muito tempo fora ___ casa.","de"]].forEach(([p,a])=>
  text("L12D",5,"Write the preposition.",p,[a],{de:"<b>de</b>: andar de carro/bicicleta, parque de estacionamento, fora de casa.",no:"em + o = <b>no</b>.",em:"<b>ser bom em</b>, <b>ter interesse em</b>."}[a]));
mc("L12D",5,"Which sentence is correct?","bike",["Ela gosta de andar de bicicleta.","Ela gosta de andar na bicicleta.","Ela gosta andar de bicicleta.","Ela gosta de andar em bicicleta."],"Means of transport take <b>de</b>: <i>andar de bicicleta, de carro, de comboio</i>.");
mc("L12D",5,"Vítor: “Cá, em Portugal, as pessoas estacionam os carros nos ___.”","Where do people park?",["passeios","parques","praias","cafés"],"<i>Estacionam os carros <b>nos passeios</b> e não nos parques porque os parques são caros.</i> (o passeio = pavement)");
mc("L12D",4,"Ana: “Para nós, portugueses, férias sem praia não são férias, ___?”","tag",["pois não","não são","não é","pois sim"],"Negative sentence → <b>pois não?</b>");
mc("L12D",4,"How do you end an informal e-mail to a friend?","e-mail",["Um abraço,","Com os melhores cumprimentos,","Exmo. Senhor,","Bom dia,"],"Informal: <b>Um abraço</b> / Um beijo. Formal: Com os melhores cumprimentos.");
multi("L12D",5,2,"Select the TWO things a “typical Portuguese” does, according to the texts.","típico",["toma café várias vezes por dia","passa as férias na praia","não fala línguas","detesta café"],"Pedro: um português típico <b>toma café</b> três, quatro vezes por dia. Ana: <b>férias sem praia não são férias</b>.");
// L12E · Português em ação 3 · Num café
[["Uma ___ cheia, faz favor. (espresso)","bica"],["Um ___ de nata, faz favor.","pastel"],["Uma ___ mista, faz favor.","tosta"],["Uma ___ de leite, faz favor. (milky coffee)","meia"],["Uma água ___ ou fresca?","natural"],["A conta é junta ou ___?","separada"],["Duas tostas mistas para ___, faz favor. (take away)","levar"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L12E",4,i%2?"At the café. Choose the word.":"At the café. Write the word.",p,i%2?[a,...["bica","pastel","tosta","meia","natural","separada","levar","croissant"].filter(x=>x!==a).slice(0,3)]:[a],
   {bica:"<b>a bica</b> = espresso (Lisbon); <i>cheia</i> = a full cup.",pastel:"<b>o pastel de nata</b> = custard tart.",tosta:"<b>a tosta mista</b> = ham and cheese toastie.",meia:"<b>a meia de leite</b> = half coffee, half milk, in a cup.",natural:"Water: <b>natural</b> (room temperature) or <b>fresca</b> (cold).",separada:"<b>junta ou separada</b> = together or separate bill.",levar:"<b>para levar</b> = to take away."}[a]));
[["A tosta é para levar?","Não, é para comer aqui."],["E mais?","Mais nada, obrigado."],["E o meu troco?","Ai, desculpe. Aqui tem."],["Não tenho mais pequeno, desculpe.","Não faz mal."],["Quanto é?","São três euros e quinze cêntimos."]].forEach(([q,a],i,arr)=>
  mc("L12E",4,"Choose the best answer.",q,[a,...arr.filter(x=>x[1]!==a).map(x=>x[1]).slice(0,3)],`<i>${q}</i> → <b>${a}</b>`));
mc("L12E",4,"What does the waiter say first?","Empregado: ___",["Diga, faz favor.","Quanto é?","Aqui tem o troco do senhor.","Mais nada."],"<b>Diga, faz favor.</b> = Yes, please? (What would you like?)");
mc("L12E",5,"“I only have a 20-euro note.”","Não, só tenho ___ de 20.",["uma nota","um troco","uma moeda","um cêntimo"],"<b>a nota</b> = banknote; <i>a moeda</i> = coin; <i>o troco</i> = change.");
mc("L12E",4,"Bem fresca, with ice:","Com ___, faz favor.",["gelo","leite","gás","açúcar"],"<b>o gelo</b> = ice.");
mc("K12P",4,"In which word is c pronounced differently?","c",["centro","calor","escola","desculpe"],"<b>c</b> before e/i = [s] (centro, cidade, décimo). Before a/o/u or a consonant = [k].");
mc("K12P",4,"In which word is c pronounced differently?","c",["casado","décimo","cidade","terceiro"],"<b>casado</b>: c = [k]. décimo, cidade, terceiro: c = [s].");

module.exports=bank;
