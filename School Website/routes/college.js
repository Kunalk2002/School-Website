const path = require('path');

const express = require('express');
const collegeController = require('../controllers/college');

const router = express.Router();

router.get('/', collegeController.getIndex);

module.exports = router;