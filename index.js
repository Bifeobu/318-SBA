const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const usersRouter = require("./routes/users.js")

//serve static files 
app.use(express.static(path.join(__dirname, './styles')));

//template engine with pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//API Routes
// app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
    res.render('index', { title: 'Express Corp', message: 'Welcome to Express Corp!', content: 'This is the records site for the employees of Express Corp.' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About', message: 'About Page', content: 'At Express Corp we do our best to keep a great environment for our employees so in return we provide the most optimal service for our clients' });
});

app.get('/', (req, res) => {
    console.log("first")
    res.send('<h1>Welcome!<h1>');
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
});

