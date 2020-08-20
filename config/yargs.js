const opts = {
    base: {
        alias: 'b',
        required: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Lista las tablas con la base ingresada y hasta un limite', opts)
    .command('crear', 'Crea un archivo en donde se muestra la base mutiplicada hasta el limite', opts)
    .argv;

module.exports = {
    argv
};