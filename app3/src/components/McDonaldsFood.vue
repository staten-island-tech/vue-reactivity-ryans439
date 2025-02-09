<template>
    <div class="mcdonalds-food">
      <h2>Our Menu</h2>
      <div class="card" v-for="item in menuItems" :key="item.name">
        <h3>{{ item.name }}</h3>
        <button class="button" @click="addToCart(item.name)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'McDonaldsFood',
    data() {
      return {
        menuItems: [
          { name: 'Big Mac' },
          { name: 'Quarter Pounder' },
          { name: 'French Fries' },
          { name: 'McFlurry' }
          // Add more menu items here
        ]
      };
    },
    inject: ['cart'],
    methods: {
      addToCart(item) {
        this.cart.addItemToCart(item);
        alert(item + ' added to cart!');
      }
    }
  };
  </script>
  
  <style>
  .mcdonalds-food {
    text-align: center;
    padding: 20px;
  }
  
  .mcdonalds-food h2 {
    margin-bottom: 20px;
  }
  
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
    width: 200px;
  }
  
  .button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .card h3 {
    margin: 0;
  }
  </style>
  