const CardView = function (prettyCard) {
  this.container = null;
  this.prettyCard = prettyCard;
};

CardView.prototype.createCardView = function(){
  const div = document.createElement('div');
  div.classList.add('card-container');
  console.log(this.prettyCard);
  const cardLabel = document.createElement('label');
  cardLabel.textContent = `Card # ${this.prettyCard.iteration+1}`;

  div.appendChild(cardLabel);

  this.container = div
  const numberElements = this.createParagraphElements();

  return div;

};

CardView.prototype.createParagraphElements = function(){
  const numbers = this.prettyCard.cardNumbers;
  numbers.forEach((number)=>{
    const numberElement = document.createElement('p');
    numberElement.textContent = number;
    this.container.appendChild(numberElement);
  });
};



module.exports = CardView;
