const Like = require('../models/like.model')
module.exports = {
  likePhoto (req, res){
    Like.create({
      user: req.body.user,
      photo: req.body.photo,
    }).then(data=>{
        res.send(data)
    }).catch(err=>res.send(err))
  }
}