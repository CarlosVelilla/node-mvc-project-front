import { createContext, useContext, useReducer, useEffect } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state] = useReducer(reducer, initialState);

  // UPDATE DATA IN LOCAL STORAGE WHENEVER AN EVENT IS TRIGGERED
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }, [state]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
