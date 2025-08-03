function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>🛒 ShopMart</h2>
          <p>Your go-to store for everything!</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@shopmart.com</p>
          <p>Phone: +91-0000000000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopMart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;