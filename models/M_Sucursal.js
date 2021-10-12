const Sequelize = require('sequelize');
const db = require('../config/db');
const slug = require('slug');
const shortid = require ('shortid');
// const slug = require('slug');
// const shortid = require ('shortid');
// const DataTypes = require('DataTypes');

const M_Sucursal = db.define('sucursal', {
		// ID: {
		// 	type: Sequelize.DOUBLE,
		// 	allowNull: false,
		// 	primaryKey: true,
		// },
		Codigo: {
			type: Sequelize.STRING,
			allowNull: true
		},
		Descripcion: {
			type: Sequelize.STRING,
			allowNull: true
		},
		Direccion: {
			type: Sequelize.STRING,
			allowNull: true
		},
		habilitado: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		Localidad: {
			type: Sequelize.STRING,
			allowNull: true
		},
		FechaAlta: {
			type: Sequelize.DATE,
			allowNull: true
		},
		FechaBaja: {
			type: Sequelize.DATE,
			allowNull: true
		}
	}, {
		timestamps: false,
		hooks:{
			// beforeCreate(sucursal){
			// 	// console.log('Antes de insertar en la BD');
			// 	const url =slug(sucursal.Descripcion).toLowerCase(); 
				
			// 	sucursal.url = `${url}-${shortid.generate()}`;
			// }
		},
		
		tableName: 'M_Sucursal'
	});


module.exports = M_Sucursal;