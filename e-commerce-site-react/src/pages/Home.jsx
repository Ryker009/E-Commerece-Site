import ProductList from '../components/ProductList';
import ImageSlider from '../components/ImageSlider';

import Footer from "../components/Footer";

function Home() {
  return (

    <div>

      <main className="products-container">
      <div className="home">

        <ImageSlider />

      <div className="home-header">
        <h1>Featured Products</h1>
      </div>

      <ProductList />
    </div>
    </main>
    <Footer />
    </div>
    
    
  );
}

export default Home;
