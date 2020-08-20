// Requireds
const argv = require('./config/yargs').argv;
/*const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla seleccionada tomando la base ingresada', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            default: 10,
            alias: 'l'
        }
    })
    .command('crear', 'Generara un archivo de la tabla base y hasta el limite dado', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            default: 10,
            alias: 'l'
        }
    })
    .argv;*/

const { creaTablaMultiplica, mostrarTabla } = require('./operaciones/multiplicar.js');



// let multiplicar = require('./operaciones/multiplicar.js');

let argv2 = process.argv;
let comando = argv._[0];

let base = 2;

//console.log(argv);
//console.log(comando);


switch (comando) {
    case 'listar':
        //     console.log(comando);
        mostrarTabla(argv.b, argv.l);
        break;

    case 'crear':
        //      console.log(comando, argv.b, argv.l);
        creaTablaMultiplica(argv.b, argv.l)
            .then(archivo => console.log(archivo))
            .catch(error => console.log(`${error}`));
        break;

    default:
        console.log('No está definido el parámetro ingresado');
        break;
}

/*

 
        */

/*
let dato = '';

for (let i = 1; i <= 20; i++) {
    dato += ` ${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, dato, error => {

    if (error) throw error;
    console.log(`Se ha grabado el archivo tabla-${base}.txt`);

});

*/