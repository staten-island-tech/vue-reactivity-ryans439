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

  const removeItemFromCart = (index) => {
    cartState.items.splice(index, 1);
  };

  return {
    addItemToCart,
    getCartItems,
    removeItemFromCart
  };
};
