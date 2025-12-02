// Importa la función de suma (Asegúrate de que la ruta sea correcta)
const { strictEqual } = require('assert');
const { suma } = require('../src/app');

strictEqual(suma(1, 2), 3, 'La suma de 1 + 2 debe ser 3');
strictEqual(suma(-1, 1), 0, 'La suma de -1 + 1 debe ser 0');
