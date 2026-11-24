// Livro do aluno · Variante 6 · Unidade 5 "Tenho carta de condução"
const bank=[];let T="";const topic=t=>T=t;
const add=q=>{q.topic=T;bank.push(q);};
const mc=(d,ask,prompt,options,explain,extra={})=>add({d,type:"mc",ask,prompt,options,explain,...extra});
const multi=(d,nRight,ask,prompt,options,explain,extra={})=>add({d,type:"multi",nRight,ask,prompt,options,explain,...extra});
const text=(d,ask,prompt,accept,explain,extra={})=>add({d,type:"text",ask,prompt,accept:[].concat(accept),explain,...extra});
const S="#2A2A2A",pic=(l,b,vb="0 0 160 120")=>`<svg viewBox="${vb}" role="img" aria-label="${l}">${b}</svg>`;
const IMG={
 chave:pic("A key",`<g stroke="${S}" stroke-width="3" fill="#E2B33C"><circle cx="45" cy="60" r="24"/><circle cx="45" cy="60" r="9" fill="#F1F4F2"/><path d="M68 54h70v12h-10v14h-10V66h-8v10h-10V66H68z"/></g>`),
 oculos:pic("Sunglasses",`<g stroke="${S}" stroke-width="3"><path d="M18 44h124" fill="none"/><path d="M22 44h48c0 22-8 34-24 34S22 66 22 44z" fill="#23303F"/><path d="M90 44h48c0 22-8 34-24 34S90 66 90 44z" fill="#23303F"/><path d="M70 50c4-4 16-4 20 0" fill="none"/></g><path d="M32 52l10-6M100 52l10-6" stroke="#8AA3C7" stroke-width="4" stroke-linecap="round"/>`),
 telemovel:pic("A mobile phone",`<rect x="52" y="10" width="56" height="100" rx="10" fill="#2E3440" stroke="${S}" stroke-width="3"/><rect x="59" y="22" width="42" height="68" rx="3" fill="#9CCFF0"/><circle cx="80" cy="99" r="5" fill="#C9CFCC"/>`),
 garrafa:pic("A bottle of water",`<path d="M70 8h20v14l8 14v74a6 6 0 0 1-6 6H68a6 6 0 0 1-6-6V36l8-14z" fill="#DDEFFA" stroke="${S}" stroke-width="3" stroke-linejoin="round"/><rect x="68" y="4" width="24" height="10" rx="2" fill="#2C5FB0" stroke="${S}" stroke-width="2"/><path d="M62 60h36v50H62z" fill="#9CCFF0" opacity=".8"/>`,"0 0 160 120")
};

/* L5A · objetos pessoais */
topic("L5A");
mc(2,"What is this?","O que é isto? ___",["É uma chave.","É um chave.","É uma caneta.","É um telemóvel."],"A key: <b>uma chave</b> (feminine). Plural: <i>as chaves</i>.",{img:IMG.chave});
mc(4,"What are these?","O que é isto? ___",["São uns óculos de sol.","É um óculo de sol.","É uma óculos de sol.","São umas óculos de sol."],"<i>Óculos</i> is always plural and masculine: <b>uns óculos de sol</b> (sunglasses), <i>os meus óculos</i>.",{img:IMG.oculos});
text(3,"Type the word in Portuguese (with or without the article).","mobile phone = ___",["telemóvel","o telemóvel","um telemóvel"],"European Portuguese: <b>o telemóvel</b> (Brazil: <i>o celular</i>).",{img:IMG.telemovel});
text(3,"Complete the expression.","uma garrafa de ___",["água"],"<b>Uma garrafa de água</b> = a bottle of water. Don't forget the accent: <i>água</i>.",{img:IMG.garrafa});
text(4,"Type the word.","O dinheiro e os cartões estão na ___.",["carteira"],"<b>A carteira</b> = wallet. (A <i>mala</i> is a bag.)");
mc(4,"Complete: money = coins and …","O dinheiro: moedas e ___",["notas","chaves","canetas","garrafas"],"<b>Dinheiro</b> = <i>moedas</i> (coins) + <b>notas</b> (banknotes).");
text(3,"Write the plural.","a chave → as ___",["chaves"],"Nouns ending in a vowel just add <b>-s</b>: chave → <b>chaves</b>.");
text(6,"Write the plural.","o telemóvel → os ___",["telemóveis"],"<i>-el</i> → <b>-eis</b>, and the accent stays: telemóvel → <b>telemóveis</b>.");
multi(3,3,"Select ALL the things you normally find in a wallet.","Na carteira…",["dinheiro","moedas","a carta de condução","uma garrafa de água","um computador","uma mesa"],"In a <i>carteira</i>: <b>dinheiro, moedas, a carta de condução</b> (and cards, the B.I.).");

/* L5B · ter */
topic("L5B");
text(3,"Type the correct form of ter.","Eu ___ uma caneta.",["tenho"],"<i>Ter</i>: eu <b>tenho</b>, tu tens, ele tem, nós temos, eles têm.");
text(5,"Type the correct form of ter.","Vocês ___ dinheiro?",["têm"],"<i>Vocês</i> → <b>têm</b>, with a circumflex. Without it (<i>tem</i>) it is singular.");
mc(3,"Choose the correct form of ter.","Ele ___ passaporte francês.",["tem","têm","tens","temos"],"<i>Ele</i> → <b>tem</b> (no accent in the singular).");
text(3,"Type the correct form of ter.","Tu ___ água?",["tens"],"<i>Tu</i> → <b>tens</b>.");
text(5,"Answer with a short positive answer (+).","A: Tem um lápis? B: ___",["Tenho","Sim, tenho"],"Portuguese answers yes by repeating the verb: <b>Tenho.</b> (or <i>Sim, tenho.</i>)");
text(6,"Answer with a short negative answer (−).","A: Tens uma caneta vermelha? B: ___",["Não, não tenho","Não tenho"],"Short negative answer: <b>Não, não tenho.</b>");
mc(5,"Which is correct? (They have a car.)","Eles ___ um carro.",["têm","tem","teem","tens"],"Plural <b>têm</b>: the circumflex marks the plural (pronounced as a double nasal sound).");
text(3,"Type the correct form of ter.","Nós ___ as chaves de casa.",["temos"],"<i>Nós</i> → <b>temos</b>.");

/* L5C · possessivos */
topic("L5C");
text(5,"Rewrite with a possessive (eu).","Tenho uma caneta preta. → ___ caneta é preta.",["A minha"],"eu → <b>o meu / a minha</b>; <i>caneta</i> is feminine: <b>A minha</b> caneta.");
text(5,"Rewrite with a possessive (tu).","Tens um carro verde. → ___ carro é verde.",["O teu"],"tu → <b>o teu / a tua</b>; <i>carro</i> is masculine: <b>O teu</b> carro.");
text(5,"Rewrite with a possessive (nós).","Temos uma casa no Porto. → ___ casa é no Porto.",["A nossa"],"nós → <b>o nosso / a nossa</b>: <b>A nossa</b> casa.");
text(6,"Complete with a possessive (ele).","Ele tem um livro azul. → O livro ___ é azul.",["dele"],"For <i>ele/ela/eles/elas</i> the possessive goes after the noun: o livro <b>dele</b>.");
text(6,"Complete with a possessive (elas).","Elas têm um computador. → O computador ___ é novo.",["delas"],"elas → <b>delas</b>: o computador delas.");
mc(6,"Complete (você).","Você é espanhol. ___ país é Espanha.",["O seu","O teu","O dele","A sua"],"<i>Você</i> / <i>o senhor</i> → <b>o seu / a sua</b>. <i>País</i> is masculine: <b>O seu</b> país.");
text(7,"Complete (vocês).","Vocês são chineses. ___ país é a China.",["O vosso"],"vocês → <b>o vosso / a vossa</b>: <b>O vosso</b> país.");
mc(5,"Complete with the possessive (nós).","Os ___ filhos chamam-se Ana e Hugo.",["nossos","nossas","nosso","vossos"],"<i>Filhos</i> is masculine plural → <b>nossos</b>.");
text(6,"Complete with the possessive (tu).","Onde tens as ___ malas?",["tuas"],"tu + feminine plural (<i>malas</i>) → <b>tuas</b>.");
text(5,"Complete with the possessive (eu).","As ___ chaves estão aqui.",["minhas"],"eu + feminine plural (<i>chaves</i>) → <b>minhas</b>.");

/* L5D · aqui / aí / ali, onde está */
topic("L5D");
mc(3,"The key is in YOUR (the speaker's) hand.","A chave está ___.",["aqui","aí","ali","isso"],"Near the speaker → <b>aqui</b>.");
mc(4,"The key is next to the person you are talking to.","A tua chave está ___.",["aí","aqui","ali","este"],"Near the listener → <b>aí</b>.");
mc(4,"The key is far from both of you.","A tua chave está ___.",["ali","aqui","aí","aquela"],"Far from both → <b>ali</b>. (Compare <i>isto / isso / aquilo</i>.)");
text(3,"Type no, na or em.","Ele está ___ carro.",["no"],"<i>O carro</i>: em + o = <b>no</b>.");
text(5,"Type no, na or em.","Ele está ___ casa.",["em"],"<b>Em casa</b> (at home) never takes an article.");
text(3,"Type no, na or em.","Ele está ___ escola.",["na"],"<i>A escola</i>: em + a = <b>na</b>.");
mc(2,"What does it mean?","Estou em casa.",["I'm at home.","I'm going home.","I have a house.","My house is here."],"<b>Estar em casa</b> = to be at home.");

/* L5E · de quem é? / é que */
topic("L5E");
text(3,"Complete the question.","De ___ é o carro branco? — É meu.",["quem"],"<b>De quem é…?</b> = Whose is…?");
mc(4,"Answer: the car belongs to José.","De quem é o carro preto? — ___",["É do José.","É de José.","É o José.","É dele José."],"de + o José = <b>do José</b>: <i>É do José.</i>");
text(5,"Answer with a possessive (ela).","De quem é a caneta verde? → É ___.",["dela"],"de + ela = <b>dela</b>: É dela.");
text(4,"Answer with a possessive (eu).","De quem é isto? → É ___.",["meu"],"<i>Isto</i> is neuter → masculine form: <b>É meu.</b>");
mc(5,"Which question is correct?","O que… ?",["O que é que tens na mala?","O que tens é que na mala?","É que o que tens na mala?","O que que é tens na mala?"],"<b>é que</b> goes right after the question word: <i>O que <b>é que</b> tens…? Onde <b>é que</b> moras?</i>");
text(6,"Write the question with these words.","mora / é / onde / que",["Onde é que mora"],"Question word + <b>é que</b> + verb: <b>Onde é que mora?</b>");

/* L5F · demonstrativos variáveis */
topic("L5F");
text(4,"Type este, esta, estes or estas (near me).","___ é a minha mãe.",["Esta"],"<i>Mãe</i> is feminine singular → <b>Esta</b>.");
text(4,"Type este, esta, estes or estas (near me).","___ telemóvel é meu.",["Este"],"<i>Telemóvel</i> is masculine singular → <b>Este</b>.");
mc(5,"Near me.","___ são as minhas primas.",["Estas","Estes","Esta","Isto"],"<i>Primas</i> is feminine plural → <b>Estas</b>.");
text(5,"Type the demonstrative (isso → near you).","___ livro é teu.",["Esse"],"Near the listener: <b>esse / essa / esses / essas</b>. <i>Livro</i> → <b>Esse</b>.");
text(5,"Type the demonstrative (aquilo → far).","___ relógio é da Ana.",["Aquele"],"Far from both: <b>aquele / aquela / aqueles / aquelas</b>. → <b>Aquele</b> relógio.");
mc(6,"Far from both.","___ mesas são nossas.",["Aquelas","Aqueles","Aquela","Aquilo"],"<i>Mesas</i> is feminine plural → <b>Aquelas</b>.");

/* L5G · pronúncia */
topic("L5G");
mc(3,"Which word rhymes with “bem”?","bem",["cem","bom","sim","um"],"Words in <b>-em</b> share the nasal diphthong [ɐ̃j]: bem, <b>cem</b>, sem, quem, tem.");
mc(5,"In which word is r pronounced as the strong r [ʁ]?","r → [ʁ]?",["rua","parede","carta","falar"],"<i>r</i> at the start of a word is strong [ʁ], like <i>rr</i>: <b>rua</b>, Roma, russo.");
multi(6,3,"Select ALL the words with the strong r [ʁ].","[ʁ]",["carro","Roma","rosa","livro","verde","estar"],"Strong [ʁ]: <i>rr</i> (<b>carro</b>) and initial r (<b>Roma, rosa</b>). Between vowels or after a consonant it's the soft [ɾ].");
mc(7,"How do tem and têm sound different?","tem / têm",["têm repeats the nasal sound: [ˈtɐ̃jɐ̃j]","têm is pronounced like “tim”","There is no difference","têm has an open [ɛ]"],"Plural <b>têm</b> is pronounced with the nasal diphthong twice [ˈtɐ̃jɐ̃j]; singular <i>tem</i> has it once.");
module.exports=bank;
