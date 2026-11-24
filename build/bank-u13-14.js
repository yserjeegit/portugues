// Units 13–14. Topics L13*/K13* → Unit 13, L14*/K14* → Unit 14
const G=require("./gen7.js");
const bank=[];const {mc,multi,text}=G.maker(bank);
const r=G.rng(1313),sh=G.shuffler(r),cap=G.cap,{anaClock,digi,calPage,MES,timeWords}=G;
const pick=(arr,n,not)=>sh(arr.filter(x=>x!==not)).slice(0,n);
const pad=n=>String(n).padStart(2,"0");

/* ================= UNIDADE 13 · Faço anos a 10 de dezembro ================= */
// L13A · Que horas são?
const TIMES=[[14,0],[13,25],[14,5],[14,15],[14,30],[14,40],[14,45],[12,0],[0,0],[5,30],[17,10],[16,45],[8,50],[22,40],[9,30],[1,15],[18,45],[11,45],[19,20],[3,35],[10,55],[7,15]];
TIMES.forEach(([h,m],i)=>{
  const w=timeWords(h,m),img=i%2?anaClock(h,m):digi(`${pad(h)}h${pad(m)}`);
  const why=`On the hour: <i>São duas (horas)</i>, <i>É uma</i>, <i>É meio-dia / meia-noite</i>. Up to :30 add minutes with <b>e</b> (e um quarto, e meia). After :30 count down to the next hour with <b>para</b>: <i>São vinte para as três</i>, <i>É um quarto para as três</i>. <b>É</b> with uma / meio-dia / meia-noite, <b>São</b> otherwise. → <b>${w.main}</b>.`;
  if(i%3===0){
    const others=[timeWords((h+1)%24,m).main,timeWords(h,(m+30)%60).main,timeWords((h+11)%24,m).main].filter(x=>x!==w.main);
    mc("L13A",i<6?4:5,"Que horas são? Choose the time.","Que horas são?",[w.main,...[...new Set(others)]].slice(0,4),why,{img});
  } else text("L13A",m>30?7:5,"Que horas são? Write the time in words (e.g. São duas e meia).","Que horas são? ___",[w.main,...w.alts],why,{img});
});
// L13B · a que horas
[["A que horas começa o filme? — ___ 21h25.","Às"],["A que horas acaba a aula? — ___ uma.","À"],["A aula começa ___ meio-dia.","ao"],["Vamos ao cinema ___ três.","às"],["O filme acaba ___ meia-noite.","à"],["O filme começa ___ uma e meia.","à"],["___ que horas começa o jogo?","A"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L13B",5,i%2?"Choose the preposition.":"Write the preposition.",p,i%2?[a,...(/^[A-Z]/.test(a)?["Às","À","Ao","A","Na"]:["às","à","ao","a","na"]).filter(x=>x!==a).slice(0,3)]:[a],
   `When something happens: <b>à</b> uma, <b>às</b> duas/três…, <b>ao</b> meio-dia, <b>à</b> meia-noite. The question is <b>A que horas…?</b>`));
// L13C · units of time, daqui a, faltar, durar
[["Um minuto são 60 ___.","segundos"],["Uma hora são 60 ___.","minutos"],["Um século são 100 ___.","anos"],["Um dia são 24 ___.","horas"],["Um quarto de hora são 15 ___.","minutos"],["Meio ano são seis ___.","meses"],["Um ano são 365 ___.","dias"],["Quatro ___ é um mês.","semanas"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L13C",3,i%2?"Choose the word.":"Write the word.",p,i%2?[a,...["segundos","minutos","horas","dias","semanas","meses","anos"].filter(x=>x!==a).slice(0,3)]:[a],`→ <b>${a}</b>. o segundo, o minuto, a hora, o dia, a semana, o mês (pl. meses), o ano, o século.`));
text("L13C",5,"Write the missing word.","A aula acaba ___ a 20 minutos.",["daqui"],"<b>daqui a</b> + time = in (time from now): <i>daqui a 20 minutos</i>.");
text("L13C",6,"Rewrite with faltar: “A aula acaba daqui a 20 minutos.”","___ 20 minutos para o fim da aula.",["Faltam"],"<b>faltar</b> agrees with the time: <i>Falta uma hora</i>, <b>Faltam</b> 20 minutos para o fim.");
mc("L13C",6,"Rewrite: “O filme acaba daqui a 1 hora.”","___ para o fim do filme.",["Falta uma hora","Faltam uma hora","Falta daqui uma hora","Faltam uma horas"],"Singular subject → <b>Falta uma hora</b>.");
mc("L13C",5,"How long does it take?","Quanto tempo ___ um voo de Lisboa para Londres?",["dura","faz","falta","acaba"],"<b>durar</b> = to last: <i>Quanto tempo dura…?</i>");
text("L13C",5,"Write the preposition.","Falta meia hora ___ o fim do filme.",["para"],"<b>faltar … para</b>: <i>Falta meia hora para o fim.</i>");
// L13D · months, dates, prepositions
MES.forEach((m,i)=>{if(i%2)return;
  text("L13D",4,"Write the month that comes next (lower case).",`${m} → ___`,[MES[(i+1)%12]],`${m} → <b>${MES[(i+1)%12]}</b>. In Portuguese, months are written in lower case: ${MES.join(", ")}.`)});
[[3,1],[12,3],[20,5],[9,7],[15,8],[30,10]].forEach(([d,mi])=>
  text("L13D",5,"Look at the calendar. Write the date in words, e.g. “10 de março”.","Hoje são ___",[`${d} de ${MES[mi]}`,`dia ${d} de ${MES[mi]}`],`<b>${d} de ${MES[mi]}</b>. <i>Quantos são hoje? — Hoje são ${d}.</i> Months are lower case.`,{img:calPage(d,mi)}));
[[25,11,"o Natal"],[1,4,"o Dia do Trabalhador"],[8,2,"o Dia Internacional da Mulher"],[14,1,"o Dia de São Valentim"],[1,5,"o Dia Mundial da Criança"],[31,9,"o Dia das Bruxas"],[1,0,"o Dia de Ano Novo"],[17,2,"o Dia de São Patrício"]].forEach(([d,mi,n],i)=>{
  const ans=`A ${d} de ${MES[mi]}`;
  if(i%2) mc("L13D",5,"When is it?",`Quando é ${n}?`,[`A ${d} de ${MES[mi]}.`,`A ${d} de ${MES[(mi+1)%12]}.`,`A ${(d%28)+1} de ${MES[mi]}.`,`Em ${d} de ${MES[(mi+11)%12]}.`],`${cap(n)} é <b>a ${d} de ${MES[mi]}</b>. Dates use <b>a</b> (or <i>no dia</i>): <i>a 10 de março</i>.`);
  else text("L13D",6,"Write the date in words, e.g. “A 10 de março”.",`Quando é ${n}? ___`,[ans,`No dia ${d} de ${MES[mi]}`,`É a ${d} de ${MES[mi]}`].concat(d===1?[`A primeiro de ${MES[mi]}`,`A um de ${MES[mi]}`]:[]),`${cap(n)} é <b>a ${d} de ${MES[mi]}</b>.`);
});
[["As férias começam ___ julho.","em"],["Ela faz anos ___ dia 8 de maio.","no"],["___ que mês estamos?","Em"],["Vou a Paris ___ 10 de março.","a"],["___ Natal vamos a Espanha.","No"],["Estamos ___ 4 de novembro.","a"],["Ele nasceu ___ 1990.","em"],["___ Páscoa vamos ao Algarve.","Na"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L13D",6,i%2?"Choose the preposition.":"Write the preposition.",p,i%2?[a,...(/^[A-Z]/.test(a)?["Em","No","Na","A","Ao"]:["em","no","na","a","ao"]).filter(x=>x!==a).slice(0,3)]:[a],
   `Months, years, holidays → <b>em</b> (em julho, em 1990, <b>no</b> Natal, <b>na</b> Páscoa). Dates → <b>a</b> 10 de março or <b>no dia</b> 10 de março.`));
// L13E · fazer, fazer anos, reactions
const FAZ=["faço","fazes","faz","fazemos","fazem"];
[["Ela ___ anos em setembro.",2],["A Sara e o Rui ___ anos em maio.",4],["Eu ___ anos amanhã.",0],["O que é que ___ amanhã? (tu)",1],["Nós ___ anos em outubro.",3],["O Hugo ___ uma festa amanhã.",2],["Vocês ___ o jantar?",4]].forEach(([p,k],i)=>
  (i%2?mc:text)("L13E",k===0?5:4,i%2?"Choose the form of fazer.":"Write the correct form of fazer.",p,i%2?[FAZ[k],...FAZ.filter(x=>x!==FAZ[k]).slice(0,3)]:[FAZ[k]],`<i>fazer</i>: faço, fazes, faz, fazemos, fazem. → <b>${FAZ[k]}</b>. <i>fazer anos</i> = to have a birthday.`));
[["A: A minha mãe faz anos hoje. B: ___","Parabéns!"],["A: Temos muita comida em casa. B: ___ Estou com fome.","Ainda bem."],["A: Este filme é muito mau. B: ___","Pois é."],["A: Não vamos ao Algarve. Estamos sem dinheiro. B: ___","Que pena!"]].forEach(([p,a])=>
  mc("L13E",4,"Choose the right reaction.",p,[a,...["Parabéns!","Ainda bem.","Pois é.","Que pena!"].filter(x=>x!==a)],{"Parabéns!":"<b>Parabéns!</b> = Happy birthday / Congratulations!","Ainda bem.":"<b>Ainda bem.</b> = Good! / Just as well.","Pois é.":"<b>Pois é.</b> = Indeed / That's right.","Que pena!":"<b>Que pena!</b> = What a pity!"}[a]));
mc("L13E",4,"Ask about a birthday.","Quando é que ___ anos?",["fazes","tens","és","fazer"],"<b>Quando é que fazes anos?</b> = When is your birthday?");
mc("L13E",5,"Ask for the date of birth.","Qual é a sua data de ___?",["nascimento","anos","aniversário de","nascer"],"<b>a data de nascimento</b> = date of birth.");
text("L13E",6,"Make a sentence (add prepositions).","Ele / fazer / anos / 8 / maio",["Ele faz anos a 8 de maio","Ele faz anos no dia 8 de maio"],"<b>Ele faz anos a 8 de maio.</b>");
mc("L13E",5,"Ask today's date (in PT-PT).","___ são hoje? — 17 de novembro.",["Quantos","Que dia","Quais","Quanto"],"<b>Quantos são hoje?</b> asks for the date. <i>Que dia é hoje?</i> asks for the weekday (Hoje é terça).");
mc("L13E",4,"Which one asks for the weekday?","___ — Hoje é terça.",["Que dia é hoje?","Quantos são hoje?","Em que mês estamos?","Que horas são?"],"<b>Que dia é hoje?</b> → <i>Hoje é terça(-feira).</i>");
mc("K13P",4,"In which word is the letter different in sound?","g / j",["pagar","ginásio","julho","janeiro"],"<b>pagar</b>: g = [g]. ginásio, julho, janeiro: [ʒ].");
mc("K13P",4,"In which word is the letter different in sound?","c / ç",["troco","cento","março","cidade"],"<b>troco</b>: c = [k]. cento, março, cidade: [s] (ç always = [s]).");

/* ================= UNIDADE 14 · A que horas te levantas? ================= */
// L14A · reflexive verbs
const REF=[["levantar-se",["levanto-me","levantas-te","levanta-se","levantamo-nos","levantam-se"]],["deitar-se",["deito-me","deitas-te","deita-se","deitamo-nos","deitam-se"]],["encontrar-se",["encontro-me","encontras-te","encontra-se","encontramo-nos","encontram-se"]],["chamar-se",["chamo-me","chamas-te","chama-se","chamamo-nos","chamam-se"]]];
const SUB=[["Eu",0],["Tu",1],["O Pedro",2],["Nós",3],["Eles",4],["A Ana",2],["Vocês",4]];
let n=0;REF.forEach(([v,F],vi)=>SUB.forEach(([s,k],si)=>{if((vi*7+si)%3)return;n++;
  const c={"levantar-se":"às sete.","deitar-se":"tarde.","encontrar-se":"com amigos num café.","chamar-se":"Silva."}[v];
  (n%2?text:mc)("L14A",k===3?7:5,n%2?`Write ${v} in the correct form.`:`Choose the form of ${v}.`,`${s} ___ ${c}`,n%2?[F[k]]:[F[k],...F.filter(x=>x!==F[k]).slice(0,3)],
   `Reflexive verbs: the pronoun follows the verb with a hyphen: ${F.join(", ")}. → <b>${F[k]}</b>.${k===3?" Note: nós loses the -s: levantamo-nos.":""}`)}));
// L14B · pronoun position
[["Não ___ às 7h00. (eu / levantar-se)","me levanto"],["A que horas ___? (tu / deitar-se)","te deitas"],["Ela não ___ Glória. (chamar-se)","se chama"],["Porque é que vocês não ___? (deitar-se)","se deitam"],["Onde ___ com a Ana? (tu / encontrar-se)","te encontras"],["O Pedro nunca ___ cedo. (levantar-se)","se levanta"],["Nós ___ tarde. (levantar-se)","levantamo-nos"],["Ele ___ às 7h30. (levantar-se)","levanta-se"]].forEach(([p,a],i)=>
  text("L14B",7,"Write the verb with the pronoun in the right place.",p,[a],`The pronoun goes <b>before</b> the verb after <i>não</i>, question words, and words like <i>nunca, sempre, já, também, porque, que</i>: <b>${a}</b>. Otherwise it goes after, with a hyphen (<i>levanto-me</i>).`));
mc("L14B",6,"Which sentence is correct?","pronoun position",["Não me deito antes da meia-noite.","Não deito-me antes da meia-noite.","Me não deito antes da meia-noite.","Não deito me antes da meia-noite."],"After <b>não</b> the pronoun goes before the verb: <i>Não <b>me deito</b>.</i>");
mc("L14B",6,"Which sentence is correct?","question word",["A que horas te levantas?","A que horas levantas-te?","A que horas te levantas-te?","A que horas levantas?"],"After a question word the pronoun comes first: <b>A que horas te levantas?</b>");
// L14C · routine vocabulary and order
[["tomar o pequeno-almoço","almoçar"],["acordar","levantar-se"],["levantar-se","tomar duche"],["levar os filhos à escola","ir buscar os filhos à escola"],["almoçar","jantar"],["jantar","ir para a cama"]].forEach(([a,b])=>
  mc("L14C",3,"What do you do FIRST?","primeiro…",[a,b],`Usually <b>${a}</b> comes before <i>${b}</i>.`));
[["___ duche","tomar"],["___ para a cama","ir"],["___ as tarefas domésticas","fazer"],["___ a trabalhar","começar"],["___ às compras","ir"],["___ o pequeno-almoço","tomar"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L14C",3,i%2?"Choose the verb.":"Write the verb (tomar, ir, fazer, começar).",p,i%2?[a,...["tomar","ir","fazer","começar","levantar-se"].filter(x=>x!==a).slice(0,3)]:[a],`<b>${a} ${p.replace("___ ","")}</b>.`));
[["perto","longe"],["cedo","tarde"],["ir","voltar"],["levantar-se","deitar-se"],["antes","depois"],["começar","acabar"]].forEach(([a,b],i)=>
  (i%2?mc:text)("L14C",4,i%2?"Choose the opposite.":"Write the opposite.",`${a} ↔ ___`,i%2?[b,...["longe","tarde","voltar","deitar-se","depois","acabar"].filter(x=>x!==b).slice(0,3)]:[b],`<b>${a}</b> ↔ <b>${b}</b>.`));
mc("L14C",4,"“I'm late!”","Estou ___!",["atrasado","cedo","tarde","depois"],"<b>Estou atrasado/a!</b> = I'm late!");
// L14D · a / para / chegar a
[["Vou ___ escritório às 8h00. (for the whole day)","para o"],["Ele vai ___ casa às 19h00. (and stays there)","para"],["Vou ___ casa de banho.","à"],["Gosto de ir ___ cinema.","ao"],["Chego ___ casa muito tarde.","a"],["A que horas vais ___ cama?","para a"],["O Jorge chega ___ escritório às 9h00.","ao"],["A que horas chegas ___ Lisboa?","a"],["Vou ___ casa buscar o passaporte. Volto já.","a"]].forEach(([p,a],i)=>
  (i%2?mc:text)("L14D",6,i%2?"Choose: a, ao, à, para, para o, para a.":"Write: a, ao, à, para, para o or para a.",p,i%2?[a,...["a","ao","à","para","para o","para a"].filter(x=>x!==a).slice(0,3)]:[a],
   `After <i>ir / voltar</i>: <b>a</b> = short stay (Vou a casa, volto já), <b>para</b> = long stay (Vou para casa. Até amanhã!). After <i>chegar</i> always <b>a</b> (chego a casa, ao escritório). → <b>${a}</b>.`));
// L14E · time prepositions
[["Tomo o pequeno-almoço ___ manhã.","de"],["Vou ao ginásio ___ noite.","à"],["___ hora do almoço vou a casa.","Na"],["Encontramo-nos às oito ___ manhã.","da"],["Normalmente, jogo ténis ___ sexta. (every Friday)","à"],["No sábado faço uma festa. (only this Saturday) → ___ sábado","no"],["Trabalho ___ nove às cinco.","das"],["Não tenho tempo ___ a semana.","durante"],["Vou ao cinema ___ tarde.","à"],["Faço compras ___ sábado. (every Saturday)","ao"],["Levanto-me por ___ das 10h00.","volta"]].forEach(([p,a],i)=>
  (i%3===2?mc:text)("L14E",6,i%3===2?"Choose the preposition.":"Write the missing word.",p,i%3===2?[a,...["de","da","à","ao","no","na","das","durante"].filter(x=>x.toLowerCase()!==a.toLowerCase()).slice(0,3).map(x=>/^[A-Z]/.test(a)?cap(x):x)]:[a],
   `<b>de</b> manhã, <b>à</b> tarde, <b>à</b> noite, <b>na</b> hora do almoço, <b>durante</b> a semana; às oito <b>da</b> manhã. Weekdays: <b>a</b> (regularly: à sexta, ao sábado) vs <b>em</b> (once: na sexta, no sábado). From… to: <b>das</b> nove <b>às</b> cinco. <i>por volta de</i> = around. → <b>${a}</b>.`));
mc("L14E",5,"Habit (H) or one-off (P)? “Ao sábado, levanto-me tarde.”","H or P?",["H · habit (every Saturday)","P · only this Saturday"],"<b>ao</b> sábado = every Saturday (habit). <i>No</i> sábado = this Saturday (one-off).");
mc("L14E",5,"Habit (H) or one-off (P)? “Na terça-feira, vou a Londres.”","H or P?",["P · only this Tuesday","H · habit (every Tuesday)"],"<b>na</b> terça = this one Tuesday (one-off). <i>À</i> terça = every Tuesday.");
// L14F · frequency & texts
mc("L14F",4,"Order: which word means “never”?","___",["nunca","sempre","às vezes","raramente"],"sempre (always) → normalmente → frequentemente → às vezes → raramente → <b>nunca</b> (never).");
mc("L14F",4,"Which is most frequent?","frequency",["sempre","às vezes","raramente","nunca"],"<b>sempre</b> = always.");
text("L14F",6,"Write the pronoun position correctly: nunca + deitar-se (eu).","Eu nunca ___ antes da meia-noite.",["me deito"],"After <i>nunca</i> the pronoun goes before: <b>nunca me deito</b>.");
mc("L14F",5,"Sofia: wakes up late, works 15h00–21h00, dines out. Which is true?","A Sofia…",["só trabalha depois do almoço.","cozinha muito.","levanta-se às 6h00.","tem dois filhos."],"Sofia works <b>das 15h00 às 21h00</b> — only after lunch. She has dinner out with her boyfriend.");
mc("L14F",5,"Odete gets up at 6h00, takes her children to school at 7h30 and works 9h30–17h30. Which is true?","A Odete…",["levanta-se sempre muito cedo.","acorda tarde.","é pintora.","trabalha em casa."],"<i>Levanto-me <b>sempre muito cedo</b>, às 6h00.</i> Odete works in an office; Sofia is the painter.");
mc("L14F",5,"Gisela's boyfriend Jorge is always at home because…","O Jorge está sempre em casa porque…",["está sem trabalho.","trabalha à noite.","está doente.","está de férias."],"<i>O Jorge está sempre em casa porque <b>está sem trabalho</b>.</i>");
text("L14F",6,"Make a sentence (conjugate, add articles and prepositions).","Paulo / acordar / volta / oito / meia",["O Paulo acorda por volta das oito e meia"],"<b>O Paulo acorda por volta das oito e meia.</b>");
mc("L14F",4,"“go and pick up the children at school”","___ os filhos à escola",["ir buscar","levar","chegar","voltar"],"<b>ir buscar</b> = to go and fetch; <i>levar</i> = to take (there).");
mc("K14P",4,"In which word is the final a open [a]?","a",["está","fica","usa","mesa"],"A stressed <b>á</b> is open [a]: <i>est<b>á</b>, j<b>á</b>, ol<b>á</b></i>. Unstressed final a is closed [ɐ]: fica, usa, mesa.");

module.exports=bank;
