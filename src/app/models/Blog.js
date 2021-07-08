
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Blog = new Schema({
  name: String,
  description: String,
  image: String,
  creatAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Blog', Blog,'Blogs');
