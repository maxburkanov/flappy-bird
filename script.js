let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let html = document.querySelector('html')
let jumping = 0;
let counter = 0;
let score = document.querySelector(".score")

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
    score.innerHTML = counter
  });
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 300 + "px";
        counter=0;
    }
},20);

html.addEventListener('keypress', jump)
html.addEventListener('click', jump)

function jump(e){
  // if(e.keyCode === 32) {

    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if((characterTop>6)&&(jumpCount<15)){
      character.style.top = (characterTop-4)+"px";
      }
      if(jumpCount>20){
        clearInterval(jumpInterval);
        jumping=0;
        jumpCount=0;
      }
      jumpCount++;
    },15);
  // }
}