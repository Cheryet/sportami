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
app.get("/", (req, res) => {
  res.send("Hello from server 👋🏼");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} 👋🏼`);
});
