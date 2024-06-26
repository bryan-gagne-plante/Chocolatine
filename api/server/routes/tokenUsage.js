const express = require('express');
const router = express.Router();
const controller = require('../controllers/TokenUsageController');
const { requireJwtAuth } = require('../middleware/');

router.get('/', requireJwtAuth, controller);

module.exports = router;