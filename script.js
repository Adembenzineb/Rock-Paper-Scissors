
let Computer_score = 0;
let Player_score = 0;
let round = 0

function Computer_choise_number(){
    let max = 3;
    let min = 1;
    let Comp_choise_n = Math.trunc(Math.random()*(max-min+1)+min);
    return Comp_choise_n
}

function Computer_choise(){
    let choise = "";
    let n = Computer_choise_number();
    if (n === 1){
        choise = "rock"
    }else if (n === 2){
        choise = "paper"
    }else{
        choise = "scissors"
    }
    return choise
}


let p = 0
function paper(){ p += 1 ;playGround();}

let r = 0
function rock(){ r += 1 ;playGround();}

let s = 0
function scissors(){ s += 1 ;playGround();}

function Player_choise(p,r,s){
    let choise = ""
    if(p === 1){
        choise = "paper"
    }else if(r === 1){
        choise = "rock"
    }else{
        choise = "scissors"
    }
    return choise
}

function winner(){
    let computer = Computer_choise();
    let player = Player_choise(p,r,s);

    let res = "";
    if (computer == player){
        res = "draw"
    }else if (computer == "paper" && player == "rock") {
        res = "computer"
    }else if (computer == "rock" && player == "scissors") {
        res = "computer"
    }else if (computer == "scissors" && player == "paper") {
        res = "computer"
    }else{
        res = "player"
    }
    return res
}

function playGround(){
    if (p > 0 | r > 0 | s > 0){
        let winner = winner() ;

        if (winner == "computer"){
            Computer_score ++;
        }else if (winner == "player"){
            Player_score ++;
        }else{
            Computer_score += 0.5;
            Player_score += 0.5;
        }

        round ++;

        p = 0;
        r = 0;
        s = 0;
    }
}
