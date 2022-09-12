import Game, {
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as saveGame
} from './game.js';

const game = new Game();

game.start();

// import * as gameData from './game.js';
// console.log(gameData.default, gameData.GameSavingData);

// import('./game.js').then(function(moduleData) { console.log(module.Data) })