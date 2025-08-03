import { useEffect, useState } from 'react';
import './ImageSlider.css';

const images = [
  '/img/banner1.jpg',
  '/img/banner2.jpg',
  '/img/banner3.jpg'
];

function ImageSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (i) => {
    setIndex(i);
  };

  return (
    <div className="slider-container">
      <img src={images[index]} alt="Slider" className="slider-image" />

      {/* Buttons */}
      <button className="slider-btn prev" onClick={prevSlide}>❮</button>
      <button className="slider-btn next" onClick={nextSlide}>❯</button>

      {/* Dots */}
      <div className="slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
