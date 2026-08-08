(function(){
  // Overlay warning system (non-destructive)
  function showWarning(msg){
    const old = document.getElementById("warning-overlay");
    if(old) old.remove();

    const overlay = document.createElement("div");
    overlay.id = "warning-overlay";
    overlay.style.position="fixed";
    overlay.style.top=0;
    overlay.style.left=0;
    overlay.style.width="100%";
    overlay.style.height="100%";
    overlay.style.background="rgba(0,0,0,0.95)";
    overlay.style.color="red";
    overlay.style.fontSize="22px";
    overlay.style.zIndex="999999";
    overlay.style.display="flex";
    overlay.style.alignItems="center";
    overlay.style.justifyContent="center";
    overlay.innerText = msg;
    document.body.appendChild(overlay);
  }

  // Block right-click
  document.addEventListener("contextmenu", e => e.preventDefault());

  // Block inspection shortcuts
  document.addEventListener("keydown", e => {
    if(
      e.key === "F12" ||
      ((e.ctrlKey||e.metaKey) && e.key.toLowerCase() === "u") || // Ctrl+U
      ((e.ctrlKey||e.metaKey) && e.shiftKey && ["i","j"].includes(e.key.toLowerCase())) // Ctrl+Shift+I/J
    ){
      e.preventDefault();
      showWarning("Inspection blocked!");
    }
  });

  // Block copy/select/save
  document.addEventListener("keydown", e => {
    if((e.ctrlKey||e.metaKey) && ["c","a","s"].includes(e.key.toLowerCase())){
      e.preventDefault();
    }
  });

  // Prevent text selection & dragging
  document.addEventListener("selectstart", e => e.preventDefault());
  document.addEventListener("dragstart", e => e.preventDefault());

  // Clear console periodically
  setInterval(()=>console.clear(), 2000);

  // Console overload (slowed down to avoid crashes)
  setInterval(()=>{
    const bomb = [];
    for(let i=0;i<3;i++){
      bomb.push(new Array(2000).fill("💀 BLOCKING WEBPAGE INSPECTION 💀"));
    }
    console.log(bomb);
  },4000);

  // DevTools detection via window size
  function detectDevTools(){
    const threshold=160;
    if(window.outerWidth-window.innerWidth>threshold || window.outerHeight-window.innerHeight>threshold){
      showWarning("Access Denied: Close DevTools");
    }
  }
  window.addEventListener("resize", detectDevTools);
  detectDevTools();

  // Debugger trap (non-blocking)
  setInterval(()=>{
    const start=performance.now();debugger;const end=performance.now();
    if(end-start>100){showWarning("Debugger detected!");}
  },2000);

  // Property trap
  const tracker=new Image();
  Object.defineProperty(tracker,"id",{get:function(){
    showWarning("DevTools detected!");
    throw new Error("DevTools detected.");
  }});
  setInterval(()=>console.log(tracker),3000);

})();
