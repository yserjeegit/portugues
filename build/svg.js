// Inline SVG pictures for the quiz (all drawn here, no external images)
const S = "#2A2A2A"; // outline
const COL = {vermelho:"#D7322B",azul:"#2C5FB0",verde:"#2E8B57",amarelo:"#F2C230",preto:"#1B1B1B",branco:"#F8F8F4",castanho:"#7B4A26",cinzento:"#8E9494",laranja:"#EE8A2B",rosa:"#F2A7BE"};
const svg=(vb,label,body)=>`<svg viewBox="${vb}" role="img" aria-label="${label}">${body}</svg>`;

function clock(time,night){
  const icon = night
    ? `<g transform="translate(190 64)"><path d="M6-22A22 22 0 1 0 6 22 17 17 0 1 1 6-22Z" fill="#E8E2C4"/><circle cx="-20" cy="-26" r="2" fill="#E8E2C4"/><circle cx="18" cy="26" r="1.6" fill="#E8E2C4"/></g>`
    : `<g transform="translate(190 64)"><circle r="16" fill="#F5B83D"/><g stroke="#F5B83D" stroke-width="4" stroke-linecap="round"><line y1="-24" y2="-31"/><line y1="24" y2="31"/><line x1="-24" x2="-31"/><line x1="24" x2="31"/><line x1="17" y1="-17" x2="22" y2="-22"/><line x1="-17" y1="-17" x2="-22" y2="-22"/><line x1="17" y1="17" x2="22" y2="22"/><line x1="-17" y1="17" x2="-22" y2="22"/></g></g>`;
  return svg("0 0 225 120",`Digital clock showing ${time}`,
    `<rect x="10" y="22" width="150" height="76" rx="10" fill="#1E2430"/><rect x="18" y="30" width="134" height="60" rx="5" fill="#0D1118"/><text x="85" y="76" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="38" font-weight="700" fill="#F5B83D">${time}</text>${icon}`);
}

const B=`<rect width="30" height="20" fill="none" stroke="#9AA19D" stroke-width=".25"/>`;
const vtri=(a,b,c)=>`<rect width="10" height="20" fill="${a}"/><rect x="10" width="10" height="20" fill="${b}"/><rect x="20" width="10" height="20" fill="${c}"/>${B}`;
const htri=(a,b,c)=>`<rect width="30" height="7" fill="${a}"/><rect y="6.67" width="30" height="6.67" fill="${b}"/><rect y="13.33" width="30" height="6.67" fill="${c}"/>${B}`;
const nordic=(bg,cr)=>`<rect width="30" height="20" fill="${bg}"/><rect x="8.5" width="4" height="20" fill="${cr}"/><rect y="8" width="30" height="4" fill="${cr}"/>${B}`;
const FLAGS={
  franca:vtri("#0055A4","#F7F7F2","#EF4135"),
  italia:vtri("#009246","#F7F7F2","#CE2B37"),
  irlanda:vtri("#169B62","#F7F7F2","#FF883E"),
  alemanha:htri("#111","#DD0000","#FFCE00"),
  russia:htri("#F7F7F2","#0039A6","#D52B1E"),
  ucrania:`<rect width="30" height="10" fill="#0057B7"/><rect y="10" width="30" height="10" fill="#FFD700"/>${B}`,
  polonia:`<rect width="30" height="10" fill="#F7F7F2"/><rect y="10" width="30" height="10" fill="#DC143C"/>${B}`,
  japao:`<rect width="30" height="20" fill="#F7F7F2"/><circle cx="15" cy="10" r="6" fill="#BC002D"/>${B}`,
  suecia:nordic("#006AA7","#FECC00"),
  finlandia:nordic("#F7F7F2","#002F6C"),
  brasil:`<rect width="30" height="20" fill="#009C3B"/><path d="M15 2.4 27.6 10 15 17.6 2.4 10Z" fill="#FFDF00"/><circle cx="15" cy="10" r="5" fill="#002776"/><path d="M10.2 9.1c3.1-.6 6.8-.2 9.7 1.7" stroke="#fff" stroke-width=".8" fill="none"/>`
};
const flag=(k,label)=>svg("0 0 30 20",label||"A national flag",FLAGS[k]);

function obj(kind,colorKey,label){
  const c=COL[colorKey]||colorKey, w=`stroke="${S}" stroke-width="2.5" stroke-linejoin="round"`;
  const chair=(x,s)=>`<g transform="translate(${x} 0) scale(${s})" fill="${c}" ${w}><rect x="30" y="10" width="60" height="44" rx="5"/><rect x="30" y="54" width="8" height="30"/><rect x="82" y="54" width="8" height="30"/><path d="M22 84h76l-6 14H28Z"/><rect x="28" y="98" width="8" height="38"/><rect x="84" y="98" width="8" height="38"/></g>`;
  const book=(x,y,r)=>`<g transform="translate(${x} ${y}) rotate(${r})"><rect x="0" y="0" width="70" height="92" rx="4" fill="${c}" ${w}/><rect x="8" y="0" width="5" height="92" fill="${S}" opacity=".25"/><rect x="22" y="22" width="36" height="12" rx="2" fill="#F8F8F4" stroke="${S}" stroke-width="1.5"/></g>`;
  const table=(x,s)=>`<g transform="translate(${x} 0) scale(${s})" fill="${c}" ${w}><rect x="10" y="34" width="140" height="16" rx="3"/><rect x="22" y="50" width="11" height="70"/><rect x="127" y="50" width="11" height="70"/></g>`;
  let vb="0 0 160 140",b="";
  switch(kind){
    case "cadeira": vb="0 0 120 140"; b=chair(0,1); break;
    case "cadeiras": vb="0 0 230 140"; b=chair(0,1)+chair(110,1); break;
    case "mesa": vb="0 0 160 125"; b=table(0,1); break;
    case "mesas": vb="0 0 330 125"; b=table(0,1)+table(170,1); break;
    case "livro": vb="0 0 120 120"; b=book(25,14,0); break;
    case "livros": vb="0 0 200 130"; b=book(22,22,-6)+book(105,16,5); break;
    case "porta": vb="0 0 120 160"; b=`<rect x="14" y="6" width="92" height="150" fill="#C9CFCC"/><rect x="22" y="14" width="76" height="142" fill="${c}" ${w}/><rect x="31" y="25" width="58" height="48" fill="none" stroke="${S}" stroke-opacity=".4" stroke-width="3"/><rect x="31" y="86" width="58" height="56" fill="none" stroke="${S}" stroke-opacity=".4" stroke-width="3"/><circle cx="86" cy="82" r="4.5" fill="#C9A55A" stroke="${S}"/>`; break;
    case "janela": vb="0 0 140 140"; b=`<rect x="14" y="14" width="112" height="112" fill="#BFE0F5" ${w}/><circle cx="96" cy="44" r="12" fill="#F5D36B"/><path d="M14 104c30-22 60-22 112 0v22H14Z" fill="#8CC08A"/><rect x="14" y="14" width="112" height="112" fill="none" stroke="#F2EFE6" stroke-width="10"/><rect x="65" y="14" width="10" height="112" fill="#F2EFE6"/><rect x="14" y="65" width="112" height="10" fill="#F2EFE6"/><rect x="9" y="9" width="122" height="122" fill="none" ${w}/>`; break;
    case "relogio": vb="0 0 130 130"; b=`<circle cx="65" cy="65" r="56" fill="#F8F8F4" stroke="${S}" stroke-width="6"/>${[...Array(12)].map((_,i)=>{const a=i*Math.PI/6;return `<line x1="${65+44*Math.sin(a)}" y1="${65-44*Math.cos(a)}" x2="${65+50*Math.sin(a)}" y2="${65-50*Math.cos(a)}" stroke="${S}" stroke-width="3"/>`}).join("")}<line x1="65" y1="65" x2="65" y2="30" stroke="${S}" stroke-width="5" stroke-linecap="round"/><line x1="65" y1="65" x2="92" y2="72" stroke="${S}" stroke-width="4" stroke-linecap="round"/><circle cx="65" cy="65" r="4" fill="${S}"/>`; break;
  }
  return svg(vb,label,b);
}

function tile(n){
  return svg("0 0 200 130",`Blue-and-white tile house-number plate showing ${n}`,
  `<rect x="8" y="8" width="184" height="114" rx="4" fill="#F7F6F0" stroke="#1F4E9C" stroke-width="6"/><rect x="20" y="20" width="160" height="90" fill="none" stroke="#1F4E9C" stroke-width="2"/><g fill="#1F4E9C"><path d="M20 20h18L20 38Z"/><path d="M180 20h-18l18 18Z"/><path d="M20 110h18L20 92Z"/><path d="M180 110h-18l18-18Z"/></g><text x="100" y="86" text-anchor="middle" font-family="Georgia, serif" font-size="54" font-weight="700" fill="#1F4E9C">${n}</text>`);
}
module.exports={clock,flag,obj,tile};
