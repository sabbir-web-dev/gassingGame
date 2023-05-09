let lose=0;
let win=0;
let attent=0;
let atten=5;


let form = document.querySelector("#form");
let gasNumber = form.querySelector(".gas-input-number");
let button = form.querySelector(".button");

let winM = document.querySelector(".winM")
let rmN = document.querySelector(".rmN")
let attentC = document.querySelector(".attent")
let winC = document.querySelector(".win")
let lost= document.querySelector(".lost")


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    attent++;

    if(attent === 5){
        gasNumber.disabled = true;
        button.disabled =true;
    }if (attent < 6 ){
        attentC.innerHTML=`
        attent. <span style="font-size:26px" >${atten - attent}</span>  
        `
    }

    chackResult(gasNumber)
    gasNumber.value="";
});


function rendomNumber(limit){
   return Math.floor(Math.random()*limit) +1;

}



function chackResult (gasNumber){
    let randomNumber= rendomNumber(5);
    let gassingNumbear = Number(gasNumber.value);

    if(randomNumber === gassingNumbear){
        
        win.innerHTML=`
        You Have. <span style="font-size:26px" >win</span>  
        `
        win++;
    }else{
        lost.innerHTML=`
        You Have. <span style="font-size:26px" >Lost</span>  
        `
        lose++;
    }
    winM.innerHTML=`
    win. <span style="font-size:26px" >${win}</span>  
    `
    lost.innerHTML=`
    lost. <span style="font-size:26px" >${lose}</span>  
    `
    rmN.innerHTML=`
    Random Number Was. <span style="font-size:26px" >${randomNumber}</span>  
    `


}