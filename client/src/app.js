const Deck = require('./models/deck.js')
const BoardView = require('./views/board_view.js');
const FormView = require('./views/form_view.js');
const InfoView = require('./views/info_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded',()=>{
  console.log('Hiya');
  //inside app.js we have to figure out how to get prettyCardObject

  //cardContainer comes from the html - we need to add that.
  //new BoardView

  //deck.cards so now yuu have to iterate to access a card
  //with each card you will create a cardView
    //this will create several CardViews
  //  new CardView (cardContainer, prettyCardObject)

//at the start of the game you get a input from user, you get a number.
//you pass this number here.

const deck = new Deck();
deck.bindEvents();

const form = document.querySelector('form#games-form');
const formView = new FormView(form);
formView.setupEventListeners();

const infoViewContainer = document.querySelector('#game-parameters-container');
const infoView = new InfoView();
infoView.readInput();

const resultViewContainer = document.querySelector('#result-view-container');
const resultView = new ResultView();
resultView.bindEvents();



    //updates number of cards based on user input
    // deck.updateNumberOfCards(#)
    //returns the highest number
    //deck.highestNumber
    //PubSub.publishes  cdskhvsdfigsdfkj




//
// on addEventListener -- user wants highest number
    //
    // deck.updateHighestNumber(userInput);
    // deck.generateCards();
    //
    // //on addEventListener -- user wants number of cards
    //
    // deck.updateNumberOfCards(userInput);
    // deck.generateCards();

const boardViewContainer = document.querySelector('#board-view-container');


const boardView = new BoardView(boardViewContainer);
boardView.bindEvents();








});
