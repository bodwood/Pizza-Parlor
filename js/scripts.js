function Pizza(toppings = [], size){
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizePrices = function(size) {
  this.size = size;
  let price = 0;
  switch(this.size){
    case "small":
      price = 5;
      console.log(price);
      break;
    case "medium":
      price = 6;
      console.log(price);
      break;
    case "large":
      price = 7;
      console.log(price);
      break;
    default:
      console.log("invalid size");
  }

};


let pizza = new Pizza();
const newPizza = new Pizza(["pineapple", "ham"], "large");

pizza.sizePrices(newPizza.size);