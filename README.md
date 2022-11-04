Describe: Pizza()

Test: "It should log a Pizza object with two properties of toppings and size".
Code: const newPizza = new Pizza(["pineapple", "ham"], "large");
console.log(newPizza);
Expected Output: Pizza { toppings: ["pineapple", "ham"], size: "large"};

Test: "It should log the price of pizza depending on it's size".
Code: const newPizza = new Pizza(["pineapple", "ham"], "small");
pizza.sizePrices(newPizza.size);
Expected Output: Pizza { toppings: ["pineapple", "ham"], size: "small"} small pizza costs $5";



