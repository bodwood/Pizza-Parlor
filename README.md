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

Test: "It should log toppings from new addAdditionalToppings prototype function of Pizza constructor"
Code: const newPizza = new Pizza(["pineapple", "ham", "onions"], "large");
pizza.sizePrices(newPizza.toppings);
Expected Output: ["pineapple", "ham", "onions"];

Test: "It should return the amount of toppings for the pizza"
Code: const newPizza = new Pizza(["pineapple", "ham", "onions"], "small");
pizza.sizePrices(newPizza.addAdditionalToppings);
Expected Output: 3;

Test: "It should return the amount of toppings for the pizza minus 2"
Code: const newPizza = new Pizza(["pineapple", "ham", "onions"], "small");
pizza.sizePrices(newPizza.addAdditionalToppings);
Expected Output: 1;

Test: "It should add .25 for each additional topping past two toppings. Two toppings are free, then each additional is .25"
Code: const newPizza = new Pizza(["pineapple", "ham", "onions"], "small");
pizza.sizePrices(newPizza.addAdditionalToppings);
Expected Output: 0.25;

Test: "It should add 0.25 to the pizza size price"
Code: const newPizza = new Pizza(["pineapple", "ham", "onions"], "small");
pizza.addAdditionalTop(newPizza.size, newPizza.toppings);
Expected Output: 5.25
