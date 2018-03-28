const Photo = require('../models/photo.model')
module.exports = {
  showPhoto (req, res){
    Photo.find().then(photo=>{
      res.send(photo)
    }).catch(err=>res.send(err))
  },
  sharePhoto (req, res){
    Photo.create({
      caption: req.body.caption,
      // photo: req.file.cloudStoragePublicUrl,
      photo: req.body.photo,
    }).then(data=>{
        res.send(data)
    }).catch(err=>res.send(err))
  },
  editCaption (req, res){
    Photo.findByIdAndUpdate({_id:req.params.id},req.body).then(photo=>{
      res.send(photo)
    }).catch(err=>res.send(err))
  },
  deletePhoto (req, res){
    Photo.findByIdAndRemove({_id:req.params.id}).then(photo=>{
      res.send(photo)
    }).catch(err=>res.send(err))
  }
}