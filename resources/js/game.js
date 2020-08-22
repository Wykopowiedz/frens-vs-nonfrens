/*
* @authors: { koliedzy: [@programista4k, @JamnikWallenrod, @grubypajonk, @mniejniz0, @doee, @tomash-pl, @vizori ] }
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


// backend --------------------------------------------------------
function game() {

    var sleepMillis = 5000

    setCurrentEnemy(randomEnemy())

    console.log("currentEnemy")
    console.log(currentEnemy)

    console.log("You got " + sleepMillis + " millis to choose a fren.")
    console.log("currentFren")
    console.log(currentFren)

    let fight = () => {
        console.log("currentFren")
        console.log(currentFren)

        isVictory = isVictory(currentFren, currentEnemy)
        console.log("isVictory")
        console.log(isVictory)
    }
    setTimeout(fight, sleepMillis);
}

function randomEnemy() {
    const enemySize = Object.keys(enemiesArr).length;
    const id = Math.floor(Math.random() * enemySize);
    return enemiesArr[id];
}

function isVictory(fren, enemy) {
    return fren.power + enemy.power == 0;
}

function setCurrentEnemy(enemy)  {
    hoverCroop(enemy)
    this.currentEnemy = enemy
}

function setCurrentFren(fren)  {
    hoverCroop(enemy)
    this.currentFren = fren
}

function hoverCroop(elem) {
    //elem:hover
}


game()