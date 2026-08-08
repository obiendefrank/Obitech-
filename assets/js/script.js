(function(){
  // Show warning overlay (non-destructive)
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
    overlay.style.background="rgba(0,0,0,0.9)";
    overlay.style.color="red";
    overlay.style.fontSize="20px";
    overlay.style.zIndex="999999";
    overlay.style.display="flex";
    overlay.style.alignItems="center";
    overlay.style.justifyContent="center";
    overlay.innerText = msg;
    document.body.appendChild(overlay);
  }

  // Block right-click
  document.addEventListener("contextmenu", e => e.preventDefault());

  // Block common inspection shortcuts
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
  setInterval(()=>console.clear(), 3000);
})();
