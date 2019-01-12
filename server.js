/*eslint linebreak-style: ["error", "unix"]*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));


// API calls
app.get('/api/hello', (req, res) => {
    res.send({
        toDoList
    });
});

app.post('/api/addItem', (req, res) => {
    // displays in the terminal
    console.log(req.body);
    toDoList.push(req.body.post);
    res.send('Item added!');
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
