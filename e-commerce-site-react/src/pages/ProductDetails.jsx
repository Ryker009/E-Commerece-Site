import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import products from '../data';
import '../App.css';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      document.title = `ShopMart - ${product.name}`;
    } else {
      document.title = 'Product Not Found';
    }
  }, [product]);

  if (!product) {
    return <h2 style={{ padding: '2rem' }}>Product not found.</h2>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-detail-img" />
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque vel leo euismod gravida.</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

export default ProductDetails;
