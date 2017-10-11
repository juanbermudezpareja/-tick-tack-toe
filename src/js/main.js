var tablero = [[null, null, null], [null, null, null], [null, null, null]];

leerTablero(tablero);

function assignX(e, posX, poxY) {
    tablero[posX][poxY] = 'X';
    e.target.innerText = 'X';
    if (leerTablero(tablero, 'X')===false){
        juegaPC();
    }
}

function juegaPC() {
    let x;
    let y;
    do {
        x = getRandomInt(0,3);
        y = getRandomInt(0,3);
    } while (tablero[x][y] !== null)
    
    const divPC = 'div_' + x + y;
    tablero[x][y] = 'O';
    leerTablero(tablero, 'O');

    document.getElementById(divPC).innerText = 'O';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function leerTablero(tablero, jugador) {
    if (tablero[0][0] != null && tablero[0][0] == tablero[0][1] && tablero[0][1] == tablero[0][2]) {
        return displayInlineWiner(jugador);
    } else if (tablero[0][0] != null && tablero[0][0] == tablero[1][0] && tablero[1][0] == tablero[2][0]) {
        return displayInlineWiner(jugador);
    } else if (tablero[0][1] != null && tablero[0][1] == tablero[1][1] && tablero[1][1] == tablero[2][1]) {
        return displayInlineWiner(jugador);
    } else if (tablero[0][2] != null && tablero[0][2] == tablero[1][2] && tablero[1][2] == tablero[2][2]) {
        return displayInlineWiner(jugador);
    } else if (tablero[0][0] != null && tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2]) {
        return displayInlineWiner(jugador);
    } else if (tablero[0][2] != null && tablero[0][2] == tablero[1][2] && tablero[1][2] == tablero[2][0]) {
        return displayInlineWiner(jugador);
    } else if (tablero[1][0] != null && tablero[1][0] == tablero[1][1] && tablero[1][1] == tablero[1][2]) {
        return displayInlineWiner(jugador);
    } else if (tablero[2][0] != null && tablero[2][0] == tablero[2][1] && tablero[2][1] == tablero[2][2]) {
        return displayInlineWiner(jugador);
    } else {
        return false;
    }
}

function displayInlineWiner(player) {
    const winer = 'win' + player;
    document.getElementById(winer).style.display = 'inline';
    console.log("3 en raya para el jugador " + player);
}

function anyBoxNotFilled(){
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var element = tablero[i][j];
            if (element === null){
                return true;
            }
        }       
    }
    return false;
}