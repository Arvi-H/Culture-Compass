// food near you
// recipes
// https://api.spoonacular.com/recipes/search?apiKey=6d209e91e3654d81a8a94d054f08f5cb&cuisine=italian

const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios')

// variables
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", express.static('public'));

app.post('/api/location', async (req, res) => {
    const { latitude, longitude } = req.body;
    // Do something with the location data, such as storing it in a database
    console.log(req.body);

    const { data } = await axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`, 
        { 
            headers: {
                'Authorization': 'Bearer ia9ETh9OMhLZ87WkNjnTyHowsIS451M_6bERqT-wy8xrltcDfSa4IRUL7CTCOobvf4D5v9w5Zp7CMHUJmnelrpG5E7JugjcdxzL2jwL8VY98Q-EGw4A8F825RRfLY3Yx'
            }
        }
    );


    return res.json(data);
});

app.listen(3000, () => console.log('Server started on port 3000'));

