/* SAC — LIGHT, ENGINEERED. Independent creative concept, no external libraries. */
const $=(s,p=document)=>p.querySelector(s),$$=(s,p=document)=>[...p.querySelectorAll(s)];
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header=$('.site-header'); const meter=$('.scroll-meter span'); const mobileButton=$('.menu-toggle');
const frame={scroll:0,target:0,queued:false};
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
function handleScroll(){
  const sy=window.scrollY; frame.target=sy;
  if(header){header.classList.toggle('is-solid',sy>30); if(!header.classList.contains('is-overlay'))header.classList.add('is-solid');}
  if(meter)meter.style.width=`${100*sy/Math.max(1,document.documentElement.scrollHeight-innerHeight)}%`;
  if(!frame.queued){frame.queued=true;requestAnimationFrame(tick)}
}
function tick(){frame.scroll+=((frame.target-frame.scroll)*(reduceMotion?1:.14)); const scroll=frame.scroll;

const stage=$('.scene-study');
if(stage){
  const box=stage.getBoundingClientRect();
  const travel=Math.max(stage.offsetHeight-innerHeight,1);
  const p=clamp((scroll-(box.top+window.scrollY))/travel);
  const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a));return t*t*(3-2*t)};
  const studio=smooth(.23,.64,p), model=smooth(.37,.68,p), detail=smooth(.72,.94,p);
  stage.style.setProperty('--story-p',p.toFixed(4));
  stage.style.setProperty('--studio-reveal',studio.toFixed(4));
  stage.style.setProperty('--model-enter',model.toFixed(4));
  stage.style.setProperty('--surface-reveal',detail.toFixed(4));
  stage.style.setProperty('--arch-move',smooth(.20,.80,p).toFixed(4));
  stage.style.setProperty('--arch-scale',(1.02+.20*smooth(.05,.78,p)).toFixed(4));
  stage.style.setProperty('--light-shift',smooth(.08,.71,p).toFixed(4));
  stage.style.setProperty('--sketch-enter',smooth(.68,.89,p).toFixed(4));
  const visibility=[Math.max(0,1-smooth(.20,.42,p)),smooth(.28,.47,p)*(1-smooth(.59,.77,p)),smooth(.66,.85,p)];
  $$('.scene-narrative',stage).forEach((el,i)=>el.style.setProperty('--visible',visibility[i].toFixed(4)));
  const number=$('.scene-index',stage);if(number)number.textContent=p>.69?'03':p>.33?'02':'01';
}
 if(Math.abs(frame.target-frame.scroll)>0.35){requestAnimationFrame(tick)}else{frame.scroll=frame.target;frame.queued=false;}
}
addEventListener('scroll',handleScroll,{passive:true}); addEventListener('resize',handleScroll,{passive:true});
if(mobileButton){mobileButton.addEventListener('click',()=>{const nav=$('#site-nav'), open=!nav.classList.contains('is-open');nav.classList.toggle('is-open',open);mobileButton.setAttribute('aria-expanded',String(open));mobileButton.textContent=open?'Close':'Menu';document.body.classList.toggle('menu-open',open)});$$('#site-nav a').forEach(a=>a.addEventListener('click',()=>{if($('#site-nav').classList.contains('is-open'))mobileButton.click()}));}
const hero=$('.hero'); if(hero){requestAnimationFrame(()=>setTimeout(()=>hero.classList.add('is-arrived'),190));
 if(!reduceMotion){const img=$('.hero-bg img',hero);let mx=0,my=0,cx=0,cy=0;hero.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;mx=(e.clientX/innerWidth-.5)*-14;my=(e.clientY/innerHeight-.5)*-8}); const move=()=>{cx+=(mx-cx)*.035;cy+=(my-cy)*.035; if(img){img.style.setProperty('--hero-x',cx.toFixed(2)+'px');img.style.setProperty('--hero-y',cy.toFixed(2)+'px')}if(document.visibilityState==='visible')requestAnimationFrame(move)};requestAnimationFrame(move)}
}
const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');ob.unobserve(e.target)}}),{rootMargin:'0px 0px -10% 0px',threshold:.03});$$('.reveal').forEach(el=>ob.observe(el));
const systemRows=$$('.system-row'); if(systemRows.length){systemRows.forEach(row=>{row.addEventListener('click',()=>{let id=row.dataset.system;systemRows.forEach(r=>{let a=r===row;r.classList.toggle('is-active',a);r.setAttribute('aria-pressed',a)});$$('.system-visual img').forEach(im=>im.classList.toggle('is-active',im.dataset.system===id));$('.system-vis-meta strong').textContent=row.dataset.title;$('.system-vis-meta .system-num').textContent=row.dataset.number;$('.system-cta').href='collection.html?filter='+encodeURIComponent(row.dataset.filter);$('.system-aside-title').textContent=row.dataset.statement;$('.system-aside-text').textContent=row.dataset.description;})});}
// Material rail: native horizontal scrolling + local wheel and mouse drag.
const rail=$('.material-rail');
if(rail){
  const prev=$('.rail-controls [data-direction="prev"]'), next=$('.rail-controls [data-direction="next"]');
  const max=()=>Math.max(0,rail.scrollWidth-rail.clientWidth);
  const sync=()=>{if(prev)prev.disabled=rail.scrollLeft<=1;if(next)next.disabled=rail.scrollLeft>=max()-1;};
  const step=()=>{const cards=$$('.sample',rail);return cards.length>1?cards[1].offsetLeft-cards[0].offsetLeft:rail.clientWidth;};
  const shift=dir=>rail.scrollBy({left:dir*step(),behavior:reduceMotion?'instant':'smooth'});
  prev?.addEventListener('click',()=>shift(-1));next?.addEventListener('click',()=>shift(1));
  rail.addEventListener('scroll',sync,{passive:true});
  if('ResizeObserver' in window)new ResizeObserver(sync).observe(rail);else addEventListener('resize',sync);
  // Consume a vertical wheel gesture only over this rail and only when it can move.
  // Horizontal trackpad scrolling uses the browser's native handling.
  rail.addEventListener('wheel',e=>{
    if(e.ctrlKey||e.defaultPrevented||Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.deltaY===0)return;
    const unit=e.deltaMode===1?16:e.deltaMode===2?rail.clientWidth:1;
    const delta=e.deltaY*unit;const old=rail.scrollLeft;const end=max();
    if((delta>0&&old>=end-1)||(delta<0&&old<=1)||end<=1)return;
    e.preventDefault();rail.scrollLeft=Math.min(end,Math.max(0,old+delta));
  },{passive:false});
  let gesture=null,suppressUntil=0;
  rail.addEventListener('dragstart',e=>e.preventDefault());
  rail.addEventListener('pointerdown',e=>{
    if(e.pointerType==='touch'||e.button!==0||!e.isPrimary)return;
    suppressUntil=0;gesture={id:e.pointerId,x:e.clientX,left:rail.scrollLeft,drag:false};
  });
  rail.addEventListener('pointermove',e=>{
    if(!gesture||gesture.id!==e.pointerId)return;
    if(!(e.buttons&1)){finish(e);return;}
    const dx=e.clientX-gesture.x;
    if(!gesture.drag&&Math.abs(dx)<7)return;
    if(!gesture.drag){gesture.drag=true;rail.classList.add('is-grabbing');rail.setPointerCapture(e.pointerId);}
    e.preventDefault();rail.scrollLeft=gesture.left-dx;
  });
  function finish(e){
    if(!gesture||gesture.id!==e.pointerId)return;
    const {id,drag}=gesture;gesture=null;rail.classList.remove('is-grabbing');
    if(drag)suppressUntil=performance.now()+350;
    if(rail.hasPointerCapture(id))rail.releasePointerCapture(id);
  }
  addEventListener('pointerup',finish);addEventListener('pointercancel',finish);rail.addEventListener('lostpointercapture',finish);
  rail.addEventListener('click',e=>{if(e.detail!==0&&performance.now()<suppressUntil){e.preventDefault();e.stopPropagation();suppressUntil=0;}},true);
  rail.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();shift(e.key==='ArrowRight'?1:-1);}else if(e.key==='Home'||e.key==='End'){e.preventDefault();rail.scrollTo({left:e.key==='End'?max():0,behavior:reduceMotion?'instant':'smooth'});}});
  sync();
}
const film=$('.film-wrap video'); if(film){const control=$('.film-caption button');control?.addEventListener('click',()=>{if(film.paused){film.play().catch(()=>{});control.textContent='Ⅱ';control.setAttribute('aria-label','Pause film')}else{film.pause();control.textContent='▶';control.setAttribute('aria-label','Play film')}});
const videoObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&& !reduceMotion)film.play().catch(()=>{});else film.pause()}),{threshold:.12});videoObserver.observe(film);}
const diagram=$('.engineering-diagram');if(diagram){const toggle=$('.diagram-toggle');toggle.addEventListener('click',()=>{const a=diagram.classList.toggle('is-exploded');toggle.innerHTML=a?'Assemble components <span>−</span>':'Explore components <span>+</span>';toggle.setAttribute('aria-pressed',a)})}
const PRODUCT_DATA=[
 {id:'roller',title:'Roller blind',category:'Roller',kind:'Fabric & control',image:'product-roller.webp',photo:'photo-roller-room.webp',description:'A clean fabric plane, guided by a considered tube and control assembly.',options:['Chain control','Spring control','Motorised — reference'],features:['Continuous fabric surface','Choice of operating method','Bracket, tube and bottom-bar details']},
 {id:'cassette',title:'Cassette roller',category:'Roller',kind:'Enclosed detail',image:'product-roller.webp',photo:'macro-roller.webp',description:'A more architectural expression of the roller system, with the mechanism housed within a cassette.',options:['Cassette study','Bracket study'],features:['Cassette-led visual architecture','Fabric and bottom-bar coordination','System detail requires specification']},
 {id:'pleated',title:'Pleated blind',category:'Pleated',kind:'Folded fabric',image:'product-pleat.webp',photo:'photo-pleated-room.webp',description:'Crisp, folded fabric introduces rhythm, depth and measured light into a window.',options:['Top down','Bottom up','Top down / Bottom up'],features:['Pleated textile geometry','Various control concepts shown in source catalogue','Dimensions and compatibility to confirm']},
 {id:'honeycomb',title:'Honeycomb blind',category:'Pleated',kind:'Cellular fabric',image:'macro-honeycomb.webp',photo:'photo-pleated-room.webp',description:'Cellular folds add a sculptural structure to a window textile.',options:['Top down','Bottom up','Top down / Bottom up'],features:['Cellular textile study','Reference fabric types: 25 mm and 45 mm','Not a confirmed SAC fabrication range']},
 {id:'venetian',title:'Venetian blind',category:'Venetian',kind:'Adjustable slats',image:'product-venetian.webp',photo:'photo-venetian-room.webp',description:'Individual slats modulate light through orientation, spacing and surface.',options:['Slat tilt','Raise / lower'],features:['Slat geometry and finish','Mechanical tilting controls','Final sizes and compatibility require verification']},
 {id:'day-night',title:'Day & Night',category:'Roller',kind:'Layered textile',image:'product-daynight.webp',photo:'photo-daynight-room.webp',description:'Alternating woven bands form changing levels of openness and privacy.',options:['Stripe alignment','Open / Closed study'],features:['Alternating transparent and opaque bands','Fabric alignment determines effect','Illustrative visual reference']},
 {id:'screen',title:'Insect screen',category:'Screens',kind:'Opening protection',image:'screen-detail.webp',photo:'courtyard.webp',description:'Fine mesh and a disciplined frame form a discreet boundary between inside and outside.',options:['Fixed — study','Opening — study'],features:['Mesh transparency','Frame and guide geometry','Installed opening must be verified']},
 {id:'exterior',title:'Exterior shading',category:'Exterior',kind:'Facade systems',image:'facade-detail.webp',photo:'facade.webp',description:'An external shading layer becomes part of the architecture and its response to daylight.',options:['Facade installation study'],features:['Exterior exposure considerations','Orientation and fixing conditions','Not a declared approved SKU']},
];
function drawCatalog(){const mount=$('#catalog-grid');if(!mount)return;const search=$('#catalog-search'),meta=$('#catalog-count');let cat='All';const requested=new URLSearchParams(location.search).get('filter');if(requested){const button=$(`.filter-list [data-filter="${CSS.escape(requested)}"]`);if(button)cat=requested;}
function render(){const q=(search?.value||'').toLowerCase().trim();$$('.filter-list button').forEach(b=>{const active=b.dataset.filter===cat;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',active)});const items=PRODUCT_DATA.filter(p=>(cat==='All'||p.category===cat)&&(!q||[p.title,p.kind,p.category,p.description].join(' ').toLowerCase().includes(q))); mount.innerHTML=items.map(p=>`<a class="catalog-item" href="product.html?system=${encodeURIComponent(p.id)}"><div class="photo"><img loading="lazy" src="assets/${p.image}" alt="${p.title} — concept reference"><small>${p.category}</small></div><div class="details"><div><h3>${p.title}</h3><p>${p.kind}</p></div><span class="arrow" aria-hidden="true">↗</span></div></a>`).join('')||'<p>No references match. Try a different search or category.</p>';meta.textContent=`${items.length} references shown · Catalogue concept, subject to range approval.`;}
$$('.filter-list button').forEach(b=>b.addEventListener('click',()=>{cat=b.dataset.filter;render()}));search?.addEventListener('input',render);render();}
drawCatalog();
function drawProduct(){const mount=$('#product-view');if(!mount)return;const id=new URLSearchParams(location.search).get('system')||'roller';const p=PRODUCT_DATA.find(x=>x.id===id)||PRODUCT_DATA[0];document.title=`${p.title} — S.A.C. Assembly`;$('#product-breadcrumb').textContent=p.title;
mount.innerHTML=`<div class="product-visual" id="product-visual" data-tone="ivory"><img src="assets/${p.image}" alt="${p.title} reference view"><span class="preview-stamp">Visual study / not a production specification</span></div><div class="product-info"><div class="section-label">${p.category} / ${p.kind}</div><h1>${p.title}</h1><p>${p.description}</p><div class="product-feature"><h2>Material colour study</h2><div class="color-dots" role="group" aria-label="Illustrative colour preview"><button class="is-active" data-tone="ivory" style="--swatch:#e5e0d1" aria-label="Ivory" aria-pressed="true"></button><button data-tone="taupe" style="--swatch:#a59c8d" aria-label="Taupe" aria-pressed="false"></button><button data-tone="warm" style="--swatch:#b96d46" aria-label="Copper" aria-pressed="false"></button><button data-tone="blue" style="--swatch:#4d6680" aria-label="Slate blue" aria-pressed="false"></button><button data-tone="charcoal" style="--swatch:#343b3e" aria-label="Charcoal" aria-pressed="false"></button></div><div class="tone-caption" id="tone-caption">Ivory — digital colour demonstration only</div></div><div class="product-feature"><h2>Control and configuration references</h2><div class="mode-tabs" role="group">${p.options.map((m,i)=>`<button data-mode="${i===0?'top-down':i===1?'bottom-up':'top-down-bottom-up'}" class="${i===0?'is-active':''}" aria-pressed="${i===0}">${m}</button>`).join('')}</div>${(p.id==='pleated'||p.id==='honeycomb')?'<div class="mode-visual" id="mode-visual" data-mode="top-down" aria-label="Illustrative opening diagram"><div class="window-box"></div><div class="shade-fill"></div></div>':'<p class="small-note" style="padding:18px 0">Operation references are listed for discussion; no mechanical simulation is presented for this system.</p>'}<p class="small-note">Illustrative reference only; it does not prove this configuration is available for the selected SAC system.</p></div><div class="product-feature"><h2>Technical considerations</h2><ul>${p.features.map(x=>`<li>${x}</li>`).join('')}</ul></div><p class="small-note">Source basis: GH M2M Catalogue 2026 and SAC study media. Original catalogue variants are references, not approved SAC codes, colours or specifications.</p><a href="contact.html" class="text-arrow">Discuss a system <span>↗</span></a></div>`;
$$('.color-dots button',mount).forEach(b=>b.addEventListener('click',()=>{const tone=b.dataset.tone;$('#product-visual').dataset.tone=tone;$$('.color-dots button',mount).forEach(z=>{z.classList.toggle('is-active',z===b);z.setAttribute('aria-pressed',z===b)});$('#tone-caption').textContent=b.getAttribute('aria-label')+' — digital colour demonstration only'}));$$('.mode-tabs button',mount).forEach(b=>b.addEventListener('click',()=>{const mode=b.dataset.mode;if($('#mode-visual'))$('#mode-visual').dataset.mode=mode;$$('.mode-tabs button',mount).forEach(z=>{z.classList.toggle('is-active',z===b);z.setAttribute('aria-pressed',z===b)})}));}
drawProduct();
const form=$('#enquiry-form');form?.addEventListener('submit',async e=>{e.preventDefault();const data=new FormData(form);const message=`SAC enquiry concept\nCompany/name: ${data.get('name')}\nEmail: ${data.get('email')}\nInterest: ${data.get('interest')}\nMessage: ${data.get('message')}\n\nThis is a draft from the local preview; it has not been sent.`;const feedback=$('#enquiry-feedback');try{await navigator.clipboard.writeText(message);feedback.textContent='Enquiry draft copied. No message has been sent.'}catch{feedback.textContent='This local preview has no mail backend. Please use an official SAC contact channel to send the request.'}});
handleScroll();
