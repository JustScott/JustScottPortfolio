const express = require('express');
const fs = require('fs');
const path = require('path');


const PORT = 5000;
const app = express();


/* app configurations */
app.use(express.static(path.join(__dirname, '/static')));
app.use(express.json());

/* Routes */
//const routeName = require('./routes/route.js');
//app.use('/api/', routeName);


app.listen(PORT, err => {
    if (err) throw err;
    console.log('Express Server Running At: http://localhost:5000');
});

