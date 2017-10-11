var tablero = [[null, null, null], [null, null, null], [null, null, null]];

// Jugador x
//tablero[0][0] = 'X';
// tablero[1][1] = 'X';
// tablero[2][2] = 'X';

// Jugador o
// tablero[0][1] = 'O';
// tablero[0][2] = 'O';
// tablero[2][0] = 'O';

leerTablero(tablero);

function assignX(posX,poxY){
    tablero[posX][poxY]='X';
    leerTablero(tablero);
}

function leerTablero(tablero) {
    if (tablero[0][0] == tablero[0][1] && tablero[0][1] == tablero[0][2] && tablero[0][0] != null) {
        console.log("3 en raya para el jugador " + tablero[0][0]);
    } else {
        if (tablero[0][0] == tablero[1][0] && tablero[1][0] == tablero[2][0] && tablero[0][0] != null) {
            console.log("3 en raya para el jugador " + tablero[0][0]);
        } else {
            if (tablero[0][1] == tablero[1][1] && tablero[1][1] == tablero[2][1] && tablero[0][1] != null) {
                console.log("3 en raya para el jugador " + tablero[0][1]);
            } else {
                if (tablero[0][2] == tablero[1][2] && tablero[1][2] == tablero[2][2] && tablero[0][2] != null) {
                    console.log("3 en raya para el jugador " + tablero[0][2]);
                } else {
                    if (tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2] && tablero[0][0] != null) {
                        console.log("3 en raya para el jugador " + tablero[0][0]);
                    } else {
                        if (tablero[0][2] == tablero[1][2] && tablero[1][2] == tablero[2][0] && tablero[0][2] != null) {
                            console.log("3 en raya para el jugador " + tablero[0][2]);
                        } else {
                            if (tablero[1][0] == tablero[1][1] && tablero[1][1] == tablero[1][2] && tablero[1][0] != null) {
                                console.log("3 en raya para el jugador " + tablero[1][0]);
                            } else {
                                if (tablero[2][0] == tablero[2][1] && tablero[2][1] == tablero[2][2] && tablero[2][0] != null) {
                                    console.log("3 en raya para el jugador " + tablero[2][0]);
                                } else {
                                    console.log("sigue jugando")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}