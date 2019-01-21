require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

/////////////////////////////////////////////////////////
// Configuration
/////////////////////////////////////////////////////////

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  promiseLibrary: global.Promise,
}).then(status => {
  console.info(`DB: connected to: ${process.env.DB_HOST}`);
}).catch(err => {
  console.error(`DB: failed to connect to: ${process.env.DB_HOST}`);
})

/////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////

const myRoute = require("./routes/my-route");

/////////////////////////////////////////////////////////
// Middlewares
/////////////////////////////////////////////////////////

const myMiddleware = require("./middleware/my-middleware");

/////////////////////////////////////////////////////////
// App Use
/////////////////////////////////////////////////////////

app.use("/myRoute", myMiddleware, myRoute);

/////////////////////////////////////////////////////////
// Start Server
/////////////////////////////////////////////////////////

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
