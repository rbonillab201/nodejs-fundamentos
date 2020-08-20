let fs = require('fs');
let color = require('colors');

let dato = '';


let mostrarTabla = (base, limite) => {

    console.log('==========================='.green);
    console.log(`         Tabla del ${base}`.yellow);
    console.log('==========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

let creaTablaMultiplica = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`'${base}' debe ser un valor numerico`);
        }

        for (let i = 1; i <= limite; i++) {
            dato += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, dato, err => {
            if (err) reject(err);

            else
                resolve('archivo creado: ' + `tabla-${base}.txt`.cyan);
        });

    });



};

module.exports = {
    creaTablaMultiplica,
    mostrarTabla
};