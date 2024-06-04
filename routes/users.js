const express = require('express');
const router = express.Router();
const users = require('../data/users.js');

//middleware
router.use((req, res, next) => {
    console.log('Router-level middleware');
    next();
});

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

//GET a single item by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == parseInt(req.params.id));
  
    if (!user) return res.status(404).send('User not found');

    res.json({ user, links });
  });

//POST(create new user)
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        gender: req.body.gender,
        job_title: req.body.job_title,
        email: req.body.email,
    };
    users.push(newItem);
    res.status(201).json(newUser);
});  

//PUT(update user by ID)
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');

    user.name = req.body.name;
    res.json(user);
});

//DELETE(delete user by ID)
router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');

    users.splice(userIndex, 1);
    res.status(204).send();
});
  

module.exports = router;