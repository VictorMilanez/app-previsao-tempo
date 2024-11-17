import { apiKey } from "./config-api-key.js";

const baseUrl = 'http://api.weatherapi.com/v1'

async function searchForCityData(city) {
    const apiUrl = `${baseUrl}/current.json?key=${apiKey}&q=${city}&aqi=yes&lang=pt`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        alert('Cidade não encontrada!')
        return
    }

    return response.json()
}

export { searchForCityData }