const M_Sucursal = require('../models/M_Sucursal');

exports.sucursalesHome = (req,res)=> {

	const sucursales = M_Sucursal.findAll({attributes:['Descripcion']})
		.then(users => {
			console.log('encontré cosas', sucursales.toJSON());
			res.send(sucursales.toJSON());
			
		})
		.catch(err => {
			console.log('encontré el siguiente error:',err)
		});

	// const keis = keys(sucursales);
	// console.log(keis);

		
	}