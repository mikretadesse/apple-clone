import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Import routes
import installRoutes from "./routes/installRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import iphoneRoutes from "./routes/iphoneRoutes.js";

const app = express(); //  define app first
const port = 2024;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Routes
app.use("/install", installRoutes);
app.use("/add-product", productRoutes);
app.use("/iphone", iphoneRoutes);

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});

