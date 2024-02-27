const { connect } = require("mongoose");
require("dotenv").config();

// Connect to the database
try {
  connect(process.env.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected to the database"));
} catch (error) {
  console.error("Failed to connect to the database:", error);
}
