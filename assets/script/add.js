const cities = ['Москва', 'Архангельск', 'Нью-Йорк','Токио'];
let temperature = [];

//Получение температуры каждого города
for (let i = 0; i < cities.length; i++) {
    let temp = parseFloat(prompt(`Ввведите температуру для города  ${cities[i]}`));
    temperature.push(Number(temp));
    }



//записываемзначения
const temperatureList = document.getElementById('temperatureList');
for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${cities[i]}: ${temperature[i]}°C`;
    temperatureList.appendChild(listItem);
}

//Вычисление минимальной температуры
//Вычисление максимальную температуры
let maxTemp = -Infinity; 
let minTemp = Infinity;

for (const temp of temperature) {
    if (temp > maxTemp) maxTemp = temp;
    if (temp < minTemp) minTemp = temp;
}


document.getElementById('maxTemp').textContent = `Максимальная температура: ${maxTemp}°C`;
document.getElementById('minTemp').textContent = `Минимальная температура: ${minTemp}°C`;