function displayDataOnScreen(data) {
    document.getElementById('city-name').textContent = data.location.name;

    document.getElementById('data-temp').textContent = data.current.temp_c += '°C';

    document.getElementById('climate-icon').src = data.current.condition.icon

    document.getElementById('weather-conditions').textContent = data.current.condition.text

    document.getElementById('humidity').textContent = data.current.humidity += ' %'

    document.getElementById('wind').textContent = data.current.wind_kph += ' Km/h'

    const airQualityIndex = data.current.air_quality['us-epa-index'];
    const airQualityMessage = getAirQualityMessage(airQualityIndex);
    document.getElementById('air-quality').textContent = airQualityMessage
}


function getAirQualityMessage(index) {
    switch (index) {
        case 1:
            return "Boa qualidade do ar"
        case 2:
            return "Qualidade do ar moderada"
        case 3:
            return "Insalubre para grupos sensíveis"
        case 4:
            return "Qualidade insalubre"
        case 5:
            return "Prejudicial a saúde"
        case 6:
            return "Perigosa a saúde"
    }
}

export { displayDataOnScreen, getAirQualityMessage }