(function(){
  function _0x4a2d(_0x1f2b){return btoa(unescape(encodeURIComponent(_0x1f2b)));}
  const _0xabc=document.getElementById("secret-element"),
        _0xdef=_0xabc.attachShadow({mode:"closed"});
  _0xdef.innerHTML="<p>"+decodeURIComponent(escape("This text cannot be easily seen in inspect!"))+"</p>";

  new MutationObserver(function(_0xmut){
    _0xmut.forEach(function(){
      document.body.innerHTML="<h1>"+_0x4a2d("Hack detected. Page locked!")+"</h1>";
      window.location.reload();
    });
  }).observe(document.body,{attributes:!0,childList:!0,characterData:!0,subtree:!0});

  document.addEventListener("keydown",function(_0xev){
    ( (_0xev.ctrlKey||_0xev.metaKey) && ["c","a","s"].includes(_0xev.key.toLowerCase()) ) && _0xev.preventDefault();
  });

  const _0ximg=new Image();
  _0ximg.src="assets/images/20260514_001126.png";
  _0ximg.onload=function(){
    const _0xcan=document.createElement("canvas");
    _0xcan.width=_0ximg.width;_0xcan.height=_0ximg.height;
    const _0xctx=_0xcan.getContext("2d");
    _0xctx.drawImage(_0ximg,0,0);
    _0xctx.getImageData(0,0,_0ximg.width,_0ximg.height);
  };

  setInterval(function(){
    const _0xst=performance.now();debugger;const _0xet=performance.now();
    if(_0xet-_0xst>100){document.body.innerHTML="<h1>"+_0x4a2d("Detected: Inspection not allowed here!")+"</h1>";}
  },500);

  (function(){const _0xnoop=function(){};["log","warn","error","clear"].forEach(fn=>window.console[fn]=_0xnoop);})();

  const _0xtrk=new Image();
  Object.defineProperty(_0xtrk,"id",{get:function(){
    document.body.innerHTML="<h1>"+_0x4a2d("Developer tools detected! Access denied.")+"</h1>";
    throw new Error("DevTools detected.");
  }});
  setInterval(function(){console.log(_0xtrk)},300);

  document.addEventListener("selectstart",e=>e.preventDefault());
  document.addEventListener("dragstart",e=>e.preventDefault());

  (function(fn){fn.toString=function(){return"function () { [native code] }"}})(function(){});

  setInterval(function(){
    const _0xbomb=[];
    for(let i=0;i<50;i++){
      _0xbomb.push({data:new Array(5e4).fill("💀 BLOCKING WEBPAGE INSPECTION 💀"),nested:{moreData:new Array(5e4).fill(!0)}});
    }
    console.log(_0xbomb);
  },200);

  document.addEventListener("contextmenu",e=>e.preventDefault());
  document.addEventListener("keydown",function(e){
    if(e.key==="F12"||((e.ctrlKey||e.metaKey)&&e.shiftKey&&["i","j"].includes(e.key.toLowerCase()))||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="u")) e.preventDefault();
  });

  setInterval(function(){console.clear()},50);

  function _0xdt(){
    const th=160,w=window.outerWidth-window.innerWidth>th,h=window.outerHeight-window.innerHeight>th;
    if(w||h){document.body.innerHTML="<h1>"+_0x4a2d("Access Denied: Please close developer tools to view this site.")+"</h1>";window.location.reload();}
  }
  window.addEventListener("resize",_0xdt);_0xdt();

  setInterval(function(){(function(){return!1}["constructor"]("debugger")["call"]())},100);
})();
