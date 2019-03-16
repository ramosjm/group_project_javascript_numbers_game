const assert = require('assert');
const Deck = require('../models/deck.js');
const Card = require('../models/card.js');

describe('Deck', function() {

  let deck;
  let testDeck;
  let modelDeckTest;

  beforeEach(function() {

    card1 = new Card;
    testDeck = new Deck;

    modelDeckTest =  {cards:[{
      cardNumbers:[1, 3],
      containsNumber: false,
      highestNumber: 3,
      iteration: 0,
      lowestNumber: 1,
      totalNumberOfCards: 2
    },
    {
      cardNumbers:[2,3],
      containsNumber: false,
      highestNumber: 3,
      iteration: 1,
      lowestNumber: 2,
      totalNumberOfCards: 2

    }],
    highestNumber: 3,
    numberOfCards: 2
  };

});


it('should be able to update highest number', function() {
  //updateHighestNumber
  testDeck.updateHighestNumber(10);
  const actual = testDeck.highestNumber;
  const expected = 10;
  assert.strictEqual(actual,expected);
});

it('should be able to update the total number of cards', function() {
  //updateNumberOfCards
  testDeck.updateNumberOfCards(100);
  const actual = testDeck.numberOfCards;
  const expected = 100;
  assert.strictEqual(actual,expected);

});

it('should be able to check if highest number attribute changed', function() {
  //checkChangedAttribute
  testDeck.updateHighestNumber(100);
  testDeck.checkChangedAttribute();
  const actual = testDeck.numberOfCards;
  const expected = 7;
  assert.strictEqual(actual, expected);
});

it('should be able to check if number of cards attribute changed', function() {
  //checkChangedAttribute
  testDeck.updateNumberOfCards(7);
  testDeck.checkChangedAttribute();
  const actual = testDeck.highestNumber;
  const expected = 128;
  assert.strictEqual(actual, expected);
});

it('should be able to calculate number of cards', function() {
  //calculateNumberOfCards
  testDeck.highestNumber = 128
  testDeck.calculateNumberOfCards();
  const actual = testDeck.numberOfCards;
  const expected = 7;
  assert.strictEqual(actual,expected);
});

it('should be able to calculate the highest number', function() {
  //calculateHighestNumber
  testDeck.numberOfCards = 7;
  testDeck.calculateHighestNumber();
  actual = testDeck.highestNumber;
  expected = 128;
  assert.strictEqual(actual, expected);
});

it('should be able to generate cards', function() {
  //generateCards;
  testDeck.numberOfCards = 2;
  testDeck.highestNumber = 3;
  testDeck.generateCards();
  const actual = testDeck;
  const expected = modelDeckTest;
  assert.deepEqual(actual,expected)
})

it('should be able to calculate the guessed number', function() {
  //calculateGuessedNumber

  testDeck.cards = [
    {
      cardNumbers:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,35,37,39,41,43,45,46,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127],
      containsNumber: false
    },
    {
      cardNumbers:[2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63, 66, 67, 70, 71, 74, 75, 78, 79, 82, 83, 86, 87, 90, 91, 94, 95, 98, 99, 102, 103, 106, 107, 110, 111, 114, 115, 118, 119, 122, 123, 126, 127],
      containsNumber: true
    },
    {
      cardNumbers:[4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31,36,37,38,39,44,45,46,47,52,53,54,55,60,61,62,63,68,69,70,71,76,77,78,79,84,85,86,87,92,93,94,95,100,101,102,103,106,107,110,111,114,114,118,119,122,123,126,127],
      containsNumber:true
    }
  ];

  const expected = 6;
  const actual = testDeck.calculateGuessedNumber;
  assert.strictEqual = (actual, expected);
});
})
