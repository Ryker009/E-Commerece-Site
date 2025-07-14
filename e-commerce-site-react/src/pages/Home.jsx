import ProductList from '../components/ProductList';

import ImageSlider from '../components/ImageSlider';

function Home() {
  return (
    <div className="home">

        <ImageSlider />

      <div className="home-header">
        <h1>Featured Products</h1>
      </div>

      <ProductList />
    </div>
  );
}

export default Home;
