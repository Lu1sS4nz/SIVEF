const usuario = require('../models/usuario');

async function listarUsuario() {
    return await usuario.listarUsuario()
}

async function agregarUsuario(req) {
    const {nombres, apellidos, correo, usuario, password, idRol} = req.body;
    const newUsuario = {nombres, apellidos, correo, usuario, password, idRol};
    await usuario.agregarUsuario(newUsuario);
}

async function editarUsuario(req) {
    const {idUsuario} = req.params;
    const {nombres, apellidos, correo, usuario, password, idRol} = req.body;
    const editarUsuario = {nombres, apellidos, correo, usuario, password, idRol};
    await usuario.editarUsuario(idUsuario, editarUsuario);
}

async function deleteUsuario(req) {
    const {idUsuario} = req.params;
    await usuario.deleteUsuario(idUsuario);
}

module.exports = {
    listarUsuario,
    agregarUsuario,
    editarUsuario,
    deleteUsuario
}