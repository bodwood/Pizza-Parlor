function Pizza(toppings = [], size){
  this.toppings = toppings;
  this.size = size;
}

const newPizza = new Pizza(["pineapple", "ham"], "medium");
console.log(newPizza);