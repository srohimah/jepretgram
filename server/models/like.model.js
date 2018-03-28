const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Like', new Schema({
  photo: { type: Schema.Types.ObjectId, ref: 'Photo' },
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },{
    timestamps : true,
  })
)