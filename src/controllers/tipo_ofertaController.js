const tipo_oferta = require('../models/tipo_oferta')

async function listarOferta() {
    return await tipo_oferta.listarOferta()
}

async function agregarOferta(req) {
    const {tipoOferta, descripcion, estado} = req.body;
    const newOferta = {tipoOferta, descripcion, estado};
    await tipo_oferta.agregarOferta(newOferta);
}

async function editarOferta(req) {
    const {idTipoOferta} = req.params;
    const {tipoOferta, descripcion, estado} = req.body;
    const editarOferta = {tipoOferta, descripcion, estado};
    await tipo_oferta.editarOferta(idTipoOferta, editarOferta);
}

async function deleteOferta(req) {
    const {idTipoOferta} = req.params;
    await tipo_oferta.deleteOferta(idTipoOferta);
}

module.exports = {
    listarOferta,
    agregarOferta,
    editarOferta,
    deleteOferta
}
