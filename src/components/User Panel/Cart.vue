<template>
    <div class="container mx-auto mt-5">
      <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <div v-if="cart.length === 0" class="text-gray-500">Your cart is empty.</div>
      <div v-else>
        <!-- Display cart items -->
        <div v-for="(item, index) in cart" :key="index" class="mb-4 border rounded p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
             
              <div>
                <p class="text-lg font-semibold">{{ item.name }}</p>
                <p class="text-gray-600">Price: ${{ item.price }}</p>
                <div class="text-gray-600 ">Total Price: ${{ item.newprice }}</div>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button @click="decrementQuantity(index)" class="text-blue-500 hover:text-blue-700 font-semibold">-</button>
              <p class="text-gray-600">Quantity: {{ item.ticketcounter }}</p>
              <button @click="incrementQuantity(index)" class="text-blue-500 hover:text-blue-700 font-semibold">+</button>
            </div>
            <div>
              <button @click="removeFromCart(index)" class="text-red-500 hover:text-red-700 font-semibold">Remove</button>
            </div>
          </div>
         
        </div>
  
        <!-- Total Price -->
        <div class="text-lg font-semibold mt-4">Total Amount: ${{ getTotalPrice() }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Cart",
  
    data() {
      return {
        cart: [], // An array to store cart items
      };
    },
  
    computed: {
      itemsFromLocalStorage() {
        // Get cart items from local storage
        const cartItems = localStorage.getItem("CartMovie");
        return cartItems ? JSON.parse(cartItems) : [];
      },
    },
  
    created() {
      // Initialize the cart with items from local storage
      this.cart = this.itemsFromLocalStorage;
    },
  
    methods: {
      removeFromCart(index) {
        // Remove the item from the cart
        this.cart.splice(index, 1);
  
        // Update local storage with the modified cart
        localStorage.setItem("CartMovie", JSON.stringify(this.cart));
      },
  
      incrementQuantity(index) {
        // Increment the quantity of the item
        if (this.cart[index].ticketcounter >= this.cart[index].tickets) {
          alert("Sorry, only " + this.cart[index].tickets + " tickets available for this show.");
        } else {
          this.cart[index].ticketcounter++;
          this.cart[index].newprice = this.cart[index].ticketcounter * this.cart[index].price;
  
          // Update local storage with the modified cart
          localStorage.setItem("CartMovie", JSON.stringify(this.cart));
        }
      },
  
      decrementQuantity(index) {
        // Decrement the quantity of the item, but ensure it doesn't go below 1
        if (this.cart[index].ticketcounter > 1) {
          this.cart[index].ticketcounter--;
          this.cart[index].newprice = this.cart[index].ticketcounter * this.cart[index].price;
  
          // Update local storage with the modified cart
          localStorage.setItem("CartMovie", JSON.stringify(this.cart));
        }
      },
  
      getTotalPrice() {
        // Calculate the total price of items in the cart
        return this.cart.reduce((total, item) => total + item.newprice, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styling specific to this component */
  </style>
  