var express = require('express');
var router = express.Router();
const {signIn, signUp} = require('../controllers/user.controller')
/* GET users listing. */
router.post('/signin', signIn);
router.post('/signup',signUp)

module.exports = router;
