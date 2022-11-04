# Pizza Parlor

#### By _**Bodie Wood**_

#### _A simple web application that allows users to build a pizza and submit the pizza to receive the orders price._
#### _There are 3 different sizes of pizza_
#### _There are 9 different toppings to choose from_

---

## Link

_https://github.com/bodwood/portfolio_

## Github Site

_https://bodwood.github.io/porfolio_

---

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

## Description

_This web application allows users to input a number and return a result of Beeps!, Boops!, and Won't you be my neighbor?._

_Users can enter a number and view the resulting string of Beeps!, Boops!, Won't you be my neighbor?_

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the most top directory._
* _Open index.html_


```
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
```

## Known Bugs

* _body background image doesn't go to bottom of screen_

---

## License

_MIT_
https://choosealicense.com/licenses/mit/

Copyright (c) 2022 _Bodie Wood_