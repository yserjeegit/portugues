// Helpers for Units 7–14: question maker (re-exported from gen6), analog clock, calendar page, time-in-words
const G=require("./gen6.js");
const svg=(vb,label,body)=>`<svg viewBox="${vb}" role="img" aria-label="${label}">${body}</svg>`;

function anaClock(h,m){
  const ma=m*6,ha=(h%12)*30+m/2;
  const ticks=[...Array(12)].map((_,i)=>{const a=i*30*Math.PI/180,r1=i%3?50:46,r2=54;
    return `<line x1="${(60+r1*Math.sin(a)).toFixed(1)}" y1="${(60-r1*Math.cos(a)).toFixed(1)}" x2="${(60+r2*Math.sin(a)).toFixed(1)}" y2="${(60-r2*Math.cos(a)).toFixed(1)}" stroke="#2A2A2A" stroke-width="${i%3?2:3.5}" stroke-linecap="round"/>`}).join("");
  const hand=(ang,len,w,c)=>{const a=ang*Math.PI/180;return `<line x1="60" y1="60" x2="${(60+len*Math.sin(a)).toFixed(1)}" y2="${(60-len*Math.cos(a)).toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`};
  return svg("0 0 120 120",`Analog clock showing ${h}:${String(m).padStart(2,"0")}`,
    `<circle cx="60" cy="60" r="57" fill="#FBFAF5" stroke="#0B5A33" stroke-width="4"/>${ticks}${hand(ha,30,6,"#1B1B1B")}${hand(ma,46,3.5,"#C0392B")}<circle cx="60" cy="60" r="4" fill="#1B1B1B"/>`);
}
function digi(t){
  return svg("0 0 170 80",`Digital clock showing ${t}`,
    `<rect x="5" y="5" width="160" height="70" rx="10" fill="#1E2430"/><rect x="13" y="13" width="144" height="54" rx="5" fill="#0D1118"/><text x="85" y="54" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="34" font-weight="700" fill="#F5B83D">${t}</text>`);
}
const MES=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
function calPage(d,mi){
  return svg("0 0 120 120",`Calendar page: ${d} ${MES[mi]}`,
    `<rect x="12" y="14" width="96" height="94" rx="10" fill="#FBFAF5" stroke="#2A2A2A" stroke-width="3"/><path d="M12 24a10 10 0 0 1 10-10h76a10 10 0 0 1 10 10v14H12z" fill="#C0392B"/><text x="60" y="33" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#fff">${MES[mi].slice(0,3).toUpperCase()}</text><text x="60" y="88" text-anchor="middle" font-family="Georgia, serif" font-size="44" font-weight="700" fill="#1B1B1B">${d}</text><g fill="#2A2A2A"><rect x="34" y="6" width="6" height="16" rx="3"/><rect x="80" y="6" width="6" height="16" rx="3"/></g>`);
}
const NUMW=["zero","uma","duas","três","quatro","cinco","seis","sete","oito","nove","dez","onze","doze"];
const MINW={5:"cinco",10:"dez",15:"um quarto",20:"vinte",25:"vinte e cinco",30:"meia"};
// European Portuguese spoken time. Returns the main form and accepted alternatives.
function timeWords(h,m){
  const hh=h%12, nxt=(h+1)%12;
  const hw=x=>x===0?(h>=12&&h<14||h===11&&m>30?"meio-dia":"meia-noite"):NUMW[x];
  const verb=(x,word)=>(word==="uma"||word==="meio-dia"||word==="meia-noite")?"É":"São";
  const base=x=>{const w=x===0?(h%24>=11&&h%24<=13?"meio-dia":"meia-noite"):NUMW[x];return w};
  if(m===0){const w=base(hh);return {main:`${verb(hh,w)} ${w}${w==="uma"||w.startsWith("mei")?"":" horas"}`.replace("São uma","É uma"),alts:[`${verb(hh,w)} ${w}`].concat(w==="uma"?["É uma hora"]:[])}}
  if(m<=30){const w=base(hh);const v=verb(hh,w);const s=`${v} ${w} e ${MINW[m]||String(m)}`;return {main:s,alts:m===15?[`${v} ${w} e quinze`]:m===30?[`${v} ${w} e trinta`]:[]}}
  const left=60-m,w=base(nxt===0?0:nxt),art=w==="uma"||w==="meia-noite"?"a":w==="meio-dia"?"o":"as";
  const lw=left===15?"um quarto":(MINW[left]||String(left));
  const main=left===15?`É um quarto para ${art} ${w}`:`São ${lw} para ${art} ${w}`;
  const lit=`${verb(hh,base(hh))} ${base(hh)} e ${m===45?"quarenta e cinco":m===40?"quarenta":m===50?"cinquenta":m===55?"cinquenta e cinco":m===35?"trinta e cinco":String(m)}`;
  return {main,alts:[lit]};
}
module.exports={...G,anaClock,digi,calPage,MES,timeWords};
