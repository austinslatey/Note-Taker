const express = require('express');
//Import Modules
const path = require('path');
const fs = require('fs');

const htmlRoutes = require('./Develop/routes/htmlRoutes');
const apiRoutes = require('./Develop/routes/apiRoutes');

//Create the server
const app = express();
const PORT = process.env.PORT || 3001;

let notesArr = [];

const dbPath = path.resolve(__dirname, "Develop", "db");
const outputPath = path.join(dbPath, "db.json");

//Enable easy return of jsons (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Telling the server to use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static(path.join(__dirname, 'Develop/public')));



const readandWrite = () => {
    fs.readFile(outputPath, "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        if (data === "") {
            notesArr = [];
        }
        else {
            notesArr = JSON.parse(data);
            updateAndWrite = function () {
                fs.writeFile(outputPath, JSON.stringify(notesArr), function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log("Successfully wrote to file");
                });
            }
        }
    });
}

readandWrite();






//Listen for the given port
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});

