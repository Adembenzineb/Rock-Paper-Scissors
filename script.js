
let Computer_score = 0;
let Player_score = 0;

function Computer_choise(){
    let max = 3;
    let min = 1;
    let Comp_choise = Math.trunc(Math.random()*(max-min+1)+min);
    console.log(Comp_choise)
    return Comp_choise
}
let p = 0
function paper(){ p += 1}

let r = 0
function rock(){ r += 1}

let s = 0
function scissors(){ s += 1}


