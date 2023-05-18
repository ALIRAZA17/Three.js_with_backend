const mongoose = require('mongoose')
const Schema = mongoose.Schema
const experienceSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  company_name: {
    type: String,
    required: true
  },

  iconBg: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  points: {
    type: Array,
    required: true
  }
})

const myExperiences = mongoose.model('Experience', experienceSchema)
module.exports = myExperiences
