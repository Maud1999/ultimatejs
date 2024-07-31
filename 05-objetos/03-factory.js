function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Mauricio', 'maud280699@outlook.com');
let user2 = crearUsuario('Aldair', 'ald280699@outlook.com');

console.log(user1, user2);
