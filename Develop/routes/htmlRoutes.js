const path = require('path');
const router = require('express').Router();


//Set route for index
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html' )));


//Set route for notes
router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});






module.exports = router;
