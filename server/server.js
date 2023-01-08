// Express Server
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8001;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

// Routers
const userRouter = require("./routes/users");
const sportsRouter = require("./routes/sports");
const user_sportsRouter = require("./routes/user_sports");
const matchesRoutes = require("./routes/matches");
const reviewRouter = require("./routes/reviews");
const loginRouter = require("./routes/login");

// Routes
app.use("/api/users", userRouter);
app.use("/api/sports", sportsRouter);
app.use("/api/user_sports", user_sportsRouter);
app.use("/api/matches", matchesRoutes);
app.use("/api/reviews", reviewRouter);
app.use("/api/login", loginRouter);

// Home Route
app.get("/", (req, res) => {
  res.send("Hello from server 👋🏼!");
});

// Listening Port for Server
app.listen(port, () => {
  console.log(`Server listening on port ${port} 👋🏼`);
});
