import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/cart';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';

// Step: 1 - import ToastContainer and its styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        {/* Step 2 - Add ToastContainer */}
        <ToastContainer position="top-center" autoClose={1500} />

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
