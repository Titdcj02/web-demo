const express = require('express');
const router = express.Router();

const blogControllers = require('../app/controllers/BlogControllers');

router.use('/:id', blogControllers.show);
router.use('/', blogControllers.index);

module.exports = router;
