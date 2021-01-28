const express = require('express');
const router = express.Router();
const rolController = require('../../controllers/rolController');
const verificacionController = require('../../controllers/verificacionController');
const tipo_solicitudController = require('../../controllers/tipo_solicitudController');
const tipo_ofertaController = require('../../controllers/tipo_ofertaController');
const coordinacionController = require('../../controllers/coordinacionController');
const usuarioController = require('../../controllers/usuarioController');
const informacion_solicitudController = require('../../controllers/informacion_solicitudController');

// Rol
router.get('/rol', async(req, res) => {
    const rol = await rolController.listarRol();
    res.render('links/rol', {rol});
});

router.post('/rol', async (req, res) => {
    const rol = await rolController.agregarRol(req);
    res.redirect('/admin/rol');
}); 

// Verificacion
router.get('/verificacion', async(req, res) => {
    const verificacion = await verificacionController.listarVerificador();
    res.render('links/verificacion', {verificacion});
});

router.post('/verificacion', async (req, res) => {
    const verificacion = await verificacionController.agregarVerificador(req);
    res.redirect('/admin/verificacion');
}); 

// Tipo de Solicitud
router.get('/tipo_solicitud', async(req, res) => {
    const tipo_solicitud = await tipo_solicitudController.listarSolicitud();
    res.render('links/tipo_solicitud', {tipo_solicitud});
});

router.post('/tipo_solicitud', async (req, res) => {
    const tipo_solicitud = await tipo_solicitudController.agregarSolicitud(req);
    res.redirect('/admin/tipo_solicitud');
}); 

// Tipo de Oferta
router.get('/tipo_oferta', async(req, res) => {
    const tipo_oferta = await tipo_ofertaController.listarOferta();
    res.render('links/tipo_oferta', {tipo_oferta});
});

router.post('/tipo_oferta', async (req, res) => {
    const tipo_oferta = await tipo_ofertaController.agregarOferta(req);
    res.redirect('/admin/tipo_oferta');
}); 

// Tipo de Coordinacion
router.get('/coordinacion', async(req, res) => {
    const coordinacion = await coordinacionController.listarCoordinacion();
    res.render('links/coordinacion', {coordinacion});
});

router.post('/coordinacion', async (req, res) => {
    const coordinacion = await coordinacionController.agregarCoordinacion(req);
    res.redirect('/admin/coordinacion');
}); 

// Usuario
router.get('/usuario', async(req, res) => {
    const usuario = await usuarioController.listarUsuario();
    const rol1 = await rolController.listarRol();
    res.render('links/usuario', {usuario, rol1});
});

router.post('/usuario', async (req, res) => {
    const usuario = await usuarioController.agregarUsuario(req);
    res.redirect('/admin/usuario');
}); 

// Informacion de Solicitud
router.get('/informacion_solicitud', async(req, res) => {
    const informacion_solicitud = await informacion_solicitudController.listarInformacion();
    const tipoVerificacion1 = await verificacionController.listarVerificador();
    const tipoSolicitud1 = await tipo_solicitudController.listarSolictud();
    const tipoOferta1 = await tipo_ofertaController.listarOferta();
    const coordinacion1 = await coordinacionController.listarCoordinacion();
    res.render('links/informacion_solicitud', {informacion_solicitud, tipoVerificacion1, tipoSolicitud1, tipoOferta1, coordinacion1});
});

router.post('/informacion_solicitud', async (req, res) => {
    const informacion_solicitud = await informacion_solicitudController.agregarInformacion(req);
    res.redirect('/admin/informacion_solicitud');
}); 

module.exports=router;
