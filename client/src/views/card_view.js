const CardView = function (prettyCard) {
  this.container = null;
  this.prettyCard = prettyCard;
};

CardView.prototype.createCardView = function(){
  const div = document.createElement('div');
  div.classList.add('card-container');

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
//each card takes a number range (min/max)
// dont have to do a pubsub here. Do it in app.js. use deck model,
//access one card and pass them into boardview and pass a singlecard
//into cardview.

//render card
//CardView.prototype.render = function() {

//create card here
//createElement p for the numbers
//the cardContainer has to have an id of card container.
//you can do this in html #
// }




module.exports = CardView;
