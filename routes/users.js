const express = require('express');
const router = express.Router();
const users = require('../data/users.js');

//GET
router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;