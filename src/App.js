import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LaptopDetailPage from './pages/LaptopDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import AuthContextProvider from './contexts/AuthContext';
import LaptopContextProvider from './contexts/LaptopContext';
import CartContextProvider from './contexts/CartContext';
import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <LaptopContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/laptop/:id" component={LaptopDetailPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </CartContextProvider>
      </LaptopContextProvider>
    </AuthContextProvider>
  );
}

export default App;
