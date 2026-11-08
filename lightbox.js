// rackscape share lightbox: click a shelf photo -> full view with zoom & pan (no libraries)
(function(){
  const lb=document.createElement("div"); lb.className="lb"; lb.setAttribute("aria-hidden","true");
  lb.innerHTML=`<div class="lb-stage"><img class="lb-img" alt=""></div>
    <div class="lb-ui"><button data-a="in" title="拡大">＋</button><button data-a="out" title="縮小">−</button><button data-a="reset" title="リセット">↺</button><button data-a="close" title="閉じる">×</button></div>
    <div class="lb-hint">ホイール / ピンチで拡大縮小 ・ ドラッグで移動 ・ ダブルクリックで拡大切替</div>`;
  document.body.appendChild(lb);
  const stage=lb.querySelector(".lb-stage"), img=lb.querySelector(".lb-img");
  let scale=1,tx=0,ty=0; const MIN=1,MAX=6;
  const apply=()=>{ img.style.transform=`translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${scale})`; };
  const reset=()=>{ scale=1; tx=0; ty=0; apply(); };
  function open(src){ img.src=src; reset(); lb.classList.add("open"); lb.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; }
  function close(){ lb.classList.remove("open"); lb.setAttribute("aria-hidden","true"); document.body.style.overflow=""; }
  document.querySelectorAll(".shelf-head img").forEach(p=>{ p.addEventListener("click",()=>open(p.currentSrc||p.src)); });
  lb.querySelectorAll(".lb-ui button").forEach(b=>b.addEventListener("click",e=>{ e.stopPropagation();
    const a=b.dataset.a; if(a==="close")close(); else if(a==="reset")reset();
    else { scale=Math.min(MAX,Math.max(MIN, scale*(a==="in"?1.3:1/1.3))); if(scale===1){tx=0;ty=0;} apply(); } }));
  stage.addEventListener("wheel",e=>{ e.preventDefault(); const f=e.deltaY<0?1.12:1/1.12;
    scale=Math.min(MAX,Math.max(MIN,scale*f)); if(scale===1){tx=0;ty=0;} apply(); },{passive:false});
  // pointer drag + pinch
  const ptrs=new Map(); let lastDist=0, moved=0;
  let downOnImg=false;
  stage.addEventListener("pointerdown",e=>{ downOnImg=(e.target===img); ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY}); stage.setPointerCapture(e.pointerId); moved=0;
    if(ptrs.size===2){ const [p,q]=[...ptrs.values()]; lastDist=Math.hypot(p.x-q.x,p.y-q.y); } });
  stage.addEventListener("pointermove",e=>{ if(!ptrs.has(e.pointerId))return; const prev=ptrs.get(e.pointerId);
    const dx=e.clientX-prev.x, dy=e.clientY-prev.y; ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(ptrs.size===1 && scale>1){ tx+=dx; ty+=dy; moved+=Math.abs(dx)+Math.abs(dy); apply(); }
    else if(ptrs.size===2){ const [p,q]=[...ptrs.values()]; const d=Math.hypot(p.x-q.x,p.y-q.y);
      if(lastDist>0){ scale=Math.min(MAX,Math.max(MIN,scale*d/lastDist)); apply(); } lastDist=d; moved+=3; } });
  const up=e=>{ ptrs.delete(e.pointerId); if(ptrs.size<2)lastDist=0; };
  stage.addEventListener("pointerup",up); stage.addEventListener("pointercancel",up);
  let lastImgClick=0;
  stage.addEventListener("click",e=>{
    if(downOnImg && moved<4){ const now=Date.now();
      if(now-lastImgClick<320){ scale=(scale>1)?1:2.5; if(scale===1){tx=0;ty=0;} apply(); lastImgClick=0; }
      else lastImgClick=now; return; }
    if(e.target===stage && moved<4) close(); });
  document.addEventListener("keydown",e=>{ if(e.key==="Escape")close(); });
})();
