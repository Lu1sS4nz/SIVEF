const rol = require('../models/rol')

async function listarRol() {
    return await rol.listarRol()
}

async function agregarRol(req) {
    const {tipoRol, descripcion, estado} = req.body;
    const newRol = {tipoRol, descripcion, estado};
    await rol.agregarRol(newRol);
}

async function editarRol(req) {
    const {idRol} = req.params;
    const {tipoRol, descripcion, estado} = req.body;
    const editarRol = {tipoRol, descripcion, estado};
    await rol.editarRol(idRol, editarRol);
}

async function deleteRol(req) {
    const {idRol} = req.params;
    await rol.deleteRol(idRol);
}

module.exports = {
    listarRol,
    agregarRol,
    editarRol,
    deleteRol
}