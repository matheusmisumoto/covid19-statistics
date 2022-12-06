const path = 'https://disease.sh/v3/covid-19';

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country){
    return fetch(`${path}/countries/${country}`, headers)
        .then((response) => response.json())
}

function getWorld(){
    return fetch(`${path}/all`, headers)
        .then((response) => response.json())
}

const exportObject = {
    getCountry, getWorld
}

export default exportObject;