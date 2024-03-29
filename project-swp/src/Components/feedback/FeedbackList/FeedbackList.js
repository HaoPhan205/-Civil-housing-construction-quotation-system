import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Rating,
} from "@mui/material";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://6606e34bbe53febb857ed59e.mockapi.io/Feedback")
      .then((response) => {
        setFeedbacks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the feedbacks:", error);
        setError("Failed to fetch feedback. Please try again later.");
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading)
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  if (error)
    return (
      <Container>
        <Typography color="error">{error}</Typography>
      </Container>
    );

  return (
    <Container>
      <Box
        sx={{
          maxHeight: "500px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          borderRadius: "4px",
          mt: 2,
          mb: 2,
          padding: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <Box
              key={feedback.id}
              sx={{
                marginBottom: 2,
                padding: 1,
                borderBottom: "1px solid #eee",
              }}
            >
              <Typography variant="h6">{feedback.name}</Typography>
              <Typography variant="body2">
                {formatDate(feedback.submittedAt)}
              </Typography>
              <Rating
                name="read-only"
                value={feedback.rating}
                readOnly
                sx={{ color: "#ffeb3b" }}
              />
              <Typography variant="body1">{feedback.message}</Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1">
            No feedback has been submitted yet.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default FeedbackList;
