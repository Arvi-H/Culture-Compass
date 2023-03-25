const axios = require('axios')
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const exp = require('constants');

// variables
let loc = {lat: 0, long: 0}
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'))


app.post('/api/location', (req, res) => {
    const { latitude, longitude } = req.body;
    // Do something with the location data, such as storing it in a database
    console.log(req.body);
    loc.lat = latitude
    loc.long = longitude
    res.json({ message: 'Location received' });
});

app.get('/', (req, res) => {
    // find the path to file
    // send the file
    res.send()
});
console.log(loc)

const getRestaurants = async () => {
    let restaurants = {
        url: `https://api.yelp.com/v3/businesses/search?latitude=${loc.lat}&longitude=${loc.long}`,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ia9ETh9OMhLZ87WkNjnTyHowsIS451M_6bERqT-wy8xrltcDfSa4IRUL7CTCOobvf4D5v9w5Zp7CMHUJmnelrpG5E7JugjcdxzL2jwL8VY98Q-EGw4A8F825RRfLY3Yx'
        }
    }
    return restaurants
}

app.listen(3000, () => console.log('Server started on port 3000'));

