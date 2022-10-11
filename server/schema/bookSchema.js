const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let bookSchema = new Schema({
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  publisher: { type: String},
  pages: {type: Number,reuired:true},

});
const book = mongoose.model('book',bookSchema)

module.exports= book