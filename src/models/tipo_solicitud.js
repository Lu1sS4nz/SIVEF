'use strict'

const pool = require("../database");

async function listarSolicitud(){
    return await pool.query('SELECT * FROM tipo_solicitud')
}

async function agregarSolicitud(newSolicitud){
    await pool.query('INSERT INTO tipo_solicitud SET ?' , [newSolicitud]);
}

async function editarSolicitud(idTipoSolicitud, actualizarSolicitud){
    await pool.query('UPDATE tipo_solicitud SET ? WHERE idTipoSolicitud = ?' , [actualizarSolicitud, idTipoSolicitud]);
}

async function deleteSolicitud(idTipoSolicitud){
    await pool.query('DELETE FROM tipo_solicitud WHERE idTipoSolicitud = ?' , [idTipoSolicitud]);
}

module.exports = {
    listarSolicitud,
    agregarSolicitud,
    editarSolicitud,
    deleteSolicitud
}