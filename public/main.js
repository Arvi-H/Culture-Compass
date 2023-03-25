async function main() {
    const { data } = await axios.get(`https://api.europeana.eu/record/v2/search.json?query=Utah&wskey=elardesitan`)
    let arrData = data.items.fiter(item => item.type == "IMAGE" )
    console.log(arrData)
    return arrData
}

// const setRestaurants = async () => {
//     let restaurants = {
//         url: `https://api.yelp.com/v3/businesses/search?latitude=${}&longitude=${}`,
//         method: 'GET',
//         headers: {
//             'Authorization': 'Bearer ia9ETh9OMhLZ87WkNjnTyHowsIS451M_6bERqT-wy8xrltcDfSa4IRUL7CTCOobvf4D5v9w5Zp7CMHUJmnelrpG5E7JugjcdxzL2jwL8VY98Q-EGw4A8F825RRfLY3Yx'
//         }
//     }

//     return null
// }

// const getRestaurant = async () => {
//     const req = await setRestaurants()
//     const res = await axios(req)
//     let resNearMe = res.data.businesses
//     return resNearMe
// }
