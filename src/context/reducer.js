/* eslint-disable no-case-declarations */
export const initialState = {
  basket: [],
  user: null,
  shippingData: {},
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_SHIPPING_DATA: "SET_SHIPPING_DATA",
};

export const getBasketTotal = (basket) => {
  // basket?.reduce((amount, item) => amount + item.price, 0);
  let totalPrice = 0;
  for (let i = 0; i < basket.length; i++) {
    totalPrice += basket[i].price;
  }
  return totalPrice;
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
