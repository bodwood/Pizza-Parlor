Describe: Pizza()

Test: "It should log a Pizza object with two properties of toppings and size".
Code: const newPizza = new Pizza(["pineapple", "ham"], "large");
console.log(newPizza);
Expected Output: Pizza { toppings: ["pineapple", "ham"], size: "large"};

Test: "It should log the price of a small pizza".
Code: const newPizza = new Pizza(["pineapple", "ham"], "small");
pizza.sizePrices(newPizza.size);
Expected Output: 5;

Test: "It should log the price of a medium pizza"
Code: const newPizza = new Pizza(["pineapple", "ham"], "medium");
pizza.sizePrices(newPizza.size);
Expected Output: 6;

Test: "It should log the price of a large pizza"
Code: const newPizza = new Pizza(["pineapple", "ham"], "large");
pizza.sizePrices(newPizza.size);
Expected Output: 7;