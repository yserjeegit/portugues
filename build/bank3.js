// Caderno · special variant: only the prepositions DE and EM (and their contractions)
const {flag}=require("./svg.js");
const bank=[];let T="";const topic=t=>T=t;
const add=q=>{q.topic=T;bank.push(q);};
const mc=(d,ask,prompt,options,explain,extra={})=>add({d,type:"mc",ask,prompt,options,explain,...extra});
const multi=(d,nRight,ask,prompt,options,explain,extra={})=>add({d,type:"multi",nRight,ask,prompt,options,explain,...extra});
const text=(d,ask,prompt,accept,explain,extra={})=>add({d,type:"text",ask,prompt,accept:[].concat(accept),explain,...extra});
const DE="Type de, do, da, dos or das.",EM="Type em, no, na, nos or nas.";
const R={do:"de + o = <b>do</b>",da:"de + a = <b>da</b>",dos:"de + os = <b>dos</b>",das:"de + as = <b>das</b>",no:"em + o = <b>no</b>",na:"em + a = <b>na</b>",nos:"em + os = <b>nos</b>",nas:"em + as = <b>nas</b>"};

/* ---- P1 · origem: ser de ---- */
topic("P1");
text(3,DE,"A Anna é ___ Suécia.","da",`Origin → <i>de</i>. <i>A Suécia</i> is feminine: ${R.da}.`);
text(3,DE,"O Takeshi é ___ Japão.","do",`Origin → <i>de</i>. <i>O Japão</i> is masculine: ${R.do}.`);
text(4,DE,"Nós somos ___ Portugal.","de","<i>Portugal</i> never takes an article, so <i>de</i> doesn't contract: <b>de Portugal</b>. Same with Angola, Moçambique, Marrocos, Cuba.");
text(5,DE,"Vocês são ___ Estados Unidos?","dos",`<i>Os Estados Unidos</i> is masculine plural: ${R.dos}.`);
text(6,DE,"A Grace é ___ Filipinas.","das",`<i>As Filipinas</i> is feminine plural: ${R.das}.`);
text(4,DE,"O Kofi é ___ Angola.","de","<i>Angola</i> has no article: <b>de Angola</b>.");
text(5,DE,"Eles são ___ Porto.","do",`City names usually have no article, but <i>o Porto</i> does: ${R.do}. (Compare: <i>de Lisboa</i>.)`);
multi(6,2,"Select ALL the correct options.","O Pablo é ___ Espanha.",["de","da","do","das","em","na"],"With <i>Espanha, França, Itália, Inglaterra</i> the article is optional, so both <b>de Espanha</b> and <b>da Espanha</b> are correct. <i>Em/na</i> would mean location, not origin.");
text(3,"Complete the question.","___ onde é a Rita? — É do Brasil.","De","Asking about origin: <b>De onde</b> é…? The answer also uses <i>de</i>: <i>do Brasil</i>.");
mc(4,"Look at the flag and complete.","A Oksana é ___.",["da Ucrânia","de Ucrânia","na Ucrânia","do Ucrânia"],`<i>A Ucrânia</i> is feminine: ${R.da} → <b>da Ucrânia</b>. <i>Na Ucrânia</i> = in Ukraine (location).`,{img:flag("ucrania","Flag of Ukraine")});

/* ---- P2 · localização: em ---- */
topic("P2");
text(3,EM,"Berlim fica ___ Alemanha.","na",`Location → <i>em</i>. <i>A Alemanha</i>: ${R.na}.`,{img:flag("alemanha","Flag of Germany")});
text(3,EM,"Tóquio fica ___ Japão.","no",`<i>O Japão</i>: ${R.no}.`);
text(4,EM,"Coimbra é ___ Portugal.","em","No article with <i>Portugal</i>, so <b>em Portugal</b>.");
text(5,EM,"Chicago fica ___ Estados Unidos.","nos",`<i>Os Estados Unidos</i>: ${R.nos}.`);
text(6,EM,"Manila fica ___ Filipinas.","nas",`<i>As Filipinas</i>: ${R.nas}.`);
text(3,EM,"Moro ___ Lisboa.","em","Most cities take no article: <b>em Lisboa</b>, em Braga, em Paris.");
text(5,EM,"Eles moram ___ Porto.","no",`<i>O Porto</i> is one of the few cities with an article: ${R.no}.`);
text(6,EM,"A Vanessa mora ___ Rio de Janeiro.","no",`<i>O Rio de Janeiro</i> has an article: ${R.no}.`);
text(3,EM,"Estou ___ escritório.","no",`<i>O escritório</i>: ${R.no}.`);
text(3,EM,"O telemóvel está ___ mala.","na",`<i>A mala</i>: ${R.na}.`);
text(6,EM,"Não estou ___ casa.","em","<i>Em casa</i> (at home) is a fixed expression without an article: <b>em casa</b>.");
mc(4,"Choose the preposition.","Luanda é ___ Angola.",["em","na","no","de"],"<i>Angola</i> has no article: <b>em Angola</b>. <i>De Angola</i> would be origin.");

/* ---- P3 · posse e descrição: de ---- */
topic("P3");
text(4,DE,"O carro ___ Pedro é preto.","do",`Possession → <i>de</i>. With a name we use the article: <i>o Pedro</i> → ${R.do}.`);
text(4,DE,"A casa ___ Ana é amarela.","da",`Possession: <i>a Ana</i> → ${R.da}.`);
text(6,DE,"Os livros ___ alunos estão na mesa.","dos",`Possession, masculine plural <i>os alunos</i>: ${R.dos}.`);
text(6,DE,"As malas ___ senhoras estão aqui.","das",`<i>As senhoras</i>: ${R.das}.`);
text(5,DE,"É uma mesa ___ madeira.","de","Material uses <b>de</b> without an article: <i>de madeira</i>, <i>de vidro</i>.");
text(4,DE,"Ela é professora ___ português.","de","Type or subject: <b>de</b> without article: <i>professora de português</i>, <i>dicionário de português</i>.");
text(4,DE,"Quero um sumo ___ laranja.","de","Flavour or contents: <b>de</b>: <i>sumo de laranja</i>, <i>chá de limão</i>.");
mc(5,"Choose the preposition.","É um quadro ___ Van Gogh.",["de","do","da","em"],"For the author of a work the textbook uses <b>de</b> without an article: <i>um quadro de Van Gogh</i>, <i>um livro de Saramago</i>.");
text(4,"Answer: who does it belong to?","De quem é a caneta? — É ___ Rita.","da",`<i>A Rita</i> → ${R.da}: <b>É da Rita.</b>`);

/* ---- P4 · tempo, transporte, expressões ---- */
topic("P4");
text(5,EM,"Vou trabalhar ___ sábado.","no",`Days of the week take <i>em</i> + article: <i>o sábado</i> → ${R.no}.`);
text(5,EM,"A aula é ___ segunda-feira.","na",`<i>A segunda-feira</i> → ${R.na}.`);
text(5,EM,"As férias são ___ agosto.","em","Months take <b>em</b> without an article: <i>em agosto</i>, <i>em janeiro</i>.");
text(5,DE,"Bebo café ___ manhã.","de","Parts of the day: <b>de manhã</b> (but <i>à tarde</i>, <i>à noite</i>).");
text(5,DE,"Vou para o Porto ___ comboio.","de","Means of transport: <b>de</b> without an article: <i>de comboio, de carro, de avião</i> (but <i>a pé</i>).");
mc(4,"Choose the preposition.","Vamos para Paris ___ avião.",["de","no","em","da"],"Transport → <b>de avião</b>.");
text(6,"Type em + uma as one word.","Trabalhamos ___ empresa de automóveis.","numa","In European Portuguese <i>em</i> also merges with <i>um/uma</i>: em + um = <b>num</b>, em + uma = <b>numa</b>.");
text(6,DE,"Eles estão ___ férias no Algarve.","de","<b>Estar de férias</b> = to be on holiday (fixed expression, no article).");
text(6,DE,"Gostas ___ Porto?","do",`<i>Gostar</i> always takes <i>de</i>: <i>o Porto</i> → ${R.do}.`);

/* ---- P5 · misto e correção ---- */
topic("P5");
multi(7,3,"Select ALL the correct sentences.","de ou em?",["Sou de Lisboa.","Moro em Lisboa.","Estou no Porto.","Sou da Lisboa.","Moro no Lisboa.","Estou em Porto."],"Lisboa has no article (<i>de Lisboa, em Lisboa</i>); o Porto has one (<i>do Porto, no Porto</i>).");
multi(4,3,"Select ALL the forms that come from EM.","em + …",["no","nas","num","do","da","dos"],"<b>no, nas, num</b> come from <i>em</i>. <i>do, da, dos</i> come from <i>de</i>.");
text(6,"Correct the mistake.","O Rui mora na Lisboa.",["O Rui mora em Lisboa"],"Lisboa has no article: <b>em Lisboa</b>.");
text(6,"Correct the mistake.","A Ana é de Brasil.",["A Ana é do Brasil"],`<i>O Brasil</i> needs the article: ${R.do}.`);
text(6,"Correct the mistake.","Estou em escritório.",["Estou no escritório"],`<i>O escritório</i> needs the article: ${R.no}.`);
text(5,"Correct the mistake.","O livro é de o João.",["O livro é do João"],"<i>De + o</i> must always merge: <b>do</b> João.");
mc(6,"“I'm from Rome, but now I'm in Paris.”","___",["Sou de Roma, mas agora estou em Paris.","Sou em Roma, mas agora estou de Paris.","Sou da Roma, mas agora estou na Paris.","Estou de Roma, mas agora sou em Paris."],"Origin: <b>ser de</b>; where you are now: <b>estar em</b>. Neither city takes an article.");
text(6,"Complete the question.","___ que cidade moras? — Em Braga.","Em","The answer is a location with <i>em</i>, so the question starts with <b>Em</b> que cidade…?");
text(6,"Complete the question.","___ que país é a Maria? — Da Grécia.","De","The answer is origin (<i>da Grécia</i>), so: <b>De</b> que país…?");
text(3,DE,"Gosto ___ música.","de","<i>Gostar de</i> + noun without article: <b>de música</b>.");
module.exports=bank;
