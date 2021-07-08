const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsControllers');

router.get('/:id', newsControllers.show);
router.get('/', newsControllers.index);

module.exports = router;
