let user = {
    id: 1,
    name: 'perrito triste',
    age: 25,
}; 

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['perrito triste', 'dragon', 'caballo'];
for (let indice in animales) {
    console.log(indice, animales [indice]);
}