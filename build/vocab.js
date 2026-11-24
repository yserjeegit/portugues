// Vocabulary decks. t: n-m / n-f / n-mp / n-fp (nouns), v-ar / v-er / v-ir (verbs), adj, color, ph (phrase), adv, num, day, country, city
const VDECKS=[
 {id:"u14",name:"Unidades 1–4",src:"Cumprimentos, países, nacionalidades, sala de aula, cores, no avião"},
 {id:"num",name:"Números",src:"Unidades 1–3"},
 {id:"u5",name:"Unidade 5 · Objetos e posse",src:"Unidade 5"},
 {id:"u6",name:"Unidade 6 · Sou estudante",src:"Profissões, ordinais, dados pessoais",u6:true},
 {id:"poss",name:"Possessivos e advérbios de lugar",src:"Unidades 5–6",isnew:true},
 {id:"var",name:"Verbos em -ar",src:"Ficha de verbos"},
 {id:"verir",name:"Verbos em -er / -ir",src:"Ficha de verbos"},
 {id:"dia",name:"Dia a dia",src:"Ficha de verbos"}
];
const W=(d,list)=>list.map(([pt,en,t,ex,note])=>({d,pt,en,t,ex,note}));
const VOCAB=[
...W("u14",[
 ["Olá!","Hello!","ph","Olá! Tudo bem?"],["Bom dia!","Good morning!","ph"],["Boa tarde!","Good afternoon!","ph"],["Boa noite!","Good evening / good night!","ph","Used as hello and goodbye."],
 ["Adeus!","Goodbye!","ph"],["Até amanhã!","See you tomorrow!","ph"],["Até logo!","See you later!","ph"],["Até já!","See you in a moment!","ph"],["Até à próxima!","Until next time!","ph"],
 ["Muito prazer!","Nice to meet you!","ph","Also: Muito gosto!"],["Tudo bem?","How's it going?","ph","Informal."],["Como está?","How are you? (formal)","ph"],
 ["Obrigado / Obrigada","Thank you","ph","A man says obrigado, a woman obrigada."],["Desculpe!","Excuse me! / Sorry!","ph"],["Não sei.","I don't know.","ph"],["Bem-vindo / Bem-vinda","Welcome","ph","Bem-vindo a Lisboa!"],
 ["chamar-se","to be called","v-ar","Chamo-me Ana. Como te chamas?"],["ser","to be (permanent)","v-irr","Sou o Pedro.","Irregular: sou, és, é, somos, são."]
]),
...W("u14",[
 ["a segunda-feira","Monday","day"],["a terça-feira","Tuesday","day"],["a quarta-feira","Wednesday","day"],["a quinta-feira","Thursday","day"],["a sexta-feira","Friday","day"],["o sábado","Saturday","day"],["o domingo","Sunday","day"],
 ["o fim de semana","weekend","n-m"],["hoje","today","adv"],["amanhã","tomorrow","adv"],["ontem","yesterday","adv"]
]),
...W("num",[
["zero","zero (0)","num"],["um","one (1)","num"],["dois","two (2)","num"],["três","three (3)","num"],["quatro","four (4)","num"],["cinco","five (5)","num"],["seis","six (6)","num"],["sete","seven (7)","num"],["oito","eight (8)","num"],["nove","nine (9)","num"],["dez","ten (10)","num"],["onze","eleven (11)","num"],["doze","twelve (12)","num"],["treze","thirteen (13)","num"],["catorze","fourteen (14)","num"],["quinze","fifteen (15)","num"],["dezasseis","sixteen (16)","num"],["dezassete","seventeen (17)","num"],["dezoito","eighteen (18)","num"],["dezanove","nineteen (19)","num"],["vinte","twenty (20)","num"],["trinta","thirty (30)","num"],["quarenta","forty (40)","num"],["cinquenta","fifty (50)","num"],["sessenta","sixty (60)","num"],["setenta","seventy (70)","num"],["oitenta","eighty (80)","num"],["noventa","ninety (90)","num"],["cem","one hundred (100)","num"],["cento e um","one hundred and one (101)","num"],["duzentos","two hundred (200)","num"],["trezentos","three hundred (300)","num"],["quatrocentos","four hundred (400)","num"],["quinhentos","five hundred (500)","num"],["seiscentos","six hundred (600)","num"],["setecentos","seven hundred (700)","num"],["oitocentos","eight hundred (800)","num"],["novecentos","nine hundred (900)","num"],["mil","one thousand (1000)","num"]
]),
...W("u14",[
 ["a Alemanha","Germany","country"],["o Brasil","Brazil","country"],["a China","China","country"],["(a) Espanha","Spain","country"],["os Estados Unidos","the United States","country"],["(a) França","France","country"],
 ["a Grécia","Greece","country"],["a Índia","India","country"],["(a) Inglaterra","England","country"],["(a) Itália","Italy","country"],["o Japão","Japan","country"],["Marrocos","Morocco","country"],
 ["o México","Mexico","country"],["a Polónia","Poland","country"],["a Rússia","Russia","country"],["a Suécia","Sweden","country"],["a Ucrânia","Ukraine","country"],["Portugal","Portugal","country"],
 ["Londres","London","city"],["Moscovo","Moscow","city"],["Varsóvia","Warsaw","city"],["Pequim","Beijing","city"],["Nova Iorque","New York","city"],["Atenas","Athens","city"]
]),
...W("u14",[
 ["português / portuguesa","Portuguese","adj"],["espanhol / espanhola","Spanish","adj","Plural: espanhóis."],["inglês / inglesa","English","adj"],["francês / francesa","French","adj"],["alemão / alemã","German","adj","Plural: alemães / alemãs."],
 ["italiano / italiana","Italian","adj"],["ucraniano / ucraniana","Ukrainian","adj"],["russo / russa","Russian","adj"],["chinês / chinesa","Chinese","adj"],["japonês / japonesa","Japanese","adj"],["americano / americana","American","adj"],["brasileiro / brasileira","Brazilian","adj"],
 ["a língua","language","n-f","Que línguas falas?"],["falar","to speak","v-ar","Falo português e inglês."],["morar","to live (reside)","v-ar","Moro em Lisboa."],["estar","to be (temporary, location now)","v-irr","Estou em casa.","Irregular: estou, estás, está, estamos, estão."],
 ["agora","now","adv"],["mas","but","adv"],["muito","very / a lot","adv"],["só","only","adv"],["também","also, too","adv"],["um pouco","a little","adv","Falo um pouco de francês."]
]),
...W("u14",[
 ["a cadeira","chair","n-f"],["a mesa","table","n-f"],["a porta","door","n-f"],["a janela","window","n-f"],["o quadro","board / painting","n-m"],["o livro","book","n-m"],["o dicionário","dictionary","n-m"],
 ["o computador","computer","n-m"],["o jornal","newspaper","n-m","Plural: os jornais."],["o mapa","map","n-m","Masculine despite -a."],["o relógio","clock / watch","n-m"],["a parede","wall","n-f"],["a secretária","desk","n-f"],["a sala de aula","classroom","n-f"],
 ["Não percebo.","I don't understand.","ph"],["Não me lembro.","I don't remember.","ph"],["Pode repetir?","Can you repeat?","ph"],["Como se diz…?","How do you say…?","ph"],["O que significa…?","What does … mean?","ph"],["Qual é a página?","Which page is it?","ph"],
 ["isto","this (near me)","adv"],["isso","that (near you)","adv"],["aquilo","that (over there)","adv"]
]),
...W("u14",[
 ["amarelo","yellow","color"],["azul","blue","color","Plural: azuis."],["branco","white","color"],["castanho","brown","color"],["cinzento","grey","color"],
 ["cor de laranja","orange","color","Never changes form."],["cor de rosa","pink","color","Never changes form."],["preto","black","color"],["verde","green","color"],["vermelho","red","color"],["a cor","colour","n-f","De que cor é?"]
]),
...W("u14",[
 ["o açúcar","sugar","n-m","Café sem açúcar."],["a água","water","n-f","Água com gás ou sem gás?"],["a cerveja","beer","n-f"],["o chá","tea","n-m","Um chá com limão."],["o café","coffee","n-m"],["o limão","lemon","n-m"],
 ["o sumo","juice","n-m","Um sumo de laranja."],["o vinho","wine","n-m"],["o gás","gas (sparkling)","n-m"],["o avião","plane","n-m","Plural: os aviões."],["com","with","adv"],["sem","without","adv"],
 ["ou","or","adv"],["Mais alguma coisa?","Anything else?","ph"],["Aqui está.","Here it is.","ph"],["Faz favor.","Please. / Excuse me.","ph"]
]),
...W("u5",[
 ["a garrafa","bottle","n-f"],["a mala","bag / suitcase","n-f"],["o passaporte","passport","n-m"],["o telemóvel","mobile phone","n-m","Plural: os telemóveis."],["a moeda","coin","n-f"],["a chave","key","n-f"],
 ["a carteira","wallet","n-f"],["a caneta","pen","n-f"],["o lápis","pencil","n-m","Plural: os lápis."],["a carta de condução","driving licence","n-f"],["os óculos","glasses","n-mp"],["o carro","car","n-m"],
 ["a casa","house / home","n-f","Estou em casa."],["o escritório","office","n-m"],["a rua","street","n-f"],["ter","to have","v-irr","Tenho uma caneta.","Irregular: tenho, tens, tem, temos, têm."],
  ["o dinheiro","money","n-m"],["a nota","banknote","n-f","O dinheiro: moedas e notas."],["os cigarros","cigarettes","n-mp"],["a garrafa de água","bottle of water","n-f"],
 ["os óculos de sol","sunglasses","n-mp","Always plural: os meus óculos de sol."],["a escola","school","n-f","Ele está na escola."],
 ["a mochila","backpack","n-f"],["a pasta","briefcase, folder","n-f"],
 ["saber","to know","v-irr","Sei falar português.","Irregular: sei, sabes, sabe, sabemos, sabem."],
 ["trazer","to bring","v-irr","Trago o almoço.","Irregular: trago, trazes, traz, trazemos, trazem."]
]),
...W("var",[
 ["morar","to live (reside)","v-ar","Eu moro em Lisboa."],["trabalhar","to work","v-ar","Nós trabalhamos em Braga."],["praticar","to practise (a sport)","v-ar","Nós praticamos futebol."],["gostar (de)","to like","v-ar","Eu gosto muito de música."],
 ["estudar","to study","v-ar","O Manuel estuda na faculdade."],["acabar","to finish, to end","v-ar","Vocês acabam tarde?"],["começar","to start, to begin","v-ar","O filme começa às nove."],["ocupar","to occupy, to spend (time)","v-ar","Como ocupas os tempos livres?"],
 ["deitar-se","to go to bed","v-ar","Ela deita-se às onze horas."],["brincar","to play (children)","v-ar","A Joana brinca com o irmão."],["lavar","to wash","v-ar","Lava a loiça."],["falar","to speak","v-ar","A Joana fala seis línguas."]
]),
...W("verir",[
 ["comer","to eat","v-er","Nós comemos uma salada."],["viver","to live","v-er","Eles vivem em Braga."],["beber","to drink","v-er","O meu pai nunca bebe vinho."],["defender","to defend","v-er","Ela defende as ideias do Pedro."],
 ["receber","to receive","v-er","Recebemos o correio de manhã."],["perceber","to understand","v-er","Tu percebes?"],["compreender","to understand, to comprehend","v-er","O senhor compreende?"],["entender","to understand","v-er","Eu não entendo."],
 ["partir","to leave / to break","v-ir","Partimos na segunda-feira. / Parte um copo."],["decidir","to decide","v-ir","Tu nunca decides nada."],["permitir","to allow","v-ir","Eu não permito isso."],["dividir","to divide, to share","v-ir","A professora divide as tarefas."],
 ["abrir","to open","v-ir","A Ana abre a mala."],["preferir","to prefer","v-ir","Elas preferem o teatro.","eu prefiro (e → i in the eu form)."],["sentir","to feel","v-ir","Ele sente que…","eu sinto (e → i in the eu form)."],
 ["vestir-se","to get dressed","v-ir","A Paula veste-se à pressa.","eu visto-me (e → i in the eu form)."],["dormir","to sleep","v-ir","Vocês dormem em casa da Joana.","eu durmo (o → u in the eu form)."]
]),
...W("dia",[
 ["o irmão","brother","n-m"],["a irmã","sister","n-f"],["os pais","parents","n-mp"],["o pai","father","n-m"],["a mãe","mother","n-f"],["a empresa","company","n-f"],["a fábrica","factory","n-f"],
 ["o automóvel","car (automobile)","n-m","Plural: os automóveis."],["o desporto","sport","n-m"],["o futebol","football","n-m"],["a natação","swimming","n-f"],["a música","music","n-f"],["a faculdade","faculty, university","n-f"],
 ["o correio","mail, post","n-m"],["a manhã","morning","n-f"],["o almoço","lunch","n-m"],["o pequeno-almoço","breakfast","n-m"],["a salada","salad","n-f"],["o pão","bread","n-m"],["a manteiga","butter","n-f"],
 ["o leite","milk","n-m"],["o diretor","director, boss","n-m"],["o cinema","cinema","n-m"],["o teatro","theatre","n-m"],["a tarefa","task","n-f"],["o aluno","student, pupil","n-m"],["o copo","glass (cup)","n-m"],
 ["o prato","plate","n-m"],["a loiça","dishes","n-f","Lavar a loiça."],["as compras","shopping","n-fp"],["sempre","always","adv"],["nunca","never","adv"],["habitualmente","usually","adv"],["geralmente","generally","adv"],
 ["cedo","early","adv"],["tarde","late","adv"],["à pressa","in a hurry","adv"]
]),
...W("u6",[
 ["o médico / a médica","doctor","n-m"],["o enfermeiro / a enfermeira","nurse","n-m"],["o ator / a atriz","actor / actress","n-m","Irregular feminine: atriz."],["o engenheiro / a engenheira","engineer","n-m"],
 ["o advogado / a advogada","lawyer","n-m"],["o empregado de mesa / a empregada de mesa","waiter / waitress","n-m"],["o secretário / a secretária","secretary","n-m"],["o informático / a informática","IT specialist","n-m"],
 ["o professor / a professora","teacher","n-m"],["o estudante / a estudante","student","n-m","Same form for men and women."],["o jornalista / a jornalista","journalist","n-m","Same form for men and women."],["o cantor / a cantora","singer","n-m"],
 ["o dono de casa / a dona de casa","homemaker","n-m"],["o empresário / a empresária","businessman / businesswoman","n-m"],["o aluno / a aluna","pupil","n-m"],
 ["primeiro","first (1.º)","ord"],["segundo","second (2.º)","ord"],["terceiro","third (3.º)","ord"],["quarto","fourth (4.º)","ord"],["quinto","fifth (5.º)","ord"],
 ["sexto","sixth (6.º)","ord"],["sétimo","seventh (7.º)","ord"],["oitavo","eighth (8.º)","ord"],["nono","ninth (9.º)","ord"],["décimo","tenth (10.º)","ord"],
 ["o nome","name","n-m"],["o apelido","surname","n-m"],["o nome completo","full name","n-m"],["a idade","age","n-f","Que idade tem?"],["a morada","address","n-f","Qual é a sua morada?"],
 ["o estado civil","marital status","n-m"],["solteiro / solteira","single","adj"],["casado / casada","married","adj"],["divorciado / divorciada","divorced","adj"],
 ["o código postal","postcode","n-m"],["o número de telefone","phone number","n-m"],["a ficha de inscrição","registration form","n-f"],["o bilhete de identidade","ID card (B.I.)","n-m"],
 ["o andar","floor (storey)","n-m","Em que andar moras? No segundo."],["o prédio","building (block of flats)","n-m"],["o apartamento","flat, apartment","n-m"],["o rés do chão","ground floor (R/C)","n-m"],
 ["esquerdo","left (Esq.)","adj"],["direito","right (Dto.)","adj"],["a arroba","at sign (@)","n-f"],["o ponto","dot (.)","n-m"],
 ["Qual é a sua profissão?","What's your job?","ph"],["Como se escreve?","How do you spell it?","ph"],["Quanto? / Quanta? / Quantos? / Quantas?","How much? / How many?","ph","Agrees with the noun: quantos anos, quanta água."],["o último nome","last name","n-m"]
]),
...W("poss",[
 ["o meu / a minha","my (singular)","pos","O meu carro, a minha casa."],["os meus / as minhas","my (plural)","pos","Os meus livros, as minhas chaves."],
 ["o teu / a tua","your, tu (singular)","pos"],["os teus / as tuas","your, tu (plural)","pos"],
 ["o seu / a sua","your, você / o senhor (singular)","pos"],["os seus / as suas","your, você / o senhor (plural)","pos"],
 ["o nosso / a nossa","our (singular)","pos"],["os nossos / as nossas","our (plural)","pos"],
 ["o vosso / a vossa","your, vocês (singular)","pos"],["os vossos / as vossas","your, vocês (plural)","pos"],
 ["dele","his","pos","After the noun: o carro dele."],["dela","her","pos","A casa dela."],["deles","their (masculine)","pos"],["delas","their (feminine)","pos"],
 ["De quem é?","Whose is it?","ph","É meu. É do José."],
 ["aqui","here (near me)","advl"],["aí","there (near you)","advl"],["ali","over there","advl"],["cá","here (where I am)","advl","Vem cá!"],["lá","there (far away)","advl","Os meus pais moram lá no Porto."],
 ["perto (de)","near","advl","Perto de casa."],["longe (de)","far (from)","advl","Longe do centro."],
 ["este / esta","this (near me)","pos","Plural: estes / estas."],["esse / essa","that (near you)","pos","Plural: esses / essas."],["aquele / aquela","that (over there)","pos","Plural: aqueles / aquelas."]
])
];
const CATS=[
 {id:"color",label:"all the colours",f:w=>w.t==="color"},
 {id:"var",label:"all the -ar verbs",f:w=>w.t==="v-ar"},
 {id:"ver",label:"all the -er verbs",f:w=>w.t==="v-er"},
 {id:"vir",label:"all the -ir verbs",f:w=>w.t==="v-ir"},
 {id:"fem",label:"all the feminine nouns (no articles shown!)",f:w=>w.t==="n-f"},
 {id:"masc",label:"all the masculine nouns (no articles shown!)",f:w=>w.t==="n-m"},
 {id:"country",label:"all the countries",f:w=>w.t==="country"},
 {id:"day",label:"all the days of the week",f:w=>w.t==="day"},
 {id:"num",label:"all the numbers",f:w=>w.t==="num"},
 {id:"bye",label:"all the farewells",f:w=>["Adeus!","Até amanhã!","Até logo!","Até já!","Até à próxima!"].includes(w.pt)},
 {id:"drink",label:"all the drinks",f:w=>["a água","a cerveja","o chá","o café","o sumo","o vinho","o leite"].includes(w.pt)},
 {id:"fam",label:"all the family words",f:w=>["o irmão","a irmã","os pais","o pai","a mãe"].includes(w.pt)}
];
