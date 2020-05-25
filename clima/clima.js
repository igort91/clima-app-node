const axios = require('axios');


const getClima = async(lat, lon) => {
    const apiKey = '3431df1cc8b23315b4e59f81ebcf1ae3';

    const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

    return clima.data.main.temp;
}

module.exports = {
    getClima
}