// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Cart from './assets/pages/Cart';
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import Pizza from './assets/pages/Pizza';
import Profile from './assets/pages/Profile';
import NotFound from './assets/pages/NotFound';
import { UserProvider } from './assets/context/UserContext';
import { CartProvider } from './assets/context/CartContext';
import Navbar from './assets/components/Navbar'; // Asegúrate de la ruta correcta

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar /> {/* Agrega el Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
