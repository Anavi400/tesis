import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved session in local storage
    const savedUser = localStorage.getItem('comunidad_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData, role = 'user') => {
    // Mock login logic
    const userSession = { ...userData, role };
    setUser(userSession);
    localStorage.setItem('comunidad_user', JSON.stringify(userSession));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('comunidad_user');
  };

  const isAuthenticated = () => !!user;
  const isAdmin = () => user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
