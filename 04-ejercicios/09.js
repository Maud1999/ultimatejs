/**
 * Crear algoritmo que devuelva un 
 * array de objetos en base a pares
 */
let pairs = [
    [1, {name: "Mauricio"}],
    [2, {name: "Gustavo"}],
    [3, {name: "Pedro"}],
];

let array = [{
    id: 1,
    name: "Mauricio",
}, {
    id:2,
    name: "Gustavo",
}, {
    id: 3,
    name: "Pedro",
}];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr [idx];
        collection[idx] = elemento [1];
        collection [idx].id = elemento [0];
    }

    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);