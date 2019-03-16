const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {
  this.result = null;
  this.resultContainer = null;
};

// Gives the result that the computer calculated

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('Deck:result-submitted', (evt) => {
    const result = evt.detail;
    this.result = result;
    this.render();
  })
}

ResultView.prototype.render = function () {
  const resultContainer = document.querySelector('#result-view-container');

  this.resultContainer = resultContainer;

  const resultText = document.createElement('h2');
  resultText.textContent = "Your number is...";
  resultContainer.appendChild(resultText);

  const resultButton = this.showResultButton();
  resultContainer.appendChild(resultButton);
};

ResultView.prototype.showResultButton = function (result){
  const button = document.createElement('button');
  button.id = ('result-btn');
  button.classList.add('result-button');
  button.textContent = "Show me";

  button.addEventListener('click', (evt) => {
    const result = document.createElement('h2')
    result.id = 'result-id';
    result.textContent = this.result;
    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again';
    playAgain.id = 'play-again';
    
    this.resultContainer.appendChild(result);
    this.resultContainer.appendChild(playAgain);
    button.classList.replace('result-button','hidden');

    const hiddenSong = document.createElement('audio');
    hiddenSong.src = '/css/harry_potter_theme.mp3'
    hiddenSong.autoplay="true";
    hiddenSong.type = 'audio/mpeg';
    hiddenSong.hidden="true";
    this.resultContainer.appendChild(hiddenSong);

    playAgain.addEventListener('click',()=>{
      location.reload(true);
    });

  });
    return button;
  };


//in model add
// Deck.prototype.bindEvents = function() {
//   const result = this.calculateGuessedNumber();
//   PubSub.publish('Deck:result-submitted', result);
// }


module.exports = ResultView;
