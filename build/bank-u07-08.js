// Units 7–8 (+ Português em ação 2 · Na fronteira). Topics L7*/K7* → Unit 7, L8*/K8* → Unit 8
const G=require("./gen7.js");
const bank=[];const {mc,multi,text}=G.maker(bank);
const r=G.rng(7007),sh=G.shuffler(r),cap=G.cap;
const pick=(arr,n,not)=>sh(arr.filter(x=>x!==not)).slice(0,n);

/* ================= UNIDADE 7 · É muito longe? ================= */
// L7A · opposites
const OPP=[["bonito","feio","beautiful ↔ ugly"],["bom","mau","good ↔ bad"],["velho","novo","old ↔ new"],["grande","pequeno","big ↔ small"],["antigo","moderno","old, ancient ↔ modern"],
 ["caro","barato","expensive ↔ cheap"],["rico","pobre","rich ↔ poor"],["simpático","antipático","nice ↔ unpleasant"],["perto","longe","near ↔ far"],["muito","pouco","a lot ↔ a little"]];
const ADJS=OPP.slice(0,8).flatMap(x=>[x[0],x[1]]);
OPP.forEach(([a,b,en],i)=>{
  if(i%2===0) text("L7A",3,"Write the word with the opposite meaning.",`${a} ↔ ___`,[b],`<b>${a}</b> ↔ <b>${b}</b> (${en}).`);
  else mc("L7A",2,"Choose the word with the opposite meaning.",`${a} ↔ ___`,[b,...pick(ADJS.filter(x=>x!==a),3,b)],`<b>${a}</b> ↔ <b>${b}</b> (${en}).`);
  if(i<8) mc("L7A",3,"Choose the word with the opposite meaning.",`${b} ↔ ___`,[a,...pick(ADJS.filter(x=>x!==b),3,a)],`<b>${b}</b> ↔ <b>${a}</b> (${en}).`);
});
mc("L7A",3,"Which word means the same as “muito bonito”?","lindo = ___",["muito bonito","muito feio","muito velho","muito caro"],"<b>lindo</b> = very beautiful (muito bonito). <i>O centro histórico é lindo!</i>");
mc("L7A",4,"A Bentley costs a lot of money. Complete.","O Bentley é um carro muito ___.",["caro","barato","pobre","antigo"],"Costs a lot → <b>caro</b> (expensive). The opposite is <i>barato</i>.");
mc("L7A",4,"Tomar is 800 years old. Complete.","A cidade de Tomar é muito ___.",["antiga","moderna","nova","cara"],"800 years → <b>antiga</b> (old, historic). <i>Antigo</i> is used for places and objects with history; <i>velho</i> = old, worn.");

// L7B · gostar de
const GOST=[["eu","gosto"],["tu","gostas"],["ele","gosta"],["nós","gostamos"],["eles","gostam"],["você","gosta"],["vocês","gostam"],["a Rita","gosta"]];
GOST.slice(0,6).forEach(([s,f])=>text("L7B",3,"Write the correct form of gostar.",`${cap(s)} ___ de Lisboa.`,[f],`<i>gostar</i> is a regular -ar verb: gosto, gostas, gosta, gostamos, gostam. ${s} → <b>${f}</b>.`));
[["Gosto ___ Portugal.","de","Countries without article (Portugal) → <b>de</b>."],["Gostas ___ minha casa?","da","de + a (minha casa) = <b>da</b>."],["O Rui não gosta ___ carro dele.","do","de + o = <b>do</b>."],["Elas gostam ___ restaurantes italianos.","dos","de + os = <b>dos</b>."],["Não gostamos ___ cigarros.","de","No article before <i>cigarros</i> (in general) → <b>de</b>."],["Gosto muito ___ praias do Algarve.","das","de + as = <b>das</b>."],["Ela gosta ___ Rita.","da","Names take the article in PT-PT: de + a Rita = <b>da</b> Rita."]].forEach(([p,a,ex],i)=>
  (i%2?mc:text)("L7B",4,i%2?"Choose the right word.":"Type de, do, da, dos or das.",p,i%2?[a,...["de","do","da","dos","das"].filter(x=>x!==a).slice(0,3)]:[a],`After <i>gostar</i> we always use <b>de</b>. ${ex}`));
mc("L7B",4,"Answer “yes” with the verb only (short answer).","A: Gostas de sumo de laranja? B: ___",["Gosto.","Gostas.","Sim, gosta.","Gosto de."],"Short answers repeat the verb: <b>Gosto.</b> (eu). No <i>de</i> at the end.");
mc("L7B",5,"Answer for both of you.","A: Vocês gostam de chá verde? B: ___",["Gostamos.","Gostam.","Gosto.","Gostais."],"vocês → nós: <b>Gostamos.</b>");
mc("L7B",4,"Which question asks for the reason?","___ é que gostas do Luís? — Porque é simpático.",["Porque","Como","Onde","Quem"],"Question <b>Porque é que…?</b> / <b>Porquê?</b> (why) → answer <b>Porque…</b> (because).");
text("L7B",5,"Complete the answer.","A: Porque é que não gostas da tua cidade? B: ___ é feia.",["Porque"],"Answer to <i>porque é que…?</i> starts with <b>Porque</b> (because).");

// L7C · contractions de/em + isto/isso/aquilo/aqui/aí/ali
[["de","isto","disto"],["de","isso","disso"],["de","aquilo","daquilo"],["em","isto","nisto"],["em","isso","nisso"],["em","aquilo","naquilo"],["de","aqui","daqui"],["de","aí","daí"],["de","ali","dali"]].forEach(([p,w,c],i)=>{
  const forms=["disto","disso","daquilo","nisto","nisso","naquilo","daqui","daí","dali"];
  if(i%3===1) mc("L7C",3,"Choose the contraction.",`${p} + ${w} = ___`,[c,...pick(forms,3,c)],`<b>${p} + ${w} = ${c}</b>. ${p==="de"?"de → d-":"em → n-"} joins the next word.`);
  else text("L7C",4,"Write the contraction.",`${p} + ${w} = ___`,[c],`<b>${p} + ${w} = ${c}</b>. ${p==="de"?"de → d-":"em → n-"} joins the next word.`);
});
text("L7C",5,"Complete with de + isto.","Eles não gostam ___.",["disto"],"gostar <b>de</b> + isto = <b>disto</b>: <i>Gosto disto!</i>");
text("L7C",5,"Complete with de + aqui.","O centro da cidade é longe ___.",["daqui"],"longe <b>de</b> + aqui = <b>daqui</b> (far from here).");
mc("L7C",5,"Complete with de + aquilo.","Não gosto ___.",["daquilo","de aquilo","naquilo","disso"],"de + aquilo = <b>daquilo</b>. The contraction is obligatory.");

// L7D · adjective agreement
[["bonito","f. sing.","bonita"],["caro","f. sing.","cara"],["grande","f. sing.","grande"],["bom","f. sing.","boa"],["mau","f. sing.","má"],["pobre","f. sing.","pobre"],["falador","f. sing.","faladora"],
 ["difícil","m. pl.","difíceis"],["agradável","f. pl.","agradáveis"],["bom","m. pl.","bons"],["mau","f. pl.","más"],["simpático","f. pl.","simpáticas"],["grande","m. pl.","grandes"],["antigo","f. pl.","antigas"]].forEach(([a,g,f],i)=>
  text("L7D",/difícil|agradável|mau|bom/.test(a)?6:4,`Write the ${g==="f. sing."?"feminine":g==="m. pl."?"masculine plural":"feminine plural"} form.`,`${a} → ___`,[f],
   `${a} → <b>${f}</b>. Rules: -o → -a; -e and most consonants don't change in the feminine; -or → -ora; plural +s, -l → -is (difícil → difíceis, agradável → agradáveis); irregular: bom/boa/bons/boas, mau/má/maus/más.`));
[["É uma profissão ___.","boa","bom / boa: <i>profissão</i> is feminine → <b>boa</b>."],["O restaurante é ___.","mau","<i>restaurante</i> is masculine → <b>mau</b>."],["A mesa é ___.","má","<i>mesa</i> is feminine → <b>má</b>."],["Os hotéis são ___.","bons","masculine plural → <b>bons</b>."]].forEach(([p,a,ex])=>
  mc("K7D",4,"Choose the correct adjective.",p,[a,...["bom","boa","mau","má","bons","boas"].filter(x=>x!==a).slice(0,3)],ex));
multi("L7D",5,2,"Select the TWO correct phrases (word order).","adjective position",["uma rua antiga","um carro bonito","uma antiga rua de cidade bonita","um bonito muito carro"],"In Portuguese the adjective normally comes <b>after</b> the noun: <i>uma rua antiga, um carro bonito</i>.");

// L7E · word order muito/bastante, places, texts
mc("L7E",5,"Put “muito” in the right place.","O Rui gosta do meu carro. (muito)",["O Rui gosta muito do meu carro.","O Rui muito gosta do meu carro.","O Rui gosta do meu muito carro.","Muito o Rui gosta do meu carro."],"Adverbs of quantity go <b>after the verb</b> (<i>gosto muito</i>) but <b>before an adjective</b> (<i>muito bonito</i>).");
mc("L7E",5,"Put “bastante” in the right place.","O Porto é uma cidade grande. (bastante)",["O Porto é uma cidade bastante grande.","O Porto é bastante uma cidade grande.","O Porto é uma bastante cidade grande.","O Porto é uma cidade grande bastante."],"<b>bastante</b> (quite) goes before the adjective: <i>bastante grande</i>.");
text("L7E",6,"Make a sentence. Add articles and prepositions; don't change the word order.","Fátima / não / gostar / rua / dela",["A Fátima não gosta da rua dela"],"<b>A Fátima não gosta da rua dela.</b> Names take an article; gostar <b>de</b> + a rua = <b>da</b> rua.");
text("L7E",6,"Make a sentence. Add articles and prepositions; don't change the word order.","estar / longe / centro / cidade (nós)",["Estamos longe do centro da cidade"],"<b>Estamos longe do centro da cidade.</b> longe <b>de</b> + o centro = do centro; de + a cidade = da cidade.");
text("L7E",6,"Make a sentence. Add articles and prepositions; don't change the word order.","estar / fora / país / férias (nós)",["Estamos fora do país de férias","Estamos fora do país, de férias"],"<b>Estamos fora do país de férias.</b> fora <b>de</b> + o país = do país; <i>estar de férias</i> = to be on holiday.");
mc("L7E",4,"The hotel is not in the centre — it's in the new part of town. Complete.","O hotel fica ___ do centro.",["fora","dentro","perto","aqui"],"<b>fora de</b> = outside of: <i>fica fora do centro, na parte nova da cidade</i>.");
mc("L7E",3,"What do you say to someone going on holiday?","___",["Boas férias!","Bom dia!","Boa estadia!","Parabéns!"],"<b>Boas férias!</b> = Have a good holiday!");
mc("L7E",4,"Luís is in Macau: rich, modern city, big room, good restaurants. How are the restaurants?","Como são os restaurantes em Macau?",["São muito bons.","São maus.","São velhos e feios.","São baratos."],"Luís writes: <i>Os restaurantes são <b>muito bons</b> aqui.</i>");
mc("L7E",4,"Miguel's hotel in Ouro Preto is old and ugly, but very cheap. Choose the true sentence.","O hotel do Miguel é…",["velho, feio e barato.","novo e caro.","moderno e bonito.","grande e rico."],"<i>O nosso hotel é <b>velho e bastante feio, mas também muito barato</b>.</i>");
mc("L7E",5,"Vasco is on holiday outside the country, in a town near Madrid. Where?","O Vasco está…",["em Segóvia.","em Lisboa.","em Madrid.","no Porto."],"<i>Estou de férias <b>fora do país</b>… Segóvia fica <b>perto</b> de Madrid.</i>");
mc("K7E",4,"Choose the right question for the answer “É muito bom.”","___ é o teu hotel?",["Como","Onde","Quem","Qual"],"<b>Como é…?</b> asks for a description: <i>Como é o teu hotel? — É muito bom.</i>");
mc("K7E",4,"Choose the right question for the answer “No centro da cidade.”","___ fica o restaurante?",["Onde","Como","Quanto","Porque"],"<b>Onde fica…?</b> asks for the location.");
mc("K7E",4,"Choose the right question for the answer “É cinzento.”","___ cor é o teu carro?",["De que","Qual","Como","Quanta"],"<b>De que cor é…?</b> = What colour is…?");
text("K7E",4,"Write the article and the plural.","hotel → ___",["os hotéis"],"<i>o hotel</i> → <b>os hotéis</b>: -el → -éis.");
text("K7E",4,"Write the article and the plural.","pessoa → ___",["as pessoas"],"<i>a pessoa</i> → <b>as pessoas</b>.");
text("K7E",4,"Write the article and the plural.","cidade → ___",["as cidades"],"<i>a cidade</i> → <b>as cidades</b>.");
mc("K7P",4,"In which word is z pronounced [ʃ] (like “sh”)?","z = [ʃ]?",["dez","zero","azul","cinzento"],"At the end of a word <b>z</b> sounds [ʃ]: <i>de<b>z</b>, atri<b>z</b>, fa<b>z</b></i>. Before a vowel it's [z]: zero, azul.");
mc("K7P",4,"Which word has a nasal vowel?","nasal?",["pão","pau","mau","céu"],"<b>pão</b> has the nasal diphthong ão. <i>pau, mau</i> are oral.");

/* ================= UNIDADE 8 · Onde trabalha? ================= */
// L8A · workplaces
const WORK=[["um professor","Numa escola","teacher"],["um ator","Num teatro","actor"],["um médico","Num hospital","doctor"],["um advogado","Num escritório","lawyer"],["um empresário","Numa empresa","businessman"],
 ["um arquiteto","Num ateliê","architect"],["um empregado de mesa","Num restaurante","waiter"],["uma empregada doméstica","Numa casa","housekeeper"],["um enfermeiro","Num hospital","nurse"]];
const PLACES=[...new Set(WORK.map(w=>w[1]))];
WORK.forEach(([p,pl,en],i)=>{
  if(i%2===0) mc("L8A",3,"Where does this person work?",`Onde trabalha ${p}?`,[pl,...pick(PLACES,3,pl)],`${cap(p)} (${en}) works <b>${pl.toLowerCase()}</b>.`);
  else text("L8A",5,"Where does this person work? Answer with num / numa + place.",`Onde trabalha ${p}? ___`,[pl,pl.replace(/^N/,"n"),"Trabalha "+pl.toLowerCase()],`${cap(p)} (${en}) works <b>${pl.toLowerCase()}</b>. em + um = num, em + uma = numa.`);
});
text("L8A",4,"Complete the profession.","Uma ___ doméstica trabalha numa casa.",["empregada"],"<b>a empregada doméstica</b> = housekeeper.");

// L8B · num/numa/dum/duma
[["Trabalho ___ escritório.","num","em + um"],["Ela trabalha ___ escola.","numa","em + uma"],["Ele é ___ cidade perto de Paris.","duma","de + uma"],["Sou ___ país muito pequeno.","dum","de + um"],["Trabalhamos ___ hospital.","num","em + um"],["O Rui está ___ restaurante.","num","em + um"],["Moro ___ rua bonita.","numa","em + uma"],["Ela é ___ aldeia no norte.","duma","de + uma"]].forEach(([p,a,why],i)=>
  (i%3===2?mc:text)("L8B",4,i%3===2?"Choose the right word.":"Type num, numa, dum or duma.",p,i%3===2?[a,...["num","numa","dum","duma"].filter(x=>x!==a).slice(0,3)]:[a],`${why} = <b>${a}</b>. em/de join the indefinite article: num, numa, dum, duma.`));
mc("L8B",5,"Which sentence is correct?","a + um",["Vamos a um restaurante.","Vamos aum restaurante.","Vamos num restaurante.","Vamos dum restaurante."],"The preposition <b>a</b> does NOT join <i>um/uma</i>: <i>Vamos <b>a um</b> restaurante.</i> (Only em and de do: num, dum.)");

// L8C · muito / pouco
[["muito","trabalho","muito"],["muito","horas","muitas"],["muito","empregados","muitos"],["muito","cerveja","muita"],["muito","dinheiro","muito"],["pouco","água","pouca"],["pouco","cantores","poucos"],["pouco","leite","pouco"],["pouco","empresas","poucas"],["pouco","pessoas","poucas"]].forEach(([w,n,f],i)=>
  (i%2?mc:text)("L8C",4,i%2?`Choose the right form of ${w}.`:`Write ${w} in the correct form.`,`___ ${n}`,i%2?[f,...[w+"o",w+"a",w+"os",w+"as"].filter(x=>x!==f).slice(0,3)]:[f],`With nouns, <i>muito / pouco</i> agree: ${w}o, ${w}a, ${w}os, ${w}as. <i>${n}</i> → <b>${f} ${n}</b>.`));
mc("L8C",5,"Choose the correct sentence.","muito with a verb",["A Rita trabalha muito.","A Rita trabalha muita.","A Rita muitos trabalha.","A Rita trabalha muitas."],"With a verb, <b>muito / pouco</b> don't change: <i>trabalha muito, estudo pouco</i>.");
text("L8C",5,"Complete with muito in the correct form.","Ele tem ___ dinheiro.",["muito"],"<i>o dinheiro</i> is masculine singular → <b>muito</b> dinheiro.");
text("L8C",5,"Complete with pouco in the correct form.","A garrafa tem ___ água.",["pouca"],"<i>a água</i> is feminine → <b>pouca</b> água.");

// L8D · regular -ar verbs (viajar, trabalhar, ganhar, usar, estudar)
const AR=["o","as","a","amos","am"],PR=[["eu",0],["tu",1],["ele",2],["nós",3],["eles",4],["a Ana",2],["vocês",4]];
[["viajar","Viajamos muito.","nós",3],["usar","o computador.","eles",4],["ganhar","bem?","tu",1],["trabalhar","à noite.","a Ana",2],["estudar","muito.","eu",0],["ganhar","pouco.","nós",3],["viajar","sozinha.","a Joana",2],["estudar","francês.","vocês",4],["trabalhar","em casa.","tu",1]].forEach(([v,c,s,p],i)=>{
  if(i===0)return;const f=v.slice(0,-2)+AR[p];
  (i%3===0?mc:text)("L8D",3,i%3===0?"Choose the correct form.":`Write the correct form of ${v}.`,`${cap(s)} ___ ${c}`,i%3===0?[f,...AR.map(e=>v.slice(0,-2)+e).filter(x=>x!==f).slice(0,3)]:[f],`<i>${v}</i> is a regular -ar verb: ${AR.map(e=>v.slice(0,-2)+e).join(", ")}. ${s} → <b>${f}</b>.`);
});
mc("L8D",4,"Match the verb and the phrase.","ganhar ___",["muito dinheiro","o telemóvel","de francês","advogado"],"<b>ganhar muito dinheiro</b> = earn a lot of money. (usar o telemóvel, ser advogado)");
mc("L8D",4,"Match the verb and the phrase.","usar ___",["o computador","muito dinheiro","advogado","em Espanha"],"<b>usar o computador</b> = use the computer.");

// L8E · por, às vezes, à noite, work vocabulary
[["Quantos dias trabalhas ___ semana?","por"],["Trabalho oito horas ___ dia.","por"],["___ vezes, trabalho à noite.","Às"],["Trabalho muito ___ noite.","à"],["De que é que gostas ___ teu trabalho?","no"],["Trabalho ___ o João e a Teresa.","com"],["Ela gosta ___ viajar.","de"]].forEach(([p,a],i)=>
  text("L8E",4,"Write the missing word.",p,[a],{por:"<b>por</b> = per, for frequency: por dia, por semana, por ano.","Às":"<b>Às vezes</b> = sometimes.","à":"<b>à noite</b> = at night.","no":"“What do you like <i>in</i> your job?” → em + o = <b>no</b> teu trabalho. (<i>De que</i> already carries the <i>de</i> of gostar.)",com:"<b>com</b> = with.",de:"gostar <b>de</b> + infinitive: <i>gosta de viajar</i>."}[a]));
[["Ganha bem?","Muito bem."],["Quantos dias trabalha por semana?","Cinco."],["Onde é que trabalha?","Num escritório."],["Quantas horas trabalha por dia?","Oito ou nove."],["Como é o seu chefe?","É muito antipático."],["Com quem trabalha?","Com muitas pessoas."]].forEach(([q,a],i,arr)=>
  mc("L8E",3,"Choose the best answer.",q,[a,...arr.filter(x=>x[1]!==a).slice(i>2?0:3,i>2?3:6).map(x=>x[1])].slice(0,4),`<i>${q}</i> → <b>${a}</b>`));
mc("L8E",4,"Choose the right word: “unfortunately”.","___, ganho pouco.",["Infelizmente","Felizmente","Normalmente","Sozinho"],"<b>Infelizmente</b> = unfortunately; <i>felizmente</i> = fortunately.");
mc("L8E",4,"Nobody works with her. She works…","Ela trabalha ___.",["sozinha","sozinho","pronta","pouca"],"<b>sozinho / sozinha</b> = alone. Agrees with the person: <i>ela trabalha sozinha</i>.");
mc("L8E",5,"Read: “A Carla viaja muito, fala línguas, tem uma secretária e ganha muito bem.” A Carla é…","A Carla é ___.",["empresária","enfermeira","professora","empregada doméstica"],"Travels, speaks languages, has a secretary, earns well → <b>empresária</b> (businesswoman).");
mc("L8E",5,"Read: “O Jorge trabalha à noite com muitas pessoas, não usa computador e tem uma chefe.” O Jorge é…","O Jorge é ___.",["empregado de mesa","arquiteto","informático","advogado"],"Night work with people, no computer → <b>empregado de mesa</b> (waiter).");
mc("L8E",4,"Give your opinion. Start with…","___ que a Sara é advogada.",["Eu acho","Eu gosto","Eu sou","Eu ganho"],"<b>Eu acho que…</b> = I think that… (achar = to think, to find).");
text("K8E",4,"Write the article and the plural.","hospital → ___",["os hospitais"],"<i>o hospital</i> → <b>os hospitais</b>: -al → -ais.");
text("K8E",4,"Write the article and the plural.","universidade → ___",["as universidades"],"<i>a universidade</i> → <b>as universidades</b>.");
text("K8E",4,"Write the article and the plural.","colega → ___",["os colegas","as colegas"],"<i>o/a colega</i> → <b>os/as colegas</b>.");
mc("K8P",4,"Where is the stress? Choose the word stressed on the LAST syllable.","ão at the end",["profissão","trabalham","gostam","ganham"],"<b>profissão</b> (-ão written with til is stressed). Verb endings -am are unstressed: <i>tra-BA-lham</i>.");
mc("K8P",4,"In which word does nh sound [ɲ]?","nh",["ganho","ano","caneta","pequeno"],"<b>nh</b> = [ɲ] (like Spanish ñ): <i>ga<b>nh</b>o, mi<b>nh</b>a, Espa<b>nh</b>a</i>.");
mc("K8P",3,"How is the letter h at the start of a word pronounced?","hospital, hotel, hora",["It is silent.","Like English h.","Like r.","Like ch."],"Initial <b>h</b> is <b>silent</b>: <i>(h)otel, (h)ora</i>.");

// L8F · Português em ação 2 · Na fronteira
[["Qual é o ___ da sua visita?","motivo","the reason (o motivo) of your visit"],["O seu ___, faz favor.","passaporte","passport"],["Quanto ___ fica em Portugal?","tempo","how long (quanto tempo)"],["É a sua primeira ___ em Portugal?","vez","the first time (a primeira vez)"],["Boa ___!","estadia","Have a nice stay! (a estadia)"]].forEach(([p,a,en],i)=>
  (i%2?mc:text)("L8F",4,i%2?"At the border. Choose the missing word.":"At the border. Write the missing word.",p,i%2?[a,...["motivo","passaporte","tempo","vez","estadia","visita"].filter(x=>x!==a).slice(0,3)]:[a],`<b>${a}</b> — ${en}.`));
[["Estou aqui ___ trabalho.","em"],["Estou aqui ___ férias.","de"],["Ela está aqui ___ estudar.","para"]].forEach(([p,a])=>
  text("L8F",5,"Write the preposition.",p,[a],"Reason for a trip: <b>em</b> trabalho, <b>de</b> férias, <b>para</b> estudar."));
[["Tem passaporte?","Tenho"],["Está de férias?","Estou"],["Trabalha numa escola?","Trabalho"],["Fica em Lisboa?","Fico"],["É a sua primeira vez em Lisboa?","É"]].forEach(([q,a])=>
  text("L8F",5,"Answer “yes” with the verb only.",`A: ${q} B: ___`,[a,"Sim, "+a.toLowerCase()],`Portuguese answers “yes” by repeating the verb: <b>${a}.</b>`));
mc("L8F",4,"Sílvia stays in Portugal only one week. Answer the officer.","Quanto tempo fica em Portugal?",["Só uma semana.","É a segunda.","No hotel Fénix.","De férias."],"<i>Quanto tempo…?</i> asks for duration → <b>Só uma semana.</b>");
mc("L8F",4,"It's not her first time, it's the second.","É a sua primeira vez em Portugal?",["Não, é a segunda.","Não, é segundo.","Sim, é a segunda.","Não, é o segundo."],"<i>a vez</i> is feminine → <b>a segunda</b> (vez).");

module.exports=bank;
