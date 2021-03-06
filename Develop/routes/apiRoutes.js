const router = require('express').Router();
const fs = require('fs');
const path = require('path');


let notesArr = [];

const dbPath = path.resolve(__dirname, "../", "db");
const outputPath = path.join(dbPath, "db.json");

const readandWrite = () => {
    fs.readFile(outputPath, "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        if (data === "") {
            notesArr = [];
        }
        else {
            fs.writeFile(outputPath, JSON.stringify(notesArr), function (err) {
                if (err) {
                    throw err;
                }
                console.log("Success!");
            });
        }
    });
}

//Route to return notesArr object
router.get("/notes", (req, res) => {

    res.json(notesArr);
});

//Delete note by ID
router.delete("/notes/:id", (req, res) => {
    //Filter id's to delete from NotesArr
    notesArr = notesArr.filter((obj) => {
        return obj.id !== parseInt(req.params.id)

    });
    res.json(notesArr);
    console.log("Note Deleted");
});

//Route to return the notes object

router.get("/notes/:id", (req, res) => {
    res.json(notesArr.filter(note => note.id === parseInt(req.params.id)));
});

// post new notes
router.post(`/notes`, (req, res) => {
    let nextNote = req.body;
    nextNote.id = notesArr.length + 1;
    notesArr.push(nextNote);
    console.log(notesArr);
    readandWrite();
    res.json(notesArr);
});







module.exports = router;