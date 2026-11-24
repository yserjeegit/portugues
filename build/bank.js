const {clock,flag,obj,tile}=require("./svg.js");
const bank=[];
let T="";const topic=t=>T=t;
// q: {d (difficulty 1-10), type mc|multi|text, ask, prompt, options (correct first) | nRight | accept, explain, img, fixed}
const add=q=>{q.topic=T;bank.push(q);};
const mc=(d,ask,prompt,options,explain,extra={})=>add({d,type:"mc",ask,prompt,options,explain,...extra});
const multi=(d,nRight,ask,prompt,options,explain,extra={})=>add({d,type:"multi",nRight,ask,prompt,options,explain,...extra});
const text=(d,ask,prompt,accept,explain,extra={})=>add({d,type:"text",ask,prompt,accept:[].concat(accept),explain,...extra});
const uniq=a=>[...new Set(a)];

/* =================== UNIDADE 1 · cumprimentos =================== */
topic("U1");
[["08:00",0,"Bom dia!","morning (until about midday)"],["10:30",0,"Bom dia!","still morning"],["15:00",0,"Boa tarde!","afternoon"],["17:00",0,"Boa tarde!","late afternoon, before dark"],["21:30",1,"Boa noite!","evening/night"],["23:00",1,"Boa noite!","night"]].forEach(([t,n,g,why])=>{
  mc(1,"Look at the clock. How do you greet someone at this time?","___",uniq([g,"Bom dia!","Boa tarde!","Boa noite!"]).concat(["Até logo!"]).slice(0,4),
   `${t} is ${why}, so the greeting is <b>${g}</b>. <i>Bom dia</i> = morning, <i>Boa tarde</i> = afternoon, <i>Boa noite</i> = evening and night (also used to say goodbye at night).`,{img:clock(t,n)});
});
mc(4,"Complete with the verb chamar-se.","Ele ___ Eduardo Sousa.",["chama-se","se chama","chamo-me","chamas-te"],
 "In European Portuguese affirmative sentences, the reflexive pronoun goes <b>after</b> the verb with a hyphen: <b>Ele chama-se</b>. It moves before the verb only after question words or negation (<i>Como se chama?</i>, <i>Não se chama</i>).");
mc(3,"Complete with the verb chamar-se.","Eu ___ Pedro.",["chamo-me","me chamo","chama-se","chamas-te"],
 "With <i>eu</i> the form is <b>chamo-me</b>. In an ordinary affirmative sentence European Portuguese puts the pronoun after the verb. <i>Me chamo</i> at the start of a sentence is Brazilian usage.");
mc(4,"Complete the yes/no question (tu).","___ Rita?",["Chamas-te","Te chamas","Chama-se","Chamo-me"],
 "A yes/no question has no question word, so the pronoun stays <b>after</b> the verb: <b>Chamas-te Rita?</b> Only words like <i>como</i>, <i>quem</i>, <i>onde</i> pull the pronoun in front.");
mc(5,"Choose the correct informal question (tu).","“What's your name?”",["Como te chamas?","Como chamas-te?","Como se chamas?","Como chamas?"],
 "After a question word like <i>como</i>, the pronoun comes <b>before</b> the verb: <b>Como te chamas?</b> The pronoun matches the person: <i>tu</i> → <b>te</b> + <i>chamas</i>.");
mc(5,"Complete the formal question.","Como ___ chama o senhor?",["se","te","me","-se"],
 "<i>O senhor</i> takes the 3rd person, so the pronoun is <b>se</b>, and after <i>como</i> it goes before the verb: <b>Como se chama o senhor?</b>");
mc(7,"Complete the negative sentence.","A Ana não ___ Maria.",["se chama","chama-se","chama-te","se chamo"],
 "<b>Não</b> pulls the pronoun in front of the verb, just like question words do: <b>A Ana não se chama Maria.</b> In the affirmative it would be <i>A Ana chama-se Ana</i>.");
text(4,"Type the correct form of ser (subject: tu).","___ a Teresa? <small>(tu)</small>","És",
 "Verb <i>ser</i>, singular: eu <b>sou</b>, tu <b>és</b>, você/ele/ela <b>é</b>. With <i>tu</i> the form is <b>És</b>, and the accent is required.");
mc(2,"Complete with the verb ser.","Quem ___ ele?",["é","és","sou","está"],
 "<i>Ele</i> is 3rd person singular: <b>Quem é ele?</b> We use <i>ser</i> to identify people.");
mc(1,"Complete with the verb ser.","Eu ___ o Pedro.",["sou","é","és","estou"],
 "With <i>eu</i>, <i>ser</i> is <b>sou</b>: <i>Sou o Pedro</i>. Identity always uses <i>ser</i>.");
mc(3,"Complete with the verb ser (formal you).","Você ___ a Anabela?",["é","és","sou","são"],
 "<i>Você</i> (like <i>o senhor / a senhora</i>) takes the 3rd-person form: <b>é</b>. <i>És</i> belongs to <i>tu</i>.");
mc(2,"Which greeting is formal?","Formal or informal?",["Bom dia! Como está?","Olá, Joana! Tudo bem?","Olá! Como te chamas?","Tudo bem?"],
 "<b>Como está?</b> uses the 3rd-person form (você / o senhor / a senhora), the polite way to address someone. <i>Tudo bem?</i> and the <i>tu</i> form are informal.");
mc(2,"Maria wants to say “thank you”. What does she say?","Maria: “___”",["Obrigada!","Obrigado!","Obrigados!","Obrigadas!"],
 "<i>Obrigado/obrigada</i> agrees with the <b>speaker</b>: a woman says <b>obrigada</b>, a man says <b>obrigado</b>.");
mc(4,"You welcome Maria at the airport.","Bem-___ a Lisboa, Maria!",["vinda","vindo","vindos","vindas"],
 "<i>Bem-vindo</i> agrees with the person being welcomed. Maria is one woman: <b>Bem-vinda!</b> (a man: <i>bem-vindo</i>; a group: <i>bem-vindos</i>).");
mc(2,"Complete with the definite article.","Sou ___ Inês.",["a","o","um","(nothing)"],
 "European Portuguese often uses the definite article before first names: <i>o Pedro</i>, <b>a Inês</b>. Inês is a woman's name, so the article is <b>a</b>.");
mc(2,"Complete with the definite article.","___ João é de Lisboa.",["O","A","Um","Os"],
 "Before a man's first name, use the masculine article <b>o</b>: <b>O João</b> é de Lisboa.");
mc(4,"Which farewell means you will see the person again the soonest?","Até… ?",["Até já!","Até logo!","Até amanhã!","Até à próxima!"],
 "<b>Até já</b> = “see you in a moment”. <i>Até logo</i> = later (usually the same day), <i>Até amanhã</i> = tomorrow, <i>Até à próxima</i> = until next time.");
multi(4,3,"Select ALL the expressions you can use to say goodbye.","Despedidas",["Adeus!","Até logo!","Até amanhã!","Muito prazer!","Tudo bem?","Olá!"],
 "<b>Adeus!</b>, <b>Até logo!</b> and <b>Até amanhã!</b> are farewells. <i>Muito prazer!</i> is said when you meet someone; <i>Olá!</i> and <i>Tudo bem?</i> are greetings.");
mc(1,"Which day comes after quinta-feira?","Depois de quinta-feira é ___.",["sexta-feira","quarta-feira","sábado","terça-feira"],
 "Portuguese weekdays are numbered: segunda (2nd), terça (3rd), quarta (4th), <i>quinta</i> (5th), <b>sexta-feira</b> (6th). Then <i>sábado</i> and <i>domingo</i>.");
mc(2,"Which day comes before segunda-feira?","Antes de segunda-feira é ___.",["domingo","sábado","terça-feira","sexta-feira"],
 "The week starts on <i>segunda-feira</i> (Monday), so the day before is <b>domingo</b> (Sunday).");
mc(2,"What is quarta-feira in English?","quarta-feira = ___",["Wednesday","Thursday","Tuesday","Friday"],
 "<b>Quarta-feira</b> = Wednesday (the 4th day counting from Sunday). Tuesday is <i>terça-feira</i> and Thursday is <i>quinta-feira</i>.");
mc(2,"Choose the right answer.","A: Quem é ela? &nbsp;B: ___",["É a Rita.","Sou a Rita.","Chamo-me Rita.","Bem, obrigada."],
 "The question is about a third person (<i>ela</i>), so the answer uses <i>é</i>: <b>É a Rita.</b> <i>Sou / Chamo-me</i> would be about yourself.");
mc(3,"Someone says “Muito prazer!” to you. What is the natural reply?","A: Muito prazer! &nbsp;B: ___",["Muito prazer!","De nada!","Até já!","Bom dia!"],
 "When you are introduced, both people say <b>Muito prazer!</b> (or <i>Muito gosto!</i>). <i>De nada</i> is the answer to <i>obrigado</i>.");
mc(3,"A man answers the formal question “Como está?”.","A: Bom dia! Como está? &nbsp;B: ___",["Bem, obrigado. E a senhora?","Bem, obrigada. E tu?","Sou o Paulo.","Tudo bem, e tu?"],
 "A man says <b>obrigado</b>, and he keeps the formal register: <b>E a senhora?</b> (to a woman). <i>E tu?</i> would be informal.");
mc(2,"Choose the natural reply.","A: Olá, Joana! Tudo bem? &nbsp;B: ___",["Tudo bem, obrigada.","Muito prazer, senhor.","Boa noite, adeus.","Sou de Lisboa."],
 "<i>Tudo bem?</i> is answered with <b>Tudo bem, obrigada</b> (Joana is a woman, so <i>obrigada</i>).");

/* =================== UNIDADE 2 · países e preposições =================== */
topic("U2");
const C={ // country: [article form after de, after em, gender note]
 "Portugal":["de","em","no article"],"Marrocos":["de","em","no article"],"Angola":["de","em","no article"],
 "Brasil":["do","no","o Brasil"],"Japão":["do","no","o Japão"],"México":["do","no","o México"],
 "Suécia":["da","na","a Suécia"],"China":["da","na","a China"],"Alemanha":["da","na","a Alemanha"],
 "Estados Unidos":["dos","nos","os Estados Unidos"],"Filipinas":["das","nas","as Filipinas"]};
const deOpts=["de","do","da","dos","das"],emOpts=["em","no","na","nos","nas"];
const pickOpts=(right,all)=>[right,...all.filter(x=>x!==right)].slice(0,4);
const rule=(c,kind)=>{const [d,e,n]=C[c];return n==="no article"?`<b>${c}</b> takes no article, so the preposition stays as it is: <b>${kind==="de"?d:e} ${c}</b>.`:`The country is <i>${n}</i>, so the preposition merges with the article: ${kind==="de"?"de":"em"} + ${n.split(" ")[0]} = <b>${kind==="de"?d:e}</b>.`};
[["O Paulo","Portugal",4],["A Sofia","Brasil",3],["A Wilma","Suécia",3],["O Mark","Estados Unidos",5,1],["A Samantha","Filipinas",6,1],["O Karim","Marrocos",4],["O Hiroto","Japão",3],["A Wei","China",3],["A Luena","Angola",4]].forEach(([who,c,d,t])=>{
  const ans=C[c][0],p=`${who} é ___ ${c}.`,ex=`<i>De</i> shows origin. ${rule(c,"de")}`;
  t?text(d,"Type de / do / da / dos / das.",p,ans,ex):mc(d,"Complete with de, do, da, dos or das.",p,pickOpts(ans,deOpts),ex);
});
[["Berlim","Alemanha",3],["Tóquio","Japão",3],["Nova Iorque","Estados Unidos",5,1],["Manila","Filipinas",6],["Coimbra","Portugal",4],["Casablanca","Marrocos",4],["O Rio de Janeiro","Brasil",3],["Pequim","China",3],["Luanda","Angola",5,1]].forEach(([city,c,d,t])=>{
  const ans=C[c][1],p=`${city} é ___ ${c}.`,ex=`<i>Em</i> shows location. ${rule(c,"em")} Be careful not to confuse it with <i>de</i> (origin).`;
  t?text(d,"Type em / no / na / nos / nas.",p,ans,ex):mc(d,"Complete with em, no, na, nos or nas.",p,pickOpts(ans,emOpts),ex);
});
[["franca","França",["França","Itália","Irlanda","Rússia"],1,"The French flag has vertical stripes: blue, white, red. <b>França</b> → francês/francesa."],
 ["alemanha","Alemanha",["Alemanha","Rússia","Polónia","Ucrânia"],1,"Horizontal black, red and gold stripes: <b>a Alemanha</b> (Germany) → alemão/alemã."],
 ["irlanda","Irlanda",["Irlanda","Itália","França","México"],4,"Green, white and <b>orange</b>: this is <b>a Irlanda</b>. Italy's flag looks similar but the third stripe is red."],
 ["japao","Japão",["Japão","China","Polónia","Suécia"],1,"A red circle on white: <b>o Japão</b> → japonês/japonesa."],
 ["polonia","Polónia",["Polónia","Rússia","Ucrânia","Alemanha"],3,"White over red: <b>a Polónia</b> (European Portuguese spelling; Brazil writes <i>Polônia</i>). Nationality: polaco."],
 ["suecia","Suécia",["Suécia","Finlândia","Ucrânia","Grécia"],2,"Blue with a yellow cross: <b>a Suécia</b> (Sweden). Finland has the same cross shape but white with a blue cross."]
].forEach(([k,name,opts,d,ex])=>mc(d,"Which country does this flag belong to?","___",opts,ex,{img:flag(k)}));
multi(5,3,"Select ALL the countries used WITHOUT an article.","Sou de ___",["Portugal","Marrocos","Angola","Brasil","China","México"],
 "No article: <b>Portugal, Marrocos, Angola</b> (also Moçambique, Cuba, Israel). Others need one: <i>do Brasil, da China, do México</i>.");
mc(3,"True or false?","Varsóvia é na Ucrânia.",["Falso","Verdadeiro"],
 "False. <b>Varsóvia</b> (Warsaw) is in Poland: <i>Varsóvia é na <b>Polónia</b></i>.",{fixed:true});
mc(2,"True or false?","Deli é no México.",["Falso","Verdadeiro"],
 "False. <b>Deli</b> (Delhi) is in India: <i>Deli é na Índia</i>. <i>A Índia</i> is feminine, so em + a = <b>na</b>.",{fixed:true});
mc(3,"Answer the question.","Onde fica Pequim? ___",["Na China.","No China.","Em China.","Da China."],
 "<i>A China</i> is feminine, so em + a = <b>na</b>: <b>Na China.</b> <i>Da China</i> would mean “from China”.");
mc(4,"Put the sentence in the plural.","Ele é do México. → ___",["Eles são do México.","Eles é do México.","Eles somos do México.","Eles são dos México."],
 "<i>Ser</i> plural: nós <b>somos</b>, vocês/eles/elas <b>são</b>. The country does not change: <b>Eles são do México.</b>");
mc(3,"Complete with the verb ser.","Nós ___ de Portugal.",["somos","são","estamos","sou"],
 "With <i>nós</i>, <i>ser</i> is <b>somos</b>. Origin always uses <i>ser de</i>.");

/* =================== NÚMEROS =================== */
topic("NUM");
const U=["zero","um","dois","três","quatro","cinco","seis","sete","oito","nove","dez","onze","doze","treze","catorze","quinze","dezasseis","dezassete","dezoito","dezanove"];
const TT=["","","vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta","noventa"];
const H=["","cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos"];
const w=n=>{if(n===1000)return"mil";if(n===100)return"cem";const p=[];if(n>=100){p.push(H[Math.floor(n/100)]);n%=100}if(n>0){if(n<20)p.push(U[n]);else{p.push(TT[Math.floor(n/10)]);if(n%10)p.push(U[n%10])}}return p.join(" e ")||"zero"};
const numNote=n=>n<20?"Numbers up to 19 have their own words (European spelling: dezasseis, dezassete, dezanove).":n===100?"Exactly 100 is <i>cem</i>; from 101 it becomes <i>cento e…</i>.":"Each part is joined with <b>e</b>: hundreds <i>e</i> tens <i>e</i> units.";
[[14,[40,4,15],2],[15,[50,5,14],2],[16,[17,60,6],3],[60,[70,16,6],3],[70,[60,17,7],3]].forEach(([n,ds,d])=>
  mc(d,"How is this number written?",`${n} = ___`,[w(n),...ds.map(w)],`${n} = <b>${w(n)}</b>. ${numNote(n)} Don't confuse ${ds.slice(0,2).map(x=>`<i>${w(x)}</i> (${x})`).join(" and ")}.`));
mc(5,"How is this number written?","101 = ___",["cento e um","cem e um","um cento e um","cento e dez"],"<b>Cento e um</b>. Exactly 100 is <i>cem</i>, but as soon as something follows it becomes <i>cento</i>: 101 cento e um, 150 cento e cinquenta.");
mc(4,"How is this number written?","100 = ___",["cem","cento","um cem","cento e zero"],"Exactly 100 is <b>cem</b>. <i>Cento</i> is used only when more follows: <i>cento e um</i>.");
mc(5,"How is this number written?","234 = ___",["duzentos e trinta e quatro","duzentos trinta e quatro","dois centos e trinta e quatro","duzentos e quarenta e três"],"<b>Duzentos e trinta e quatro</b>: put <i>e</i> between hundreds and tens and between tens and units. 200 has its own word, <i>duzentos</i>.");
mc(4,"How is this number written?","500 = ___",["quinhentos","cinco centos","cincocentos","cinquenta"],"500 is irregular: <b>quinhentos</b>. Other irregular hundreds: duzentos, trezentos, seiscentos.");
mc(6,"How is this number written?","777 = ___",[w(777),w(767),w(677),"setecentos setenta e sete"],`777 = <b>${w(777)}</b>. Watch <i>setenta</i> (70) vs <i>sessenta</i> (60), and don't forget both <i>e</i>'s.`);
[[545,[505,554,455],4],[616,[660,606,166],5],[419,[490,409,914],5],[86,[68,96,76],3]].forEach(([n,ds,d])=>
  mc(d,"Which number is this?",`${w(n)} = ___`,[String(n),...ds.map(String)],`<i>${w(n)}</i> = <b>${n}</b>. Read it part by part, separated by <i>e</i>.`));
[[31,67,6],[44,45,6],[17,54,6],[125,250,8]].forEach(([a,b,d])=>text(d,"Do the sum and write the result in words.",`${a} + ${b} = ___`,w(a+b),`${a} + ${b} = ${a+b} → <b>${w(a+b)}</b>. ${numNote(a+b)}`));
mc(5,"Read the house number on the tile plate.","Número ___",[w(350),"trezentos cinquenta","três cento e cinquenta","trezentos e quinze"],"350 = <b>trezentos e cinquenta</b>. Don't confuse <i>cinquenta</i> (50) with <i>quinze</i> (15). Tile house numbers (<i>azulejos</i>) are typical in Portugal.",{img:tile(350)});
mc(6,"Read the house number on the tile plate.","Número ___",[w(828),w(882),w(288),"oito centos e vinte e oito"],`828 = <b>${w(828)}</b>. 800 is one word: <i>oitocentos</i>.`,{img:tile(828)});

/* =================== NACIONALIDADES =================== */
topic("NAT");
const N={Rússia:["russo","russa","russos","russas"],Japão:["japonês","japonesa","japoneses","japonesas"],Inglaterra:["inglês","inglesa","ingleses","inglesas"],Brasil:["brasileiro","brasileira","brasileiros","brasileiras"],Itália:["italiano","italiana","italianos","italianas"],China:["chinês","chinesa","chineses","chinesas"],Suécia:["sueco","sueca","suecos","suecas"],Portugal:["português","portuguesa","portugueses","portuguesas"],França:["francês","francesa","franceses","francesas"],Grécia:["grego","grega","gregos","gregas"],Ucrânia:["ucraniano","ucraniana","ucranianos","ucranianas"],Espanha:["espanhol","espanhola","espanhóis","espanholas"],Índia:["indiano","indiana","indianos","indianas"],Marrocos:["marroquino","marroquina","marroquinos","marroquinas"],México:["mexicano","mexicana","mexicanos","mexicanas"]};
const FI={m:0,f:1,mp:2,fp:3},FD={m:"one man → masculine singular",f:"one woman → feminine singular",mp:"a group of men or a mixed group → masculine plural",fp:"only women → feminine plural"};
[["A Olga","da Rússia","Rússia","f",3],["O Hiroto","do Japão","Japão","m",2],["A Misaki","do Japão","Japão","f",4,1],["O Tom e a Kate","de Inglaterra","Inglaterra","mp",5],
 ["A Ana e a Rita","do Brasil","Brasil","fp",4],["O Marco","de Itália","Itália","m",2],["A Wei","da China","China","f",4],["O Lars e a Ingrid","da Suécia","Suécia","mp",5,1],
 ["A Inês e a Joana","de Portugal","Portugal","fp",5],["O Pierre","de França","França","m",2],["A Sofia","da Grécia","Grécia","f",3,1],["O Ivan e a Oksana","da Ucrânia","Ucrânia","mp",5],
 ["A Carmen e a Lucía","de Espanha","Espanha","fp",5,1],["O Raj","da Índia","Índia","m",2],["A Amina","de Marrocos","Marrocos","f",4],["O Diego e o Luis","do México","México","mp",4]
].forEach(([who,from,c,form,d,t])=>{
  const f=N[c],ans=f[FI[form]],pl=form.endsWith("p"),p=`${who} ${pl?"são":"é"} ${from}. ${pl?(form==="fp"?"Elas":"Eles")+" são":(form==="f"?"Ela":"Ele")+" é"} ___.`;
  const ex=`${c} → ${f.join(" / ")} (m. / f. / m. pl. / f. pl.). Here it's ${FD[form]}: <b>${ans}</b>.`;
  t?text(d+1,"Type the nationality in the correct form.",p,ans,ex):mc(d,"Choose the nationality in the correct form.",p,[ans,...f.filter(x=>x!==ans)],ex);
});
text(7,"Type the masculine plural.","O Pablo e o Diego são ___. <small>(espanhol)</small>","espanhóis","Words ending in <i>-ol</i> form the plural in <b>-óis</b>, with an accent: espanhol → <b>espanhóis</b>. The feminine plural is regular: <i>espanholas</i>.");
text(7,"Correct the error: “Eles são alemãs.”","Eles são ___.","alemães","<i>Eles</i> is masculine plural, so: <b>alemães</b>. <i>Alemãs</i> is feminine plural (<i>Elas são alemãs</i>). Singular: alemão / alemã.");
multi(5,3,"Select ALL the nationalities in the FEMININE PLURAL.","Elas são…",["inglesas","alemãs","espanholas","alemães","espanhóis","ingleses"],
 "Feminine plural: <b>inglesas, alemãs, espanholas</b>. The others are masculine plural: <i>ingleses, alemães, espanhóis</i>.");
mc(2,"Answer the question.","Que língua falam os brasileiros? ___",["Falam português.","Falam brasileiro.","Falam espanhol.","Falam inglês."],
 "Brazilians speak <b>português</b>. <i>Brasileiro</i> is the nationality, not the language. Likewise Mexicans speak <i>espanhol</i> and Americans <i>inglês</i>.");

/* =================== UNIDADE 4 · sala de aula e cores =================== */
topic("U4");
const OB={cadeira:["f","chair"],mesa:["f","table"],porta:["f","door"],livro:["m","book"],janela:["f","window"],relogio:["m","clock"]};
const nm=k=>k==="relogio"?"relógio":k, art=k=>OB[k][0]==="f"?"uma":"um";
Object.keys(OB).forEach((k,i)=>{
  const others=Object.keys(OB).filter(x=>x!==k), o1=others[i%5], o2=others[(i+2)%5];
  mc(OB[k][0]==="f"?3:2,"What is this?","O que é isto? ___",[`É ${art(k)} ${nm(k)}.`,`É ${art(k)==="um"?"uma":"um"} ${nm(k)}.`,`É ${art(o1)} ${nm(o1)}.`,`É ${art(o2)} ${nm(o2)}.`],
   `It's a ${OB[k][1]}: <b>${art(k)} ${nm(k)}</b>. ${OB[k][0]==="f"?"It is feminine, so it takes <i>uma</i>.":"It is masculine, so it takes <i>um</i>."}`,{img:obj(k,k==="porta"?"verde":k==="janela"?"branco":"castanho",OB[k][1])});
});
const CF={vermelho:["vermelho","vermelha","vermelhos","vermelhas","red"],amarelo:["amarelo","amarela","amarelos","amarelas","yellow"],verde:["verde","verde","verdes","verdes","green"],branco:["branco","branca","brancos","brancas","white"],azul:["azul","azul","azuis","azuis","blue"],preto:["preto","preta","pretos","pretas","black"],castanho:["castanho","castanha","castanhos","castanhas","brown"],cinzento:["cinzento","cinzenta","cinzentos","cinzentas","grey"]};
[["mesa","A mesa é","f","vermelho",3],["livro","O livro é","m","amarelo",2],["cadeiras","As cadeiras são","fp","verde",4],["porta","A porta é","f","preto",4],["livros","Os livros são","mp","azul",6],["mesas","As mesas são","fp","branco",5]].forEach(([k,p,g,c,d])=>{
  const f=CF[c],ans=f[FI[g]];let opts=uniq([ans,...f.slice(0,4)]);
  if(opts.length<4) opts=uniq([...opts,c==="azul"?"azules":"verdas",CF.preto[FI[g]]]);
  mc(d,"Look at the picture and complete with the colour.",`${p} ___.`,opts.slice(0,4),
   `The colour is ${f[4]}. ${c==="verde"||c==="azul"?`<i>${f[0]}</i> has the same form for masculine and feminine; only the number changes (${f[0]} → ${f[2]}).`:`Colours ending in <i>-o</i> agree in gender and number: ${f.slice(0,4).join(", ")}.`} So: <b>${p} ${ans}.</b>`,
   {img:obj(k,c,`${f[4]} ${k}`)});
});
mc(4,"Answer the question about this flag.","De que cor é a bandeira da Ucrânia? ___",["É azul e amarela.","É azul e amarelo.","É azuis e amarelas.","É verde e amarela."],
 "<i>A bandeira</i> is feminine singular, so <i>amarelo</i> → <b>amarela</b>; <i>azul</i> has one form for both genders. <b>É azul e amarela.</b>",{img:flag("ucrania","Flag of Ukraine")});
mc(6,"Answer the question about this flag.","De que cor é a bandeira da Alemanha? ___",["É preta, vermelha e amarela.","É preto, vermelho e amarelo.","É pretas, vermelhas e amarelas.","É preta, vermelha e branca."],
 "Black, red and gold/yellow. <i>A bandeira</i> is feminine, so every colour takes the feminine form: <b>preta, vermelha e amarela</b>.",{img:flag("alemanha","Flag of Germany")});
multi(4,3,"Select ALL the colours you see on this flag.","A bandeira da Itália é…",["verde","branco","vermelho","azul","amarelo","preto"],
 "The Italian flag is <b>verde, branco e vermelho</b>. In a sentence the colours agree with <i>a bandeira</i>: <i>verde, branca e vermelha</i>.",{img:flag("italia","Flag of Italy")});
mc(4,"You point at a building far away from both of you. Which word?","O que é ___?",["aquilo","isto","isso","este"],
 "<i>Isto</i> = near the speaker, <i>isso</i> = near the listener, <b>aquilo</b> = far from both.");
mc(5,"Your friend is holding a book. You ask about it.","O que é ___?",["isso","isto","aquilo","esta"],
 "The object is near the <b>listener</b>, so use <b>isso</b>. If you were holding it, you'd say <i>isto</i>.");
mc(4,"You are holding a dictionary in your hand.","___ é um dicionário chinês-português.",["Isto","Isso","Aquilo","Esse"],
 "The object is in <b>your</b> hand (near the speaker), so use <b>isto</b>.");
mc(5,"You point at a map on the far wall of the classroom.","Como se diz ___ em português?",["aquilo","isto","isso","este"],
 "The map is far from both of you, so: <b>aquilo</b>. <i>Isto, isso, aquilo</i> don't change for gender or number.");
mc(2,"The teacher says: “Fechem os livros.” What do you do?","Fechem os livros.",["Close the books","Open the books","Read the text","Work in pairs"],
 "<b>Fechar</b> = to close. Compare <i>Abram os livros</i> (open), <i>Leiam o texto</i> (read), <i>Trabalhem em pares</i> (work in pairs).");
mc(2,"What does the student mean?","Não percebo.",["I don't understand.","I don't remember.","I can't hear.","I don't know the page."],
 "<b>Não percebo</b> = <i>Não compreendo</i> = I don't understand. “I don't remember” is <i>Não me lembro</i>.");
mc(3,"Complete the classroom question.","Como se diz “window” ___ português?",["em","no","de","na"],
 "<b>Como se diz X em português?</b> Languages take <i>em</i> without an article. (Answer: <i>janela</i>.)");
mc(3,"What is the student asking?","Pode repetir, por favor?",["Can you repeat, please?","Can you write it, please?","Can you speak slowly?","Which page is it?"],
 "<b>Repetir</b> = to repeat. “Can you write it on the board?” is <i>Pode escrever no quadro?</i>");
text(5,"Type the plural.","um jornal → dois ___","jornais","Nouns ending in <i>-al</i> change to <b>-ais</b>: jornal → <b>jornais</b>.");
mc(5,"Choose the plural.","um avião → dois ___",["aviões","aviãos","aviães","aviãs"],
 "<i>Avião</i> → <b>aviões</b>. Words in <i>-ão</i> have three plural types (<i>mãos, cães, aviões</i>) and must be learned one by one.");

/* =================== PRONÚNCIA =================== */
topic("PRON");
mc(5,"In which word is the underlined o NOT pronounced [u]?","The letter <span class='blank' style='min-width:1.4em'>o</span>",["<b>o</b>ito","quatr<b>o</b>","sábad<b>o</b>","cinc<b>o</b>"],
 "Unstressed final <i>-o</i> is reduced to [u]: <i>quatro, sábado, cinco</i>. In <b>oito</b> the o is stressed and part of the diphthong <i>oi</i>, so it stays [o].");
mc(5,"In which word is the underlined s pronounced [s] (not [ʃ] “sh”)?","The letter <span class='blank' style='min-width:1.4em'>s</span>",["<b>s</b>ábado","sei<b>s</b>","de<b>s</b>culpe","trê<b>s</b>"],
 "In European Portuguese, <i>s</i> at the end of a word or before a voiceless consonant sounds like [ʃ]: <i>seis, três, desculpe</i>. At the start of a word it's [s]: <b>sábado</b>.");
mc(6,"In which word is the underlined e NOT pronounced [ɨ]?","The letter <span class='blank' style='min-width:1.4em'>e</span>",["m<b>e</b>sa","tard<b>e</b>","verd<b>e</b>","pared<b>e</b>"],
 "Unstressed <i>e</i> is reduced to [ɨ], almost silent: <i>tarde, verde, parede</i>. In <b>mesa</b> the e is stressed, so it's a full [e].");
mc(4,"Where is the stress?","amanhã",["a-ma-<b>NHÃ</b>","<b>A</b>-ma-nhã","a-<b>MA</b>-nhã","all syllables equal"],
 "The tilde marks a nasal vowel and, at the end of a word, attracts the stress: a-ma-<b>NHÃ</b> (like <i>alemã, irmã</i>).");
mc(4,"Where is the stress?","Marrocos",["ma-<b>RRO</b>-cos","<b>MA</b>-rro-cos","ma-rro-<b>COS</b>","all syllables equal"],
 "Words ending in a vowel + <i>-s</i> are normally stressed on the second-to-last syllable: ma-<b>RRO</b>-cos (like <i>Atenas</i>).");
mc(6,"How is the underlined s pronounced?","france<b>s</b>a",["[z]","[s]","[ʃ]","silent"],
 "A single <i>s</i> between two vowels sounds like [z]: <i>france<b>s</b>a, chine<b>s</b>a, japone<b>s</b>a, mesa</i>.");
mc(3,"Which word means “German woman”?","alemão / alemã",["alemã","alemão","both","neither"],
 "<b>Alemã</b> [ɐlɨˈmɐ̃] ends in a single nasal vowel and is feminine. <i>Alemão</i> ends in the nasal diphthong [ɐ̃w] and is masculine.");
mc(4,"How do you turn “Ela é portuguesa.” into a yes/no question when speaking?","Ela é portuguesa?",["Same words, rising intonation at the end","Put the verb first: É ela portuguesa?","Add “do” at the start","Add “não” at the end"],
 "Portuguese yes/no questions usually keep the same word order; only the <b>intonation</b> changes: it rises at the end.");
mc(6,"How is the first s pronounced?","e<b>s</b>tados",["[ʃ]","[s]","[z]","silent"],
 "<i>s</i> before a voiceless consonant (here <i>t</i>) sounds [ʃ]: e<b>s</b>tados, e<b>s</b>tá, E<b>s</b>panha.");
mc(3,"Which word has a nasal vowel?","Nasal ou oral?",["irmã","mesa","porta","livro"],
 "The tilde (~) marks nasal vowels: <b>irmã</b>, alemã, são, irmão. <i>Mesa, porta, livro</i> only have oral vowels.");

/* =================== SER e ESTAR =================== */
topic("SE");
const SER={eu:"sou",tu:"és",ele:"é",nos:"somos",eles:"são"},EST={eu:"estou",tu:"estás",ele:"está",nos:"estamos",eles:"estão"};
const PN={eu:"eu",tu:"tu",ele:"ele/ela/você",nos:"nós",eles:"eles/elas/vocês"};
const R={origin:"where someone is <b>from</b> is permanent (ser de)",nat:"nationality is a permanent characteristic",prof:"a profession or role says who someone is",geo:"the location of a place (city, country, monument) never changes",id:"you are saying what or who something is",day:"days and dates use ser",char:"it's a lasting characteristic (colour, size, personality)",mat:"what something is made of doesn't change",state:"it's a temporary state or feeling that can change soon",loc:"it's where a person is <b>right now</b> (temporary location)",cond:"it's the current condition of something (open/closed, hot/cold)"};
[["A Maria ___ portuguesa.","ser","ele","nat",2],["Nós ___ cansados hoje.","est","nos","state",4],["Eu ___ do Brasil.","ser","eu","origin",2],["Onde ___ vocês agora?","est","eles","loc",4],
 ["O livro ___ azul.","ser","ele","char",3],["Lisboa ___ em Portugal.","ser","ele","geo",5],["Tu ___ em casa?","est","tu","loc",4],["Eles ___ professores.","ser","eles","prof",3],
 ["Hoje ___ segunda-feira.","ser","ele","day",4],["A Ana ___ em Roma esta semana.","est","ele","loc",4],["Como ___? <small>(tu)</small>","est","tu","state",3],["Nós ___ alunos de português.","ser","nos","prof",4],
 ["O café ___ frio.","est","ele","cond",5],["A janela ___ aberta.","est","ele","cond",5],["O Pedro ___ alto.","ser","ele","char",3],["Vocês ___ ingleses?","ser","eles","nat",3],
 ["Eu ___ muito bem, obrigado.","est","eu","state",3],["O João ___ no escritório agora.","est","ele","loc",4],["A mesa ___ de madeira.","ser","ele","mat",6],["Elas ___ de Angola.","ser","eles","origin",3],
 ["Tu ___ muito simpático.","ser","tu","char",5],["O Rui ___ doente hoje.","est","ele","state",4],["Isto ___ um dicionário.","ser","ele","id",2],["Nós ___ em Paris de férias.","est","nos","loc",5],
 ["A porta ___ fechada.","est","ele","cond",5],["Eles ___ contentes com o teste.","est","eles","state",5]
].forEach(([p,v,pr,r,d],i)=>{
  const right=(v==="ser"?SER:EST)[pr],other=(v==="ser"?EST:SER)[pr];
  const alt=Object.keys(SER).filter(k=>k!==pr);const a1=alt[i%4],a2=alt[(i+2)%4];
  const ex=`Use <b>${v==="ser"?"ser":"estar"}</b>: ${R[r]}. With <i>${PN[pr]}</i> → <b>${right}</b>. ${v==="ser"?`(<i>${other}</i> would describe a temporary state or location.)`:`(<i>${other}</i> would describe a permanent characteristic.)`}`;
  if(i%5===4) text(d+1,"Type the correct form of ser or estar.",p,right,ex);
  else mc(d,"Ser or estar?",p,uniq([right,other,(v==="ser"?SER:EST)[a1],(v==="ser"?EST:SER)[a2]]),ex);
});
multi(7,3,"Select ALL the sentences that are correct.","Ser ou estar?",["Eu estou bem.","A Ana está em Roma.","Hamburgo é na Alemanha.","Eles estão gregos.","Lisboa está em Portugal.","Eu sou cansado hoje."],
 "Correct: <b>Eu estou bem</b> (temporary state), <b>A Ana está em Roma</b> (where she is now), <b>Hamburgo é na Alemanha</b> (permanent location). Nationality takes <i>ser</i> (<i>Eles são gregos</i>), cities don't move (<i>Lisboa é/fica em Portugal</i>), and tiredness is temporary (<i>Estou cansado</i>).");
multi(6,3,"Select ALL the sentences where SER is the right verb.","___",["___ do Japão. → Sou","Hoje ___ sexta-feira. → É","O Porto ___ no norte de Portugal. → É","___ em casa agora. → Estou","Como ___? → Estás","A porta ___ aberta. → Está"],
 "<b>Ser</b>: origin (<i>Sou do Japão</i>), days (<i>Hoje é sexta-feira</i>), geographic location (<i>O Porto é no norte</i>). <b>Estar</b>: where you are now, how you are, the current condition of an object.");
mc(5,"What is the difference?","Sou de Londres. / Estou em Londres.",["I'm from London. / I'm in London (now).","I'm in London. / I'm from London.","Both mean “I live in London.”","Both mean “I'm from London.”"],
 "<b>Ser de</b> = origin (permanent). <b>Estar em</b> = where you are at the moment (temporary).");
mc(6,"Choose the correct sentence.","Who is sick today?",["O Rui está doente hoje.","O Rui é doente hoje.","O Rui estão doente hoje.","O Rui fica doente hoje."],
 "Being sick <i>today</i> is a temporary state → <b>estar</b>: <i>O Rui está doente hoje.</i>");

/* =================== FICAR =================== */
topic("FIC");
const FIC={eu:"fico",tu:"ficas",ele:"fica",nos:"ficamos",eles:"ficam"};
[["Eu ___ em casa hoje.","eu",2],["Tu ___ no Porto até domingo?","tu",4],["O Pedro ___ em Lisboa três dias.","ele",3],["Nós ___ no Hotel Central.","nos",4],
 ["Vocês ___ para o jantar?","eles",4],["Elas ___ em Coimbra uma semana.","eles",4],["A Ana ___ com os amigos no fim de semana.","ele",3],["Nós ___ aqui mais um dia.","nos",5]
].forEach(([p,pr,d],i)=>{
  const right=FIC[pr],alt=Object.values(FIC).filter(x=>x!==right);
  const ex=`Here <i>ficar</i> means <b>to stay</b>. It's a regular -ar verb: fico, ficas, fica, ficamos, ficam. With <i>${PN[pr]}</i> → <b>${right}</b>.`;
  if(i%3===1) text(d+2,"Type the correct form of ficar (to stay).",p,right,ex);
  else mc(d,"Complete with ficar (to stay).",p,[right,alt[i%4],alt[(i+1)%4],pr==="nos"?"ficemos":"ficão"],ex);
});
mc(3,"What does it mean?","Fico em casa hoje.",["I'm staying at home today.","I live at home.","I'm going home today.","My house is here."],
 "<b>Ficar</b> + place = to <b>stay</b> somewhere: <i>Fico em casa</i> = I'm staying at home. “I live” is <i>moro</i>.");
mc(4,"What does it mean?","Onde fica a estação?",["Where is the station?","Where are you staying?","When does the train leave?","Is the station open?"],
 "With places, <b>ficar</b> means “to be located”: <i>Onde fica a estação?</i> = Where is the station (located)?");
mc(6,"What does it mean?","Onde ficas em Lisboa?",["Where are you staying in Lisbon?","Where is Lisbon?","Where do you work in Lisbon?","Are you from Lisbon?"],
 "<i>Ficas</i> is the <i>tu</i> form and refers to a person, so here <b>ficar = to stay</b>: Where are you staying in Lisbon? Compare <i>Onde fica Lisboa?</i> (where is Lisbon located).");
mc(4,"What does it mean?","Ficamos em Paris uma semana.",["We are staying in Paris for a week.","We live in Paris.","Paris is a week away.","We are from Paris."],
 "<b>Ficamos</b> (nós) + place + time = we stay somewhere for a period: We're staying in Paris for a week.");
mc(3,"Rewrite the sentence with ficar.","Moscovo é na Rússia. → ___",["Moscovo fica na Rússia.","Moscovo ficam na Rússia.","Moscovo está na Rússia.","Moscovo fica da Rússia."],
 "For the location of places, <b>ser</b> and <b>ficar</b> are interchangeable: <i>Moscovo é / fica na Rússia</i>. <i>Estar</i> is not used for permanent locations.");
text(4,"Type the correct form of ficar.","Onde ___ Sevilha?","fica","<i>Sevilha</i> is one city (3rd person singular): <b>Onde fica Sevilha?</b> (Em Espanha.)");
mc(5,"Complete with ficar.","Lisboa e o Porto ___ em Portugal.",["ficam","fica","ficamos","estão"],
 "Two cities = plural subject → <b>ficam</b>. Location of places: <i>ficar</i> or <i>ser</i>, not <i>estar</i>.");
mc(3,"Which question asks where a city is located?","___",["Onde fica Coimbra?","Onde estás?","Onde moras?","De onde és?"],
 "<b>Onde fica…?</b> asks for the location of a place. <i>Onde estás?</i> = where are you now; <i>Onde moras?</i> = where do you live; <i>De onde és?</i> = where are you from.");
multi(7,3,"Select ALL the sentences where ficar means “to stay”.","Ficar = to stay?",["Fico em casa hoje.","Ficamos no hotel três noites.","O Rui fica em Lisboa até sexta-feira.","Onde fica Lisboa?","O Porto fica no norte.","A escola fica em Belém."],
 "When the subject is a <b>person</b>, <i>ficar</i> + place usually means <b>to stay</b>. When the subject is a <b>place</b> (Lisboa, o Porto, a escola), it means <i>to be located</i>.");
multi(6,3,"Select ALL the correct forms of ficar.","ficar",["eu fico","nós ficamos","eles ficam","tu fica","nós ficemos","eles ficão"],
 "Ficar is a regular -ar verb: eu <b>fico</b>, tu <b>ficas</b>, ele <b>fica</b>, nós <b>ficamos</b>, eles <b>ficam</b>.");
mc(5,"You want to say: “I'm staying in Lisbon until Friday.”","___",["Fico em Lisboa até sexta-feira.","Sou em Lisboa até sexta-feira.","Fica em Lisboa até sexta-feira.","Estou de Lisboa até sexta-feira."],
 "To stay = <b>ficar</b>, and with <i>eu</i> → <b>fico</b>. <i>Fica</i> is the 3rd person; <i>ser</i> can't express staying somewhere.");
mc(6,"Translate (informal tu).","“Where are you staying?”",["Onde ficas?","Onde estás?","De onde és?","Onde fica?"],
 "To stay = <b>ficar</b>, tu → <b>ficas</b>: <i>Onde ficas?</i> <i>Onde estás?</i> asks where you are right now, and <i>Onde fica?</i> is 3rd person (where is it / where does he stay).");

/* =================== ARTIGOS =================== */
topic("ART");
const NO={livro:["m","livros"],mesa:["f","mesas"],janela:["f","janelas"],mapa:["m","mapas"],dia:["m","dias"],parede:["f","paredes"],computador:["m","computadores"],cadeira:["f","cadeiras"],"relógio":["m","relógios"],jornal:["m","jornais"],"lápis":["m","lápis"],"país":["m","países"],cidade:["f","cidades"],"mão":["f","mãos"],"cão":["m","cães"],viagem:["f","viagens"],"avião":["m","aviões"],problema:["m","problemas"],caneta:["f","canetas"],"dicionário":["m","dicionários"]};
const EXC={mapa:"masculine even though it ends in -a",dia:"masculine even though it ends in -a",problema:"masculine even though it ends in -a","mão":"feminine even though it ends in -ão",parede:"feminine (nouns in -e can be either gender)",cidade:"feminine (nouns in -dade are feminine)",viagem:"feminine (nouns in -agem are feminine)","lápis":"masculine, and the same in singular and plural"};
const DEF={m:["o","os"],f:["a","as"]},IND={m:["um","uns"],f:["uma","umas"]};
const artEx=(n,pl,kind)=>{const g=NO[n][0],a=(kind==="def"?DEF:IND)[g][pl?1:0];return `<i>${n}</i> is ${EXC[n]||(g==="m"?"masculine":"feminine")}${pl?", and here it's plural":""}. ${kind==="def"?"Definite articles: o / a / os / as":"Indefinite articles: um / uma / uns / umas"}. → <b>${a} ${pl?NO[n][1]:n}</b>.`};
[["mapa",1,5],["cidade",1,3],["lápis",1,5],["dia",0,4],["mão",0,5],["jornal",1,3],["viagem",1,4],["computador",0,2]].forEach(([n,pl,d])=>
  mc(d,"Complete with the definite article (o, a, os, as).",`___ ${pl?NO[n][1]:n}`,[DEF[NO[n][0]][pl],...["o","a","os","as"].filter(x=>x!==DEF[NO[n][0]][pl])],artEx(n,pl,"def"),{fixedSort:1}));
[["problema",0,5],["parede",1,4],["cão",1,4],["cadeira",0,2],["avião",1,4],["dicionário",1,3],["mapa",0,5],["cidade",0,3]].forEach(([n,pl,d])=>
  mc(d,"Complete with the indefinite article (um, uma, uns, umas).",`___ ${pl?NO[n][1]:n}`,[IND[NO[n][0]][pl],...["um","uma","uns","umas"].filter(x=>x!==IND[NO[n][0]][pl])],artEx(n,pl,"ind")));
[["mão",1,"def",5],["país",1,"ind",5],["relógio",0,"ind",3],["janela",1,"def",3]].forEach(([n,pl,k,d])=>
  text(d,`Type the ${k==="def"?"definite (o/a/os/as)":"indefinite (um/uma/uns/umas)"} article.`,`___ ${pl?NO[n][1]:n}`,(k==="def"?DEF:IND)[NO[n][0]][pl],artEx(n,pl,k)));
mc(6,"Make it plural.","o país → ___",["os países","os paises","as países","os país"],"<i>País</i> → <b>países</b> (add -es; the accent stays on the i). Masculine plural article: <b>os</b>.");
mc(6,"Make it plural.","uma viagem → ___",["umas viagens","umas viagems","uns viagens","umas viagem"],"Nouns in <i>-m</i> change to <b>-ns</b>: viagem → viagens. <i>Viagem</i> is feminine: <b>umas viagens</b>.");
mc(6,"Make it plural.","o cão → ___",["os cães","os cãos","os cões","as cães"],"<i>Cão</i> → <b>cães</b> (one of the three -ão plural patterns: mãos, cães, aviões). Masculine: <b>os cães</b>.");
mc(6,"Make it plural.","um jornal → ___",["uns jornais","uns jornals","umas jornais","um jornais"],"<i>-al</i> → <i>-ais</i>: jornal → jornais. <i>Um</i> → <b>uns</b>: <b>uns jornais</b>.");
multi(7,3,"Select ALL the nouns that take the article “o”.","o ___",["mapa","dia","problema","mão","parede","viagem"],
 "<b>O mapa, o dia, o problema</b> end in -a but are masculine. <i>A mão</i> ends in -ão but is feminine; <i>a parede</i> and <i>a viagem</i> are feminine too.");
multi(7,3,"Select ALL the nouns that take “umas”.","umas ___",["cidades","mãos","paredes","mapas","dias","lápis"],
 "<i>Umas</i> = feminine plural: <b>umas cidades, umas mãos, umas paredes</b>. <i>Mapas, dias, lápis</i> are masculine → <i>uns</i>.");
multi(6,3,"Select ALL the correct phrases.","Artigo + nome",["os lápis","uma mão","uns mapas","as mapas","um cidade","umas dias"],
 "Correct: <b>os lápis</b> (masculine, same form in plural), <b>uma mão</b> (feminine), <b>uns mapas</b> (masculine). The rest mix up the gender.");
mc(6,"First mention, then a known thing.","Isto é ___ dicionário. ___ dicionário é do João.",["um / O","o / Um","um / Um","o / O"],
 "First mention, something new → indefinite <b>um</b>. Then we know which one → definite <b>o</b>: <i>Isto é um dicionário. O dicionário é do João.</i>");
mc(6,"Complete the dialogue.","Aquilo é ___ caneta? — Sim, é ___ caneta da Rita.",["uma / a","a / uma","uma / uma","a / a"],
 "Asking what something is → <b>uma</b> caneta. Then a specific pen (Rita's) → <b>a</b> caneta da Rita.");
mc(5,"Complete the sentences.","Lisboa é ___ cidade bonita. ___ cidade fica em Portugal.",["uma / A","a / Uma","um / O","uma / Uma"],
 "<i>Cidade</i> is feminine. Describing it as one of many → <b>uma</b> cidade bonita; then the specific city we're talking about → <b>A</b> cidade.");

/* =================== VERBOS -AR / -ER / -IR =================== */
topic("VERB");
const END={ar:["o","as","a","amos","am"],er:["o","es","e","emos","em"],ir:["o","es","e","imos","em"]};
const PI={eu:0,tu:1,ele:2,nos:3,eles:4};
const VB=[["falar","português e inglês."],["morar","em Lisboa."],["trabalhar","em Coimbra."],["estudar","português todos os dias."],["comprar","o jornal."],
 ["comer","peixe ao jantar."],["beber","café de manhã."],["viver","no Porto."],["aprender","português."],["escrever","um email."],["vender","livros."],
 ["abrir","a janela."],["partir","para Paris amanhã."],["decidir","hoje."],["dividir","a pizza."],["discutir","o problema."]];
const SUBJ={eu:["Eu"],tu:["Tu"],ele:["A Rita","O João","Você"],nos:["Nós"],eles:["Eles","Vocês","A Ana e o Rui"]};
const conj=(v,p)=>v.slice(0,-2)+END[v.slice(-2)][PI[p]];
const plan=[["eu",2],["tu",4],["ele",3],["nos",5],["eles",4]];
let vi=0;
for(let r=0;r<2;r++) VB.forEach(([v,rest],k)=>{
  if(vi>=30)return; const [p,d0]=plan[(k+r*2)%5]; vi++;
  const cls=v.slice(-2),right=conj(v,p),stem=v.slice(0,-2);
  const otherCls=Object.keys(END).filter(c=>c!==cls&&END[c][PI[p]]!==END[cls][PI[p]]);
  let opts=[right,...otherCls.map(c=>stem+END[c][PI[p]])];
  ["eu","tu","ele","nos","eles"].filter(x=>x!==p).forEach(x=>opts.push(conj(v,x)));
  opts=uniq(opts).slice(0,4);
  const subj=SUBJ[p][(k+r)%SUBJ[p].length];
  const d=d0+(cls!=="ar"&&p==="nos"?1:0);
  const ex=`<b>${v}</b> is an <b>-${cls}</b> verb. Present endings for -${cls}: ${END[cls].map(e=>"-"+e).join(", ")}. ${PN[p]} → <b>${right}</b>.${cls!=="ar"?" Remember: -er and -ir only differ in the nós form (-emos / -imos).":""}`;
  const prompt=`${subj} ___ ${rest} <small>(${v})</small>`;
  if(vi%3===0) text(d+2,`Type the present tense of ${v}.`,prompt,right,ex);
  else mc(d,`Complete with the present tense of ${v}.`,prompt,opts,ex);
});
mc(3,"Which ending does nós take for -ir verbs?","partir → nós part___",["-imos","-emos","-amos","-em"],
 "-ar → <i>-amos</i> (falamos), -er → <i>-emos</i> (comemos), -ir → <b>-imos</b> (partimos).");
mc(3,"What is the infinitive?","Nós bebemos café. → ___",["beber","bebir","bebar","bebemos"],
 "<i>Bebemos</i> ends in <i>-emos</i>, the nós ending of <b>-er</b> verbs: the infinitive is <b>beber</b>.");
multi(7,3,"Select ALL the correctly conjugated forms.","-ar / -er / -ir",["eu como","tu abres","nós partimos","nós comimos","tu abras","eles partam"],
 "Correct: <b>eu como</b> (-er), <b>tu abres</b> (-ir: -es), <b>nós partimos</b> (-ir: -imos). <i>Comimos</i> mixes -er with the -ir ending; <i>abras</i> and <i>partam</i> use the wrong vowel.");
multi(3,3,"Select ALL the -ER verbs.","-er",["comer","beber","viver","abrir","falar","partir"],
 "-er verbs: <b>comer, beber, viver</b>. <i>Abrir</i> and <i>partir</i> are -ir; <i>falar</i> is -ar.");
mc(6,"Which sentence has a mistake?","Find the error",["Nós vivimos em Lisboa.","Eles abrem a porta.","Tu escreves bem.","Eu falo inglês."],
 "<i>Viver</i> is an <b>-er</b> verb, so nós → <b>vivemos</b>, not <i>vivimos</i> (that ending belongs to -ir verbs like <i>partimos</i>).");

module.exports=bank;
