import React, { useState, createContext } from "react";

export const CryptoContext = createContext();

export const UserProvider = props => {
  const [crypto, setCrypto] = useState({});

  return (
    <CryptoContext.Provider value={[crypto, setCrypto]}>
      {props.children}
    </CryptoContext.Provider>
  );
};
