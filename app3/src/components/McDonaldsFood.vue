<template>
  <div class="mcdonalds-food">
    <h2>Our Menu</h2>
    <div class="card" v-for="item in menuItems" :key="item.name">
      <img :src="item.image" :alt="item.name" class="item-image"/>
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <p class="price">${{ item.price }}</p>
      <button class="button" @click="addToCart(item)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McDonaldsFood',
  data() {
    return {
      menuItems: [
        { name: 'Big Mac', image: '/images/big-mac.jpg', description: 'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.', price: 5.99 },
        { name: 'Quarter Pounder', image: '/images/quarter-pounder.jpg', description: 'Quarter-pound beef patty with cheese, pickles, onions, mustard, and ketchup.', price: 6.49 },
        { name: 'French Fries', image: '/images/french-fries.jpg', description: 'Crispy golden French fries, perfect for any meal.', price: 2.49 },
        { name: 'McFlurry', image: '/images/mcflurry.jpg', description: 'Creamy soft serve ice cream blended with your choice of candy or cookies.', price: 3.99 },
        { name: 'Apple Pie', image: '/images/apple-pie.jpg', description: 'Warm, flaky pastry filled with sweet apple filling.', price: 1.29 },
        { name: 'Crispy Chicken Sandwich', image: '/images/crispy-chicken-sandwich.jpg', description: 'Crispy chicken filet with lettuce, tomato, and mayo on a toasted bun.', price: 4.99 },
        { name: 'McChicken', image: '/images/mcchicken.jpg', description: 'Classic McChicken sandwich with lettuce and mayo.', price: 3.49 },
        { name: 'Filet-O-Fish', image: '/images/filet-o-fish.jpg', description: 'Fish filet with tartar sauce and cheese on a steamed bun.', price: 4.19 },
        { name: 'Chicken McNuggets', image: '/images/chicken-mcnuggets.jpg', description: 'Tender, juicy chicken nuggets served with your choice of dipping sauce.', price: 4.49 },
        { name: 'Sausage McMuffin', image: '/images/sausage-mcmuffin.jpg', description: 'Sausage patty with cheese on a toasted English muffin.', price: 2.79 },
        { name: 'Egg McMuffin', image: '/images/egg-mcmuffin.jpg', description: 'Egg, Canadian bacon, and cheese on a toasted English muffin.', price: 3.99 },
        { name: 'Hotcakes', image: '/images/hotcakes.jpg', description: 'Fluffy pancakes served with syrup and butter.', price: 3.49 },
        { name: 'Hash Browns', image: '/images/hash-browns.jpg', description: 'Crispy, golden hash brown potatoes.', price: 1.29 },
        { name: 'Coca-Cola', image: '/images/coca-cola.jpg', description: 'Refreshing Coca-Cola beverage.', price: 1.99 },
        { name: 'Sprite', image: '/images/sprite.jpg', description: 'Lemon-lime flavored Sprite beverage.', price: 1.99 },
        { name: 'McRib', image: '/images/mcrib.jpg', description: 'Seasoned boneless pork with tangy barbecue sauce and pickles.', price: 5.99 },
        { name: 'Happy Meal', image: '/images/happy-meal.jpg', description: 'Kids meal with an entrée, side, drink, and a toy.', price: 4.99 }
      ]
    };
  },

  inject: ['cart'],
  methods: {
    addToCart(item) {
      this.cart.addItemToCart(item);
      alert(item.name + ' added to cart!');
    }
  }
};
</script>

<style>
.mcdonalds-food {
  text-align: center;
  padding: 20px;
}

.mcdonalds-food h2 {
  margin-bottom: 20px;
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
  height: 320px; 
  box-sizing: border-box; 
}

.item-image {
  width: 100%;
  height: auto;
}

.button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.price {
  font-weight: bold;
  color: #333;
}

.card h3 {
  margin: 0;
}
</style>
