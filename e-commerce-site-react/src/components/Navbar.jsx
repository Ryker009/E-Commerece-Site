import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="logo">🛒ShopMart</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart ({cart.length})</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
