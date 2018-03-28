const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Photo', new Schema({
  caption : String,
  photo : String,
  },{
    timestamps : true,
  })
)