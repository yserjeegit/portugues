// Caderno de exercícios — questions modelled on the workbook exercises (units 1–5, Português em ação 1)
const {flag,obj}=require("./svg.js");
const bank=[];let T="";const topic=t=>T=t;
const add=q=>{q.topic=T;bank.push(q);};
const mc=(d,ask,prompt,options,explain,extra={})=>add({d,type:"mc",ask,prompt,options,explain,...extra});
const multi=(d,nRight,ask,prompt,options,explain,extra={})=>add({d,type:"multi",nRight,ask,prompt,options,explain,...extra});
const text=(d,ask,prompt,accept,explain,extra={})=>add({d,type:"text",ask,prompt,accept:[].concat(accept),explain,...extra});
const pic=(label,body,vb="0 0 160 130")=>`<svg viewBox="${vb}" role="img" aria-label="${label}">${body}</svg>`;
const DR={
 cafe:pic("A cup of coffee",`<ellipse cx="80" cy="108" rx="60" ry="12" fill="#F2EFE6" stroke="#2A2A2A" stroke-width="2.5"/><path d="M40 52h72l-8 50H48Z" fill="#F8F8F4" stroke="#2A2A2A" stroke-width="2.5"/><ellipse cx="76" cy="52" rx="36" ry="8" fill="#5A3416" stroke="#2A2A2A" stroke-width="2.5"/><path d="M112 62c18 0 18 26-2 26" fill="none" stroke="#2A2A2A" stroke-width="5"/><path d="M64 36c-6-8 6-12 0-22M84 36c-6-8 6-12 0-22" stroke="#9AA19D" stroke-width="3" fill="none" stroke-linecap="round"/>`),
 agua:pic("A glass of water",`<path d="M52 18h56l-8 100H60Z" fill="#DDEFFA" stroke="#2A2A2A" stroke-width="2.5"/><path d="M55 48h50l-6 70H61Z" fill="#9CCFF0"/><path d="M68 60v40" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/>`),
 acucar:pic("Sugar cubes",`<g stroke="#2A2A2A" stroke-width="2.5" stroke-linejoin="round"><path d="M30 70l26-12 26 12-26 12Z" fill="#fff"/><path d="M30 70v30l26 12V82Z" fill="#ECECEC"/><path d="M82 70v30l-26 12V82Z" fill="#DADADA"/><path d="M78 70l26-12 26 12-26 12Z" fill="#fff"/><path d="M78 70v30l26 12V82Z" fill="#ECECEC"/><path d="M130 70v30l-26 12V82Z" fill="#DADADA"/><path d="M54 40l26-12 26 12-26 12Z" fill="#fff"/><path d="M54 40v30l26 12V52Z" fill="#ECECEC"/><path d="M106 40v30l-26 12V52Z" fill="#DADADA"/></g>`)
};

/* ============ UNIDADE 1 ============ */
topic("C1");
[["Ele chama-___ Rafael.","se",3,"<i>Ele</i> (3rd person) → <b>se</b>: <i>Ele chama-se Rafael</i>."],
 ["Chamo-___ Ricardo.","me",2,"<i>Chamo</i> is the <i>eu</i> form, so the pronoun is <b>me</b>: <i>Chamo-me Ricardo</i>."],
 ["Como ___ chamas?","te",4,"<i>Chamas</i> is the <i>tu</i> form → <b>te</b>. After <i>como</i> the pronoun goes before the verb: <i>Como te chamas?</i>"],
 ["O senhor chama-___ Rui Guerra?","se",4,"<i>O senhor</i> takes the 3rd person, so the pronoun is <b>se</b>. In a yes/no question it stays after the verb: <i>chama-se</i>."],
 ["Chamas-___ António?","te",3,"<i>Chamas</i> = tu → <b>te</b>: <i>Chamas-te António?</i>"],
 ["Como ___ chama ela?","se",4,"<i>Ela</i> → <b>se</b>, placed before the verb after <i>como</i>: <i>Como se chama ela?</i>"]
].forEach(([p,a,d,ex])=>text(d,"Type me, te or se.",p,a,ex));
mc(1,"Complete the expression.","Tudo ___?",["bem","prazer","dia","logo"],"<b>Tudo bem?</b> = How's it going? (informal). The other pairs: <i>Muito prazer, Bom dia, Até logo</i>.");
mc(1,"Complete the expression.","Muito ___!",["prazer","bem","tarde","está"],"<b>Muito prazer!</b> = Nice to meet you. You can also say <i>Muito gosto!</i>");
text(5,"Complete the formal reply (speaking to a man).","A: Olá, como está? B: Bem, obrigada. E ___?",["o senhor"],"The question <i>Como está?</i> is formal, so the reply stays formal: <b>E o senhor?</b> (to a woman: <i>E a senhora?</i>).");
text(4,"Complete the dialogue.","A: ___ o Jorge? B: Sim, sou.",["És","É"],"Asking someone if they are Jorge: <b>És o Jorge?</b> (tu, informal) or <b>É o Jorge?</b> (formal). The answer <i>Sim, sou</i> uses <i>eu sou</i>.");
text(3,"Complete the dialogue (welcoming Jorge).","Bem-___ a Lisboa!","vindo","Jorge is a man, so: <b>Bem-vindo</b>. A woman → <i>bem-vinda</i>; a group → <i>bem-vindos</i>.");
text(3,"Complete the dialogue.","A: ___ é ele? B: Ele? Não sei.","Quem","Asking about a person's identity: <b>Quem é ele?</b> = Who is he?");
text(4,"Complete the dialogue.","A: Quem é ele? B: Ele? Não ___.","sei","<b>Não sei</b> = I don't know (verb <i>saber</i>, eu sei).");
mc(3,"Choose the correct verb.","Ela ___ Teresa.",["chama-se","se chama","te chamas","és"],"Affirmative sentence → pronoun after the verb: <b>Ela chama-se Teresa</b>. <i>Te chamas</i> and <i>és</i> belong to <i>tu</i>.");
text(4,"Type the verb (ser).","Não sei quem ele ___.","é","<i>Ele</i> → <b>é</b>: <i>Não sei quem ele é</i> = I don't know who he is.");
text(6,"Type the verb chamar-se with its pronoun (você).","Como ___? <small>(você)</small>","se chama","<i>Você</i> uses the 3rd person: <i>chama</i> + <i>se</i>. After <i>como</i> the pronoun goes first: <b>Como se chama?</b>");
text(3,"Type o or a.","Ele é ___ Jorge Viegas.","o","Before a man's name European Portuguese often uses the article <b>o</b>: <i>Ele é o Jorge Viegas</i>.");
mc(6,"Complete with o or a only where necessary.","Ela chama-se ___ Teresa Pereira.",["(no article)","a","o","uma"],"After <i>chamar-se</i> there is <b>no article</b>: <i>Chamo-me Sónia</i>, <i>Ela chama-se Teresa Pereira</i>. With <i>ser</i> you use one: <i>Sou a Ana</i>.");
text(6,"Write a sentence with these words.","sei / és / não / quem",["Não sei quem és"],"Negation comes before the verb: <b>Não sei quem és.</b> = I don't know who you are.");
text(4,"Write the expression with these words.","próxima / até / à",["Até à próxima"],"<b>Até à próxima!</b> = Until next time. In European Portuguese <i>à</i> (a + a) is used here.");
text(7,"Write a sentence with these words.","Ricardo / chama / ele / se",["Ele chama-se Ricardo"],"Affirmative statement: pronoun after the verb with a hyphen: <b>Ele chama-se Ricardo.</b>");
text(3,"Write the missing letters (day of the week).","S _ B _ _ _",["sábado"],"<b>Sábado</b> = Saturday (with an accent on the first a).");
text(3,"Write the missing letters (day of the week).","Q _ _ N _ A - F E I R A",["quinta-feira"],"<b>Quinta-feira</b> = Thursday (the “fifth” day counting from Sunday).");
text(6,"Write the missing day.","sexta-feira, ___, terça-feira",["domingo"],"The list skips one day each time: sexta → (sábado) → <b>domingo</b> → (segunda) → terça.");
text(4,"Write the number in words.","17 = ___","dezassete","<b>Dezassete</b> (European spelling). 16 dezasseis, 18 dezoito, 19 dezanove.");
text(2,"Write the number in words.","12 = ___","doze","<b>Doze</b>. Compare <i>dois</i> (2) and <i>duzentos</i> (200).");
multi(4,3,"Select ALL the greetings (not farewells).","Cumprimentos",["Bom dia!","Olá!","Boa tarde!","Até amanhã!","Adeus!","Até logo!"],"Greetings: <b>Bom dia!, Olá!, Boa tarde!</b> Farewells: <i>Até amanhã!, Adeus!, Até logo!</i> (<i>Boa noite!</i> works for both.)");

/* ============ UNIDADE 2 ============ */
topic("C2");
[["franca","França",3],["alemanha","Alemanha",3],["brasil","Brasil",2],["polonia","Polónia",4]].forEach(([k,n,d])=>
  text(d,"Type the name of the country in Portuguese.","Que país é este? ___",n,`It's the flag of <b>${n}</b>.${n==="Polónia"?" Note the European Portuguese spelling with ó.":""}`,{img:flag(k,"A national flag")}));
[["I _ _ L _ A","Itália",3],["_ _ X I C _","México",3],["_ _ D I A","Índia",3]].forEach(([p,a,d])=>
  text(d,"Which country is it? Write the whole word.",p,a,`<b>${a}</b>. Don't forget the accent: <i>${a}</i>.`));
text(5,"Correct the sentence: Madonna is from the USA.","Madonna não é de Itália. É ___ Estados Unidos.","dos","<i>Os Estados Unidos</i> is masculine plural: de + os = <b>dos</b>.");
text(4,"Correct the sentence: Dulce Pontes is from Portugal.","Dulce Pontes não é de Espanha. É ___ Portugal.","de","<i>Portugal</i> takes no article, so <b>de</b> stays as it is.");
text(5,"Write the sentence in the negative.","Woody Allen é de Londres. → ___",["Woody Allen não é de Londres"],"Put <b>não</b> before the verb: <i>Woody Allen <b>não é</b> de Londres.</i>");
text(4,"Answer the question.","Onde é Hamburgo? ___",["Na Alemanha","É na Alemanha","Fica na Alemanha"],"<i>A Alemanha</i> is feminine: em + a = <b>na</b>. <i>Na Alemanha.</i>");
text(4,"Answer the question.","Onde é São Paulo? ___",["No Brasil","É no Brasil","Fica no Brasil"],"<i>O Brasil</i> is masculine: em + o = <b>no</b>. <i>No Brasil.</i>");
text(5,"Answer the question.","Onde é Luanda? ___",["Em Angola","É em Angola","Fica em Angola"],"<i>Angola</i> takes no article, so <b>em</b> doesn't contract: <i>Em Angola.</i>");
multi(6,3,"Select ALL the sentences where “é” can be replaced with “fica”.","é → fica?",["Onde é Boston?","Berlim é na Alemanha.","Lisboa é em Portugal.","Quem é ele?","O Felipe é do Brasil.","Ela é portuguesa."],"<i>Ficar</i> replaces <i>ser</i> only for the <b>location of places</b>: <i>Onde fica Boston? Berlim fica na Alemanha. Lisboa fica em Portugal.</i> Identity, origin and nationality keep <i>ser</i>.");
text(3,"Complete with the missing word.","A: ___ fica Sevilha? B: Em Espanha.","Onde","Asking about location: <b>Onde</b> fica Sevilha?");
text(5,"Complete with the missing word.","A: ___ de Lisboa? B: Não, somos do Porto.",["São","Vocês são"],"The answer uses <i>somos</i> (nós), so the question is to <i>vocês</i>: <b>São de Lisboa?</b>");
text(3,"Complete with the missing word.","A: Ele é ___ Brasil? B: É, sim.","do","de + o (o Brasil) = <b>do</b>.");
text(3,"Complete with the missing word.","A: ___ onde é ela? B: Da Rússia.","De","Asking about origin: <b>De onde</b> é ela?");
mc(2,"Complete with the missing word.","A: Eles ___ de Itália? B: Não sei.",["são","é","somos","estão"],"<i>Eles</i> → <b>são</b> (ser, plural).");
[["você","vocês",3,"<i>Você</i> → <b>vocês</b>."],["o senhor","os senhores",4,"<i>O senhor</i> → <b>os senhores</b> (both words change)."],["tu","vocês",4,"European Portuguese uses <b>vocês</b> as the plural of both <i>tu</i> and <i>você</i> (<i>vós</i> is archaic)."]].forEach(([s,a,d,ex])=>
  text(d,"Write the pronoun in the plural.",`${s} → ___`,a,ex));
text(5,"Complete with de/da/do/dos or em/na/no/nos.","A Vanessa é ___ Rio de Janeiro.","do","Rio de Janeiro is one of the cities with an article (<i>o Rio</i>): de + o = <b>do</b>.");
text(5,"Complete with de/da/do/dos or em/na/no/nos.","Miami é ___ Estados Unidos.","nos","Location → <i>em</i>; <i>os Estados Unidos</i> → em + os = <b>nos</b>.");
text(3,"Write the missing number.","cinquenta, setenta, ___","noventa","The list goes up by 20: 50, 70, <b>90 = noventa</b>.");
text(6,"Write the missing number.","trinta e três, ___, noventa e nove","sessenta e seis","33, 66, 99: each step adds 33 → <b>sessenta e seis</b>. Remember the <i>e</i> between tens and units.");
text(6,"Write a sentence with these words.","em / fica / Lyon / França",["Lyon fica em França","Lyon fica na França"],"<b>Lyon fica em França.</b> With <i>França</i> the article is optional, so <i>na França</i> is also accepted.");

/* ============ UNIDADE 3 ============ */
topic("C3");
[["A Anastasia é da Ucrânia.","Ela é ucraniana",5,"one woman → feminine singular"],["A Daniela e a María são de Espanha.","Elas são espanholas",6,"two women → feminine plural"],
 ["A Tomoko e o Takeshi são do Japão.","Eles são japoneses",6,"a mixed group → masculine plural"],["A Khadija é de Marrocos.","Ela é marroquina",5,"one woman → feminine singular"],
 ["O Josiah é dos Estados Unidos.","Ele é americano",4,"one man → masculine singular"],["O Johannes e a Anke são da Alemanha.","Eles são alemães",7,"a mixed group → masculine plural"]
].forEach(([p,a,d,why])=>text(d,"Rewrite the sentence using the pronoun and the nationality.",`${p} → ___`,[a],`${why}: <b>${a}.</b>`));
[["Jag lär mig portugisiska.","sueco",4],["J'apprends le portugais.","francês",3],["Ich lerne Portugiesisch.","alemão",3],["I'm learning Portuguese.","inglês",2]].forEach(([p,a,d])=>
  text(d,"Which language is this? (Type just the language.)",`“${p}” → É ___.`,[a,"é "+a],`It's <b>${a}</b>. Language names are written in lower case and are the same as the masculine nationality.`));
mc(6,"Maxim: English 1, German 3, Russian 3 (3 = muito bem, 1 = um pouco). Choose the sentence.","O Maxim…",["O Maxim fala alemão e russo muito bem e um pouco de inglês.","O Maxim fala inglês muito bem e um pouco de alemão e russo.","O Maxim fala alemão e russo um pouco e inglês muito bem.","O Maxim fala alemão, russo e inglês muito bem."],"3 = <i>muito bem</i> (German, Russian), 1 = <i>um pouco de</i> (English). Note: <i>um pouco <b>de</b></i> + language.");
mc(6,"Carla: Portuguese 1, Spanish 3, French 1. Choose the sentence.","A Carla…",["A Carla fala espanhol muito bem e um pouco de português e francês.","A Carla fala português muito bem e um pouco de espanhol.","A Carla fala francês e espanhol muito bem.","A Carla fala um pouco espanhol e muito bem português."],"Spanish = 3 → <i>muito bem</i>; Portuguese and French = 1 → <i>um pouco de</i>.");
[["nós","moramos",3],["eles","moram",3],["tu","moras",3],["eu","moro",2]].forEach(([p,a,d])=>
  text(d,"Write the correct form of morar.",`${p} ___`,a,`<i>Morar</i> is a regular -ar verb: moro, moras, mora, moramos, moram. ${p} → <b>${a}</b>.`));
text(6,"Write a sentence with these words.","russo / bem / falo / muito",["Falo russo muito bem","Falo muito bem russo"],"Verb first (the subject <i>eu</i> is dropped), then the language, then how well: <b>Falo russo muito bem.</b>");
text(7,"Write a question with these words.","está / Jorge / onde / agora / o",["Onde está o Jorge agora","Onde está agora o Jorge","O Jorge agora onde está"],"Question word first, then the verb: <b>Onde está o Jorge agora?</b> (where he is now → <i>estar</i>).");
text(5,"Write a sentence with these words.","não / alemã / é / ela",["Ela não é alemã"],"<b>Ela não é alemã.</b> <i>Não</i> always goes right before the verb.");
text(6,"Write a sentence with these words.","de / falamos / japonês / pouco / um",["Falamos um pouco de japonês"],"<b>Falamos um pouco de japonês.</b> The expression is <i>um pouco de</i> + language.");
text(5,"Write the question for this answer.","___? — É a Inês.",["Quem é ela","Quem é"],"The answer identifies a person, so the question uses <i>quem</i>: <b>Quem é ela?</b>");
mc(5,"Which question fits the answer?","___? — Não. Estamos no Porto.",["Estão em Lisboa?","São do Porto?","Onde moram?","De onde são?"],"<i>Estamos no Porto</i> is about where they are now, and it starts with <i>Não</i>, so it answers a yes/no question with <i>estar</i>: <b>Estão em Lisboa?</b>");
text(4,"Write the number in words.","700 = ___","setecentos","<b>Setecentos</b>. Careful: 600 seiscentos, 700 setecentos.");
[["Eles ___ espanhóis.","são",3,"nationality → <i>ser</i>: <b>são</b>."],["___ em França. <small>(nós)</small>","Estamos",5,"where we are now → <i>estar</i>: <b>Estamos</b> em França."],["___ chinês muito bem. <small>(eu)</small>","Falo",3,"a language → <i>falar</i>: <b>Falo</b> chinês muito bem."],["Onde ___ vocês?","estão",4,"where you are → <i>estar</i>: <b>estão</b>. (<i>Onde moram vocês?</i> would ask where you live.)"]].forEach(([p,a,d,ex])=>
  text(d,"Complete with ser, estar or falar in the correct form.",p,a,ex));

/* ============ UNIDADE 4 ============ */
topic("C4");
[["A tow truck is pulling a car far down the road. A woman asks:","O que é ___?","aquilo",4,"The truck is far from both people → <b>aquilo</b>."],
 ["A woman is holding an umbrella in her own hand:","Como se diz ___ em inglês?","isto",4,"The object is in the speaker's hand → <b>isto</b>."],
 ["A woman points at the box the man in front of her is holding:","O que é ___?","isso",5,"The object is near the listener → <b>isso</b>."],
 ["Two men look at a house on a distant hill:","___ é uma casa?","Aquilo",4,"The house is far from both of them → <b>Aquilo</b>."]
].forEach(([ask,p,a,d,ex])=>text(d,ask+" Type isto, isso or aquilo.",p,a,ex));
text(3,"Write the colour with the missing letters.","_ E R M _ _ _ O","vermelho","<b>Vermelho</b> = red (feminine <i>vermelha</i>).");
text(4,"Write the colour with the missing letters.","C _ _  D E  R O _ _","cor de rosa","<b>Cor de rosa</b> = pink. It never changes: <i>a mesa cor de rosa, os livros cor de rosa</i>.");
text(4,"Look at the picture and type the colour.","A cadeira é ___.","amarela","<i>Cadeira</i> is feminine: amarelo → <b>amarela</b>.",{img:obj("cadeira","amarelo","A yellow chair")});
text(6,"Look at the picture and type the colour.","Os livros são ___.","cinzentos","<i>Livros</i> is masculine plural: cinzento → <b>cinzentos</b>.",{img:obj("livros","cinzento","Two grey books")});
[["É uma secretária.","São secretárias",5,"<i>Uma</i> disappears in the plural: <b>São secretárias.</b>"],["A cadeira é verde.","As cadeiras são verdes",6,"Article, noun, verb and colour all go to the plural: <b>As cadeiras são verdes.</b>"],
 ["O computador é preto.","Os computadores são pretos",7,"-or → -ores: <b>Os computadores são pretos.</b>"],["A parede é azul.","As paredes são azuis",7,"azul → azuis: <b>As paredes são azuis.</b>"],["É um livro de Saramago.","São livros de Saramago",5,"<b>São livros de Saramago.</b> (The indefinite plural <i>uns</i> is usually dropped here.)"]
].forEach(([p,a,d,ex])=>text(d,"Write the sentence in the plural.",`${p} → ___`,[a,a.replace(/^São /,"São uns ").replace(/^São uns secret/,"São umas secret")],ex));
[["O jornal espanhol é de Pablo.","O jornal espanhol é do Pablo",6,"With a first name, <i>de</i> merges with the article: de + o Pablo = <b>do Pablo</b>."],
 ["O quem é aquilo?","O que é aquilo",5,"For things use <b>o que</b>, not <i>quem</i> (people): <b>O que é aquilo?</b>"],
 ["A secretária da Rita é castanho.","A secretária da Rita é castanha",5,"<i>Secretária</i> is feminine: <b>castanha</b>."],
 ["De que cor são isto?","De que cor é isto",6,"<i>Isto</i> is singular: <b>De que cor é isto?</b>"]
].forEach(([p,a,d,ex])=>text(d,"The sentence has a mistake. Rewrite it correctly.",p,[a],ex));
[["___ bandeira de Portugal é vermelha e verde.","A",3,"A specific flag (Portugal's), feminine → <b>A</b> bandeira."],["Isso é ___ mesa.","uma",2,"Identifying an object, feminine → <b>uma</b> mesa."],["Isto é ___ Volvo.","um",6,"A car brand refers to <i>um carro</i> (masculine) → <b>um</b> Volvo."],["___ dicionário é cinzento.","O",3,"A specific dictionary, masculine → <b>O</b> dicionário."]].forEach(([p,a,d,ex])=>
  text(d,"Type o, a, um or uma.",p,a,ex));
[["___ os livros!","Abram",4,"Instruction to the class: <b>Abram</b> os livros! (open)"],["___ significa “cadeira”?","O que",4,"<b>O que</b> significa…? = What does … mean?"],["___ percebo.","Não",2,"<b>Não percebo</b> = I don't understand."],["___ repetir?","Pode",3,"<b>Pode repetir?</b> = Can you repeat?"],["___ é a página?","Qual",4,"<b>Qual é a página?</b> = Which page is it?"],["___ em pares.","Trabalhem",5,"Instruction to the class: <b>Trabalhem</b> em pares (work in pairs)."]].forEach(([p,a,d,ex])=>
  text(d,"Complete with a word from the box: pode / não / abram / qual / o que / trabalhem.",p,a,ex));

/* ============ PORTUGUÊS EM AÇÃO 1 · NO AVIÃO ============ */
topic("C5");
mc(1,"What is this?","___",["o café","o chá","o sumo","a água"],"It's coffee: <b>o café</b>.",{img:DR.cafe});
mc(2,"What is this?","___",["a água","o vinho","o sumo","a cerveja"],"A glass of water: <b>a água</b>. On a plane: <i>com gás</i> (sparkling) or <i>sem gás</i> (still).",{img:DR.agua});
mc(2,"What is this?","___",["o açúcar","o limão","o chá","o sal"],"Sugar cubes: <b>o açúcar</b>. <i>Com açúcar</i> / <i>sem açúcar</i>.",{img:DR.acucar});
text(2,"Complete the word.","C H _","chá","<b>Chá</b> = tea (with an accent).");
text(3,"Complete the word.","L I M _ _","limão","<b>Limão</b> = lemon. <i>Um chá com limão.</i>");
text(4,"Complete the word.","C E _ _ _ _ A","cerveja","<b>Cerveja</b> = beer (feminine: <i>a cerveja</i>).");
text(3,"Complete the dialogue.","A: Café ___ chá?","ou","<b>ou</b> = or: <i>Café ou chá?</i>");
text(3,"Complete the dialogue.","B: Um chá, ___ favor.",["faz","por"],"<b>Faz favor</b> (very common in Portugal) or <b>por favor</b> = please.");
text(4,"Complete the dialogue.","A: ___ alguma coisa? B: Não, obrigada.","Mais","<b>Mais alguma coisa?</b> = Anything else?");
text(5,"Correct the mistake.","E também uma café.",["E também um café"],"<i>Café</i> is masculine: <b>um café</b>.");
text(5,"Correct the mistake.","Obrigada muito.",["Muito obrigada"],"The intensifier comes first: <b>Muito obrigada!</b>");
text(5,"Correct the mistake (“Here it is”).","Aí está.",["Aqui está"],"Handing something over: <b>Aqui está</b> = Here it is (<i>aqui</i> = here, near me).");

/* ============ UNIDADE 5 ============ */
topic("C6");
[["mala","as malas",4,"<i>Mala</i> (bag) is feminine: <b>as malas</b>."],["lápis","os lápis",5,"<i>Lápis</i> is masculine and doesn't change in the plural: <b>os lápis</b>."],["telemóvel","os telemóveis",7,"-el → -eis: telemóvel → <b>os telemóveis</b>."]].forEach(([n,a,d,ex])=>
  text(d,"Write the definite article and the noun in the plural.",`${n} → ___`,a,ex));
[["ele","tem",3],["vocês","têm",5],["tu","tens",3],["eu","tenho",3]].forEach(([p,a,d])=>
  text(d,"Write the correct form of ter.",`${p} ___`,a,`<i>Ter</i> is irregular: tenho, tens, tem, temos, <b>têm</b> (plural with a circumflex). ${p} → <b>${a}</b>.`));
text(6,"Answer (+).","A: Têm as chaves de casa? B: ___",["Temos","Sim, temos"],"Answer with the verb, not just <i>sim</i>: the question is to <i>vocês</i>, so: <b>Temos.</b>");
text(6,"Answer (−).","A: Ele tem passaporte francês? B: ___",["Não, não tem","Não tem"],"Short negative answer repeats the verb: <b>Não, não tem.</b>");
text(5,"Answer (−).","A: Tens água? B: ___",["Não, não tenho","Não tenho"],"<i>Tens</i> (tu) → answer with <i>eu</i>: <b>Não, não tenho.</b>");
mc(5,"Your pen is on your colleague's desk, next to them.","A minha caneta está ___ na tua secretária.",["aí","aqui","ali","lá"],"<i>Aqui</i> = near me, <b>aí</b> = near you, <i>ali</i> = far from both.");
mc(4,"A painting hangs on the wall far from both of you.","O quadro de Leonardo da Vinci está ___.",["ali","aqui","aí","isto"],"Far from speaker and listener → <b>ali</b>.");
mc(3,"The keys are in your own hand.","As chaves estão ___.",["aqui","aí","ali","isso"],"Near the speaker → <b>aqui</b>.");
[["Estamos ___ escritório.","no",4,"<i>O escritório</i> → em + o = <b>no</b>."],["Não estou ___ casa.","em",6,"<i>Em casa</i> (at home) has no article: <b>em casa</b>."],["O telemóvel está ___ mala.","na",4,"<i>A mala</i> → em + a = <b>na</b>."]].forEach(([p,a,d,ex])=>
  text(d,"Type no, na or em.",p,a,ex));
[["Tenho uma caneta preta.","A minha caneta","é preta",6,"eu → <b>a minha</b> (feminine noun <i>caneta</i>)."],["Temos uma casa no Porto.","A nossa casa","é no Porto",6,"nós → <b>a nossa</b> casa."],["Tens uma mala castanha.","A tua mala","é castanha",6,"tu → <b>a tua</b> mala."],["Ele tem um livro azul.","O livro dele","é azul",8,"For <i>ele/ela</i> Portuguese usually puts <i>dele/dela</i> after the noun: <b>O livro dele</b>."]].forEach(([p,a,rest,d,ex])=>
  text(d,"Rewrite using a possessive.",`${p} → ___ ${rest}.`,[a],ex));
text(6,"Answer with a possessive.","De quem é a caneta verde? <small>(ela)</small>",["É dela","Dela"],"de + ela = <b>dela</b>: <i>É dela</i> = It's hers.");

/* ============ PRONÚNCIA ============ */
topic("C7");
multi(6,3,"Select ALL the words where a final o is pronounced [u].","o → [u]?",["chamo","cinco","logo","nove","doze","bom"],"Unstressed final <i>-o</i> → [u]: <b>chamo, cinco, logo</b>. In <i>nove</i> and <i>doze</i> the o is stressed; in <i>bom</i> it's nasal.");
multi(5,2,"Select ALL the words with TWO syllables.","Sílabas",["muito","chamas","quem","sábado","desculpe","bem"],"<b>mui-to, cha-mas</b>. <i>Quem, bem</i> = 1 syllable; <i>sá-ba-do, des-cul-pe</i> = 3.");
multi(5,2,"Select ALL the words with THREE syllables.","Sílabas",["amanhã","próxima","prazer","senhor","bom","tarde"],"<b>a-ma-nhã, pró-xi-ma</b>. <i>pra-zer, se-nhor, tar-de</i> = 2; <i>bom</i> = 1.");
mc(4,"Where is the stress?","Brasil",["bra-<b>SIL</b>","<b>BRA</b>-sil","equal stress","no stress"],"Words ending in <i>-l</i> are stressed on the last syllable: bra-<b>SIL</b> (also <i>espanhol</i>, <i>azul</i>).");
mc(5,"Where is the stress?","brasileiro",["bra-si-<b>LEI</b>-ro","<b>BRA</b>-si-lei-ro","bra-<b>SI</b>-lei-ro","bra-si-lei-<b>RO</b>"],"Words ending in a vowel are normally stressed on the second-to-last syllable: bra-si-<b>LEI</b>-ro.");
mc(4,"Where is the stress?","inglesa",["in-<b>GLE</b>-sa","<b>IN</b>-gle-sa","in-gle-<b>SA</b>","equal stress"],"Second-to-last syllable: in-<b>GLE</b>-sa. (Masculine <i>inglês</i> has a written accent on the last syllable.)");
multi(6,4,"Select ALL the words where the letter s is pronounced [ʃ].","s → [ʃ]?",["nós","isto","Moscovo","Espanha","senhor","sete"],"<i>s</i> at the end of a word or before a consonant → [ʃ]: <b>nós, isto, Moscovo, Espanha</b>. At the start of a word it's [s]: <i>senhor, sete</i>.");
mc(4,"Which word does NOT have a nasal sound?","sim · bem · um · sou · bom",["sou","sim","bem","bom"],"<i>-m</i> at the end of a syllable makes the vowel nasal: sim, bem, um, bom. <b>Sou</b> has an oral diphthong.");
mc(6,"In which word is the highlighted e pronounced differently?","ond<b>e</b> · d<b>e</b>zoito · pr<b>e</b>to · árab<b>e</b>",["pr<b>e</b>to","ond<b>e</b>","d<b>e</b>zoito","árab<b>e</b>"],"Unstressed e → [ɨ] (onde, dezoito, árabe). In <b>preto</b> the e is stressed: a full [e].");

module.exports=bank;
