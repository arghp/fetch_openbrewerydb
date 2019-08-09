// Express initialization
const express = require('express');
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());

app.get('/search/:query', function (req, res) {
    // console.log(req.params.query);
    // grab query and fetch
    fetch('https://api.openbrewerydb.org/breweries/search?query=' + req.params.query)
    .then(response => 
        response.json()
    )
    .then((data) => {
        res.send(data);
    })
    .catch(e => console.log(e));
});

app.listen(process.env.PORT || 3000);