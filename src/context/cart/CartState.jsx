import { useReducer } from "react";
import { types } from "../../types/types";
import { leerDatosCarro } from "../../utils/appCart";
import CartContext from "./CartContext";

import CartReducer from "./CartReducer";

const initCartData = leerDatosCarro();

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: initCartData,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({
      type: types.ADD_TO_CART,
      payload: item,
    });
  };
  const showHideCart = () => {
    dispatch({
      type: types.SHOW_HIDE_CART,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: types.REMOVE_ITEM,
      payload: id,
    });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
        {children}
    </CartContext.Provider>
  );
};

export default CartState;
