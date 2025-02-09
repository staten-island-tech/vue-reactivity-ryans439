<template>
    <div class="cart">
      <TitleBar title="Your Cart" />
      <div v-if="cartItems.length > 0">
        <div class="card" v-for="item in cartItems" :key="item">
          <h3>{{ item }}</h3>
        </div>
      </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
  import TitleBar from '@/components/TitleBar.vue';
  
  export default {
    components: {
      TitleBar
    },
    inject: ['cart'],
    computed: {
      cartItems() {
        return this.cart.getCartItems();
      }
    }
  };
  </script>
  
  <style scoped>
  .cart {
    text-align: center;
    padding: 20px;
  }
  
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
    width: 200px;
  }
  
  .card h3 {
    margin: 0;
  }
  </style>
  