const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const userRouter = require("./routes/users.js")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Express', message: 'Hello!' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About', message: 'About Page' });
});
// app.engine("template", (filePath, options, callback) => {
//     fs.readFile(filePath, (err, content) => )
// })

// app.set("views", "./views")
// app.set("view engine", "template")

app.get('/', (req, res) => {
    console.log("first")
    res.send('<h1>Welcome!<h1>');
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
});

