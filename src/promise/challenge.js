const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

// fetchData(API)
//     .then(data => {
//         console.log(data.info.count);
//         return fetchData(`${API}${data.results[0].id}`);
//     })
//     .then(data => {
//         console.log(data.name);
//         return fetchData(data.origin.url);
//     })
//     .then(data => {
//         console.log(data.dimension);
//     })
//     .catch(err => console.error(err));


// simplifying code:

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        console.log(data.results[0].name)
        return fetchData(data.results[0].origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err));

