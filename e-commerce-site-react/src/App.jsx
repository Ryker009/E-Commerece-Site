import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/cart';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
