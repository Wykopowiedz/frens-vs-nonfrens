/*
    @authors: {
        koliedzy: [
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


// const -----------------------------------------------------------
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


// var ------------------------------------------------------------
var currentEnemy
var currentFren
var winScore = 0
var isLost = false


// frontend--------------------------------------------------------
const paper_div = document.getElementById("paper");
const hammer_div = document.getElementById("hammer");
const gun_div = document.getElementById("gun");

paper_div.addEventListener('click', function() {
    setCurrentFren(frens.PAPER)
})

hammer_div.addEventListener('click', function() {
    setCurrentFren(frens.HAMMER)
})

gun_div.addEventListener('click', function() {
    setCurrentFren(frens.GUN)
})

function hoverElem(elem) {
    //elem:hover
}


// backend --------------------------------------------------------
function game() {
    while(!isLost) {
        battle()
    }
}

function battle() {
    var sleepMillis = 5000

    setCurrentEnemy(randomEnemy())
    console.log("currentEnemy: ")
    console.log(currentEnemy)

    console.log("You got " + sleepMillis + " millis to choose a fren.")

    setTimeout(fight, sleepMillis);
}

const fight = () => {
    console.log("currentFren: ")
    console.log(currentFren)

    isVictory = isVictory(currentFren, currentEnemy)
    console.log("isVictory: ")
    console.log(isVictory)
    this.isLost = !isVictory
    this.winScore += isVictory
}

function isVictory(fren, enemy) {
    return fren.power + enemy.power == 0;
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


game()