let stopbtn=document.getElementById("button1");
let readybtn=document.getElementById("button2");
let gobtn=document.getElementById("button3");

let circlecard1=document.getElementById("circle1");
let circlecard2=document.getElementById("circle2");
let circlecard3=document.getElementById("circle3");



function buttonStop(){
    stopbtn.style.backgroundColor= "#cf1124";
    circlecard1.style.backgroundColor="#cf1124";

   readybtn.style.backgroundColor="#1f1d41";
   circlecard2.style.backgroundColor="#4b5069";

   gobtn.style.backgroundColor="#1f1d41";
   circlecard3.style.backgroundColor="#4b5069";

}



function buttonReady(){
    stopbtn.style.backgroundColor="#1f1d41";
    circlecard1.style.backgroundColor="#4b5069";
 
    readybtn.style.backgroundColor="#f7c948";
    circlecard2.style.backgroundColor="#f7c948";
 
    gobtn.style.backgroundColor="#1f1d41";
    circlecard3.style.backgroundColor="#4b5069";
 
 }



 function buttonGo(){
    stopbtn.style.backgroundColor="#1f1d41";
    circlecard1.style.backgroundColor="#4b5069";
 
    readybtn.style.backgroundColor="#1f1d41";
    circlecard2.style.backgroundColor="#4b5069";
 
    gobtn.style.backgroundColor="#199473";
    circlecard3.style.backgroundColor="#199473";
 
 }