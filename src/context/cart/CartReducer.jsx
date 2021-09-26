import { types } from "../../types/types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case types.SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case types.ADD_TO_CART: {
      return {
        ...state,
        cartItems: action.payload,
      };
    }
    case types.REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
