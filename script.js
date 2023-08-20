
document.querySelectorAll(".key")[0].addEventListener("click", clickedA);
document.querySelectorAll(".key")[1].addEventListener("click", clickedB);
document.querySelectorAll(".key")[2].addEventListener("click", clickedC);
document.querySelectorAll(".key")[3].addEventListener("click", clickedD);
document.querySelectorAll(".key")[4].addEventListener("click", clickedE);
document.querySelectorAll(".key")[5].addEventListener("click", clickedF);
document.querySelectorAll(".key")[6].addEventListener("click", clickedG);

document.querySelectorAll(".song")[0].addEventListener("click", jingleBells);
document.querySelectorAll(".song")[1].addEventListener("click", Mary);


function pause(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


var audioA = new Audio("sounds/piano_A_trimmed.mp3");
var audioB = new Audio("sounds/piano_B_trimmed.mp3");
var audioC = new Audio("sounds/piano_C_trimmed.mp3");
var audioD = new Audio("sounds/piano_D_trimmed.mp3");
var audioE = new Audio("sounds/piano_E_trimmed.mp3");
var audioF = new Audio("sounds/piano_F_trimmed.mp3");
var audioG = new Audio("sounds/piano_G_trimmed.mp3");

async function Mary(){
    audioE.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioC.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(800);
    audioD.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioD.play();
    await pause(800);
    audioE.play();
    await pause(400);
    audioG.play();
    await pause(400);
    audioG.play();
    await pause(800);
    audioE.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioC.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(800);
    audioD.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioC.play();
    await pause(400);

}async function jingleBells(){
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(800);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(800);
    audioE.play();
    await pause(400);
    audioG.play();
    await pause(400);
    audioC.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioE.play();
    await pause(1200);
    audioF.play();
    await pause(400);
    audioF.play();
    await pause(400);
    audioF.play();
    await pause(400);
    audioF.play();
    await pause(400);
    audioF.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioD.play();
    await pause(800);
    audioG.play();
    await pause(800);

    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(800);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(800);
    audioE.play();
    await pause(400);
    audioG.play();
    await pause(400);
    audioC.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioE.play();
    await pause(1200);
    audioF.play();
    await pause(400);
    audioF.play();
    await pause(400);
    audioF.play();
    await pause(400);
    audioF.play();
    await pause(400);
    audioF.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioE.play();
    await pause(400);
    audioG.play();
    await pause(400);
    audioG.play();
    await pause(400);
    audioF.play();
    await pause(400);
    audioD.play();
    await pause(400);
    audioC.play();
}

document.addEventListener("keypress", function(e){
    if(e.key==='a') audioA.play();
    if(e.key==='b') audioB.play();
    if(e.key==='c') audioC.play();
    if(e.key==='d') audioD.play();
    if(e.key==='e') audioE.play();
    if(e.key==='f') audioF.play();
    if(e.key==='g') audioG.play();
});

function clickedA(){
    audioA.play();
}function clickedB(){
    audioB.play();
}function clickedC(){
    audioC.play();
}function clickedD(){
    audioD.play();
}function clickedE(){
    audioE.play();
}function clickedF(){
    audioF.play();
}function clickedG(){
    audioG.play();
}