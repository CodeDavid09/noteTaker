const express = require("express");
const path = require("path");
const fs = require("fs");


const app = express();
const PORT = process.env.PORT || 3001; 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'notes.html'));
}); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', router);
app.use('/notes', router);

app.listen(PORT);
