require("./db/config/config");

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");
const db = require("./db/database");
const user = require("./db/routes/user");

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  const app = express();

  const port = process.env.PORT;

  app.use(morgan("combined"));
  app.use(express.static("assets"));
  app.use(bodyParser.json({ type: "*/*" }));

  app.use(passport.initialize());
  require("./db/services/passport")(passport);

  app.use("/", user);

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server - db is running on port ${port}`);
  });
});
