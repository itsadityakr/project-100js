# **Shopping Cart**  

## **Features**  

- **Add Items to Cart**: Users can add products with a name and price to the shopping cart.  
- **Remove Items from Cart**: Users can remove items individually or decrease the quantity.  
- **Update Cart Dynamically**: The cart updates in real-time, showing the total price and item quantities.  

---  

## **How it Works**  

1. **Adding an Item to the Cart**  
   - The user selects an item to add.  
   - The system checks if the item is already in the cart.  
   - If the item exists, its quantity increases; otherwise, a new item is added.  
   - The cart updates to reflect changes.  

2. **Removing an Item from the Cart**  
   - The user clicks the "Remove" button next to an item.  
   - If the item has a quantity greater than one, the quantity decreases.  
   - If the item has only one quantity left, it is completely removed from the cart.  
   - The cart updates dynamically.  

3. **Updating the Cart**  
   - The cart list is cleared before displaying the updated items.  
   - The system loops through the cart array and generates a list of items.  
   - The total price is calculated and displayed.  

---  

## **1. `addToCart()` Function**  

### **Purpose**  

The `addToCart()` function allows users to add an item to the shopping cart.  

### **Code:**  

```javascript
function addToCart(name, price) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if found
    } else {
        cart.push({ name, price, quantity: 1 }); // Add new item if not found
    }
    
    updateCart();
}
```  

**Key Points:**  

- Uses `find()` to check if the item is already in the cart.  
- If the item exists, its quantity is increased by 1.  
- If the item is not in the cart, it is added as a new entry.  
- Calls `updateCart()` to refresh the cart display.  

---  

## **2. `removeFromCart()` Function**  

### **Purpose**  

The `removeFromCart()` function decreases an item's quantity or removes it completely.  

### **Code:**  

```javascript
function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1; // Reduce quantity if more than 1
    } else {
        cart = cart.filter((_, i) => i !== index); // Remove item if only 1 left
    }

    updateCart();
}
```  

### **Function Explanation:**  

1. Checks if the selected item has more than one quantity.  
2. If the quantity is greater than one, it decreases the quantity by 1.  
3. If the quantity is 1, it removes the item from the cart using `filter()`.  
4. Calls `updateCart()` to refresh the display.  

---  

## **3. `updateCart()` Function**  

### **Purpose**  

The `updateCart()` function updates the cart display and total price.  

### **Code:**  

```javascript
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalElement = document.getElementById("total");

    cartList.innerHTML = "";
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} x${item.quantity} - $${item.price * item.quantity} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);
    });

    totalElement.textContent = total;
}
```  

### **Function Explanation:**  

1. Retrieves the cart display elements using `getElementById()`.  
2. Clears the current cart list.  
3. Uses `reduce()` to calculate the total cost of all items.  
4. Loops through the `cart` array and creates a list item (`<li>`) for each item.  
5. Adds a "Remove" button next to each item.  
6. Displays the updated total cost.  

---  

## **Summary of Key Concepts**  

- **Arrays (`cart`)**: Stores items dynamically.  
- **`find()`**: Searches for an item in the cart.  
- **`filter()`**: Removes an item from the cart.  
- **`reduce()`**: Calculates the total price of items.  
- **`createElement()`**: Dynamically generates HTML elements.  
- **`innerHTML`**: Updates the webpage content.  
- **Event Handling (`onclick`)**: Detects when a user removes an item.  

---  

## **License and Author**  

### **License**  

This project is licensed under the MIT License.  

### **Author**  

**Aditya Kumar**  
[GitHub Profile](https://github.com/itsadityakr)  