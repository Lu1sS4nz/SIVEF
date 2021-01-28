const informacion_solicitud = require('../models/informacion_solicitud')

async function listarInformacion() {
    return await informacion_solicitud.listarInformacion()
}

async function agregarInformacion(req) {
    const {idVerificacion, idTipoSolicitud, idTipoOferta, idCoordinacion, codigoPrograma, nombreFormacion, instructor, fechainicial, fechaFinal, horasTotal, cumplimientoRequisito} = req.body;
    const newInformacion = {idVerificacion, idTipoSolicitud, idTipoOferta, idCoordinacion, codigoPrograma, nombreFormacion, instructor, fechainicial, fechaFinal, horasTotal, cumplimientoRequisito};
    await informacion_solicitud.agregarInformacion(newInformacion);
}

async function editarInformacion(req) {
    const {idInforacionSolicitud} = req.params;
    const {idVerificacion, idTipoSolicitud, idTipoOferta, idCoordinacion, codigoPrograma, nombreFormacion, instructor, fechainicial, fechaFinal, horasTotal, cumplimientoRequisito} = req.body;
    const editarRol = {idVerificacion, idTipoSolicitud, idTipoOferta, idCoordinacion, codigoPrograma, nombreFormacion, instructor, fechainicial, fechaFinal, horasTotal, cumplimientoRequisito};
    await informacion_solicitud.editarInformacion(idInforacionSolicitud, editarInformacion);
}

async function deleteInformacion(req) {
    const {idInforacionSolicitud} = req.params;
    await informacion_solicitud.deleteInformacion(idInforacionSolicitud);
}

module.exports = {
    listarInformacion,
    agregarInformacion,
    editarInformacion,
    deleteInformacion
}