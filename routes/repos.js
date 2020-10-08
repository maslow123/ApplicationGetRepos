const express = require('express');
const router = express.Router();
const reposController = require('../controllers/repos');
const checkAuth = require('../middleware/check-auth');

router.get('/', checkAuth, reposController.getRepos);

module.exports = router;
