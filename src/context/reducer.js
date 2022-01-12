/* eslint-disable no-case-declarations */
export const initialState = {
  basket: [],
  user: null,
  shippingData: {},
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  // ADD_QUANTITY: "ADD_QUANTITY",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_SHIPPING_DATA: "SET_SHIPPING_DATA",
};

export const getBasketQuantity = (basket) => {
  let totalQuantity = 0;
  for (let i = 0; i < basket.length; i++) {
    totalQuantity += basket[i].quantity;
  }
  return totalQuantity;
};

export const getBasketTotal = (basket) => {
  // basket?.reduce((amount, item) => amount + item.price, 0);
  let totalPrice = 0;
  for (let i = 0; i < basket.length; i++) {
    totalPrice += basket[i].price * basket[i].quantity;
  }
  return totalPrice;
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        basket: state.basket.filter((element) => element.orderId !== action.id),
      };
    // case "ADD_QUANTITY":
    //   const item = state.basket.filter((element) => element.orderId === action.id)
    //   return {
    //     ...state,
    //     basket: [...state.basket, action.item],
    //   };
    default:
      return state;
  }
};

export default reducer;
