const tipo_solicitud = require('../models/tipo_solicitud')

async function listarSolicitud() {
    return await tipo_solicitud.listarSolicitud()
}

async function agregarSolicitud(req) {
    const {tipoSolicitud, descripcion, estado} = req.body;
    const newSolicitud = {tipoSolicitud, descripcion, estado};
    await tipo_solicitud.agregarSolicitud(newSolicitud);
}

async function editarSolicitud(req) {
    const {idTipoSolicitud} = req.params;
    const {tipoSolicitud, descripcion, estado} = req.body;
    const editarSolicitud = {tipoSolicitud, descripcion, estado};
    await tipo_solicitud.editarSolicitud(idTipoSolicitud, editarSolicitud);
}

async function deleteSolicitud(req) {
    const {idTipoSolicitud} = req.params;
    await tipo_solicitud.deleteSolicitud(idTipoSolicitud);
}

module.exports = {
    listarSolicitud,
    agregarSolicitud,
    editarSolicitud,
    deleteSolicitud
}
