require("./db/config/config");

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./db/database");
const user = require("./db/routes/user");
const profile = require("./db/routes/profile");
const posts = require("./db/routes/posts");

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  const app = express();

  const port = process.env.PORT;

  app.use(morgan("combined"));
  app.use(express.static("assets"));
  app.use(bodyParser.json({ type: "*/*" }));

  app.use("/user", user);
  app.use("/profile", profile);
  app.use("/posts", posts);

  app.listen(port, () => {
    console.log(`Server - db is running on port ${port}`);
  });
});
