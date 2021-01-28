const verificacion = require('../models/verificacion')

async function listarVerificador() {
    return await verificacion.listarVerificador()
}

async function agregarVerificador(req) {
    const {tipoVerificacion, descripcion, estado} = req.body;
    const newVerificacion = {tipoVerificacion, descripcion, estado};
    await verificacion.agregarVerificador(newVerificacion);
}

async function editarVerificador(req) {
    const {idVerificacion} = req.params;
    const {tipoVerificacion, descripcion, estado} = req.body;
    const editarVerificacion = {tipoVerificacion, descripcion, estado};
    await verificacion.editarVerificador(idVerificacion, editarVerificacion);
}

async function deleteVerificador(req) {
    const {idVerificacion} = req.params;
    await verificacion.deleteVerificador(idVerificacion);
}

module.exports = {
    listarVerificador,
    agregarVerificador,
    editarVerificador,
    deleteVerificador
}