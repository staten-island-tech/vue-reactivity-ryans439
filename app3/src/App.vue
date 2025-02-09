<template>
  <div id="app">
    <router-view></router-view>
    <div class="navigation">
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/cart" exact-active-class="active">Cart</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.navigation {
  text-align: center;
  margin-top: 20px;
}

.navigation a {
  margin: 0 10px;
  color: #ffcc00; /* McDonald's yellow */
  text-decoration: none;
  font-size: 18px;
}

.navigation a.active {
  color: #4caf50; /* Highlighted green */
}

.navigation a:hover {
  text-decoration: underline;
}
</style>
