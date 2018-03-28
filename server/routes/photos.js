var express = require('express');
var router = express.Router();
const multer = require('multer')
const uploadImage = require('../middelwares/upload')
const {verify} = require('../middelwares/authentic')
const {sharePhoto, showPhoto, editCaption, deletePhoto} = require('../controllers/photo.controller')

const upload = multer({
  storage : multer.memoryStorage(),
  limits :{
      fieldSize:10*1024*1024
  }
})

router.get('/', showPhoto)
// router.post('/', upload.single('photo'), uploadImage.sendUploadToGCS, sharePhoto);
router.use(verify)
router.post('/',sharePhoto)
router.put('/:id',editCaption)
router.delete('/:id',deletePhoto)

module.exports = router;
