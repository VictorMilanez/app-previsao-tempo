import { searchForCityData } from "./services/city.js"
import { displayDataOnScreen } from "./services/data-screen.js";

const btnSearch = document.querySelector('.btn-search');


btnSearch.addEventListener('click', async () => {
    const city = document.getElementById('input-search').value;
    const data = await searchForCityData(city);
    if(validateEmptyInput(city)) return
    displayDataOnScreen(data)

});

document.getElementById('input-search').addEventListener('keyup', async (event) => {
    const city = event.target.value
    const key = event.which || event.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (validateEmptyInput(city)) return
        const data = await searchForCityData(city);
        displayDataOnScreen(data)
    }
})

function validateEmptyInput(city){
    if (city.length === 0){
        alert('Preencha o campo o nome da cidade')
        return true
    }
}




