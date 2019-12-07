import React from "react";

import Root from "./root";

export const RootStoreContext = React.createContext<Root | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = new Root();
  return (
    <RootStoreContext.Provider value={store}>
      {" "}
      {children}{" "}
    </RootStoreContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(RootStoreContext);

  if (!store) {
    throw new Error("Store must be used within a StoreProvider.");
  }

  return store;
};
