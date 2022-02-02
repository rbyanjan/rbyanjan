//The compiler will automatically compile player.ts when it compiles app.ts
//Using triple-slash directives are much nicer way to manage dependencies in your TypeScript projects than just compiling and shipping everything.
/*
/// <reference path="player.ts" />
/// <reference path="game.ts" />
*/

import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility'

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    //player.name = Utility.getInputValue('playername');
    player.name = Helpers.getValue('playername');

    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});

/*
function startGame() {
    //starting the game

    //let playerName: string = 'Rajen';
    let playerName: string | undefined = Utility.getInputValue('playername');
    logPlayer(playerName);

    //var messagesElement: HTMLElement | string;

    //if(typeof messagesElement === 'string') {
    //    return messagesElement;
    //}
    //else {
    //    return messagesElement;
    //}

    //let messagesElement = document.getElementById('messages');

    //messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
    //! asserting object is not null

    postScore(80, playerName);
    postScore(-5, playerName);
}

//Enabling noImplicitAny compier option will alert you missing type annotation in the function
function logPlayer(name: string = 'MultiMath Player'): void {
    //using Default value also makes the paramter optional
    console.log(`New game starting for player: ${name}`);
    //template string
}

//function postScore(score: number, playerName?: string): void {
    // ? = making the parameter optional
function postScore(score: number, playerName: string = 'MultiMath Player'): void {
    //TypeScript function have type of their own
    //declaring varaible with function type. This logger variable now can be assigned with function that takes a single parameter and returns void
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
    // asserting that posted scores element won't be null

    logger(`score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

//const logMessage = function (message: string): void {
//    console.log(message);
//}

//const logMessage = (message: string): void => console.log(message);
const logMessage = (message: string) => console.log(message);

//logMessage('Welcome to MultiMath!');

function logError(err: string): void {
    console.error(err);
}

//let myResult: Result = {
//    playerName: 'Marie',
//    score: 5,
//    problemCount: 5,
//    factor: 7
//};

//let player: Person = {
//    name: 'Daniel',
//    formatName: () => 'Dan'
//};

// Interface is development time tool. They are used by compiler to type check your code 
// but they don't compile down to anything in JavaScript.

const firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());

// Classes produce real output that must be delivered to the browser for your app to work

// Static members of the class can be accessed without instantiating and by using Class name
// followed by dot and the name of static member

// Constructors -> Special type of function which are executed when new instances of the class are created

*/