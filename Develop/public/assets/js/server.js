const express = require("express");
const path = require("path");
const fs = require("fs");


const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/db', 'db.json'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public', 'notes.html'));
}); 

app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync("./Develop/db.json", "utf8"));
    let notelength = (noteList.length).toString();

    //creates new id and assigns it to each json object
    // .push function to push new note to db.json
    newNote.id = notelength;
    noteList.push(newNote);

    //write the updated data to db.json
    fs.writeFileSync("./Develop/db.json", JSON.stringify(noteList));
    res.json(noteList);
})




app.listen(PORT);
