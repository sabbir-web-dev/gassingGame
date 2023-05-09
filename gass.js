

let form = document.querySelector("#form");
let gasNumber =form.querySelector(".gas-input-number");
let button = form.querySelector(".button");

var winM = document.querySelector(".winM");
let rmN  = document.querySelector(".rmN");
let attent = document.querySelector(".attent");


let lost = document.querySelector(".lost");
let win = document.querySelector(".win");


let countL = 0;
let countW = 0;
let attentC = 0;

let totalWin = 0;
let totalLost =0;

let totalAnti = 5;


form.addEventListener("submit", (event) => {

    event.preventDefault();
    attentC++;

    if(attentC === 5){
        button.disabled = true;
        gasNumber.disabled = true;
    }if(attentC < 6){
        attent.innerHTML = `
        Remainng attempts. <span style="font-size:26px" >${
            totalAnti - attentC
         }</span> 
        `
    }

    checkResult(gasNumber)

     gasNumber.value= "";

});

function rendomNumber (limit){
   return Math.floor(Math.random() * limit) +1;
}

function checkResult(gasNumber){
    let randomNumber = rendomNumber(5);
    let gassingNumber=  Number(gasNumber.value);

    if(randomNumber === gassingNumber){
        winM.innerHTML=`You have.  <span style="font-size:22px" > Win </span>`
        totalWin++;
    }else{
        winM.innerHTML=`You have.  <span style="font-size:22px" > Lost </span>`
        rmN.innerHTML =`
        Randon number Was. <span style="font-size:26px" >${ randomNumber}</span>  
        `
        totalLost++;
    }
    win.innerHTML=`
    Win. <span style="font-size:30px"> ${totalWin}</span>
    `
    lost.innerHTML=`
    Lost. <span style="font-size:30px"> ${totalLost}</span>
    `

} 