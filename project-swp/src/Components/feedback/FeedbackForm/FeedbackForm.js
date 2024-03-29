import React, { useState } from "react";
import axios from "axios";
import "./FeedbackForm.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [rating, setRating] = useState(0);

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !feedback.name.trim() ||
      !feedback.email.trim() ||
      !feedback.message.trim() ||
      rating < 1
    ) {
      alert("Please fill all the fields and provide a rating.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(feedback.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const submissionData = {
      ...feedback,
      rating,
      submittedAt: new Date().toISOString(),
    };

    try {
      await axios.post(
        "https://6606e34bbe53febb857ed59e.mockapi.io/Feedback",
        submissionData
      );
      alert("Feedback submitted successfully");
      setFeedback({ name: "", email: "", message: "" });
      setRating(0);
    } catch (error) {
      console.error("Failed to submit feedback", error);
      alert("Failed to submit feedback. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <header className="form-title">ĐÁNH GIÁ KHÁCH HÀNG</header>
      <input
        type="text"
        name="name"
        placeholder="Nhập tên của bạn"
        value={feedback.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Nhập email của bạn"
        value={feedback.email}
        onChange={handleChange}
      />

      <textarea
        className="feedback-form"
        name="message"
        placeholder="Đánh giá của bạn"
        value={feedback.message}
        onChange={handleChange}
      ></textarea>

      <Box sx={{ "& > legend": { mt: 2 } }} className="rating-container">
        <Typography component="legend">Your Rating</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          sx={{
            color: "#ffeb3b",
          }}
        />
      </Box>

      <button type="submit" className="submit-feedback-button">
        Gửi đánh giá
      </button>
    </form>
  );
};

export default FeedbackForm;
