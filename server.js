//Import required modules
const express = require('express');
const path = require('path');
const fs = require('fs');

//Routes for apis
const htmlRoutes = require('./Develop/routes/htmlRoutes');
const apiRoutes = require('./Develop/routes/apiRoutes');

//Create the server
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'Develop/public')));

//Telling the server to use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



//Listen for port 3001
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});

