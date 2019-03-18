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

  PubSub.subscribe('Deck:highest-number-parameters', (evt) => {
    numberOfCards = evt.detail;

    const resultParameter = document.querySelector('#game-parameter-result');
    resultParameter.textContent = `This range will give you ${numberOfCards} card(s) to play with.`;
  });


  PubSub.subscribe('FormView:number-inputted', (evt) => {
    const inputtedNum = evt.detail;
    PubSub.publish('InfoView:game-parameters-input', inputtedNum);
  });

  PubSub.subscribe('FormView:highest-number-inputted', (evt) => {
    const inputtedNum = evt.detail;
    console.log(inputtedNum);
    PubSub.publish('InfoView:highest-number-parameters-input', inputtedNum);
  });

};


module.exports = InfoView;
