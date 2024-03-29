import React from "react";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import FeedbackList from "../FeedbackList/FeedbackList";
import "./Feedback.css";

export default function Feedback() {
  return (
    <div className="feedback-container">
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
}
