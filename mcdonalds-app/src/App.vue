<template>
  <div class="mcdonalds-container">
    <h1>Welcome to McDonald's</h1>
    <button class="order-button">Order Now</button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.mcdonalds-container {
  text-align: center;
  background-color: #ffc72c; 
  color: #da291c; 
  padding: 20px;
  border-radius: 10px;
}

h1 {
  font-family: 'Arial', sans-serif;
  font-size: 2em;
  margin-bottom: 20px;
}

.order-button {
  background-color: #da291c; 
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}

.order-button:hover {
  background-color: #c8232c; 
}
</style>