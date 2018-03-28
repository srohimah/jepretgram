var express = require('express');
var router = express.Router();
const {likePhoto} = require('../controllers/like.controller')

router.post('/',likePhoto)

module.exports = router;