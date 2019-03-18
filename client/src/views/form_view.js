const PubSub = require('../helpers/pub_sub.js');
const InfoView = require('./info_view.js');

const FormView = function (formElement) {
  this.element = formElement;
};

FormView.prototype.setupEventListeners = function(){
  const cardButton = document.querySelector('#number-of-cards-btn');
  cardButton.addEventListener('click',function(evt){
    const inputBox = document.querySelector('#cards-number-container');
    inputBox.classList.replace('hidden','show');
    const inputtedNum = document.querySelector('#cardsNumber');
    inputtedNum.addEventListener('input', function(evt) {
      const playButton = document.querySelector('#play-game');
      playButton.classList.replace('hidden','show');
      PubSub.publish('FormView:number-inputted', evt.target.value);
      });
      const playButton = document.querySelector('#play-game');
      playButton.addEventListener('click',function(evt){
        const inputBoxValue = document.querySelector('#cardsNumber').value;
        const formElement = document.querySelector('#games-form');
        formElement.classList.replace('show','hidden');
        PubSub.publish('FormView:sumbit',inputBoxValue);
    });
  });

    //Play by numbers

  const numbersButton = document.querySelector('#max-number-btn');
  numbersButton.addEventListener('click',function(evt){
    inputBox1 = document.querySelector('#highest-number-container');
    inputBox1.classList.replace('hidden','show');

    const inputtedNum = document.querySelector('#highestNumber');
    inputtedNum.addEventListener('input', function(evt) {
      const playButton = document.querySelector('#play-game');
      playButton.classList.replace('hidden','show');
      PubSub.publish('FormView:highest-number-inputted', evt.target.value);
    });

    const playButton = document.querySelector('#play-game');
    playButton.addEventListener('click',function(){
      const inputBoxValue = document.querySelector('#highestNumber').value;
      const formElement = document.querySelector('#games-form');
      formElement.classList.replace('show','hidden');
      PubSub.publish('FormView:sumbit',inputBoxValue);

    });
  });
};


module.exports = FormView;
