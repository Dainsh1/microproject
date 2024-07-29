const express = require('express');
const path = require('path');
// Creating an instance of express named "app" by convention:
const app = express();
const port = 3333;  //
// importing the json file
const data = require('./data/data.json');
//  serves static files 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/products', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);  // url for running the app
});
