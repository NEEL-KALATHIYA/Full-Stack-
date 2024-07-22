document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartTotalElement = document.getElementById('cart-total');
    const cartItemsElement = document.getElementById('cart-items');

    document.querySelectorAll('Order Now').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            addToCart({ id: productId, name: productName, price: productPrice });
        });
    });

    const addToCart =(product) => {
        const cartItem = cartItems.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            product.quantity = 1;
            cartItems.push(product);
        }
        updateCart();
    }

    const updateCart=() =>{
        cartItemsElement.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartItemsElement.appendChild(listItem);
            total += item.price * item.quantity;
        });
        cartTotalElement.textContent = total.toFixed(2);
    }
});
