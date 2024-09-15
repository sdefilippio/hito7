import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);  // Cambié el valor inicial a null

  const login = () => {
    setToken('sample-token');  // Simulación de token
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
