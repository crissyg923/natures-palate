let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    // Clear the cart list
    cartList.innerHTML = '';

    // Update the cart list
    cart.forEach(food => {
        const li = document.createElement('li');
        li.textContent = food.item + ' - $' + food.price;
        cartList.appendChild(li);
    });

    // Update the total
    total = cart.reduce((acc, food) => acc + food.price, 0);
    cartTotal.textContent = total;
}
