const Sequelize = require('sequelize');

// Option 1: Passing parameters separately

//----------------------------con Microsoft SQL SERVER LOCAL---------------------------
const db = new Sequelize('Informe_Sucursal', 'sa', 'sa1', {
    host: 'localhost',
    dialect: 'mssql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    dialectOptions: {
        options: {
          useUTC: false,
          dateFirst: 1,
          instanceName:'AXSQLEXPRESS'
        }
    }
});

// //----------------------------con Microsoft SQL SERVER 006---------------------------
// const db = new Sequelize('Informe_Sucursal', 'sa', 'sa1', {
//     host: 'SRV_SIS_006',
//     dialect: 'mssql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
//     dialectOptions: {
//         options: {
//           useUTC: false,
//           dateFirst: 1,
//           instanceName:'AXSQLEXPRESS'
//         }
//     }
// });

// //----------------------------con MYSQL---------------------------
// const db = new Sequelize('stockynotes', 'root', 'password', {
//     host: 'localhost',
//     dialect: 'mysql',

//   });



db.authenticate()
    .then(() => {
        console.log('Conexion exitosa');
        // cerrarConexion()
        // a =db.M_Sucursal.findAll({}).then(function (result){  //esto hay que hacerlo desde un tercer modulo. Que no sea DB ni el modelo.
        //     res.json(result);  //
        // });
        // console.log(a);
    })
    .catch(err => {
        console.error('No se pudo conectar a la DB', err);
    });


// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

function cerrarConexion() {

    db.close()
        .then(() => {
            console.log('Conexion cerrada OK');
        })
        .catch(err => {
            console.log('no se cerró la conexión', err);
        });

}

module.exports = db;
