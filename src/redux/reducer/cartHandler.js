const cart = [];

const CartHandler = (state = cart, action) => {
  const product = action.payload;
  const exist = state.find((existingProduct) => existingProduct.id === product.id);

  switch (action.type) {
    case "ADDTOCART":
      if (exist) {
        return state.map((item) =>
          item.id === product.id ? { ...product, count: item.count + 1 } : item
        );
      } else {
        return [...state, { ...product, count: 1 }];
      }
      break;

    case "REMOVEFROMCART":
      if (exist.count === 1) {
        return state.filter((item) => item.id !== product.id);
      } else {
        return state.map((item) => 
          item.id === product.id ? { ...product, count: item.count - 1 } : item
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default CartHandler;
