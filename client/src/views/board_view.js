const PubSub = require('../helpers/pub_sub.js');
const CardView = require('./card_view.js');

const BoardView = function (container) {
  this.container = container;
  this.cards = null;
};

BoardView.prototype.bindEvents = function(){
  PubSub.subscribe('Deck:card-data-Ready',(evt)=>{
    this.cards = evt.detail;
    this.renderCardView(this.cards);
  });
};
//get info from model (pubsub) subscribe and call renderCardView with the cards -- update this.cards with cards.

BoardView.prototype.renderCardView = function(cards){
  cards.forEach((card)=>{
    const cardView = new CardView(card);
    const cardDetail = cardView.createCardView();
    this.container.appendChild(cardDetail)
    this.addButtons(card);
  });
};

BoardView.prototype.addButtons = function(card){
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('btn-container');

  const yesButton = document.createElement('button');
  yesButton.classList.add('yes-btn')
  yesButton.textContent = 'Yes';
  yesButton.addEventListener('click',(evt)=>{
    card.containsNumber = true;
    if (this.cards.length === (card.iteration +1)) {
      this.container.id = 'hidden';
      this.publishAnswers();
    };
  });
  buttonContainer.appendChild(yesButton);

  const noButton = document.createElement('button');
  noButton.classList.add('no-btn')
  noButton.textContent = 'No';
  noButton.addEventListener('click',(evt)=>{

    if (this.cards.length === (card.iteration +1)) {
      this.container.id = 'hidden';
      this.publishAnswers();
    }
  });
  buttonContainer.appendChild(noButton);
  this.container.appendChild(buttonContainer);
};

BoardView.prototype.publishAnswers = function() {
  PubSub.publish('BoardView:answer-ready', this.cards);
};


module.exports = BoardView;
