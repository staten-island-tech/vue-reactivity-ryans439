<template>
  <div>
    <Header />
    <main class="menu">
      <h1>Our Menu</h1>
      <div v-for="item in menuItems" :key="item.id">
        <MenuItem :item="item" @add-to-cart="addToCart" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import MenuItem from '../components/MenuItem.vue';

export default {
  name: 'Menu',
  components: {
    Header,
    Footer,
    MenuItem,
  },
  data() {
    return {
      menuItems: [
        { id: 1, name: 'Big Mac', description: 'A delicious burger', price: '$5.99' },
        // Add more menu items here
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      console.log(this.cart);
    },
  },
};
</script>

<style scoped>
.menu {
  text-align: center;
  padding: 2rem;
}

.menu h1 {
  font-size: 2.5rem;
  color: #d52b1e;
}
</style>