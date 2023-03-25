function sendLocationToBackend() {
    const location = { 
        lat: localStorage.getItem("latitude"), 
        lon: localStorage.getItem("longitude") 
    };
    // debugger;
    fetch('/api/location', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(location),
    })
    .then(response =>{
        let arrData = response
        const targetElement = document.querySelector('#yelp');
        arrData.map(d => {
            let nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${d.name}`;
            targetElement.appendChild(nameElement);
        })
    })
    .catch(error => console.error(error));
}

function sendEventToBackend() {
    const location = { 
        lat: localStorage.getItem("latitude"), 
        lon: localStorage.getItem("longitude") 
    };
    // debugger;
    fetch('/api/events', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(location),
    })
    .then(response =>{
        console.log("hi")
        let arrData = response
        console.log(arrData)
        const targetElement = document.querySelector('#events');
        arrData.map(d => {
            let nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${d.title}`;
            targetElement.appendChild(nameElement);
        })
    })
    .catch(error => console.error(error));
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        sendLocationToBackend()
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    localStorage.setItem("latitude", latitude);
    localStorage.setItem("longitude", longitude);
}


const artHandler = () => {
    axios.get(`https://api.europeana.eu/record/v2/search.json?query=Utah&wskey=elardesitan`)
        .then(data => {
            let arrData = data.data.items.filter(item => item.type == "IMAGE")
            const targetElement = document.querySelector('#art');
            arrData.map(d => {
                let nameElement = document.createElement('p');
                nameElement.textContent = `Name: ${d.completeness}`;
                targetElement.appendChild(nameElement);
            })
            // Find the HTML element where you want to display the data
        
            // Create HTML elements to display the data
            
            // const ageElement = document.createElement('p');
            // ageElement.textContent = `Age: ${data.age}`;
            // const emailElement = document.createElement('p');
            // emailElement.textContent = `Email: ${data.email}`;
            // const avatarElement = document.createElement('img');
            // avatarElement.src = data.avatar;
            // avatarElement.alt = `${data.name}'s avatar`;

            // Add the HTML elements to the target element
            
            // targetElement.appendChild(ageElement);
            // targetElement.appendChild(emailElement);
            // targetElement.appendChild(avatarElement);
        })
}

function foodHandler() {
    const targetElement = document.querySelector('#food');
    axios.get("https://api.spoonacular.com/recipes/search?apiKey=6d209e91e3654d81a8a94d054f08f5cb&cuisine=italian")
        .then(foodData => {
            let food = foodData.data.results
            food.map(interstellar => {
                let div = document.createElement('div');
                div.classList.add('food-item');

                let link = document.createElement('a');
                let image = document.createElement('img');
                image.src = `https://spoonacular.com/recipeImages/${interstellar.image}`;
                image.alt = interstellar.title;
                link.href = interstellar.sourceUrl;
                link.target = "_blank";
                link.appendChild(image);
                div.appendChild(link);

                let nameElement = document.createElement('p');
                nameElement.textContent = interstellar.title;
                div.appendChild(nameElement);

                targetElement.appendChild(div);
            })
        }) 
}

const musicHandler = () => {
    const targetElement = document.querySelector('#music');
    const { data } = axios.get("https://api.spotify.com/v1/search?q=genre%3A%22irish%22&type=track", 
    {
        headers : {
            'Authorization': 'Bearer BQD-o8djfRmvL-7kqMUCP1TBJm2eEr1kW39_QXChpluymTl8MbIxeRGgYaehpgRfS1nOODdj9so4Bpo9BugM1jlM3tmaAwmW7WLs_DZOTB0FLTcjv89eaUaFbukObaPCh8kmNcINb_-TO5PmQ6gd-HCpHwQqMsOq-s_2oYN1D40MKo9O2r07dc2dlQmGD1uQCBF-'
        }
    })
    console.log(data.tracks.items)
}

function dropdown() {
    const targetElement = document.querySelector('#options');
    let test = ["italian", "french", "mexican"];
    
    for (let i = 0; i < test.length; i++) {
        let newEl = document.createElement('option');
        newEl.textContent = test[i];
        targetElement.appendChild(newEl);
    } 
}

function storeCulture() {
    const selectHeritage = document.querySelector('#options');
    const selectedHeritage = selectHeritage.value;
    localStorage.setItem('culture', selectedHeritage);

    foodHandler();
}