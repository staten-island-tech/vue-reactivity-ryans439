<template>
  <div class="cart">
    <TitleBar title="Your Cart" />
    <div v-if="cartItems.length > 0">
      <div class="card" v-for="(item, index) in cartItems" :key="index">
        <h3>{{ item.name }}</h3>
        <p class="price">${{ item.price }}</p>
        <button class="button remove-button" @click="removeFromCart(index)">Remove</button>
      </div>
      <p class="total">Total: ${{ totalPrice }}</p>
      <button class="button" @click="checkout">Checkout</button>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
    <div class="buttons">
      <button class="button" @click="goToHome">Home</button>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue';
import { useCart } from '@/cartState.js';

export default {
  components: {
    TitleBar
  },
  setup() {
    const { getCartItems, removeItemFromCart } = useCart();
    return {
      cartItems: getCartItems(),
      removeFromCart: removeItemFromCart
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    }
  },
  methods: {
    checkout() {
      alert('Proceeding to checkout...');
    },
    goToHome() {
      this.$router.push('/');
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
  text-align: left;
  vertical-align: top;
}

.card h3 {
  margin: 0;
}

.price {
  font-weight: bold;
  color: #333;
}

.total {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

.button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin: 10px;
  width: 150px; 
}

.remove-button {
  background-color: red;
  margin-top: 10px;
}

.buttons {
  margin-top: 20px;
}
</style>
 