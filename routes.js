const express = require('express');
const router = express.Router();

module.exports = router;

const testController = require('./api/controllers/TestController');

router.get('/getList', testController.getList);

