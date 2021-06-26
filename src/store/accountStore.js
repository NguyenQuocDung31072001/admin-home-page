import React, { createContext, useReducer } from "react";

const initialState = {
  data: null,
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
const AccountStore = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AccountContext.Provider value={[state, dispatch]}>
      {children}
    </AccountContext.Provider>
  );
};

export const AccountContext = createContext(initialState);
export default AccountStore;
