/* All motion follows native scroll; no scroll hijacking or new pinned section. */
(()=>{
 const intro=document.querySelector('.story-intro'),scene=document.querySelector('.scene-study'),model=document.querySelector('.scene-model'),feature=document.querySelector('.material-feature-image'),note=document.querySelector('.signature-model-note');
 if(!intro||!scene||!model||!feature)return;
 const mq=matchMedia('(prefers-reduced-motion: reduce)');
 if(mq.matches)return;
 document.body.classList.add('signature-ready');
 const clamp=v=>Math.max(0,Math.min(1,v)),ease=(a,b,x)=>{const t=clamp((x-a)/(b-a));return t*t*(3-2*t)};
 const cloth=document.getElementById('cloth-mask'),edge=document.getElementById('cloth-edge');
 let current=scrollY,target=scrollY,beam=48,beamTarget=48,pointer=null,raf=0,positions={};
 function measure(){positions={intro:intro.getBoundingClientRect().top+scrollY,scene:scene.getBoundingClientRect().top+scrollY,travel:Math.max(1,scene.offsetHeight-innerHeight),feature:feature.getBoundingClientRect().top+scrollY,featureHeight:feature.offsetHeight};}
 function request(){if(!raf)raf=requestAnimationFrame(draw)}
 function draw(){raf=0;current+=(target-current)*.14;const vh=innerHeight;
  const q=clamp((current-positions.intro+vh)/vh);
  const shadow=clamp((current-positions.intro+vh*.8)/(vh+intro.offsetHeight*.3));
  intro.style.setProperty('--shadow-x',`${-13+shadow*25}%`);intro.style.setProperty('--shadow-y',`${-5+shadow*9}%`);
  const a=ease(0,.85,q);const d=`M0 ${180-100*a} C360 ${180-164*a} 780 ${180-27*a} 1440 ${180-131*a}`;
  cloth.setAttribute('d',d+' L1440 180 H0Z');edge.setAttribute('d',d);
  const p=clamp((current-positions.scene)/positions.travel);
  const separation=ease(.46,.64,p)*(1-ease(.72,.86,p));const trace=ease(.75,.95,p);
  scene.style.setProperty('--studio-ink',ease(.32,.65,p).toFixed(3));
  model.style.setProperty('--part-lift',`${-Math.min(innerHeight*.066,56)*separation}px`);model.style.setProperty('--part-x',`${Math.min(innerWidth*.009,14)*separation}px`);model.style.setProperty('--outline',trace.toFixed(4));model.style.setProperty('--photo',(1-.12*trace).toFixed(3));
  const label=p>.89?'Outline study / not to scale':p>.48&&p<.82?'Tube & fabric / visual separation':'Fabric / tube / drive';if(note.textContent!==label)note.textContent=label;
  const t=clamp((current-positions.feature+vh)/(vh+positions.featureHeight));beamTarget=pointer===null?12+76*t:pointer;beam+=(beamTarget-beam)*.12;feature.style.setProperty('--beam',`${beam.toFixed(2)}%`);
  if(Math.abs(target-current)>.3||Math.abs(beamTarget-beam)>.2)request();else current=target;
 }
 function update(){target=scrollY;request()}
 addEventListener('scroll',update,{passive:true});addEventListener('resize',()=>{measure();update()},{passive:true});addEventListener('load',()=>{measure();update()});
 if('ResizeObserver'in window)new ResizeObserver(()=>{measure();update()}).observe(document.querySelector('main'));
 feature.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=feature.getBoundingClientRect();pointer=100*clamp((e.clientX-r.left)/r.width);request()});feature.addEventListener('pointerleave',()=>{pointer=null;request()});
 measure();update();
})();
