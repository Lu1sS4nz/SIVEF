CREATE DATABASE sivef;

USE sivef;

/* CREATE TABLES */

CREATE TABLE perfil (
	idPerfil INT PRIMARY KEY AUTO_INCREMENT,
    nombres VARCHAR (50) NOT NULL,
    apellidos VARCHAR (50) NOT NULL,
    correo VARCHAR (50) NOT NULL,
    idRol INT NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
    
);

CREATE TABLE rol (
	idRol INT PRIMARY KEY AUTO_INCREMENT,
    tipoRol VARCHAR (30) NOT NULL,
    estado ENUM ('Activo','Inactivo') NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR (15) NOT NULL,
    password VARCHAR (20) NOT NULL,
    idPerfil INT NOT NULL,
    estado ENUM ('Activo','Inactivo') NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE verificacion (
	idVerificacion INT PRIMARY KEY AUTO_INCREMENT,
    tipoVerificacion VARCHAR (50) NOT NULL,
    estado ENUM ('Activo','Inactivo') NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tipo_solicitud (
	idTipoSolicitud INT PRIMARY KEY AUTO_INCREMENT,
    tipoSolicitud VARCHAR (30) NOT NULL,
    estado ENUM ('Activo','Inactivo') NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tipo_oferta (
	idTipoOferta INT PRIMARY KEY AUTO_INCREMENT,
    tipoOferta VARCHAR (20) NOT NULL,
    estado ENUM ('Activo','Inactivo') NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cooridinacion (
	idCoordinacion INT PRIMARY KEY AUTO_INCREMENT,
    coordinacion VARCHAR (50) NOT NULL,
    estado ENUM ('Activo','Inactivo') NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE informacion_solicitud (
	idInformacionSolicitud INT PRIMARY KEY AUTO_INCREMENT,
    idVerificacion INT NOT NULL,
    idTipoSolicitud INT NOT NULL,
    idTipoOferta INT NOT NULL,
    idCoordinacion INT NOT NULL,
    codigoPrograma NUMERIC NOT NULL,
    nombreFormacion VARCHAR (150) NOT NULL,
    instructor VARCHAR (50) NOT NULL,
    fechainicial TIME NOT NULL,
    fechaFinal TIME NOT NULL,
    horasTotal INT NOT NULL,
    cumplimientoRequisito ENUM ('Si','No') NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

/* CREATE FOREIGN KEY */

ALTER TABLE informacion_solicitud
    ADD CONSTRAINT `fk_verificacion_idVerificacion` FOREIGN KEY (idVerificacion) REFERENCES verificacion(idVerificacion);
ALTER TABLE informacion_solicitud
    ADD CONSTRAINT `fk_tiposolicitud_idTipoSolicitud` FOREIGN KEY (idTipoSolicitud) REFERENCES tipo_solicitud(idTipoSolicitud);
    
ALTER TABLE informacion_solicitud
    ADD CONSTRAINT `fk_tipoOferta_idTipoOferta` FOREIGN KEY (idTipoOferta) REFERENCES tipo_oferta(idTipoOferta);
 
ALTER TABLE informacion_solicitud
    ADD CONSTRAINT `fk_coordinacion_idCoordinacion` FOREIGN KEY (idCoordinacion) REFERENCES cooridinacion(idCoordinacion);

ALTER TABLE perfil
    ADD CONSTRAINT `fk_rol_idRol` FOREIGN KEY (idRol) REFERENCES rol(idRol);
    
ALTER TABLE usuario
    ADD CONSTRAINT `fk_perfil_idPerfil` FOREIGN KEY (idPerfil) REFERENCES perfil(idPerfil);

/* MODIFICATIONS */

ALTER TABLE usuario
	DROP CONSTRAINT `fk_perfil_idPerfil`;

ALTER TABLE perfil
	DROP CONSTRAINT `fk_rol_idRol`;

DROP TABLE perfil;

ALTER TABLE usuario CHANGE `idPerfil` `idRol` INT NOT NULL;

DROP TABLE usuario;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nombres VARCHAR (25) NOT NULL,
    apellidos VARCHAR (25) NOT NULL,
    correo VARCHAR (50) NOT NULL,
    usuario VARCHAR (15) NOT NULL,
    password VARCHAR (20) NOT NULL,
    idRol INT NOT NULL,
    estado ENUM ('Activo','Inactivo') NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);

ALTER TABLE usuario
    ADD CONSTRAINT `fk_rol_idRol` FOREIGN KEY (idRol) REFERENCES rol(idRol);

ALTER TABLE usuario
	DROP CONSTRAINT `fk_rol_idRol`;

DROP TABLE rol;

CREATE TABLE rol (
	idRol INT PRIMARY KEY AUTO_INCREMENT,
    tipoRol VARCHAR (30) NOT NULL,
    descripcion VARCHAR (50) NOT NULL,
    estado ENUM ('Activo','Inactivo') NOT NULL,
    idUsuarioCreacion INT NULL,
    idUsuarioModificacion INT NULL,
    fechaCreacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    fechaModificacion TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE usuario
    ADD CONSTRAINT `fk_rol_idRol` FOREIGN KEY (idRol) REFERENCES rol(idRol);

ALTER TABLE verificacion ADD COLUMN descripcion VARCHAR (50) NOT NULL AFTER tipoVerificacion;

ALTER TABLE tipo_solicitud ADD COLUMN descripcion VARCHAR (50) NOT NULL AFTER tipoSolicitud;

ALTER TABLE tipo_oferta ADD COLUMN descripcion VARCHAR (50) NOT NULL AFTER tipoOferta;

ALTER TABLE cooridinacion ADD COLUMN direccion VARCHAR (50) NOT NULL AFTER coordinacion;

RENAME TABLE cooridinacion TO coordinacion;

RENAME TABLE coordinacion TO tipo_coordinacion;