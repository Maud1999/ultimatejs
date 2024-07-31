/**
 * Crear algoritmo que tome un array de 
 * objetos y devuelva un array de pares
 */
let array = [{
    id: 1,
    name: 'Mauricio',
}, {
    id: 2,
    name: 'Gustavo',
}, {
    id: 3,
    name: 'Pedro',
}]

let pares = [
    [1, {id: 1, name: "Mauricio"}],
    [2, {id: 2, name: "Gustavo"}],
    [3, {id: 3, name: "Pedro"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }

    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);