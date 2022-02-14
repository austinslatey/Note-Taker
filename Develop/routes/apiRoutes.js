const router = require('express').Router();


let notesArr = [];

////Set route for returning the notes object
router.get("/notes", (req, res) => {

    res.json(notes);
});

//Delete note by ID
router.delete("/notes/:id", (req, res) => {
    //Filter note by id to delete note from array
    notesArr = notesArr.filter((object) => {
        return object.id !== parseInt(req.params.id)
        
    });
    res.json(notesArr);
    console.log("Note Deleted");
});

//Route to return the notes object

router.get("/notes/:id", (req, res) => {
    res.json(notes.filter(note => note.id === parseInt(req.params.id)));
    console.log(req.params.id);
});

// Post a new note to the server
router.post(`/notes`, (req, res) => {
    let nextNote = req.body;
    nextNote.id = notesArr.length + 1;
    notesArr.push(nextNote);
    console.log(notesArr);
    res.json(notesArr);
});







module.exports = router;