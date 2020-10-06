const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
   const x = event.offsetX;
   const y = event.offsetY;
    
}

function onMouseDown(event){
    painting = true;
}

function onmouseUp(event){
    stopPainting();
}

function onMouseLeave(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onmouseUp);
    canvas.addEventListener("mouseleave" onMouseLeave);
}