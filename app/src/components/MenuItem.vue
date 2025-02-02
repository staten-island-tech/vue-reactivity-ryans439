<template>
  <div class="menu-item">
    <h2 class="item-name">{{ item.name }}</h2>
    <p class="item-description">{{ item.description }}</p>
    <p class="item-price">{{ item.price }}</p>
    <button class="add-to-cart" @click="addToCart(item)">Add to Cart</button>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
});

const addToCart = (item) => {
  emit('add-to-cart', item);
};
</script>

<style scoped>
.menu-item {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #fff;
}

.item-name {
  font-size: 1.5rem;
  color: #d52b1e;
}

.item-description {
  font-size: 1rem;
  color: #666;
}

.item-price {
  font-size: 1.2rem;
  color: #333;
}

.add-to-cart {
  background-color: #ffcc00;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
}

.add-to-cart:hover {
  background-color: #d52b1e;
  color: #fff;
}
</style>