const Sucursales = require('../models/Sucursales');
const slug = require('slug');

exports.sucursalesHome = async (req,res)=> {

	const sucursales = await Sucursales.findAll();


	res.render('index',
	{
		nombrePagina : "Sucursales",
		sucursales
	})
		
	}
exports.formularioSucursal = async (req, res) => {
	const sucursales = await Sucursales.findAll();
	res.render('nuevaSucursal', {
		nombrePagina : "Nueva Sucursal",
		sucursales
	});
}

exports.nuevaSucursal = async (req,res) => {
	const sucursales = await Sucursales.findAll();

	const { nombre } = req.body;
	let errores = [];

	if (!nombre) {
		errores.push({'texto': 'Agrega un nombre a la Sucursal'})
	}

	if(errores.length > 0 ){
		res.render('nuevaSucursal', {
			nombrePagina: 'Nueva Sucursal',
			errores,
			sucursales
		});
	} else {
		//los hooks corren en determinado tiempo

		// const url =slug(nombre).toLowerCase(); 
		 //el slug quita los espacios, los convierte en guiones
		await Sucursales.create({ nombre });
		res.redirect('/');
		// .then(() => console.log('Insertado Correctamente'))
		//++.catch(error => console.log(error));

	}
 }

 exports.sucursalPorUrl = async (req,res) =>{
 	// res.send(req.params.url); //devuelve la URL
 	const sucursalesPromise =  Sucursales.findAll();
	const sucursalPromise = Sucursales.findOne({
		where:{
			url:req.params.url
		}
	});
	const [sucursales,sucursal] = await Promise.all([sucursalesPromise, sucursalPromise]);

 	if (!sucursal) return next();

 	//render a la vista

 	res.render('Tareas',{ 
 		nombrePagina : 'Tareas de la Sucursal',
 		sucursal,
 		sucursales
 	});

 }

 exports.formularioEditar = async(req,res) => {
	 
 	const sucursalesPromise =  Sucursales.findAll();
	const sucursalPromise = Sucursales.findOne({
		where:{
			id:req.params.id
		}
	});
	const [sucursales,sucursal] = await Promise.all([sucursalesPromise, sucursalPromise]);
 	// const sucursalPromise = await Sucursales.findOne({where{url: req.params.id }});


 	//render a la vista
 	res.render('nuevaSucursal',{
 		nombrePagina : 'Editar Sucursal',
 		sucursales,
 		sucursal

 	});

 }
	

 exports.actualizarSucursal = async (req,res) => {
	const sucursales = await Sucursales.findAll();

	const { nombre } = req.body;
	let errores = [];

	if (!nombre) {
		errores.push({'texto': 'Agrega un nombre a la Sucursal'})
	}

	if(errores.length > 0 ){
		res.render('nuevaSucursal', {
			nombrePagina: 'Nueva Sucursal',
			errores,
			sucursales
		});
	} else {
		//los hooks corren en determinado tiempo

		// const url =slug(nombre).toLowerCase(); 
		 //el slug quita los espacios, los convierte en guiones
		await Sucursales.update(
			{ nombre: nombre },  //QUÉ ACTUALIZO
			{where: { id: req.params.id }}		//ESTE SERÍA EL WHERE
		);
		res.redirect('/');
		// .then(() => console.log('Insertado Correctamente'))
		//++.catch(error => console.log(error));

	}
 }
