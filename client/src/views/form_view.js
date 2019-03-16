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

      playButton.addEventListener('click',function(){
        const inputBoxValue = document.querySelector('#cards-number-container').value;
        PubSub.publish('FormView:sumbit',inputBoxValue);
        const formElement = document.querySelector('#games-form');
        formElement.classList.replace('show','hidden');
      });
    });
  });

  // const numbersButton = document.querySelector('#max-number-btn');
  // numbersButton.addEventListener('click',function(evt){
  //   inputBox1 = document.querySelector('#highest-number-container');
  //   inputBox1.classList.replace('hidden','show');
  //   console.log(inputBox1);
  // });

};




module.exports = FormView;
