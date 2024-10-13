const express = require("express");
const cors = require("cors");
const redis = require("redis");

// Create an Express application
const app = express();
const PORT = 5000; // You can change this port if needed

// Enable CORS
app.use(cors());

// Create a Redis client
const client = redis.createClient({
  url: "redis://localhost:6379",
});

// Handle connection errors
client.on("error", (err) => {
  console.error("Redis connection error:", err);
});

// Connect to Redis
client.connect().then(() => {
  console.log("Connected to Redis");

  // Set an example username
  client.set("user_001:name", "Tatang", (err, reply) => {
    if (err) {
      console.error("Error setting value:", err);
    } else {
      console.log("Set operation result:", reply);
    }
  });
});

// API endpoint to get the username
app.get("/api/username", async (req, res) => {
  try {
    const username = await client.get("user_001:name");
    res.json({ username });
  } catch (error) {
    console.error("Error fetching username:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
