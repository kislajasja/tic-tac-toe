const firstPlayer = 'x';
const secondPlayer = 'o';

class TicTacToe {
    constructor() {
        this.currentPlayer = firstPlayer;
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] === null) {
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            if (this.currentPlayer === firstPlayer) {
                this.currentPlayer = secondPlayer;
            } else {
                this.currentPlayer = firstPlayer;
            }
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        let d1xc = 0, d2xc = 0, d1oc = 0, d2oc = 0;
        let rxc = 0, roc = 0, cxc = 0, coc = 0;
        for (let i = 0;  i < 3; i++) {
            if (this.gameField[i][i] === firstPlayer) {
                d1xc++;
            }
            if (this.gameField[i][i] === secondPlayer) {
                d1oc++;
            } 
            if (this.gameField[i][2 - i] === firstPlayer) {
                d2xc++;
            }
            if (this.gameField[i][2 - i] === secondPlayer) {
                d2oc++;
            }
            rxc = 0, roc = 0, cxc = 0, coc = 0;
            for (let j = 0; j < 3; j++) {
                if (this.gameField[i][j] === firstPlayer) {
                    rxc++;
                }
                if (this.gameField[i][j] === secondPlayer) {
                    roc++;
                }
                if (this.gameField[j][i] === firstPlayer) {
                    cxc++;
                }
                if (this.gameField[j][i] === secondPlayer) {
                    coc++;
                }
            }
            if (rxc === 3 || cxc === 3) {
                return firstPlayer;
            }
            if (roc === 3 || coc === 3) {
                return secondPlayer;
            }
        }
        if (d1xc === 3 || d2xc === 3) {
            return firstPlayer;
        }
        if (d1oc === 3 || d2oc === 3) {
            return secondPlayer;
        }
        return null;
    }

    noMoreTurns() {
        return this.gameField.every(r => r.every(c => c));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
