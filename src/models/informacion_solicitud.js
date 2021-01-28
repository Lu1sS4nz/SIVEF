'use strict'

const pool = require("../database");

async function listarInformacion(){
    return await pool.query('SELECT * FROM informacion_solicitud ')
}

async function agregarInformacion(newInformacion){
    await pool.query('INSERT INTO informacion_solicitud SET ?' , [newInformacion]);
}

async function editarInformacion(idInformacionSolicitud, actualizarInformacion){
    await pool.query('UPDATE informacion_solicitud SET ? WHERE idInformacionSolicitud = ?' , [actualizarSolicitud, idInformacionSolicitud]);
}

async function deleteInformacion(idInformacionSolicitud){
    await pool.query('DELETE FROM informacion_solicitud WHERE idInformacionSolicitud = ?' , [idInformacionSolicitud]);
}

module.exports = {
    listarInformacion,
    agregarInformacion,
    editarInformacion,
    deleteInformacion
}