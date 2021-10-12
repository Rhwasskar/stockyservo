/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {mSucursalInstance, mSucursalAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<mSucursalInstance, mSucursalAttribute>('mSucursal', {
		id: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ID'
		},
		codigo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Codigo'
		},
		descripcion: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Descripcion'
		},
		direccion: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Direccion'
		},
		habilitado: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'habilitado'
		},
		localidad: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Localidad'
		},
		fechaAlta: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'FechaAlta'
		},
		fechaBaja: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'FechaBaja'
		}
	}, {
		tableName: 'M_Sucursal'
	});
};
