//globalstate
import React, { useState, createContext } from "react";

const GlobalStateContext = createContext();

const GlobalStateProviders = ({ children }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("2023-12-08");

  const value = {
    origin,
    setOrigin,
    destination,
    setDestination,
    date,
    setDate,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProviders };
