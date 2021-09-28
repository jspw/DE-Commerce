import { createContext, useState } from "react";
export const StateContext = createContext();

export default function StateContextProvider({ children }) {
  const [isStateChanged, setStateChanged] = useState(false);

  return (
    <StateContext.Provider value={{ isStateChanged, setStateChanged }}>
      {children}
    </StateContext.Provider>
  );
}
