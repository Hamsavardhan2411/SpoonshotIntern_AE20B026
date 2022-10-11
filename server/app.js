const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const book = require("./routers/books");
const inventory= require("./routers/inventory")
var bodyParser = require('body-parser')
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
const connectionParams = {
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
};
app.use(bodyParser.json())
mongoose
  .connect(
    "mongodb+srv://hamsavardhan_2411:HAMSA2411@book.uap6gy1.mongodb.net/?retryWrites=true&w=majority",
    connectionParams
  )
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.use("/inventory",inventory)
app.use("/books", book);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
