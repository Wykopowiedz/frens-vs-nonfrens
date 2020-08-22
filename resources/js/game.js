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
    READY:    { type: 'READY', msg: 'Ready?'},
    FIGHT:    { type: 'FIGHT', msg: 'Fight!'},
    LOST:     { type: 'LOST', msg: 'You lose.'}
}


// var ------------------------------------------------------------------------
var currentEnemy
var currentFren
var winScore = 0
var status


// frontend--------------------------------------------------------------------
const status_span = document.getElementById('status');
const score_span =
const paper_div = document.getElementById("paper");
const hammer_div = document.getElementById("hammer");
const gun_div = document.getElementById("gun");

paper_div.addEventListener('click', function() {
    setCurrentFren(frens.PAPER)
    setStatus(status.FIGHT)
})

hammer_div.addEventListener('click', function() {
    setCurrentFren(frens.HAMMER)
    setStatus(status.FIGHT)
})

gun_div.addEventListener('click', function() {
    setCurrentFren(frens.GUN)
    setStatus(status.FIGHT)
})

function hoverElem(elem) {
    //elem:hover
}

function upateFrontStatus() {
    status_span.innerHTML = status.msg
}

function updateFrontScore() {
    score_span.innerHTML = winScore
}


// backend --------------------------------------------------------------------
async function game() {
    while(status != status.LOST) {
        await battle()
    }
}

async function battle() {
    var sleepMs = 5000

    setStatus(status.READY)

    setCurrentEnemy(randomEnemy())
    console.log("currentEnemy: ", currentEnemy)

    console.log("You got " + sleepMs + " millis to choose a fren.")

    await sleep(sleepMs)

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
    this.winScore ++
    setScore(winScore)
}

function lost() {
    console.log("Lost.")
    setStatus(status.LOST)
    this.isLost = true
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

function setStatus(status) {
    this.status = status
    updateFrontStatus()
}

function setScore(score) {
    score_span.innerHTML = score
    updateFrontScore()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


game()