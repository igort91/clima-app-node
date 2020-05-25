const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "dirección de la ciudad",
        demand: true
    }
}).argv;



//lugar.getLugarLatLng(argv.direccion).then(console.log).catch(console.log());

const getInfo = async(posicion) => {

    try {
        const ubicacion = await lugar.getLugarLatLng(posicion);
        const temp = await clima.getClima(ubicacion.lat, ubicacion.long);
        return `El clima de ${posicion} es de ${temp}`;
    } catch (e) {
        return `no se pudo determinar el clima de ${posicion}`;
    }

    // salida
    //el clima de xxxx es de yyyy
    //error - > no se pudo determinar el clima de xxxxxxx
};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);