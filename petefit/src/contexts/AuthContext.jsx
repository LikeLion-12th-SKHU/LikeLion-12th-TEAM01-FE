import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("/api/check-login", {
          credentials: "include",
        });
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error("Failed to check login status", error);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
