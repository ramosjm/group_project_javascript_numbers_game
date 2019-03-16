const PubSub = require('../helpers/pub_sub.js');

const InfoView = function () {
  //this.information = information
};


// InfoView.prototype.bindEvents = function () {
//   PubSub.subscribe('FormView:number-submitted', (evt) => {
//     const numberSubmitted = evt.detail.value;
//     this.displayGameParameter(gameParameter);
//   });
// };


InfoView.prototype.readInput = function() {
  //this channel must change to get the value from the model
  PubSub.subscribe('Deck:game-parameters', (evt) => {
    highestNumberParameter = evt.detail;

    const resultParameter = document.querySelector('#game-parameter-result');
    resultParameter.textContent = `Choose a number from 1 to ${highestNumberParameter}.`;
  });


  PubSub.subscribe('FormView:number-inputted', (evt) => {


    const inputtedNum = evt.detail;

    PubSub.publish('InfoView:game-parameters-input', inputtedNum);

  })
};


// This view sends information to FormView about the highest number to choose from or
// how many cards to play with
//
// Subscribes from model
// Channel: Cards:game-parameters-submitted
// (Deck model publishes)

//InfoView.prototype.bindEvents = function() {
  //PubSub.subscribe('Cards:game-parameters-submitted', (evt) => {

//}




module.exports = InfoView;
