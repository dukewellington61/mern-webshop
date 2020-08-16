const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API running"));

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/cart", require("./routes/api/cart"));
app.use("/api/line-items", require("./routes/api/line-items"));
app.use("/api/orders", require("./routes/api/orders"));
app.use("/api/checkout", require("./routes/api/checkout"));
app.use("/api/orders", require("./routes/api/orders"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
