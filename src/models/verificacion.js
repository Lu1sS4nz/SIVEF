'use strict'

const pool = require("../database");

async function listarVerificador(){
    return await pool.query('SELECT * FROM verificacion')
}

async function agregarVerificador(newVerificacion){
    await pool.query('INSERT INTO verificacion SET ?' , [newVerificacion]);
}

async function editarVerificador(idVerificacion, actualizarVerificacion){
    await pool.query('UPDATE verificacion SET ? WHERE idVerificacion = ?' , [actualizarVerificacion, idVerificacion]);
}

async function deleteVerificador(idVerificacion){
    await pool.query('DELETE FROM verificacion WHERE idVerificacion = ?' , [idVerificacion]);
}

module.exports = {
    listarVerificador,
    agregarVerificador,
    editarVerificador,
    deleteVerificador
}