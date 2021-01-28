'use strict'

const pool = require("../database");

async function listarOferta(){
    return await pool.query('SELECT * FROM tipo_oferta')
}

async function agregarOferta(newOferta){
    await pool.query('INSERT INTO tipo_oferta SET ?' , [newOferta]);
}

async function editarOferta(idTipoOferta, actualizarOferta){
    await pool.query('UPDATE tipo_oferta SET ? WHERE idTipoOferta = ?' , [actualizarOferta, idTipoOferta]);
}

async function deleteOferta(idTipoOferta){
    await pool.query('DELETE FROM tipo_oferta WHERE idTipoOferta = ?' , [idTipoOferta]);
}

module.exports = {
    listarOferta,
    agregarOferta,
    editarOferta,
    deleteOferta
}