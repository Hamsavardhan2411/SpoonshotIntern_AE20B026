const axios = require("axios");
const express = require("express");
const inventory = express.Router();
const book = require("../schema/bookSchema");

inventory
  .route("/")
  .post((req, res) => {
    console.log(req.body);
    book
      .create(req.body.addData)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  })
  .get((req, res) => {
    book
      .find({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  })
  .delete((req, res) => {
    book
      .deleteOne({ _id: req.body._id })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });
module.exports = inventory;
