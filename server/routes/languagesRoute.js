const express = require('express');
const router = express.Router();
const controller = require('../controller/languagesController');

router.get('/', async (req, res) => {
    const response = controller.language_get_all();

    res.send(await response);
});

module.exports = router;
