import { reactive } from 'vue';

const cartState = reactive({
  items: []
});

export const useCart = () => {
  const addItemToCart = (item) => {
    cartState.items.push(item);
  };

  const getCartItems = () => {
    return cartState.items;
  };

  return {
    addItemToCart,
    getCartItems
  };
};
