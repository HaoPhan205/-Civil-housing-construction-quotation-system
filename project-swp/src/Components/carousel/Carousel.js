import React, { useEffect, useState } from "react";
import "./Carousel.css"; // Đảm bảo bạn có file CSS này với các style cần thiết

export default function Carousel({ interval = 3000, images }) {
  const [activeStep, setActiveStep] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://6601c3c89d7276a755521e4b.mockapi.io/IMAGE"
      );
      const data = await response.json();
      const loadedItems = data.map((image, index) => (
        <img
          className="carousel_pic"
          key={index}
          src={image.img}
          alt={`Slide ${index + 1}`}
          style={{ width: "100%" }}
        />
      ));
      setItems(loadedItems);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % items.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep + items.length - 1) % items.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {items.length > 0 ? items[activeStep] : <p>Loading...</p>}
      </div>
      <div className="carousel-controls">
        <button
          onClick={handleBack}
          disabled={items.length <= 1}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          disabled={items.length <= 1}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeStep ? "active" : ""}`}
            onClick={() => setActiveStep(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
