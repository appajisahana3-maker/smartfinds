const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    service: "SmartFinds API",
    version: "1.0.0"
  });
});

app.get("/api/search", (req, res) => {
  const query = String(req.query.q || "").trim();

  if (!query) {
    return res.status(400).json({
      error: "Search query is required"
    });
  }

  res.json({
    query: query,
    products: [],
    message: "SmartFinds API is ready for retailer integration."
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SmartFinds API running on port ${PORT}`);
});
