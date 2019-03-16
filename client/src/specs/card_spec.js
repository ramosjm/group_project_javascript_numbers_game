const assert = require('assert');
const Card = require('../models/card.js');

describe('Card', function() {

  let card1;
  let card2;
  let card3;
  let modelCard;
  let modelCardTest;

  beforeEach(function() {
    modelCard = new Card(1, 7);

    modelCardTest =  {
      cardNumbers:[2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63, 66, 67, 70, 71, 74, 75, 78, 79, 82, 83, 86, 87, 90, 91, 94, 95, 98, 99, 102, 103, 106, 107, 110, 111, 114, 115, 118, 119, 122, 123, 126, 127],
      containsNumber: false,
      iteration: 1,
      totalNumberOfCards: 7,
      lowestNumber: 2,
      highestNumber:127
    },

    card1 = {
      cardNumbers:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,35,37,39,41,43,45,46,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127],
      containsNumber: false
    };

    card2 = {
      cardNumbers:[2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63, 66, 67, 70, 71, 74, 75, 78, 79, 82, 83, 86, 87, 90, 91, 94, 95, 98, 99, 102, 103, 106, 107, 110, 111, 114, 115, 118, 119, 122, 123, 126, 127],
      containsNumber: false
    };

    card3 = {
      cardNumbers:[4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31,36,37,38,39,44,45,46,47,52,53,54,55,60,61,62,63,68,69,70,71,76,77,78,79,84,85,86,87,92,93,94,95,100,101,102,103,106,107,110,111,114,114,118,119,122,123,126,127],
      containsNumber:true
    };

  });

  it('should be able to populate number', function() {
    const number = 19
    const reverseBinaryNumber = "11001"
    //19 backwards in binary
    modelCard.populateNumber(reverseBinaryNumber, number);
    assert.deepStrictEqual(modelCard.cardNumbers, [19]);
  });

  it('should be able to reverse a string', function() {
    const actual = modelCard.reverseString('10011');
    expected = '11001';
    assert.strictEqual(actual, expected);
  });

  it('should be able to turn number to binary', function() {
    // use function numberToBinary
    const actual = modelCard.numberToBinary(19);
    const expected = '10011';
    assert.strictEqual(actual,expected);
  });

  it('should be able to get number range lowest number', function() {
    //use function getNumberRange
    modelCard.getNumberRange();
    const actual = modelCard.lowestNumber;
    const expected = 2;
    assert.strictEqual(actual,expected);
  });

  it('should be able to get number range highest number', function() {
    //use function getNumberRange
    modelCard.getNumberRange();
    const actual = modelCard.highestNumber;
    const expected = 127;
    assert.strictEqual(actual,expected);
  });

  it('should be able to create a card', function() {
    // fn createCard
    modelCard.createCard()
    const actual = modelCard;
    const expected = modelCardTest;
    assert.deepEqual(actual,expected)
    //deepEqual was used as a strict Equal would not work as the model card is object type Card and modelCardTest is not.

  });


  it('should return pretty card', function() {
    //fn prettyCard
    modelCard.createCard();
    const actual = modelCard.prettyCard();
    const expected = card2;
    assert.deepEqual(actual, expected);
  });

  it('should have number inside card', function() {

    modelCard.cardNumbers.push(1);
    const actual = modelCard.cardNumbers;
    const expected = [1];
    assert.deepStrictEqual(actual, expected);
  });


  //these tests can only be done after generate cards are successfull
  it('it should have cardNumbers attribute', function() {

    const actual = modelCard.cardNumbers;
    const expected = [];
    assert.deepStrictEqual(actual,expected);
  });

  it('it should have containsNumber attribute', function() {
    modelCard.containsNumber = true;
    const expected = modelCard.containsNumber;
    assert.ok(expected);
  });

  it('should be able to update the containsNumber attribute', function() {
    //fn updateContainsNumber
    modelCard.createCard();
    modelCard.updateContainsNumber();
    const expected = modelCard.containsNumber;
    assert.ok(expected);
  });

  it('it should have a iteration attribute', function() {
    const actual = modelCard.iteration;
    const expected = 1;
    assert.deepStrictEqual(actual, expected);
  });

  it('it should have total numbers of cards', function() {
    const actual = modelCard.totalNumberOfCards;
    const expected = 7;
    assert.deepStrictEqual(actual, expected);
  });

  it('it should have a lowest number attribute', function() {
    modelCard.createCard();
    const actual = modelCard.lowestNumber;
    const expected = 2;
    assert.strictEqual(actual,expected);
  });

  it('it should have a highest number attribute', function() {
    modelCard.createCard();
    const actual = modelCard.highestNumber;
    const expected = 127;
    assert.strictEqual(actual,expected);

  });


});
