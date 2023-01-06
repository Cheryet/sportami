// Express Server
const express = require("express");
const bodyParser = require("body-parser");

// Middleware
const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

// Routers
const playerRouter = require("./routes/players");
const player_sportsRouter = require("./routes/player_sports");
const matchesRoutes = require("./routes/matches");
const reviewRouter = require("./routes/reviews");

// Routes
app.use("/api/players", playerRouter);
app.use("/api/player_sports", player_sportsRouter);
app.use("/api/matches", matchesRoutes);
app.use("/api/reviews", reviewRouter);

// Home Route
app.get("/", (req, res) => {
  res.send("Hello from server 👋🏼!");
});

// Listening Port for Server
app.listen(port, () => {
  console.log(`Server listening on port ${port} 👋🏼`);
});
