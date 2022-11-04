//Business Logic ------------------------------------

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
      return price;
      break;
    case "medium":
      price = 6;
      return price;
      break;
    case "large":
      price = 7;
      return price;
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
    //console.log(noExtraCharge);
    return noExtraCharge;
  }
};

Pizza.prototype.totalPizzaPrice = function(toppings, size){
  this.toppings = toppings;
  this.size = size;
  let pizzaSize = pizza.sizePrices(newPizza.size);
  let additionalToppings = pizza.addAdditionalToppings(newPizza.toppings);
  return pizzaSize + additionalToppings;
};

let pizza = new Pizza();
const newPizza = new Pizza(["pineapple", "ham", "peppers", "onions"], "large");
pizza.sizePrices(newPizza.size);
pizza.addAdditionalToppings(newPizza.toppings);
let totalPrice = pizza.totalPizzaPrice(newPizza.size, newPizza.toppings);
console.log(totalPrice);


//UI Logic --------------------------------------
function showTotalPrice(event){
  event.preventDefault();
  const pizzaSize = document.querySelector('input[name="size"]:checked').value;
  console.log(pizzaSize);
}

window.addEventListener("load", function(){
  const submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", showTotalPrice);
});
