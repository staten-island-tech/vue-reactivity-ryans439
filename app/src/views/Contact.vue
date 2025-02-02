<template>
    <div>
      <Header />
      <main class="contact">
        <h1>Contact Us</h1>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: 'Contact',
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  .contact {
    text-align: center;
    padding: 2rem;
  }
  
  .contact h1 {
    font-size: 2.5rem;
    color: #d52b1e;
  }
  </style>