// Builds build/data.js: one question POOL (Livro + Caderno, units 1–14). Variants are assembled in the browser
// from the units the learner selects (see makeVariants in page.html).
const fs=require("fs");
const banks=["bank.js","bank2.js","bank5.js","bank6.js","bank7.js","bank-u07-08.js","bank-u09-10.js","bank-u11-12.js","bank-u13-14.js"];
const UNITS=[{id:"u16",n:"Units 1–6",t:"Everything up to Sou estudante"},{id:"7",n:"Unit 7",t:"É muito longe?"},{id:"8",n:"Unit 8",t:"Onde trabalha?"},{id:"9",n:"Unit 9",t:"Tenho um irmão"},
 {id:"10",n:"Unit 10",t:"Tenho olhos azuis"},{id:"11",n:"Unit 11",t:"Gostas de música clássica?"},{id:"12",n:"Unit 12",t:"Como são os portugueses?"},{id:"13",n:"Unit 13",t:"Faço anos a 10 de dezembro"},{id:"14",n:"Unit 14",t:"A que horas te levantas?"}];
const groupOf=t=>{const m=/^[LK](\d+)/.exec(t);return m&&+m[1]>=7?m[1]:"u16"};
const pool=[],errs=[];
banks.forEach(f=>require("./"+f).forEach((q,i)=>{
  if(q.type!=="text"&&(!q.options||new Set(q.options).size!==q.options.length||q.options.length<2))errs.push(`${f} dup/short options #${i} ${q.prompt}`);
  if(q.type==="text"&&(!q.accept.length||q.accept.some(a=>!a)))errs.push(`${f} no accept #${i}`);
  if(!(q.d>=1&&q.d<=10))errs.push(`${f} bad d #${i} ${q.prompt}`);
  if(!q.explain)errs.push(`${f} no explain #${i}`);
  const o={...q,g:groupOf(q.topic)};delete o.fixedSort;if(o.type==="text")o.accept=[...new Set(o.accept)];pool.push(o);
}));
if(errs.length){console.error(errs.join("\n"));process.exit(1)}
const cnt={};pool.forEach(q=>cnt[q.g]=(cnt[q.g]||0)+1);
UNITS.forEach(u=>{u.size=cnt[u.id]||0;if(u.size<50)console.warn("WARNING: "+u.n+" has only "+u.size+" questions (fallback to earlier units will be used)")});
console.log("pool",pool.length,JSON.stringify(cnt));
fs.writeFileSync(__dirname+"/data.js","const POOL="+JSON.stringify(pool)+";\nconst UNITS="+JSON.stringify(UNITS)+";\nconst DATAVER=\"u14-1\";");
console.log("bytes",fs.statSync(__dirname+"/data.js").size);
