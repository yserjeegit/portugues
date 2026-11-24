const fs=require("fs");
const bank=require("./bank.js");
const QUOTA={U1:6,U2:6,NUM:4,NAT:4,U4:5,PRON:2,SE:6,FIC:4,ART:6,VERB:7};
const V=5;
const by={};bank.forEach(q=>(by[q.topic]=by[q.topic]||[]).push(q));
const errs=[];
for(const t in QUOTA){const n=(by[t]||[]).length;if(n!==QUOTA[t]*V)errs.push(`${t}: ${n} (need ${QUOTA[t]*V})`);}
bank.forEach((q,i)=>{
  if(q.type!=="text"&&(!q.options||new Set(q.options).size!==q.options.length))errs.push(`dup/missing options #${i} ${q.prompt}`);
  if(q.type==="mc"&&q.options.length<2)errs.push(`few options #${i}`);
  if(q.d<1||q.d>10)errs.push(`bad d #${i}`);
});
if(errs.length){console.error(errs.join("\n"));process.exit(1);}
// deal: greedy balance — rare formats first, each to the variant with the fewest of that format (then lowest difficulty sum)
const variants=[...Array(V)].map(()=>[]);
const fmt=q=>q.type==="multi"?"multi":q.img?"img":q.type;
const RANK={multi:0,img:1,text:2,mc:3};
const cnt=(v,f)=>v.filter(q=>fmt(q)===f).length, dsum=v=>v.reduce((s,q)=>s+q.d,0);
for(const t in QUOTA){
  const items=by[t].slice().sort((a,b)=>RANK[fmt(a)]-RANK[fmt(b)]||b.d-a.d);
  const used=Array(V).fill(0);
  items.forEach(q=>{
    const f=fmt(q);
    const cand=[...Array(V).keys()].filter(i=>used[i]<QUOTA[t]).sort((a,b)=>cnt(variants[a],f)-cnt(variants[b],f)||dsum(variants[a])-dsum(variants[b]));
    variants[cand[0]].push(q);used[cand[0]]++;
  });
}
// scale difficulty → points so each variant sums to exactly 200 (each 1..10)
function scale(items){
  const W=q=>Math.pow(q.d,1.45),S=items.reduce((s,q)=>s+W(q),0),raw=items.map(q=>W(q)*200/S);
  const p=raw.map(r=>Math.min(10,Math.max(1,Math.floor(r))));
  let diff=200-p.reduce((a,b)=>a+b,0);
  const ord=raw.map((r,i)=>[r-Math.floor(r),i]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]);
  let k=0;while(diff>0){const i=ord[k%ord.length];if(p[i]<10){p[i]++;diff--}k++}
  k=0;while(diff<0){const i=ord[ord.length-1-(k%ord.length)];if(p[i]>1){p[i]--;diff++}k++}
  return p;
}
const out=variants.map(items=>{const p=scale(items);return items.map((q,i)=>{const o={...q,pts:p[i]};delete o.d;delete o.fixedSort;return o;});});
out.forEach((v,i)=>{
  const s=v.reduce((a,q)=>a+q.pts,0);
  console.log(`Variant ${i+1}: ${v.length} q, ${s} pts, img ${v.filter(q=>q.img).length}, multi ${v.filter(q=>q.type==="multi").length}, text ${v.filter(q=>q.type==="text").length}, pts range ${Math.min(...v.map(q=>q.pts))}-${Math.max(...v.map(q=>q.pts))}`);
  if(s!==200||v.length!==50)process.exit(1);
});
const keys=new Set();bank.forEach(q=>{const k=q.prompt+"|"+q.ask+"|"+(q.img||"").length;if(keys.has(k))console.log("DUP:",q.prompt);keys.add(k)});
fs.writeFileSync(__dirname+"/data.js","const VARIANTS="+JSON.stringify(out)+";");
console.log("bytes",fs.statSync(__dirname+"/data.js").size);
