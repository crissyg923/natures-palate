// This file is fetching all of the orders and handling logic on pages
// associated with orders and order routes.
document.querySelector('.orderform').addEventListener('submit', async (event) => {
  event.preventDefault();

  const customerName = document.getElementById('customer_name').value;
  const allergies = document.getElementById('allergies').value;
  const status = document.getElementById('status').value;

  const selectedDishes = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
      .map(checkbox => checkbox.id);

  const orderData = {
      customer_name: customerName,
      allergy: allergies,
      status: status,
      dishes: selectedDishes
  };

  try {
      const response = await fetch('/api/orders/neworder', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderData),
          
      });
      
      if (response.ok) {
          console.log(orderData);
          document.location.replace('/api/orders');
      } else {
          console.log(orderData);
          console.error('Error creating order');
      }
  } catch (error) {
    
      console.error('Error:', error);
  }
});



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

const newOrder = async () => {
  try {
    const response = await fetch('/api/orders/neworder'); 
    if (response.ok) {
      const neworders = await response.json(); 
      console.log(neworders);
    } else {
      console.log('Error:', response.statusText);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};


document
.querySelector('#currentorders')
.addEventListener('click', getOrders);

document
.querySelector('#neworder')
.addEventListener('click', newOrder);
