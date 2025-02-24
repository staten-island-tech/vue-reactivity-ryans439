<template>
  <div class="home">
    <TitleBar title="Welcome to McDonald's" />
    <WelcomeItem />
    <McDonaldsFood />
    <div class="buttons">
      <button class="button" @click="goToCart">Go to Cart</button>
      <button class="button" @click="goToHome">Home</button>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue';
import WelcomeItem from '@/components/WelcomeItem.vue';
import McDonaldsFood from '@/components/McDonaldsFood.vue';

export default {
  components: {
    TitleBar,
    WelcomeItem,
    McDonaldsFood
  },
  methods: {
    goToCart() {
      this.$router.push('/cart');
    },
    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.buttons {
  margin-top: 20px;
}

.button {
  margin: 10px;
  background-color: green;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  width: 150px; 
}
</style>
