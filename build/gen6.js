// Shared generators for Unit 5 / Unit 6 questions (possessives, demonstratives, professions, ordinals, quanto)
function rng(seed){let s=seed;return()=>{s=(s*1103515245+12345)%2147483648;return s/2147483648}}
function shuffler(r){return a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}}
function maker(list){
  const add=(t,q)=>{q.topic=t;list.push(q)};
  return {
    mc:(t,d,ask,prompt,options,explain,extra={})=>add(t,{d,type:"mc",ask,prompt,options,explain,...extra}),
    multi:(t,d,n,ask,prompt,options,explain,extra={})=>add(t,{d,type:"multi",nRight:n,ask,prompt,options,explain,...extra}),
    text:(t,d,ask,prompt,accept,explain,extra={})=>add(t,{d,type:"text",ask,prompt,accept:[].concat(accept),explain,...extra})
  };
}
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const ART=["o","a","os","as"],GD=["masculine singular","feminine singular","masculine plural","feminine plural"];
/* ---- possessives ---- */
const OWN=[
 {k:"eu",f:["meu","minha","meus","minhas"]},{k:"tu",f:["teu","tua","teus","tuas"]},
 {k:"você",f:["seu","sua","seus","suas"]},{k:"o senhor",f:["seu","sua","seus","suas"]},{k:"a senhora",f:["seu","sua","seus","suas"]},
 {k:"nós",f:["nosso","nossa","nossos","nossas"]},{k:"vocês",f:["vosso","vossa","vossos","vossas"]},
 {k:"ele",post:"dele"},{k:"ela",post:"dela"},{k:"eles",post:"deles"},{k:"elas",post:"delas"}];
const PNOUN=[["carro",0,"é preto"],["casa",1,"é grande"],["livros",2,"estão na mesa"],["chaves",3,"estão aqui"],["telemóvel",0,"é novo"],["mala",1,"é castanha"],
 ["óculos",2,"estão na mala"],["canetas",3,"são azuis"],["pais",2,"moram em Braga"],["irmã",1,"é médica"],["filhos",2,"chamam-se Ana e Hugo"],["malas",3,"são pesadas"],
 ["passaporte",0,"está na gaveta"],["morada",1,"é Rua das Flores, 18"],["apelido",0,"é Costa"],["profissão",1,"é interessante"],["amigas",3,"são brasileiras"],["computador",0,"é um Mac"]];
function possItems(){ // returns {pre:[...], post:[...]} as raw specs
  const pre=[],post=[];
  OWN.forEach(o=>PNOUN.forEach(([n,g,p])=>{
    if(o.post)post.push({o:o.k,n,g,p,ans:o.post});else pre.push({o:o.k,n,g,p,ans:o.f[g],forms:o.f});
  }));return {pre,post};
}
function possExplainPre(x){return `<i>${x.o}</i> → ${x.forms.join(" / ")}. <i>${x.n}</i> is ${GD[x.g]}, so: <b>${cap(ART[x.g])} ${x.ans} ${x.n}</b>. In European Portuguese the article comes before the possessive.`}
function possExplainPost(x){return `For <i>ele, ela, eles, elas</i> we use <b>de + pronoun</b> after the noun: dele, dela, deles, delas. → <b>${cap(ART[x.g])} ${x.n} ${x.ans}</b>. It agrees with the owner, not with the thing.`}
/* ---- demonstratives ---- */
const DEM={me:["este","esta","estes","estas"],you:["esse","essa","esses","essas"],far:["aquele","aquela","aqueles","aquelas"]};
const DPL={me:"near me (isto)",you:"near you (isso)",far:"far from both of us (aquilo)"};
const DNOUN=[["livro",0,"é meu"],["casa",1,"é muito grande"],["relógio",0,"é da Ana"],["cadeira",1,"é tua"],["quadros",2,"são dele"],["mesas",3,"são nossas"],["telemóvel",0,"é novo"],["chaves",3,"são do meu pai"],["carro",0,"é do José"],["senhora",1,"é a minha tia"],["óculos",2,"são de sol"],["malas",3,"são pesadas"]];
/* ---- professions ---- */
const PROF=[["médico","médica","doctor"],["enfermeiro","enfermeira","nurse"],["ator","atriz","actor / actress"],["engenheiro","engenheira","engineer"],["aluno","aluna","pupil"],
 ["advogado","advogada","lawyer"],["empregado de mesa","empregada de mesa","waiter / waitress"],["secretário","secretária","secretary"],["informático","informática","IT specialist"],
 ["professor","professora","teacher"],["estudante","estudante","student"],["jornalista","jornalista","journalist"],["cantor","cantora","singer"],["dono de casa","dona de casa","homemaker"],["empresário","empresária","businessman / businesswoman"]];
const profRule=(m,f)=>m===f?`<i>${m}</i> has the same form for men and women (like <i>estudante, jornalista</i>).`:m.endsWith("or")&&f===m+"a"?`-or → -ora: ${m} → <b>${f}</b>.`:m==="ator"?`ator → <b>atriz</b> (irregular).`:`-o → -a: ${m} → <b>${f}</b>.`;
/* ---- ordinals ---- */
const ORD=["primeiro","segundo","terceiro","quarto","quinto","sexto","sétimo","oitavo","nono","décimo"];
const CARD=["um","dois","três","quatro","cinco","seis","sete","oito","nove","dez"];
const ordF=o=>o.slice(0,-1)+"a";
/* ---- quanto ---- */
const QN=[["dinheiro",0,"tens"],["água",1,"bebes por dia"],["anos",2,"tens"],["línguas",3,"falas"],["alunos",2,"estão aqui"],["malas",3,"tem a Ana"],["lápis",2,"tem o Pedro"],["carros",2,"tens"],
 ["países",2,"conheces"],["cidades",3,"visitas este ano"],["irmãos",2,"tens"],["filhos",2,"tem a Rita"],["café",0,"bebes por dia"],["horas",3,"trabalhas"],["pessoas",3,"moram neste prédio"],["tempo",0,"tens"]];
const QF=["Quanto","Quanta","Quantos","Quantas"];
module.exports={rng,shuffler,maker,cap,ART,GD,OWN,PNOUN,possItems,possExplainPre,possExplainPost,DEM,DPL,DNOUN,PROF,profRule,ORD,CARD,ordF,QN,QF};
