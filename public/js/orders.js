let dishName;
let dishPrice;
// let dishCheck;
let dishAllergies;
let orderBox;

if (window.location.pathname === '/orders/neworder') {
  dishName = document.querySelector('.dishname');
  dishPrice = document.querySelector('.dish-price');
//   dishCheck = document.querySelector('.checkbox-dish');
  dishAllergies = document.querySelector('.dishallergy');
  orderBox = document.querySelector('.orderbox');
}

var selectedDishes=[];

function getOrder() {
var getDishes=document.querySelectorAll('checkbox-dish');
if(getDishes.checked)
}