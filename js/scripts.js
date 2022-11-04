function Pizza(toppings = [], size){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizePrices = function(size) {
  this.size = size;
  switch(this.size){
    case "small":
      console.log("small pizza is $5");
      break;
    default:
      console.log("invalid size");
  }

};


let pizza = new Pizza();
const newPizza = new Pizza(["pineapple", "ham"], "small");

pizza.sizePrices(newPizza.size);