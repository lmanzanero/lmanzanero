const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin');

router.get('/', AdminController.admin_login);


module.exports = router;