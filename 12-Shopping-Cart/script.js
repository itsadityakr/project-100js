// Initialize an empty cart as an array to store cart items
let cart = [];

/**
 * Adds an item to the cart or updates its quantity if it already exists.
 * @param {string} name - The name of the item.
 * @param {number} price - The price of the item.
 */
function addToCart(name, price) {
    // Check if the item already exists in the cart by finding it in the array
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // If the item exists, increase its quantity by 1
        existingItem.quantity += 1;
    } else {
        // If the item is not found in the cart, add it as a new object with quantity 1
        cart.push({name, price, quantity: 1});
    }

    // Update the cart UI after modifying the cart
    updateCart();
}

/**
 * Removes an item from the cart. If the quantity is more than 1, it decreases the quantity.
 * If the quantity is 1, it removes the item from the cart entirely.
 * @param {number} index - The index of the item in the cart array.
 */
function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        // If the item has more than one quantity, decrease it by 1
        cart[index].quantity -= 1;
    } else {
        // If only one item is left, remove it completely from the cart
        cart = cart.filter((_, i) => i !== index);
    }

    // Update the cart UI after modifying the cart
    updateCart();
}

/**
 * Updates the cart display in the HTML by re-rendering the cart items and total price.
 */
function updateCart() {
    // Get the cart list element where cart items will be displayed
    const cartList = document.getElementById("cart-list");

    // Get the total element where the total price will be displayed
    const totalElement = document.getElementById("total");

    // Clear the previous cart list to refresh the UI
    cartList.innerHTML = "";

    // Calculate the total price of all items in the cart
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Loop through each item in the cart and create an HTML list item for it
    cart.forEach((item, index) => {
        // Create a new <li> element for the item
        const li = document.createElement("li");

        // Set the inner HTML of the list item to show item details and a remove button
        li.innerHTML = `${item.name} x${item.quantity} - $${item.price * item.quantity} 
            <button onclick="removeFromCart(${index})">Remove</button>`;

        // Append the newly created list item to the cart list
        cartList.appendChild(li);
    });

    // Update the total price display in the HTML
    totalElement.textContent = total;
}
