console.log('importing modules');

import Game, {
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as saveGame
} from './game.js';

const game = new Game();
game.start();
