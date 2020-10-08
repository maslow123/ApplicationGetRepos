const express = require('express');
const router = express.Router();
const reposController = require('../controllers/repos');

router.get('/:username', reposController.getRepos);

module.exports = router;
