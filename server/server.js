// Express Server
const express = require("express");
const bodyParser = require("body-parser");

// Middleware
const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));

//Routes

//Home Route
app.get("/", (req, res) => {
  res.send("Hello from server 👋🏼");
});

//Player Routes
const playerRouter = require("./routes/players");
app.use("/api/players", playerRouter);

//Player_sports Routes
const player_sportsRouter = require("./routes/player_sports");
app.use("/api/player_sports", player_sportsRouter);

//Matches Routes
const matchesRoutes = require("./routes/matches");
app.use("/api/matches", matchesRoutes);

//Reviews Routes
const reviewRouter = require("./routes/reviews");
app.use("/api/reviews", reviewRouter);

// Listening Port for Server
app.listen(port, () => {
  console.log(`Server listening on port ${port} 👋🏼`);
});
