import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../services/authService';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await authService.isAuthenticated();
      setIsAuthenticated(isAuthenticated);
    };
    checkAuth();
  }, []);

  const login = async (credentials) => {
    const success = await authService.login(credentials);
    if (success) {
      setIsAuthenticated(true);
      history.push('/');
    }
  };

  const register = async (credentials) => {
    const success = await authService.register(credentials);
    if (success) {
      setIsAuthenticated(true);
      history.push('/');
    }
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
