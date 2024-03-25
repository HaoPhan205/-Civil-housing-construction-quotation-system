import { IconButton, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Carousel.css";

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
    <div class="carousel-container">
      <div className="carousel_container">
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {items.length > 0 ? items[activeStep] : <p>Loading...</p>}
        </Paper>
        <div className="carousel_controls">
          <IconButton
            onClick={handleBack}
            disabled={items.length <= 1}
            aria-label="Previous slide"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={items.length <= 1}
            aria-label="Next slide"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <div className="carousel_indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeStep ? "active" : ""}`}
              onClick={() => setActiveStep(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
