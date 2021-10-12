// importo express
const express = require('express');
const router = express.Router();


//impoartar express validator
const { body } = require('express-validator');


//importar el controlador
const sucursalesController = require('../controllers/sucursalesController');

module.exports = function(){

//ruta para el home
	router.get('/', sucursalesController.sucursalesHome);

	// para get 
	router.get('/nueva-sucursal', sucursalesController.formularioSucursal);

	//para el post - para ALTA / ESCRIBIR  el sucursal
	router.post('/nueva-sucursal',
		body('nombre').not().isEmpty().trim().escape(),
		sucursalesController.nuevaSucursal);
		//trim eliminaría los espacios
		//escape eliminaría los caracteres no-letra



	//Listar sucursal
	router.get('/sucursales/:url', sucursalesController.sucursalPorUrl);//  ":url" puede ser cualquier nombre de var
     
     //Actualizar el sucursal
	 router.get('/sucursal/editar/:id', sucursalesController.formularioEditar);
	 router.post('/nueva-sucursal/:id',
		body('nombre').not().isEmpty().trim().escape(),
		sucursalesController.actualizarSucursal
	 );

	return router;
}
