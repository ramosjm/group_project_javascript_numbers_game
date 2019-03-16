const PubSub = require('../helpers/pub_sub.js');


const Card = function (iteration, totalNumberOfCards) {
  this.cardNumbers = [];
  this.containsNumber = false;
  this.iteration = iteration;
  this.totalNumberOfCards = totalNumberOfCards;
  this.lowestNumber = null;
  this.highestNumber = null;

};

//looping from 1 until the maximum number is reached using the populateNumber fn to decide if a number goes into a card.
Card.prototype.createCard = function(){
  this.getNumberRange();
  for(let currentNumber = 1; currentNumber <= this.highestNumber; currentNumber++){
    const binaryNumber = this.numberToBinary(currentNumber);
    const reverseBinaryString = this.reverseString(binaryNumber);
    this.populateNumber(reverseBinaryString,currentNumber)
  };
};

Card.prototype.getNumberRange = function(){
  lowestNumber = 2** this.iteration;
  highestNumber = 2** this.totalNumberOfCards;
  this.lowestNumber = lowestNumber;
  this.highestNumber = highestNumber -1;
};
// using this.iteration (received from Deck as an iteration value)
// using this.totalNumberOfCards (received from Deck as the total number of cards)
// calculate lowest number based on 2  to the power of this.iteration.
// assign the result to this.lowestNumber
// calculate highest Number based on (2 to the power of this.totalNumberOfCards) -1
// assign the result to this.highestNumber



// this will turn numbers to binary.
Card.prototype.numberToBinary = function(number){
    return (number).toString(2);
};

Card.prototype.reverseString = function(string) {
    return string.split("").reverse().join("");
};

// populateNumber loops through each bit inside a reversed binary string and pushes this into the current card if the bit value = 1 and the index position of this bit matches this.iteration (corresponds to the card number in the deck)
Card.prototype.populateNumber = function(reverseBinaryString,currentNumber){
  let counter = 0;
  for (let bit of reverseBinaryString){
    const index = counter++;
    if (bit ==='1' && index === this.iteration){
        this.cardNumbers.push(currentNumber);
    };
  };
};



//this fn will return an object with card numbers and a key/value pair (containsNumber) to know if the guessed number is or isn't included in the card numbers array.
Card.prototype.prettyCard = function () {
  let pretty = {};
  pretty = {cardNumbers: this.cardNumbers, containsNumber: this.containsNumber};
  return pretty;
};

//updateContainsNumber()
//this fn is called when the guess number is inluded in the card numbers.
//The fn updates this.containsNumber to true.
Card.prototype.updateContainsNumber = function () {
  this.containsNumber = true;
};

module.exports = Card;
