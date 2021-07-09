const express = require('express');
const router = express.Router();

const blogControllers = require('../app/controllers/BlogControllers');

router.get('/:slug', blogControllers.show);
router.get('/', blogControllers.index);

module.exports = router;
