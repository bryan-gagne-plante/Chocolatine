const express = require('express');
const requireJwtAuth = require('../middleware/requireJwtAuth');
const { getUserRole } = require('../controllers/RoleController');

const router = express.Router();

router.get('/', requireJwtAuth, getUserRole);

module.exports = router;