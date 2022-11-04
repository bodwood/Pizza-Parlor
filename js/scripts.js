//Business Logic ------------------------------------

//Pizza constructor
function Pizza(toppings = [], size) {
  this.toppings = toppings;
  this.size = size;
}

//Places a price on each pizza size
Pizza.prototype.sizePrices = function (size) {
  this.size = size;
  let price = 0;
  switch (this.size) {
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
Pizza.prototype.addAdditionalToppings = function (toppings) {
  this.toppings = toppings;
  if (toppings.length > 2) {
    let extraToppings = toppings.length - 2;
    extraToppings *= .25;
    return extraToppings;
  } else {
    let noExtraCharge = 0;
    return noExtraCharge;
  }
};

//Combines price of pizza size with price of additional toppings
Pizza.prototype.totalPizzaPrice = function (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  let pizzaSize = pizza.sizePrices(size);
  let additionalToppings = pizza.addAdditionalToppings(toppings);
  return pizzaSize + additionalToppings;
};

let pizza = new Pizza();


//UI Logic --------------------------------------

//Displays the total price of the pizza to the customer
function showTotalPrice(event) {
  event.preventDefault();
  const pizzaSize = document.querySelector('input[name="size"]:checked').value;
  const checkboxes = document.querySelectorAll('input[name="toppings"]:checked');
  let checkboxValues = [];
  checkboxes.forEach(function (checkbox) {
    checkboxValues.push(checkbox.value);
  });
  const newPizza = new Pizza(checkboxValues, pizzaSize);
  const currentPizzaPrice = pizza.totalPizzaPrice(newPizza.toppings, newPizza.size);

  let showPizzaPrice = document.getElementById("pizzaPrice");
  showPizzaPrice.removeAttribute("class", "hidden");
  showPizzaPrice.innerHTML = currentPizzaPrice;
}

window.addEventListener("load", function () {
  const submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", showTotalPrice);
});