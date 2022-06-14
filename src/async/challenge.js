const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunctions = async (urlApi) => {
    try {
        // const data = await fetchData(urlApi);
        // const character = await fetchData(`${urlApi}${data.results[0].id}`);
        // const origin = await fetchData(character.origin.url);

        const data = await fetchData(urlApi);
        const character = data.results[0];
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch( error ) {
        console.error(error);
    }
};

console.log('Before');
anotherFunctions(API);
console.log('After');