// let dishName;
// let dishPrice;
// // let dishCheck;
// let dishAllergies;
// let orderBox;

// if (window.location.pathname === '/orders/neworder') {
//   dishName = document.querySelector('.dishname');
//   dishPrice = document.querySelector('.dish-price');
// //   dishCheck = document.querySelector('.checkbox-dish');
//   dishAllergies = document.querySelector('.dishallergy');
//   orderBox = document.querySelector('.orderbox');
// }



// var selectedDishes=[];

// function getOrder() {
// var getDishes=document.querySelectorAll('checkbox-dish');
// for (var i=0; i<getDishes.length; i++) 
// if(!getDishes.checked) {
//   throw new Error('No items selected!');
// }
//   selectedDishes.push(getDishes);
//   handleOrder(selectedDishes);
// };

// const handleOrder = (selectedDishes) => {
//   const newOrder = 
// }


const getOrders = async () => {
  try {
    const response = await fetch('/api/orders'); 
    if (response.ok) {
      const orders = await response.json();
      console.log(orders); 
    } else {
      console.log('Error:', response.statusText);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

//employeeadmin

document
.querySelector('#currentorders')
.addEventListener('click', getOrders);