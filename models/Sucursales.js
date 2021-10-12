const Sequelize = require('sequelize');
const db = require('../config/db');
const slug = require('slug');
const shortid = require ('shortid');

const Sucursales = db.define('sucursales',{
	id : {
		type:Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement:true,

	},
	nombre : Sequelize.STRING,
	url:Sequelize.STRING
},{
	hooks:{
		beforeCreate(sucursal){
			// console.log('Antes de insertar en la BD');
			const url =slug(sucursal.nombre).toLowerCase(); 
			
			sucursal.url = `${url}-${shortid.generate()}`;
		}
		
	}
});

module.exports = Sucursales;