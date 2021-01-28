'use strict'

const pool = require("../database");

async function listarCoordinacion(){
    return await pool.query('SELECT * FROM tipo_coordinacion')
}

async function agregarCoordinacion(newCoordinacion){
    await pool.query('INSERT INTO tipo_coordinacion SET ?' , [newCoordinacion]);
}

async function editarCoordinacion(idCoordinacion, actualizarCoordinacion){
    await pool.query('UPDATE tipo_coordinacion SET ? WHERE idCoordinacion = ?' , [actualizarCoordinacion, idCoordinacion]);
}

async function deleteCoordinacion(idCoordinacion){
    await pool.query('DELETE FROM tipo_coordinacion WHERE idCoordinacion = ?' , [idCoordinacion]);
}

module.exports = {
    listarCoordinacion,
    agregarCoordinacion,
    editarCoordinacion,
    deleteCoordinacion
}