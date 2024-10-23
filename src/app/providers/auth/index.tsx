"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch(`/api/user/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const user = await res.json();
        updateLoggedInUser({ userId: user.userId, role: user.role });
      } catch (e) {
        updateLoggedInUser({ userId: null, role: null });
        throw new Error("An error occurred while fetching your account.");
      }
    };

    fetchMe();
  }, []);

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
