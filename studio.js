/* SAC Catalogue Studio v02 — editorial product and materials reference preview.
 * Real product configurations based on provided GH M2M Catalogue 2026.
 * Colours and geometries are illustrative; no manufacturing approval implied.
 */
(()=>{
'use strict';
const $=(q,root=document)=>root.querySelector(q);const $$=(q,root=document)=>[...root.querySelectorAll(q)];
const palette=[
 {id:'ivory',name:'Soft ivory',hex:'#ded8c9',shade:'#bcb2a2'},
 {id:'oat',name:'Warm oat',hex:'#b9aa92',shade:'#928270'},
 {id:'clay',name:'Earth / clay',hex:'#a36e52',shade:'#815039'},
 {id:'blue',name:'Mineral blue',hex:'#54697b',shade:'#344859'},
 {id:'graphite',name:'Graphite',hex:'#424b4c',shade:'#242d30'}];
const woodTones=[
 {id:'natural',name:'Natural bamboo study',hex:'#b58e5c',shade:'#725033'},
 {id:'pale',name:'Pale wood study',hex:'#d6c5a6',shade:'#998364'},
 {id:'deep',name:'Dark wood study',hex:'#574534',shade:'#36281f'},
 {id:'painted',name:'Painted black study',hex:'#3e4140',shade:'#222726'},
 {id:'chalk',name:'Painted white study',hex:'#ede7dc',shade:'#b3a99a'}];
const frameColors=[
 {id:'white',name:'White',hex:'#efeee9'},
 {id:'grey',name:'Grey',hex:'#9a9b98'},
 {id:'anthracite',name:'Anthracite',hex:'#454a4b'},
 {id:'sand',name:'Sand',hex:'#c1b09a'},
 {id:'black',name:'Black',hex:'#282a2b'},
 {id:'offwhite',name:'Off white',hex:'#d9d4c9'}];
const P={
 roller:{title:'Roller blind',family:'Roller',slug:'roller',description:'A single fabric plane controlled by the tube, bracket and bottom bar. Explore the reference mounting and operating concepts without recolouring the surrounding architecture.',source:'PDF pp. 6–9',gallery:'assets/product-roller.webp',room:'assets/photo-roller-room.webp',materials:['woven-light','woven-dense','woven-dark','woven-blue','woven-clay'],modes:['roller'],visual:'roller',details:['Chain, spring, twin-pull and electric operating concepts are documented.','Bracket-mounted and semi-open cassette options appear in the reference.','Bottom-bar treatments differ by system and should be specified separately.','Chain-operated systems require a verified child-safety solution for the intended market (reference PDF pp. 4–5).' ]},
 cassette:{title:'Cassette roller',family:'Roller',slug:'cassette',description:'The roller mechanism is visually integrated into a headbox. The catalogue documents different mounting and cassette concepts; this is a simplified construction study.',source:'PDF pp. 6, 14–19',gallery:'assets/product-daynight.webp',room:'assets/photo-roller-room.webp',materials:['woven-light','woven-dense','woven-dark','woven-blue','woven-clay'],visual:'roller',details:['Housing and bottom-bar choice affect the appearance.','Cassette dimensions and compatible hardware depend on the selected reference system.']},
 pleated:{title:'Pleated blind',family:'Pleated',slug:'pleated',description:'A folded textile window system with distinct tensioned, cordlock and cordless operating references. Construction and configuration options update together.',source:'PDF pp. 63–79',gallery:'assets/product-pleat.webp',room:'assets/photo-pleated-room.webp',materials:['pleat-light','pleat-dark','cell-ivory','cell-grey','cell-blue'],visual:'pleated',details:['20 mm pleated and 25 mm cellular constructions are shown for tensioned and cordlock references.','45 mm cellular fabric is shown in the cordless reference.','Top-down and Top-down/bottom-up are illustrated for the cordlock and cordless variants.']},
 honeycomb:{title:'Honeycomb blind',family:'Pleated',slug:'honeycomb',description:'Double-walled cellular fabric adds structure to a folded window covering. The reference distinguishes 25 mm and 45 mm constructions and their operating families.',source:'PDF pp. 67, 73, 75–79',gallery:'assets/macro-honeycomb.webp',room:'assets/photo-pleated-room.webp',materials:['cell-ivory','cell-grey','cell-blue','pleat-light','pleat-dark'],visual:'pleated',details:['25 mm double-walled honeycomb appears with tensioned, cordlock and cordless references.','45 mm double-walled honeycomb is presented under the cordless reference only.','The reference is not an approved SAC production specification.']},
 venetian:{title:'Wood Venetian · 50 mm',family:'Venetian',slug:'venetian',description:'A timber or bamboo slat system. Inspect the effect of slat angle, reveal and finish independently of the architectural backdrop.',source:'PDF pp. 89–98',gallery:'assets/product-venetian.webp',room:'assets/photo-venetian-room.webp',materials:['wood-natural','wood-pale','wood-deep','wood-painted','wood-chalk'],visual:'venetian',details:['The source documents a 50 mm wood Venetian range.','Manual, twin-pull and electric operation concepts are described.','Wood and bamboo finishes appear in multiple surface families.']},
 'day-night':{title:'Day & Night roller',family:'Roller',slug:'day-night',description:'Alternating bands create different light and privacy conditions as the two fabric layers shift relative to each other.',source:'PDF pp. 42–59',gallery:'assets/product-daynight.webp',room:'assets/photo-daynight-room.webp',materials:['woven-light','woven-dense','woven-dark','woven-blue','woven-clay'],visual:'daynight',details:['The reference includes roller-based controls and hardware options.','Stripe registration in this preview is illustrative; precise fabric alignment requires verified construction.']},
 screen:{title:'Insect screen',family:'Screens',slug:'screen',description:'Mesh and frame geometry form a discreet opening protection. This conceptual view intentionally has no unverified control choices.',source:'Technical system approval: TBC',gallery:'assets/screen-detail.webp',room:'assets/courtyard.webp',materials:['mesh-graphite','mesh-neutral'],visual:'screen',details:['Mesh, frame, guide and opening operation require a defined SAC system.','Only material texture is represented in this visual study.']},
 exterior:{title:'Exterior shading',family:'Exterior',slug:'exterior',description:'External shading belongs to the façade specification. Final fixing, exposure class and system geometry remain subject to product approval.',source:'Technical system approval: TBC',gallery:'assets/facade-detail.webp',room:'assets/facade.webp',materials:['profile-dark','profile-sand'],visual:'exterior',details:['Design reference only — no approved SKU, fixing or wind classification is implied.']}
};
const M=[
 {id:'woven-light',name:'Light weave',category:'Roller textiles',family:'Roller',type:'Woven surface study',colour:'#ded8c9',dark:'#a59d91',kind:'weave',product:['roller','cassette','day-night'],source:'Material colour: TBC',note:'Illustrative weave and colour. Optical openness, FR, composition and certification are not stated.'},
 {id:'woven-dense',name:'Warm dense weave',category:'Roller textiles',family:'Roller',type:'Woven surface study',colour:'#b9aa92',dark:'#867561',kind:'weave',product:['roller','cassette'],source:'Material colour: TBC',note:'Warm digital sample. Do not treat as a stocked fabric or official colour.'},
 {id:'woven-dark',name:'Graphite weave',category:'Roller textiles',family:'Roller',type:'Woven surface study',colour:'#444e4f',dark:'#293132',kind:'weave',product:['roller','cassette','day-night'],source:'Material colour: TBC',note:'Illustrative surface. Transmission and fabric construction remain unverified.'},
 {id:'woven-blue',name:'Mineral weave',category:'Roller textiles',family:'Roller',type:'Woven surface study',colour:'#61758a',dark:'#384b60',kind:'weave',product:['roller','cassette','day-night'],source:'Material colour: TBC',note:'Illustrative shade. Requires a real textile swatch before any external quotation.'},
 {id:'woven-clay',name:'Earth weave',category:'Roller textiles',family:'Roller',type:'Woven surface study',colour:'#a77352',dark:'#774c38',kind:'weave',product:['roller','cassette','day-night'],source:'Material colour: TBC',note:'Illustrative shade. Real dye lot and material code to be confirmed.'},
 {id:'pleat-light',name:'20 mm pleated / light',category:'Pleated & cellular',family:'Pleated',type:'20 mm pleated construction',colour:'#dedbd4',dark:'#afa99e',kind:'pleat',product:['pleated','honeycomb'],source:'Fabric construction: PDF pp. 67, 73, 79',note:'20 mm pleated construction is documented. This finish colour is only a visual study.'},
 {id:'pleat-dark',name:'20 mm pleated / graphite',category:'Pleated & cellular',family:'Pleated',type:'20 mm pleated construction',colour:'#747b7a',dark:'#414d4c',kind:'pleat',product:['pleated','honeycomb'],source:'Fabric construction: PDF pp. 67, 73, 79',note:'20 mm pleated construction is documented. Specific shade and material performance are TBC.'},
 {id:'cell-ivory',name:'25 mm honeycomb / ivory',category:'Pleated & cellular',family:'Pleated',type:'25 mm double-walled honeycomb',colour:'#e3ddcf',dark:'#ada593',kind:'cell',product:['honeycomb','pleated'],source:'Fabric construction: PDF pp. 67, 73, 79',note:'25 mm double-walled honeycomb is documented; colour is illustrative.'},
 {id:'cell-grey',name:'25 mm honeycomb / grey',category:'Pleated & cellular',family:'Pleated',type:'25 mm double-walled honeycomb',colour:'#9eaaa9',dark:'#687473',kind:'cell',product:['honeycomb','pleated'],source:'Fabric construction: PDF pp. 67, 73, 79',note:'Cell structure is referenced; fabric colour is unverified.'},
 {id:'cell-blue',name:'45 mm honeycomb / blue',category:'Pleated & cellular',family:'Pleated',type:'45 mm double-walled honeycomb',colour:'#637e91',dark:'#3d5568',kind:'cell',product:['honeycomb','pleated'],source:'Fabric construction: PDF p. 79 (cordless)',note:'45 mm honeycomb is illustrated with the cordless family. Blue finish is illustrative.'},
 {id:'wood-natural',name:'Natural bamboo',category:'Wood & slats',family:'Venetian',type:'Bamboo finish family',colour:'#b58e5c',dark:'#735034',kind:'wood',product:['venetian'],source:'Finish family: PDF p. 93',note:'Natural bamboo is identified in the reference. This digital sample is not an exact SKU.'},
 {id:'wood-pale',name:'Pale wood',category:'Wood & slats',family:'Venetian',type:'Wood finish study',colour:'#d6c5a6',dark:'#9e8260',kind:'wood',product:['venetian'],source:'Wood finishes: PDF p. 93',note:'Illustrative tone within wood surface families.'},
 {id:'wood-deep',name:'Deep wood',category:'Wood & slats',family:'Venetian',type:'Wood finish study',colour:'#574534',dark:'#30251a',kind:'wood',product:['venetian'],source:'Wood finishes: PDF p. 93',note:'Illustrative tone; not an official swatch.'},
 {id:'wood-painted',name:'Painted bamboo / dark',category:'Wood & slats',family:'Venetian',type:'Painted bamboo finish family',colour:'#414443',dark:'#232625',kind:'wood',product:['venetian'],source:'Finish family: PDF p. 93',note:'Painted bamboo is documented; exact tone TBC.'},
 {id:'wood-chalk',name:'Painted bamboo / light',category:'Wood & slats',family:'Venetian',type:'Painted bamboo finish family',colour:'#e4ddd1',dark:'#aca595',kind:'wood',product:['venetian'],source:'Finish family: PDF p. 93',note:'Painted bamboo is documented; exact tone TBC.'},
 {id:'mesh-graphite',name:'Fine dark mesh',category:'Mesh',family:'Screens',type:'Mesh texture study',colour:'#3b4848',dark:'#202a2a',kind:'mesh',product:['screen'],source:'SAC system source: TBC',note:'Illustrative texture only. Mesh fibre, openness and insect-screen compatibility unverified.'},
 {id:'mesh-neutral',name:'Fine neutral mesh',category:'Mesh',family:'Screens',type:'Mesh texture study',colour:'#acb0a8',dark:'#737b76',kind:'mesh',product:['screen'],source:'SAC system source: TBC',note:'Illustrative texture only; not a confirmed range.'},
 {id:'profile-dark',name:'Dark metal study',category:'Profiles & finishes',family:'Exterior',type:'Finish study',colour:'#414a4e',dark:'#20282b',kind:'metal',product:['exterior'],source:'SAC product detail: TBC',note:'Illustrative metal surface. No approved profile is implied.'},
 {id:'profile-sand',name:'Sand metal study',category:'Profiles & finishes',family:'Exterior',type:'Finish study',colour:'#bdac90',dark:'#8a7960',kind:'metal',product:['exterior'],source:'SAC product detail: TBC',note:'Illustrative metal surface. Actual powder-coat codes must be verified.'}
];
const byId=(id)=>M.find(x=>x.id===id);
const esc=(s)=>String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const typ=(v)=>Math.max(0,Math.min(1,Number(v)));
const params=new URLSearchParams(location.search);
const setParams=(obj)=>{const u=new URL(location.href);for(const [k,v] of Object.entries(obj))v===null?u.searchParams.delete(k):u.searchParams.set(k,v);try{history.replaceState(null,'',u)}catch(e){/* file:// preview may disallow history mutation; controls remain functional */}};
function fabricTexture(m){let color=m?.colour||'#ddd', dark=m?.dark||'#aaa';if(!m)return '#ddd';return `linear-gradient(115deg,${color},${dark}88,${color}),repeating-linear-gradient(0deg,transparent 0px,transparent 3px,${dark}55 4px,transparent 6px)`}
function materialStyle(m){return `--sample:${m.colour};--sample-dark:${m.dark};`}
function selButton(v,selected,group){return `<button type="button" class="choice ${v.id===selected?'is-active':''}" data-choice-group="${group}" data-choice="${esc(v.id)}" aria-pressed="${v.id===selected}">${esc(v.name)}</button>`}
function makeButtons(options,selected,group){return options.map(x=>selButton(typeof x==='string'?{id:x,name:x}:x,selected,group)).join('')}
function swatches(mats,selected,group){return mats.filter(Boolean).map(m=>`<button type="button" class="swatch-choice ${m.id===selected?'is-active':''}" data-choice-group="${group}" data-choice="${m.id}" aria-pressed="${m.id===selected}" aria-label="Select ${esc(m.name)}" title="${esc(m.name)}"><span class="swatch-surface is-${m.kind}" style="${materialStyle(m)}"></span></button>`).join('')}
const frame=(id)=>frameColors.find(x=>x.id===id)||frameColors[0];
function specs(s,p){let v=[];if(p.visual==='roller')v=[['Operation',s.control],['Mounting / head',s.mount],['Roller position',s.open+'% covered'],['Frame finish',frame(s.frame).name]];
if(p.visual==='pleated')v=[['Operating family',s.control],['Textile construction',s.build],['Opening',s.position],['Coverage',s.open+'%'],['Profile finish',frame(s.frame).name]];
if(p.visual==='venetian')v=[['Slat family','50 mm wood / bamboo'],['Control reference',s.control],['Tilt study',s.tilt+'°'],['Lowered area',s.open+'%']];
if(p.visual==='daynight')v=[['Alignment study',s.position],['Operating concept',s.control],['Coverage',s.open+'%']];
return v;}
function defs(){return `<defs><linearGradient id="wall" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ecebe6"/><stop offset="1" stop-color="#c4ccc9"/></linearGradient><linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#c6d3d5"/><stop offset=".45" stop-color="#e8e6dd"/><stop offset="1" stop-color="#aab9b6"/></linearGradient><linearGradient id="head" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fafafa"/><stop offset=".3" stop-color="#b6bbc0"/><stop offset=".7" stop-color="#737a7d"/><stop offset="1" stop-color="#d2d2ce"/></linearGradient><linearGradient id="fabric" x1="0" y1="0" x2="1" y2=".25"><stop stop-color="var(--fabric-dark)" stop-opacity=".95"/><stop offset=".14" stop-color="var(--fabric)"/><stop offset=".68" stop-color="var(--fabric)"/><stop offset="1" stop-color="var(--fabric-dark)"/></linearGradient><pattern id="weave" patternUnits="userSpaceOnUse" width="6" height="6"><path d="M0 2H6 M2 0V6" stroke="var(--fabric-dark)" stroke-width=".7" opacity=".16"/></pattern><pattern id="meshpat" patternUnits="userSpaceOnUse" width="5" height="5"><path d="M0 0H5M0 0V5" stroke="var(--fabric-dark)" stroke-width=".7" fill="none" opacity=".75"/></pattern><pattern id="grain" patternUnits="userSpaceOnUse" width="40" height="40"><path d="M0 5Q10 1 21 5T45 5 M-10 20Q8 17 21 20T50 20 M0 34Q12 29 29 34T60 33" stroke="var(--fabric-dark)" fill="none" stroke-width="1.3" opacity=".32"/></pattern><clipPath id="windowclip"><rect x="151" y="123" width="458" height="515"/></clipPath></defs>`}
function baseScene(view){return `<rect width="760" height="740" fill="#e6e4dc"/><rect x="18" y="28" width="724" height="676" rx="3" fill="url(#wall)"/><path d="M18 510L742 234V704H18" fill="#ccd1c9" opacity=".18"/><rect x="126" y="97" width="510" height="562" fill="#b7c0bc"/><rect x="144" y="114" width="475" height="533" fill="url(#glass)"/><g clip-path="url(#windowclip)" opacity=".26"><path d="M45 355L420 115L639 115L162 500Z" fill="#fff"/><path d="M360 647L638 360L700 380L492 648Z" fill="#778e8d"/></g><rect x="135" y="105" width="493" height="546" fill="none" stroke="var(--frame)" stroke-width="14"/><path d="M143 112V648" stroke="#fff" stroke-opacity=".4" stroke-width="2"/>${view==='detail'?'':'<path d="M638 109v536" stroke="#909a96" stroke-width="2"/>'}`}
function layerParts(s,p){const m=byId(s.material)||M[0];const colour=m.colour, dark=m.dark;let x=153,y=125,w=454,bottom=639;let top=164;
const cover=Number(s.open);let bodyH=Math.round((bottom-top)*cover/100);bodyH=Math.max(42,bodyH);
let casing=(s.mount==='Semi-open cassette'||p.slug==='cassette');let control=s.control||'';
if(p.visual==='roller'){
 let bottomY=top+bodyH;let content=`<rect x="${x+2}" y="${top}" width="${w-4}" height="${bodyH}" fill="url(#fabric)"/><rect x="${x+2}" y="${top}" width="${w-4}" height="${bodyH}" fill="url(#weave)"/><path d="M${x+8} ${top}V${bottomY}" stroke="#fff" stroke-opacity=".38" stroke-width="2"/><rect x="${x-2}" y="${bottomY-3}" width="${w+4}" height="10" rx="2" fill="var(--frame)"/><path d="M${x} ${bottomY-1}H${x+w}" stroke="#fff" stroke-opacity=".5"/>`;
 if(casing)content+=`<path d="M133 124Q133 111 148 111H611Q629 111 629 126V164H133Z" fill="var(--frame)"/><path d="M146 159H615" stroke="#9b9b96" stroke-width="2"/>`;
 else content+=`<rect x="151" y="142" width="459" height="27" rx="12" fill="url(#head)"/><rect x="138" y="136" width="17" height="44" rx="3" fill="var(--frame)"/><rect x="607" y="136" width="17" height="44" rx="3" fill="var(--frame)"/>`;
 if(control==='Chain')content+=`<path d="M618 173v260q0 21-12 21q-12 0-12-21V176" fill="none" stroke="#6b6c67" stroke-width="2.5" stroke-dasharray="3 5"/>`;
 if(control==='Twin pull')content+=`<path d="M598 178v244 M613 178v232" stroke="#858780" stroke-width="2"/><circle cx="598" cy="427" r="6" fill="var(--frame)"/><circle cx="613" cy="415" r="6" fill="var(--frame)"/>`;
 if(control==='Spring')content+=`<path d="M${x+w/2} ${bottomY+7}v18" stroke="#646764" stroke-width="2"/><circle cx="${x+w/2}" cy="${bottomY+29}" r="5" fill="#8b8d89"/>`;
 return content;
}
if(p.visual==='daynight'){
 const band=s.position==='Aligned / open'?'0':'32';let out=`<rect x="${x}" y="${top}" width="${w}" height="${bodyH}" fill="${colour}"/>`;
 for(let y0=top;y0<top+bodyH;y0+=70){out+=`<rect x="${x}" y="${y0+20}" width="${w}" height="${Math.min(29,Math.max(0,top+bodyH-y0-20))}" fill="#fff" opacity=".68"/>`;}
 out+=`<g opacity=".32" transform="translate(0 ${band})">`;
 for(let y0=top;y0<top+bodyH;y0+=70){out+=`<rect x="${x}" y="${y0+20}" width="${w}" height="28" fill="${dark}"/>`;}
 out+=`</g><rect x="151" y="146" width="459" height="29" rx="13" fill="url(#head)"/><rect x="151" y="${top+bodyH}" width="459" height="9" fill="var(--frame)"/>`;
 return out;
}
if(p.visual==='pleated'){
 let start, end;const avail=bottom-157;const h= Math.max(85,Math.round(avail*cover/100));
 if(s.position==='Top down') {start=157;end=start+h}
 else if(s.position==='Top down / Bottom up') {start=Math.round(157+(avail-h)*.49);end=start+h}
 else {end=bottom;start=end-h}
 const gap=s.build==='45 mm honeycomb'?20:s.build==='25 mm honeycomb'?12:10;
 let out=`<rect x="${x}" y="${start}" width="${w}" height="${end-start}" fill="url(#fabric)"/>`;
 for(let yy=start+gap;yy<end;yy+=gap){out+=`<path d="M${x} ${yy}H${x+w}" stroke="${dark}" stroke-width="2" opacity=".36"/><path d="M${x} ${yy+2}H${x+w}" stroke="#fff" stroke-width="1.5" opacity=".55"/>`}
 if(s.build!=='20 mm pleated')out+=`<rect x="${x}" y="${start}" width="${w}" height="${end-start}" fill="url(#weave)" opacity=".55"/>`;
 out+=`<rect x="${x-3}" y="${start-7}" width="${w+6}" height="11" fill="var(--frame)"/><rect x="${x-3}" y="${end-4}" width="${w+6}" height="11" fill="var(--frame)"/>`;
 if(s.control==='Cordlock')out+=`<path d="M602 159V420" fill="none" stroke="var(--frame)" stroke-width="2.5" stroke-dasharray="5 4"/>`;
 if(s.control==='Cordless')out+=`<rect x="370" y="${end-1}" width="25" height="14" rx="4" fill="var(--frame)"/>`;
 return out;
}
if(p.visual==='venetian'){
 const n=Math.round(19*cover/100);const yStep=22.5;const tilt=Math.abs(Number(s.tilt)); const slatH=Math.round(3+tilt/90*14); let out='<rect x="153" y="152" width="454" height="18" fill="var(--frame)"/>';
 for(let i=0;i<n;i++){let yy=187+i*yStep;out+=`<rect x="153" y="${yy}" width="454" height="${slatH}" rx="${Math.min(slatH/2,4)}" fill="url(#fabric)" stroke="${dark}" stroke-width="1"/><rect x="153" y="${yy}" width="454" height="${slatH}" fill="url(#grain)"/>`;}
 out+=`<path d="M210 166V${187+n*yStep} M548 166V${187+n*yStep}" stroke="${dark}" stroke-width="2" opacity=".43"/>`;
 return out;
}
if(p.visual==='screen')return `<rect x="153" y="127" width="454" height="505" fill="${colour}" fill-opacity=".19"/><rect x="153" y="127" width="454" height="505" fill="url(#meshpat)"/><rect x="151" y="125" width="458" height="509" stroke="var(--frame)" stroke-width="8" fill="none"/>`;
return `<rect x="155" y="165" width="450" height="438" fill="${colour}" opacity=".18"/><g stroke="var(--fabric-dark)" stroke-width="7">${Array.from({length:11},(_,i)=>`<path d="M157 ${210+i*34}H606"/>`).join('')}</g>`;
}
function componentSVG(s,p){
 const m=byId(s.material)||M[0];
 const labels={roller:['Bracket','Tube & drive','Fabric surface','Bottom bar'],pleated:['Top profile','Folded fabric','Bottom profile','Operating concept'],venetian:['Headrail','Wood slats','Ladder / lift','Lower rail'],daynight:['Roller & drive','Front fabric','Rear fabric','Bottom rail'],screen:['Frame','Fine mesh','Guide','Opening detail'],exterior:['Facade bracket','Shading element','Guide','Fixed detail']};
 const kind=p.visual==='roller'?'roller':p.visual==='pleated'?'pleated':p.visual==='venetian'?'venetian':p.visual==='daynight'?'daynight':p.visual;
 const title=labels[kind]||labels.roller;
 const lab=(x,y,num,t)=>`<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="11" font-weight="650" letter-spacing="1.2" fill="#32484d">${num} / ${t.toUpperCase()}</text>`;
 let shapes='';
 if(kind==='roller'||kind==='daynight'){
  shapes=`<g filter="url(#none)"><rect x="208" y="224" width="347" height="54" rx="24" fill="url(#head)"/><rect x="181" y="220" width="26" height="61" rx="5" fill="var(--frame)"/><rect x="559" y="220" width="26" height="61" rx="5" fill="var(--frame)"/>`;
  shapes+=`<rect x="214" y="307" width="338" height="232" fill="url(#fabric)"/><rect x="214" y="307" width="338" height="232" fill="url(#weave)"/><rect x="205" y="575" width="354" height="17" rx="5" fill="var(--frame)"/>`;
  if(s.control==='Chain')shapes+=`<path d="M560 288v185q0 35-14 35t-14-35V288" fill="none" stroke="#8e9291" stroke-width="3" stroke-dasharray="5 6"/>`;
  else shapes+=`<rect x="570" y="226" width="28" height="33" rx="4" fill="#d0d4d4" stroke="#7e8585"/>`;
  shapes+='</g>';
 }else if(kind==='pleated'){
  shapes=`<rect x="205" y="197" width="353" height="17" fill="var(--frame)"/><rect x="205" y="579" width="353" height="17" fill="var(--frame)"/>`;
  shapes+=`<path d="M213 268 ${Array.from({length:15},(_,i)=>`L ${i%2?214:550} ${279+i*17}`).join(' ')} L 550 537" fill="none" stroke="var(--fabric)" stroke-width="12"/>`;
  shapes+=`<rect x="210" y="253" width="350" height="294" fill="url(#fabric)" opacity=".13"/><path d="M386 548V577" stroke="#556d75" stroke-width="5"/>`;
 }else if(kind==='venetian'){
  shapes=`<rect x="192" y="201" width="376" height="29" rx="4" fill="var(--frame)"/>`;
  for(let i=0;i<9;i++){let yy=292+i*31;shapes+=`<rect x="208" y="${yy}" width="346" height="16" rx="4" fill="url(#fabric)" stroke="var(--fabric-dark)"/><rect x="208" y="${yy}" width="346" height="16" fill="url(#grain)"/>`}
  shapes+=`<path d="M250 250V566 M510 250V566" stroke="#727570" stroke-width="2" opacity=".7"/><rect x="202" y="581" width="356" height="19" fill="var(--frame)"/>`;
 }else{
  shapes=`<rect x="205" y="210" width="346" height="335" fill="none" stroke="var(--frame)" stroke-width="16"/><rect x="222" y="230" width="310" height="295" fill="url(#meshpat)"/>`;
 }
 return `<svg class="system-svg" viewBox="0 0 760 740" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Component study for ${esc(p.title)}" style="--fabric:${m.colour};--fabric-dark:${m.dark};--frame:${frame(s.frame).hex}">${defs()}<rect width="760" height="740" fill="#ecece6"/><path d="M80 125H680 M80 644H680" stroke="#c4cdc6" stroke-width="1.5"/>${lab(50,64,'SAC','construction reference')}${lab(555,64,'02','components')}${shapes}${lab(84,186,'01',title[0])}${lab(470,189,'02',title[1])}${lab(84,620,'03',title[2])}${lab(470,620,'04',title[3])}<text x="380" y="690" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" fill="#5f6f6c">SCHEMATIC ARRANGEMENT / NOT TO SCALE OR MANUFACTURING SPECIFICATION</text></svg>`;
}
function makeSVG(s,p,expanded=false){if(s.view==='components')return componentSVG(s,p);let m=byId(s.material)||M[0],fr=frame(s.frame||'white');const main=`${defs()}${baseScene(s.view)}<g clip-path="url(#windowclip)">${layerParts(s,p)}</g><text x="38" y="49" class="svg-label">S.A.C. / CONSTRUCTION STUDY</text><text x="723" y="49" text-anchor="end" class="svg-label">${p.family.toUpperCase()} · REFERENCE</text>`;
return `<svg class="system-svg" viewBox="0 0 760 740" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative ${esc(p.title)} with ${esc(m.name)} material and ${esc(s.control||'reference')} control" style="--fabric:${m.colour};--fabric-dark:${m.dark};--frame:${fr.hex}">${main}</svg>`}
const categoryFamilies={
 'Roller textiles':['roller'],
 'Pleated & cellular':['pleated','honeycomb'],
 'Wood & slats':['venetian'],
 'Mesh':['screen'],
 'Profiles & finishes':['exterior']};
function materialBrowse(){const mount=$('#sac-material-root');if(!mount)return;let family=params.get('family')||'All';if(!(family==='All'||categoryFamilies[family]))family='All';let q='';
mount.innerHTML=`<section class="studio-intro"><div class="studio-eyebrow">S.A.C. / MATERIAL ARCHIVE</div><h1>Touch the<br><em>surface.</em></h1><div><p>Material studies, distinct from finished products. Explore a surface on its own, then see the systems it may relate to.</p><a href="collection.html" class="studio-sub-link">Browse products ↗</a></div></section><section class="material-workspace"><div class="studio-tool-header"><div><span class="studio-eyebrow">LIBRARY / REFERENCE SPECIMENS</span><h2>Explore by family.</h2></div><label class="studio-search">Find a material<input id="studio-material-search" type="search" placeholder="Search texture, family, finish..." autocomplete="off"></label></div><div class="studio-filterbar" id="studio-material-filters"></div><p id="material-count" aria-live="polite" class="studio-count"></p><div class="specimen-grid" id="material-grid"></div></section><section class="studio-caution"><strong>About these samples</strong><p>Surface colours are digital exploration studies, not calibrated supplier swatches. Construction types noted from the reference brochure are distinguished from unverified fabric colours, compatibility and stock.</p></section>`;
const filters=$('#studio-material-filters'),list=$('#material-grid');const families=['All',...Object.keys(categoryFamilies)];
function render(){filters.innerHTML=families.map(f=>`<button type="button" class="studio-filter ${f===family?'is-active':''}" data-family="${esc(f)}" aria-pressed="${f===family}">${esc(f)}</button>`).join('');const filtered=M.filter(m=>(family==='All'||m.category===family)&&(`${m.name} ${m.category} ${m.type}`.toLowerCase().includes(q)));
$('#material-count').textContent=`${filtered.length} material studies · Colour accuracy and availability are TBC.`;
list.innerHTML=filtered.map(m=>`<a href="material.html?material=${m.id}" class="specimen-card"><div class="specimen-image is-${m.kind}" style="${materialStyle(m)}"><span class="specimen-index">S.A.C. / MATERIAL STUDY</span></div><div class="specimen-text"><div><strong>${esc(m.name)}</strong><small>${esc(m.type)}</small></div><span aria-hidden="true">↗</span></div></a>`).join('');}
filters.addEventListener('click',e=>{const b=e.target.closest('[data-family]');if(!b)return;family=b.dataset.family;setParams({family:family==='All'?null:family});render()});$('#studio-material-search').addEventListener('input',e=>{q=e.target.value.trim().toLowerCase();render()});render()}
function materialDetail(){const mount=$('#sac-material-detail');if(!mount)return;const m=byId(params.get('material'))||M[0];document.title=m.name+' — S.A.C. Material Study';
mount.innerHTML=`<div class="studio-crumb"><a href="materials.html">Materials archive</a><span> / </span><span>${esc(m.name)}</span></div><div class="material-detail-layout"><div class="material-detail-left"><div class="material-large is-${m.kind}" id="material-zoom-plate" style="${materialStyle(m)}"><span class="material-scale-label">SURFACE / DIGITAL STUDY</span></div><div class="inspect-controls"><span>Surface magnification</span><div class="studio-choice-list" role="group" aria-label="Material zoom">${makeButtons([{id:'1',name:'1×'},{id:'2',name:'2×'},{id:'4',name:'4×'}],'1','zoom')}</div></div></div><div class="material-detail-info"><div class="studio-eyebrow">${esc(m.category)} / MATERIAL STUDY</div><h1>${esc(m.name)}</h1><p class="material-detail-lead">${esc(m.type)}. Study the surface separately from the completed product, then follow it to a compatible reference system.</p><div class="material-fact"><small>Reference status</small><strong>Visual study · not an approved colour</strong></div><div class="material-fact"><small>Source</small><strong>${esc(m.source)}</strong></div><div class="material-fact"><small>Technical notes</small><p>${esc(m.note)}</p></div><h2>Explore with a product</h2><div class="linked-products">${m.product.map(id=>P[id]?`<a href="product.html?system=${id}&material=${m.id}">${esc(P[id].title)} <span>↗</span></a>`:'').join('')}</div><p class="studio-disclaimer">Linking a material study to a system is not evidence of commercial compatibility or SAC availability; this is a design reference only.</p><a class="studio-back" href="materials.html?family=${encodeURIComponent(m.category)}">← Back to material family</a></div></div>`;
mount.addEventListener('click',e=>{const b=e.target.closest('[data-choice-group="zoom"]');if(!b)return;const zoom=Number(b.dataset.choice);$('#material-zoom-plate').style.setProperty('--zoom',zoom);$$('[data-choice-group="zoom"]',mount).forEach(x=>{x.classList.toggle('is-active',x===b);x.setAttribute('aria-pressed',x===b)})});}
function productDetail(){const mount=$('#sac-product-root');if(!mount)return;let slug=params.get('system')||'roller';const p=P[slug]||P.roller;
document.title=`${p.title} — S.A.C. Systems Studio`;const materialId=params.get('material');const chosen=p.materials.includes(materialId)?materialId:p.materials[0];
const s={material:chosen,frame:'white',control:p.visual==='roller'?'Chain':p.visual==='pleated'?'Cordlock':p.visual==='venetian'?'Manual':p.visual==='daynight'?'Chain':'Reference',position:p.visual==='pleated'?'Top down / Bottom up':p.visual==='daynight'?'Aligned / open':'Lowered',build:p.slug==='honeycomb'?'25 mm honeycomb':'20 mm pleated',mount:p.slug==='cassette'?'Semi-open cassette':'Bracket mount',open:72,tilt:45,view:'product'};
let mats=p.materials.map(byId);
mount.innerHTML=`<div class="studio-crumb"><a href="collection.html">Collection</a><span> / </span><span>${esc(p.family)}</span><span> / </span><span>${esc(p.title)}</span></div><header class="product-head"><div><div class="studio-eyebrow">S.A.C. / ${esc(p.family)} SYSTEM REFERENCE</div><h1>${esc(p.title)}</h1></div><div class="studio-status">SOURCE-BASED OPTIONS<br><strong>VISUAL STUDY · TBC</strong></div></header><div class="studio-experience"><div class="studio-stage-col"><div class="studio-stage"><div class="studio-stage-meta"><div class="studio-view-tabs" role="group" aria-label="System viewer mode"><button type="button" class="is-active" data-choice-group="view" data-choice="product" aria-pressed="true">Product</button><button type="button" data-choice-group="view" data-choice="components" aria-pressed="false">Components</button></div><span id="studio-view-mode">SURFACE & ASSEMBLY</span></div><div id="studio-render" class="studio-svg-box"></div><div class="studio-stage-foot"><button type="button" id="studio-inspect" class="studio-inspect-button">Inspect detail <span>↗</span></button><span>Technical illustration · not to scale</span></div></div><div class="studio-study-pair"><figure><img src="${p.room}" alt="Architectural context image — not the configured product" loading="lazy"><figcaption>Architectural context / visual reference</figcaption></figure><figure><img src="${p.gallery}" alt="Reference product material, unchanged by the controls" loading="lazy"><figcaption>Original reference view / finish may differ</figcaption></figure></div></div><aside class="studio-config"><div class="studio-eyebrow">DESIGN EXPLORER / ${esc(p.title)}</div><h2>Explore the system.</h2><p class="studio-lead">${esc(p.description)}</p><div id="config-fields"></div><div class="studio-spec-sheet"><div class="studio-eyebrow">LIVE SELECTION</div><dl id="studio-spec-list"></dl></div><div class="studio-linked"><div class="studio-eyebrow">MATERIAL CROSS-REFERENCE</div><p id="studio-material-sentence"></p><a id="studio-material-link" class="studio-sub-link" href="materials.html">Inspect this material ↗</a></div><p class="studio-disclaimer">${esc(p.source)}. Construction and operating families come from the supplied reference catalogue; displayed colours, scale, and unverified combinations are not production approval.</p><a class="studio-cta" href="contact.html">Request specifications <span>↗</span></a></aside></div><section class="studio-technical"><div><div class="studio-eyebrow">02 / ENGINEERING NOTES</div><h2>Understand what changes.</h2></div><div class="studio-notes">${p.details.map(d=>`<p>${esc(d)}</p>`).join('')}</div></section><dialog id="studio-inspect-modal" class="studio-dialog"><div class="studio-dialog-top"><span>FULL INSPECT / ${esc(p.title)}</span><button type="button" id="close-studio-inspect" aria-label="Close inspection">Close ✕</button></div><div class="studio-dialog-controls" role="group" aria-label="Inspect zoom"><button type="button" data-zoom="1" class="is-active">100%</button><button type="button" data-zoom="1.5">150%</button><button type="button" data-zoom="2">200%</button></div><div id="studio-inspect-drawing" class="studio-dialog-art"></div><p>Illustrative schematic · not a CAD or certified manufacturing drawing.</p></dialog>`;
function choices(title,subtitle,group,opts,current){return `<div class="studio-field"><div class="studio-field-title"><h3>${title}</h3>${subtitle?`<small>${subtitle}</small>`:''}</div><div class="studio-choice-list" role="group" aria-label="${title}">${makeButtons(opts,current,group)}</div></div>`}
function updateOptions(){if(p.visual==='pleated'){
 // Exact source restrictions: 45 mm cellular is listed under cordless only; tensioned shows TDBU only.
 if(s.build==='45 mm honeycomb'&&s.control!=='Cordless')s.control='Cordless';
 if(s.control!=='Cordless'&&s.build==='45 mm honeycomb')s.build='25 mm honeycomb';
 if(s.control==='Tensioned')s.position='Top down / Bottom up';
 if(s.control!=='Tensioned'&&!['Top down','Top down / Bottom up'].includes(s.position))s.position='Top down';
 if(s.control==='Tensioned'&&s.build==='45 mm honeycomb')s.build='25 mm honeycomb';
 if(byId(s.material)?.type.includes('45 mm')&&s.build!=='45 mm honeycomb')s.material=p.materials.includes('cell-ivory')?'cell-ivory':s.material;
 }
}
function renderFields(){updateOptions();const fields=$('#config-fields');let parts=[];
if(p.visual==='roller'){
 parts.push(choices('01 / Operating mechanism','Reference options — PDF p. 7','control',['Chain','Spring','Twin pull','Electric'],s.control));
 parts.push(choices('02 / Head construction','Reference mounting family — PDF p. 6','mount',['Bracket mount','Semi-open cassette'],s.mount));
}
if(p.visual==='pleated'){
 let controls=['Tensioned','Cordlock','Cordless'];let builds=s.control==='Cordless'?['20 mm pleated','25 mm honeycomb','45 mm honeycomb']:['20 mm pleated','25 mm honeycomb'];let positions=s.control==='Tensioned'?['Top down / Bottom up']:['Top down','Top down / Bottom up'];
 parts.push(choices('01 / Operating family','Independent documented variants — PDF pp. 63–79','control',controls,s.control));
 parts.push(choices('02 / Fabric construction','45 mm cellular appears under cordless — PDF p. 79','build',builds,s.build));
 parts.push(choices('03 / Opening configuration','The full blind moves, not the photo','position',positions,s.position));
}
if(p.visual==='venetian'){
 parts.push(choices('01 / Operating family','Wood Venetian reference — PDF p. 90','control',['Manual','Twin pull','Electric'],s.control));
 parts.push(`<div class="studio-field"><div class="studio-field-title"><h3>02 / Slat tilt</h3><small>Explore daylight with an illustrative angle</small></div><div class="studio-range"><input id="range-tilt" type="range" min="0" max="90" step="5" value="${s.tilt}" aria-label="Slat tilt angle"><output id="tilt-out">${s.tilt}°</output></div></div>`);
}
if(p.visual==='daynight'){
 parts.push(choices('01 / Stripe alignment','Relative fabric bands move','position',['Aligned / open','Staggered / private'],s.position));
 parts.push(choices('02 / Operating reference','Product brochure, PDF pp. 46–59','control',['Chain','Electric'],s.control));
}
if(['roller','pleated','venetian','daynight'].includes(p.visual)){
 parts.push(`<div class="studio-field"><div class="studio-field-title"><h3>${p.visual==='venetian'?'03':'04'} / Coverage</h3><small>Changes the product only</small></div><div class="studio-range"><input id="range-open" type="range" min="20" max="100" step="5" value="${s.open}" aria-label="Blind coverage"><output id="open-out">${s.open}%</output></div></div>`);
}
if(p.visual==='roller'||p.visual==='pleated'){
 const opts=p.visual==='pleated'?frameColors.filter(x=>x.id!=='offwhite'):frameColors.filter(x=>x.id!=='sand');
 parts.push(`<div class="studio-field"><div class="studio-field-title"><h3>Frame / hardware finish</h3><small>System colour family from brochure; preview shades illustrative</small></div><div class="swatch-choice-list" role="group" aria-label="Frame finish">${opts.map(x=>`<button type="button" class="swatch-choice ${s.frame===x.id?'is-active':''}" data-choice-group="frame" data-choice="${x.id}" aria-pressed="${s.frame===x.id}" aria-label="Frame ${x.name}"><span class="frame-swatch" style="background:${x.hex}"></span></button>`).join('')}</div><p class="studio-field-caption">${esc(frame(s.frame).name)} hardware finish / separate from textile.</p></div>`);
}
parts.push(`<div class="studio-field"><div class="studio-field-title"><h3>Material surface</h3><small>${p.visual==='venetian'?'Wood and bamboo reference families':'Illustrative samples — actual fabric range TBC'}</small></div><div class="swatch-choice-list" role="group" aria-label="Material samples">${swatches(mats,s.material,'material')}</div><p class="studio-field-caption" id="current-material-label">${esc(byId(s.material).name)}</p><a class="studio-sub-link" href="materials.html">Open full materials archive ↗</a></div>`);
if(!['roller','pleated','venetian','daynight'].includes(p.visual))parts.unshift(`<p class="studio-hold">System controls are on hold until technical options are confirmed. No simulated configuration has been invented for this product.</p>`);
fields.innerHTML=parts.join('');
}
function renderDrawing(){const svg=makeSVG(s,p);$('#studio-render').innerHTML=svg;$('#studio-inspect-drawing').innerHTML=svg;$('#studio-view-mode').textContent=s.view==='components'?'COMPONENT STUDY':(byId(s.material)?.name.toUpperCase()||'SURFACE STUDY');$$('[data-choice-group="view"]',mount).forEach(x=>{x.classList.toggle('is-active',x.dataset.choice===s.view);x.setAttribute('aria-pressed',x.dataset.choice===s.view)});$('#studio-spec-list').innerHTML=specs(s,p).map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');$('#studio-material-sentence').textContent=byId(s.material)?.name+' · '+byId(s.material)?.type;$('#studio-material-link').href='material.html?material='+s.material;}
function render(){renderFields();renderDrawing();setParams({material:s.material})}
mount.addEventListener('click',e=>{const b=e.target.closest('[data-choice-group]');if(!b)return;let group=b.dataset.choiceGroup,value=b.dataset.choice;
if(group==='material'){
 s.material=value;
 if(p.visual==='pleated'){
 let t=byId(value).type;
 if(t.includes('45 mm')){s.control='Cordless';s.build='45 mm honeycomb'}else if(t.includes('25 mm'))s.build='25 mm honeycomb';else s.build='20 mm pleated';
 }
}else if(group==='build'){
 s.build=value;
 const relevant=p.materials.filter(id=>{const m=byId(id);return value==='20 mm pleated'?m.type.includes('20 mm'):value==='45 mm honeycomb'?m.type.includes('45 mm'):m.type.includes('25 mm')});
 if(!relevant.includes(s.material))s.material=relevant[0]||s.material;
 if(value==='45 mm honeycomb')s.control='Cordless';
}else if(group==='control'){s.control=value; if(value==='Tensioned')s.position='Top down / Bottom up';if(value!=='Cordless'&&s.build==='45 mm honeycomb'){s.build='25 mm honeycomb';s.material='cell-ivory';}}
else s[group]=value;
 render()});
mount.addEventListener('input',e=>{if(e.target.id==='range-open'){s.open=Number(e.target.value);$('#open-out').value=s.open+'%';renderDrawing()};if(e.target.id==='range-tilt'){s.tilt=Number(e.target.value);$('#tilt-out').value=s.tilt+'°';renderDrawing()}});
const dlg=$('#studio-inspect-modal');$('#studio-inspect').addEventListener('click',()=>dlg.showModal());$('#close-studio-inspect').addEventListener('click',()=>dlg.close());dlg.addEventListener('click',e=>{const b=e.target.closest('[data-zoom]');if(!b)return;const z=Number(b.dataset.zoom);$('#studio-inspect-drawing').style.setProperty('--inspect-scale',z);$$('[data-zoom]',dlg).forEach(x=>{x.classList.toggle('is-active',x===b);x.setAttribute('aria-pressed',x===b)})});dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});render();}
materialBrowse();materialDetail();productDetail();
})();
