export const initialState = {
  user: null,
  basket: [],
  shippingData: [],
  paymentData: [],
};

export const actionTypes = {
  SET_USER: "SET_USER",
  ADD_TO_BASKET: "ADD_TO_BASKET",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user, // after that, bind this data to app.js so user info will be available in all app
      };
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
