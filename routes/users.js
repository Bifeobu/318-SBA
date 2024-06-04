const express = require('express');
const router = express.Router();
const users = require('../data/users.js');

//GET
router.get('/', (req, res) => {
    const links = [
        {
            href: 'users/:id',
            rel: ':id',
            type: 'GET',
        },
    ];
    res.json({ users, links });
});

module.exports = router;