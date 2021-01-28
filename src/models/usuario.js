'use strict'

const pool = require("../database");

async function listarUsuario(){
    return await pool.query('SELECT * FROM usuario')
}

async function agregarUsuario(newUsuario) {
    await pool.query('INSERT INTO usuario SET ?', [newUsuario]);
}

async function editarUsuario(idUsuario, actuaizarUsuario) {
    await pool.query('UPDATE usuario SET ? WHERE idUsuario = ?', [actuaizarUsuario, idUsuario]);
}

async function deleteUsuario(idUsuario) {
    await pool.query('DELETE FROM usuario WHERE idUsuario = ?', [idUsuario]);
}

module.exports = {
    listarUsuario,
    agregarUsuario,
    editarUsuario,
    deleteUsuario
}