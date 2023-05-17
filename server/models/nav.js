const mongoose = require('mongoose')
const Schema = mongoose.Schema
const navSchema = new Schema({
  myid: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const Navlink = mongoose.model('Navlink', navSchema)
module.exports = Navlink
