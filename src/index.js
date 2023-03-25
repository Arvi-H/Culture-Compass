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
    let latitude = req.body.lat
    let longitude = req.body.lon

    let b = {
        url: `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer IiZdQcLmuvL3N4vMa_6G7rftMMgXbAXpMkcl0pvC1bseuPwz1lf6bSxy5aafRTTkeYiHyNK_OzjPUCs1TTKSuu_8IZtR294ZmMOB2BglZRAt0tSeQyxsnuCrP0gfZHYx'
        }
    }

    const response = await axios(b)
    return response.data.businesses
});

app.post('/api/events', async (req, res) => {
    let latitude = req.body.lat
    let longitude = req.body.lon

    let b = {
        url: `https://api.predicthq.com/v1/events/`,
        method: 'GET',
        headers: {
            'Authorization': `Bearer E0LkleLIZpH6P0gWgJIBae0XCVfNmezeC5etlYrz`,
            'Accept': 'application/json'
        },
        params: {
            'location_around.origin': `${latitude}, ${longitude}`
        }
    }

    const response = await axios(b)
    return response.data.results
    
});





app.listen(3000, () => console.log('Server started on port 3000'));

