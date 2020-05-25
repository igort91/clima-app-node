const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodedUlr = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '61b519f347msh12213e562861ea4p167601jsn28a43f2b308d' }
    });


    let respuesta = await instance.get();
    let data = respuesta.data.Results[0];

    if (data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    let ubicacion = data.name;
    let lat = data.lat;
    let long = data.lon;

    return {
        ubicacion,
        lat,
        long
    }
}





module.exports = { getLugarLatLng }