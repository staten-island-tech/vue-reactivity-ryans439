<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/* Add some basic styling */
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #333;
  margin-top: 60px;
}
</style>
