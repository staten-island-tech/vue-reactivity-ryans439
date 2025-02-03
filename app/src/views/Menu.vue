<template>
  <div class="menu">
    <h1>Our Menu</h1>
    <ul>
      <li>Burger</li>
      <li>Fries</li>
      <li>Soft Drink</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
};
</script>

<style>
/* Add some basic styling */
.menu {
  text-align: center;
  margin-top: 50px;
}

.menu h1 {
  font-size: 2em;
  color: #ffcc00;
}

.menu ul {
  list-style-type: none;
  padding: 0;
}

.menu ul li {
  font-size: 1.5em;
  color: #333;
  margin: 10px 0;
}
</style>