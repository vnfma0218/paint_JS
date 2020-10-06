const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

//canvas 의 크기를 css 뿐만 아니라 자체적으로 width, height값을 주어야함.
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
   const x = event.offsetX;
   const y = event.offsetY;
   if(!painting){
    //만약 painting이 false이면(클릭을 하지않은 상태)
    //beginPath() 메서드로 마우스의 좌표를 얻는다.
    //하지만 선이 나오지 않음(stroke()을 통해 라인 만들 수 있음)
       ctx.beginPath();
       ctx.moveTo(x, y);
    //만약 painting이 true이면 stroke을 통해 라인을 생성
   } else{
       ctx.lineTo(x, y);
       ctx.stroke();
   }
    
}

function onMouseDown(event){
    painting = true;
}


function onMouseLeave(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}