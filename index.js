const express = require('express');
const app = express();
const PORT = 3000;
const fs = require("fs");
const userRouter = require("./routes/users.js")

app.set("views", "./views")
app.set("view engine", "html")

app.get('/', (req, res) => {
    console.log("first")
    res.send('<h1>Welcome!<h1>');
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
});

