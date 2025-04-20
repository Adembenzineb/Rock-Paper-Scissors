
//initalising scores and rounds
let Computer_score = 0;
let Player_score = 0;
let round = 0;

document.getElementById("rounds").innerHTML = `Round ${round}`;

let p = 0;
let r = 0;
let s = 0;

const imagePaths = {
    choisesImgs: {
      1: '/imgs/rock.png',
      2: '/imgs/paper.png', 
      3: '/imgs/scissors.png',
    }
}

// Picks a random number for the choise of the computer
function Computer_choise_number(){
    let max = 3;
    let min = 1;
    let Comp_choise_n = Math.trunc(Math.random()*(max-min+1)+min);
    return Comp_choise_n
}


//translating the random numbers into a choise (Rock/Paper/Scissors)
function Computer_choise(){
    let choise = "";
    let n = Computer_choise_number();
    Compchoise(n);
    if (n === 1){
        choise = "rock"
    }else if (n === 2){
        choise = "paper"
    }else{
        choise = "scissors"
    }
    return choise
}


// Displays the computer choise on the screen
function Compchoise(n){
    const choiseImg = document.querySelector('#chImg')
    choiseImg.src = imagePaths.choisesImgs[n]
}

//**these functions(rock/paper/scissors) are just to know the player's choise

function paper(){
    p += 1 ;
    playGround();
    console.log("the play ground function is running")
    
}

function rock(){ r += 1 ;
    playGround();
    console.log("the play ground function is running")
}

function scissors(){ s += 1 ;
    playGround();
    console.log("the play ground function is running")
}


//translating the player's choise
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


// Compares player and computer choices to determine the winner.
function win(){
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
    console.log(`the winner is ${res}`)
    return res
}

//Adding score for the winner and initialising the choises 
function playGround(){
    
    let winner = win() ;

    if (winner == "computer"){
        Computer_score ++;
    }else if (winner == "player"){
        Player_score ++;
    }else{
        Computer_score += 0.5;
        Player_score += 0.5;
    }

    round ++;
    document.getElementById("rounds").innerHTML = `Round ${round}`;
    document.getElementById("C_SC").innerHTML = `${Computer_score}`;
    document.getElementById("player-score").innerHTML = `${Player_score}`;

    p = 0;
    r = 0;
    s = 0;
}    


