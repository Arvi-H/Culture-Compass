// async function main() {
//     const { data } = await axios.get(`https://api.europeana.eu/record/v2/search.json?query=Utah&wskey=elardesitan`)
//     let arrData = data.items.fiter(item => item.type == "IMAGE" )
//     console.log(arrData)
//     return arrData
// }

function test(){
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

function test2() {
    const targetElement = document.querySelector('#art');
    axios.get("https://api.spoonacular.com/recipes/search?apiKey=6d209e91e3654d81a8a94d054f08f5cb&cuisine=italian")
        .then(foodData => {
            console.log(foodData)
            let food = foodData.data.results
            food.map(interstellar => {
                let nameElement = document.createElement('p');
                nameElement.textContent = `Title: ${interstellar.title}`;
                targetElement.appendChild(nameElement);
            })
        })
}

async function test3() {
    const targetElement = document.querySelector('#music');
    const { data } = await axios.get("https://api.spotify.com/v1/search?q=genre%3A%22irish%22&type=track", 
    {
        headers : {
            'Authorization': 'Bearer BQD-o8djfRmvL-7kqMUCP1TBJm2eEr1kW39_QXChpluymTl8MbIxeRGgYaehpgRfS1nOODdj9so4Bpo9BugM1jlM3tmaAwmW7WLs_DZOTB0FLTcjv89eaUaFbukObaPCh8kmNcINb_-TO5PmQ6gd-HCpHwQqMsOq-s_2oYN1D40MKo9O2r07dc2dlQmGD1uQCBF-'
        }
    })
    console.log(data.tracks.items)
}