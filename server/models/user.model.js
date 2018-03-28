const mongoose = require('mongoose')
const Schema = mongoose.Schema
const has = require('../middelwares/hashPassword')

module.exports = mongoose.model('User', new Schema({
  name : String,
  email : String,
  password : String,
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }]
  },{
    timestamps : true,
  })
    .pre('save',function(){
      if(this.password)this.password = has.generate(this.password)
  })
)