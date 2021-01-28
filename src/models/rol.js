'use strict'

const pool = require("../database");

async function listarRol(){
    return await pool.query('SELECT * FROM rol ')
}

async function agregarRol(newRol){
    await pool.query('INSERT INTO rol SET ?' , [newRol]);
}

async function editarRol(idRol, actualizarRol){
    await pool.query('UPDATE rol SET ? WHERE idRol = ?' , [actualizarRol, idRol]);
}

async function deleteRol(idRol){
    await pool.query('DELETE FROM rol WHERE idRol = ?' , [idRol]);
}

module.exports = {
    listarRol,
    agregarRol,
    editarRol,
    deleteRol
}