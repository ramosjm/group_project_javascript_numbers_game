const PubSub = require('../helpers/pub_sub.js');
const Card = require('./card.js');


const Deck = function () {
  this.cards = [];
  this.highestNumber = null;
  this.numberOfCards = null;

};

Deck.prototype.bindEvents = function(){
  PubSub.subscribe('InfoView:game-parameters-input', (evt) => {
    const inputtedNum = evt.detail;

    this.numberOfCards = inputtedNum;
    this.calculateHighestNumber();

    let highestNumberParameter = this.highestNumber -1;

    if (this.numberOfCards > 4) {
      highestNumberParameter = (Math.floor((this.highestNumber) / 10) * 10);
    }
    else if (this.numberOfCards <=4 && this.numberOfCards >= 2) {
      highestNumberParameter -= 1;
    };
    PubSub.publish('Deck:game-parameters', highestNumberParameter);
  });

  PubSub.subscribe('FormView:sumbit',(evt)=>{
    this.updateNumberOfCards(evt.detail);
    this.generateCards();
  });
  PubSub.subscribe('BoardView:answer-ready', (evt) => {
    this.cards = evt.detail;
    const guessedNumber = this.calculateGuessedNumber();
    PubSub.publish('Deck:result-submitted', guessedNumber);
  })
};


//resposible for getting the highestNumber OR number of cards.
//**number will come from app.js
Deck.prototype.updateHighestNumber =function (number){
  this.highestNumber = number;
  this.checkChangedAttribute();
};

//updateNumberOfCards(number) **number will come from app.js
// assign number to this.numberOfCards
//checkChangedAttribute()

Deck.prototype.updateNumberOfCards = function (number) {
  this.numberOfCards = number;
  this.checkChangedAttribute();
};

// checkChangedAttribute
  // if this.highestNumber is not null then run fn calculateNumberOfCards
  // else run fn calculateHighestNumber
Deck.prototype.checkChangedAttribute = function () {
  if (this.highestNumber !== null) {
    this.calculateNumberOfCards()
  }
  else {
    this.calculateHighestNumber();
  };
};

Deck.prototype.calculateNumberOfCards = function(){
  const base2 = Math.log2(this.highestNumber);
  const numberOfCards = Math.ceil(base2);
  this.numberOfCards = numberOfCards;
};




 //This fn power number of cards to a base 2 and sets the highest number.
Deck.prototype.calculateHighestNumber = function () {
  const highestNumber = 2**this.numberOfCards;
  this.highestNumber = highestNumber;
};

//generateCards - create a card and push it into this.cards based on this.numberOfCards // ***this will be called from App.js

Deck.prototype.generateCards = function(){
  for (let iteration = 0; iteration < this.numberOfCards; iteration ++){
    const card = new Card(iteration, this.numberOfCards);
    card.createCard();
    this.cards.push(card);
  };
  PubSub.publish('Deck:card-data-Ready',this.cards);

};



// use this.cards - loop through each card
// if card.containsGuessedNumber is true sum the first element of the array of each card.
// publish total sum.
//*** this will come from app.js

Deck.prototype.calculateGuessedNumber = function () {
  let guessedNumber = null;

  for(i = 0; i < this.cards.length; i++) {
    if (this.cards[i].containsNumber) {
      guessedNumber += this.cards[i].cardNumbers[0]
    }
  }
  return guessedNumber;
};

module.exports = Deck;
