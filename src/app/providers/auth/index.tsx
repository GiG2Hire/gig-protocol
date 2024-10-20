"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null);

  function updateLoggedInUser(userData) {
    setUserId(userData.userId);
    setRole(userData.role);
  }

  function resetLoggedInUser() {
    setUserId(null);
    setRole(null);
  }

  return (
    <AuthContext.Provider
      value={{ userId, role, updateLoggedInUser, resetLoggedInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
