
const M_Sucursal = sequelize.define('M_Sucursal', {
		ID: {
			type: DataTypes.DOUBLE,
			allowNull: false
		},
		Codigo: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Descripcion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Direccion: {
			type: DataTypes.STRING,
			allowNull: true
		},
		habilitado: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Localidad: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FechaAlta: {
			type: DataTypes.DATE,
			allowNull: true
		},
		FechaBaja: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'M_Sucursal'
	});

