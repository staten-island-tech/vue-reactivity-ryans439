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
        { name: 'Big Mac', image: 'https://d3bjzufjcawald.cloudfront.net/public/web/2024-03-06/65e82c80d0140/Menu_Burgers_500x500_BigMac-500.jpg', description: 'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.', price: 5.99 },
        { name: 'Quarter Pounder', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJRYkXJ3Cxad1r9HzoAClABOAi1PR9Fv_Rw&s', description: 'Quarter-pound beef patty with cheese, pickles, onions, mustard, and ketchup.', price: 6.49 },
        { name: 'French Fries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuh7ctH2K0u7YC8pjXfhuar5PwMr9xAmJPw&s', description: 'Crispy golden French fries, perfect for any meal.', price: 2.49 },
        { name: 'McFlurry', image: 'https://lifestyleofafoodie.com/wp-content/uploads/2022/07/Mcdonalds-Oreo-mc-flurry-7-of-12-500x500.jpg', description: 'Creamy soft serve ice cream blended with your choice of candy or cookies.', price: 3.99 },
        { name: 'Apple Pie', image: 'https://www.emmymade.com/wp-content/uploads/2021/11/Tiktok_McD_apple_pie-500x500.jpeg', description: 'Warm, flaky pastry filled with sweet apple filling.', price: 1.29 },
        { name: 'Crispy Chicken Sandwich', image: 'https://img.wattagnet.com/files/base/wattglobalmedia/all/image/2023/12/McCrispy.6570a7b19a1a6.png?auto=format%2Ccompress&fit=max&q=70&w=1200', description: 'Crispy chicken filet with lettuce, tomato, and mayo on a toasted bun.', price: 4.99 },
        { name: 'McChicken', image: 'https://mcdonalds.bg/wp-content/uploads/2023/11/mcchicken_500x500.png', description: 'Classic McChicken sandwich with lettuce and mayo.', price: 3.49 },
        { name: 'Filet-O-Fish', image: 'https://mcdonalds.com.hk/wp-content/uploads/2020/07/MDS200401_SC_PM_ALC_500-4.png', description: 'Fish filet with tartar sauce and cheese on a steamed bun.', price: 4.19 },
        { name: 'Chicken McNuggets', image: 'https://mcdonalds.bg/wp-content/uploads/2023/01/BG_CSO_2009.png', description: 'Tender, juicy chicken nuggets served with your choice of dipping sauce.', price: 4.49 },
        { name: 'Sausage McMuffin', image: 'https://carmyy.com/wp-content/uploads/2021/12/Sausage-Egg-Breakfast-Sandwich-6-500x500.jpg', description: 'Sausage patty with cheese on a toasted English muffin.', price: 2.79 },
        { name: 'Egg McMuffin', image: 'https://www.favfamilyrecipes.com/wp-content/uploads/2024/01/Assembled-Egg-McMuffin-500x500.jpg', description: 'Egg, Canadian bacon, and cheese on a toasted English muffin.', price: 3.99 },
        { name: 'Hotcakes', image: 'https://mcdonalds.com.hk/wp-content/uploads/2020/04/MDS200401_SC_AM-ALC_500-14.png', description: 'Fluffy pancakes served with syrup and butter.', price: 3.49 },
        { name: 'Hash Browns', image: 'https://www.mcdonalds.com.sg/sites/default/files/2022-01/Hash_Brown.png', description: 'Crispy, golden hash brown potatoes.', price: 1.29 },
        { name: 'Coca-Cola', image: 'https://www.mcdonalds.be/_webdata/product-images/12100825_Update_Drinks-Logos_500x50012.png', description: 'Refreshing Coca-Cola beverage.', price: 1.99 },
        { name: 'Sprite', image: 'https://www.mcdonalds.be/_webdata/product-images/12100825_Update_Drinks-Logos_500x500-01.png', description: 'Lemon-lime flavored Sprite beverage.', price: 1.99 },
        { name: 'McRib', image: 'https://www.thecookierookie.com/wp-content/uploads/2021/01/copycat-mcrib-sandwich-recipe-3-500x500.jpg', description: 'Seasoned boneless pork with tangy barbecue sauce and pickles.', price: 5.99 },
        { name: 'Happy Meal', image: 'https://emofly.b-cdn.net/hbd_exvhac6ayb3ZKT/width:1080/plain/https://storage.googleapis.com/takeapp/media/cm02a7m9z00060cm8hmdbhd9h.png', description: 'Kids meal with an entrée, side, drink, and a toy.', price: 4.99 }
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
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  text-align: left;
  vertical-align: top;
  height: 425px; 
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
  margin-bottom: 20px; 
}

.price {
  font-weight: bold;
  color: #333;
}

.card h3 {
  margin: 0;
}

</style>