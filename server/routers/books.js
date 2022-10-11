const axios = require("axios");
const express = require("express");
const book = express.Router();


book.route("/").post((req, res) => {
  console.log(req.body);
  axios

    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.body.book}&key=AIzaSyA8P9EXfYY5KR9WED7eiD0vufv0JUCatig&maxResults=25`
    )
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => {
      res.send(err);
    });
});


// book.route("/").get((req, res) => {
//   axios
//     .get(
//       `https://www.googleapis.com/books/v1/volumes?q=${req.body.book}&key=AIzaSyA8P9EXfYY5KR9WED7eiD0vufv0JUCatig&maxResults=10`
//     )
//     .then((data) => {
//       res.json(data.data);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = book;
