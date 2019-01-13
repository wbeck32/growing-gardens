/*eslint linebreak-style: ["error", "unix"]*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));


// API calls
app.get('/mapsAPICode', function(req, res){
    var URL = 'https://maps.googleapis.com/maps/api/js?key=process.env.API_KEY&callback=initMap';
    //  if (process.env.NODE_ENV === 'production'){
    //      URL += '&key=' + process.env.GOOGLEAPIKEY;
    //  }
    https.get(URL, function(response){
        res.set('Content-Type','text/javascript');
        response.pipe(res);
    });
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
