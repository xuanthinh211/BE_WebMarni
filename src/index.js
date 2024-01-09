const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3005;

const route = require("./routes");

const connection_url =
  "mongodb+srv://20521994:hieuthuan3012@thuan.nrbfrbm.mongodb.net/?retryWrites=true&w=majority";

try {
  mongoose.connect(connection_url);
  console.log("database successfully connected");
} catch (error) {
  throw error;
}

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
//app.use(morgan("combined"));
// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

//Home, search, contact

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
