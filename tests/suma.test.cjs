const { strictEqual } = require('assert');
const { suma } = require('../src/app'); 

strictEqual(suma(1, 2), 3, 'La suma de 1 + 2 debe ser 3');
// ... otros tests