const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Photo', new Schema({
  caption : String,
  photo : String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
  },{
    timestamps : true,
  })
)