const express = require('express');
const { generateImage } = require('../controllers/dalle.controllers');
const router = express.Router();

router.route('/').post(generateImage);
module.exports = router;
