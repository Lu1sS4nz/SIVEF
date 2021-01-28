const express = require('express');
const router = express.Router();

const pool = require('../database');

// Table usuario
router.get('/usuario', (req, res) => {
    res.render('links/usuario');
});

router.post('/usuario', (req, res) => {
    res.send('Received');
});

// Table rol
router.get('/rol', (req, res) => {
    res.render('links/rol');
});

router.post('/rol', (req, res) => {
    res.send('Received');
});

// Table verificacion
router.get('/verificacion', (req, res) => {
    res.render('links/verificacion');
});

router.post('/verificacion', (req, res) => {
    res.send('verificacion');
});

// Table tipo_solicitud
router.get('/tipo_solicitud', (req, res) => {
    res.render('links/tipo_solicitud');
});

router.post('/tipo_solicitud', (req, res) => {
    res.send('tipo_solicitud');
});

// Table tipo_oferta
router.get('/tipo_oferta', (req, res) => {
    res.render('links/tipo_oferta');
});

router.post('/tipo_oferta', (req, res) => {
    res.send('tipo_oferta');
});

// Table coordinacion
router.get('/coordinacion', (req, res) => {
    res.render('links/coordinacion');
});

router.post('/coordinacion', (req, res) => {
    res.send('coordinacion');
});

// Table informacion_solicitud
router.get('/informacion_solicitud', (req, res) => {
    res.render('links/informacion_solicitud');
});

router.post('/informacion_solicitud', (req, res) => {
    res.send('informacion_solicitud');
});


module.exports = router;