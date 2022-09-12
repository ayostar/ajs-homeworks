import Character from './domain.js';

console.log('Character imported')

class Game {
    start() {
      console.log('game started');
    }
  }
  
class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export {
  Game as default,
  GameSavingData,
  readGameSaving,
  writeGameSaving
}

console.log('Game exported')
