(function(){
  // Helper: encode strings
  function _encode(str){return btoa(unescape(encodeURIComponent(str)));}

  // Overlay warning system
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
    overlay.style.fontSize="24px";
    overlay.style.zIndex="999999";
    overlay.style.display="flex";
    overlay.style.alignItems="center";
    overlay.style.justifyContent="center";
    overlay.innerText = msg;
    document.body.appendChild(overlay);
  }

  // Secret element + Shadow DOM watermark (hidden)
  const secretElement = document.getElementById("secret-element");
  if(secretElement){
    const shadowRoot = secretElement.attachShadow({mode:"closed"});
    // Invisible watermark: not visible to users, hidden from DevTools
    shadowRoot.innerHTML = "<span style='display:none'></span>";
  }

  // MutationObserver
  const observer = new MutationObserver(() => {
    showWarning("Hack detected. Page locked!");
    setTimeout(()=>window.location.reload(),1500);
  });
  observer.observe(document.body, { childList:true, subtree:true });

  // Block copy, select all, save
  document.addEventListener("keydown", e => {
    if((e.ctrlKey||e.metaKey)&&["c","a","s"].includes(e.key.toLowerCase())) e.preventDefault();
  });

  // Secret image (optional)
  const img = new Image();
  img.src = "your_secret_image.png"; // ensure file exists
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width; canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img,0,0);
    ctx.getImageData(0,0,img.width,img.height);
  };

  // Debugger trap
  setInterval(()=>{
    const start=performance.now();debugger;const end=performance.now();
    if(end-start>100){showWarning("Inspection not allowed!");}
  },1000);

  // Disable console
  (function(){const noop=()=>{};["log","warn","error","clear"].forEach(fn=>window.console[fn]=noop);})();

  // DevTools property trap
  const tracker=new Image();
  Object.defineProperty(tracker,"id",{get:function(){
    showWarning("DevTools detected!");
    throw new Error("DevTools detected.");
  }});
  setInterval(()=>console.log(tracker),2000);

  // Prevent selection & dragging
  document.addEventListener("selectstart",e=>e.preventDefault());
  document.addEventListener("dragstart",e=>e.preventDefault());

  // Protect function source
  (function(fn){fn.toString=()=> "function () { [native code] }";})(function(){});

  // Console overload (slowed down)
  setInterval(()=>{
    const bomb=[];
    for(let i=0;i<5;i++){bomb.push({data:new Array(10000).fill("💀 BLOCKING WEBPAGE INSPECTION 💀")});}
    console.log(bomb);
  },5000);

  // Disable right-click & shortcuts
  document.addEventListener("contextmenu",e=>e.preventDefault());
  document.addEventListener("keydown",e=>{
    if(e.key==="F12"||((e.ctrlKey||e.metaKey)&&e.shiftKey&&["i","j"].includes(e.key.toLowerCase()))||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="u")) e.preventDefault();
  });

  // Constant console clearing
  setInterval(()=>console.clear(),2000);

  // DevTools detection via window size
  function detectDevTools(){
    const threshold=160;
    if(window.outerWidth-window.innerWidth>threshold||window.outerHeight-window.innerHeight>threshold){
      showWarning("Access Denied: Close DevTools");
      setTimeout(()=>window.location.reload(),1500);
    }
  }
  window.addEventListener("resize",detectDevTools);
  detectDevTools();

  // Infinite debugger loop
  setInterval(()=>{(function(){return!1}["constructor"]("debugger")["call"]())},2000);
})();
