
// Global matrix where every position represents a box
var panel = [[null, null, null], [null, null, null], [null, null, null]];

// X is displayed in the box in the position x and y
function playPlayer(e, posX, poxY) {
    panel[posX][poxY] = 'X';
    e.target.innerText = 'X';
    if (readPanel('X')===false && anyBoxNotFilled()){
        playComputer();
    }
}

// O is displayed in a random position
function playComputer() {
    let x;
    let y;
    do {
        x = getRandomInt(0,3);
        y = getRandomInt(0,3);
    } while (panel[x][y] !== null)
    
    const divPC = 'div_' + x + y;
    panel[x][y] = 'O';
    readPanel('O');

    document.getElementById(divPC).innerText = 'O';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function readPanel(player) {
    if (panel[0][0] !== null && panel[0][0] === panel[0][1] && panel[0][1] === panel[0][2]) {
        return displayInlineWiner(player);
    } else if (panel[0][0] !== null && panel[0][0] === panel[1][0] && panel[1][0] === panel[2][0]) {
        return displayInlineWiner(player);
    } else if (panel[0][1] !== null && panel[0][1] === panel[1][1] && panel[1][1] === panel[2][1]) {
        return displayInlineWiner(player);
    } else if (panel[0][2] !== null && panel[0][2] === panel[1][2] && panel[1][2] === panel[2][2]) {
        return displayInlineWiner(player);
    } else if (panel[0][0] !== null && panel[0][0] === panel[1][1] && panel[1][1] === panel[2][2]) {
        return displayInlineWiner(player);
    } else if (panel[0][2] !== null && panel[0][2] === panel[1][2] && panel[1][2] === panel[2][0]) {
        return displayInlineWiner(player);
    } else if (panel[1][0] !== null && panel[1][0] === panel[1][1] && panel[1][1] === panel[1][2]) {
        return displayInlineWiner(player);
    } else if (panel[2][0] !== null && panel[2][0] === panel[2][1] && panel[2][1] === panel[2][2]) {
        return displayInlineWiner(player);
    } else {
        return false;
    }
}

function displayInlineWiner(player) {
    document.getElementById('winner').innerText = 'Player: ' + player + ' wins.';
    console.log("Winner: " + player);
}

function anyBoxNotFilled(){
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            const element = panel[i][j];
            if (element === null){
                return true;
            }
        }       
    }
    return false;
}