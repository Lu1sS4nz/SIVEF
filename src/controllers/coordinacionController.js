const tipo_coordinacion = require('../models/coordinacion')

async function listarCoordinacion() {
    return await tipo_coordinacion.listarCoordinacion()
}

async function agregarCoordinacion(req) {
    const {coordinacion, direccion, estado} = req.body;
    const newCoordinacion = {coordinacion, direccion, estado};
    await tipo_coordinacion.agregarCoordinacion(newCoordinacion);
}

async function editarCoordinacion(req) {
    const {idCoordinacion} = req.params;
    const {coordinacion, direccion, estado} = req.body;
    const editarCoordinacion = {coordinacion, direccion, estado};
    await tipo_coordinacion.editarCoordinacion(idCoordinacion, editarCoordinacion);
}

async function deleteCoordinacion(req) {
    const {idCoordinacion} = req.params;
    await tipo_coordinacion.deleteCoordinacion(idCoordinacion);
}

module.exports = {
    listarCoordinacion,
    agregarCoordinacion,
    editarCoordinacion,
    deleteCoordinacion
}
