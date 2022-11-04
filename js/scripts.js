//Pizza constructor
function Pizza(toppings = [], size){
  this.toppings = toppings;
  this.size = size;
}

//Places a price on each pizza size
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

//Adds .25 for each additional toppings, past two toppings
Pizza.prototype.addAdditionalToppings = function(toppings) {
  this.toppings = toppings;
  if(toppings.length > 2){
    let extraToppings = toppings.length - 2;
    extraToppings *= .25;
    return extraToppings;
  }else{
    let noExtraCharge = 0;
    console.log(noExtraCharge);
    return noExtraCharge;
  }
};


let pizza = new Pizza();
const newPizza = new Pizza(["pineapple", "ham"], "large");

pizza.sizePrices(newPizza.size);
pizza.addAdditionalToppings(newPizza.toppings);