/*
    @authors: {
        frens: [
            @programista4k,
            @JamnikWallenrod,
            @grubypajonk,
            @mniejniz0,
            @doee,
            @tomash-pl,
            @vizori,
            @tomhet
        ]
    }
*/


// model ----------------------------------------------------------------------
const frens = {
    PAPER:    { type: 'PAPER', power: 1 },
    HAMMER:   { type: 'HAMMER', power: 2 },
    GUN:      { type: 'GUN', power: 3 }
}

const enemies = {
    POLKA:    { type: 'POLKA', power: -1 },
    HONKHONK: { type: 'HONKHONK', power: -2 },
    CHAD:     { type: 'CHAD', power: -3 }
}

const enemiesArr = [enemies.POLKA, enemies.HONKHONK, enemies.CHAD]

const status = {
    READY:    { type: 'READY', msg: 'Ready?', color: 'grey' },
    FIGHT:    { type: 'FIGHT', msg: 'Fight!', color: 'black' },
    LOST:     { type: 'LOST', msg: 'You lose.', color: 'red' },
    VICTORY:  { type: 'VICTORY', msg: 'Win.', color: 'blue' }
}


// var ------------------------------------------------------------------------
var currentEnemy
var currentFren
var currentStatus
var currentScore = 0
var startMsBeforeBattle = 5000
var currentMsBeforeBattle = 5000
var difficultyRate = 0.1


// frontend--------------------------------------------------------------------
const start_btn = document.getElementById("start-game");
const status_span = document.getElementById('status');
const score_span = document.getElementById('user-score');
const paper_div = document.getElementById("paper");
const hammer_div = document.getElementById("hammer");
const gun_div = document.getElementById("gun");

paper_div.addEventListener('click', function() {
    setCurrentFren(frens.PAPER)
    setCurrentStatus(status.FIGHT)
})

hammer_div.addEventListener('click', function() {
    setCurrentFren(frens.HAMMER)
    setCurrentStatus(status.FIGHT)
})

gun_div.addEventListener('click', function() {
    setCurrentFren(frens.GUN)
    setCurrentStatus(status.FIGHT)
})

function hoverElem(elem) {
    //elem:hover
}

function updateFrontStatus() {
    status_span.innerHTML = currentStatus.msg
}

function updateFrontScore() {
    score_span.innerHTML = currentScore
}


// backend --------------------------------------------------------------------
async function game() {
    onStart()
    while(currentStatus != status.LOST) {
        await battle()
    }
    onEnd()
}

function onStart() {
    setCurrentScore(0)
    this.currentMsBeforeBattle = this.startMsBeforeBattle
    setCurrentStatus(status.READY)
}

function onEnd() {

}

async function battle() {
    currentFren = null
    currentMsBeforeBattle = currentMsBeforeBattle - currentMsBeforeBattle * difficultyRate

    setCurrentStatus(status.READY)

    setCurrentEnemy(randomEnemy())
    console.log("currentEnemy: ", currentEnemy)

    console.log("You got " + currentMsBeforeBattle + " millis to choose a fren.")
    await sleep(currentMsBeforeBattle)
    console.log("currentFren: ", currentFren)

    fight()
}

const fight = () => {
    if (isFrenWin(currentFren, currentEnemy)) {
        won()
    } else {
        lost()
    }
}

function won() {
    console.log("Victory!")
    setCurrentScore(++currentScore)
    setCurrentStatus(status.VICTORY)
}

function lost() {
    console.log("Lost.")
    setCurrentStatus(status.LOST)
}

function isFrenWin(fren, enemy) {
    return fren != null && fren.power + enemy.power == 0;
}

function randomEnemy() {
    const enemySize = Object.keys(enemiesArr).length;
    const id = Math.floor(Math.random() * enemySize);
    return enemiesArr[id];
}

function setCurrentFren(fren)  {
    hoverElem(fren)
    this.currentFren = fren
}

function setCurrentEnemy(enemy)  {
    hoverElem(enemy)
    this.currentEnemy = enemy
}

function setCurrentStatus(status) {
    this.currentStatus = status
    updateFrontStatus()
}

function setCurrentScore(score) {
    this.score = score
    score_span.innerHTML = score
    updateFrontScore()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}