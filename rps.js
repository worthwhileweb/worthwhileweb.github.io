// const prompt = require('prompt-sync')({ sigint: true });

const user = document.getElementById('user')
const comp = document.getElementById('comp')
const divStart = document.getElementById('div--start')
const divRestart = document.getElementById('div--restart')
const divMainGame = document.getElementById('div--maingame')
const draw = document.getElementById('draw')
let scoreU = 0
let scoreC = 0

draw.style.display = "none";

divMainGame.style.display = 'none';
const startGame = () => {
    divStart.style.display = 'none';
    divMainGame.style.display = 'block';
}

const reStartGame = () => {
    scoreC = 0;
    comp.innerText = scoreC;
    scoreU = 0;
    user.innerText = scoreU;
}

const game = (U, C) => {
    if (U == C) {
        console.log('DRAW')
        draw.style.display = 'block';
        setTimeout(()=>draw.style.display = 'none',500)
    }
    else if (U == 'r' && C == 'p') {
        comp.innerText = scoreC++;
    }
    else if (U == 'r' && C == 's') {
        user.innerText = scoreU++;
    }
    else if (U == 'p' && C == 's') {
        comp.innerText = scoreC++;
    }
    else if (U == 'p' && C == 'r') {
        user.innerText = scoreU++;
    }
    else if (U == 's' && C == 'r') {
        comp.innerText = scoreC++;
    }
    else if (U == 's' && C == 'p') {
        user.innerText = scoreU++;
    }
}


let R = ['r', 'p', 's']
const com = () => R[Math.floor(Math.random() * R.length)]

const rock = () => game('r', com())
const paper = () => game('p', com())
const scissors = () => game('s', com())

const start = document.getElementById('startgame').addEventListener('click', startGame)
const restart = document.getElementById('restartgame').addEventListener('click', reStartGame)

const rockId = document.getElementById('rock').addEventListener('click', rock)
const paperId = document.getElementById('paper').addEventListener('click', paper)
const scissorsId = document.getElementById('scissors').addEventListener('click', scissors)