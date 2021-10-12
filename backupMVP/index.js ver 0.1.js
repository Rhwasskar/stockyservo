const Express = require('express');
const app = new Express;
const morgan = require('morgan');
const sequelize = require('./config/db')
var bodyParser = require('body-parser');
const Sucursal = require('./models/M_Sucursal');


sequelize.sync()			//sync la base
  .then(() => console.log('Sync al Servidor'))
  .catch(error => console.log('HEEEEEMOOOOS RECIBIDOOOOO ESTE ERROOOOR' + error));



app.use(morgan('dev')); //muestra por data de las peticiones
app.use(Express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Instancio una Sucursal Modelo en blanco
// const nuevaSucursal = new Sucursal;

//Routing - Ruteando
app.get('/sucursales', traerSucu); //listar Sucursales
// app.get('/sucursales/id', newSucursal);// crear Nueva Sucursal
// app.get('/sucursales/:id', sucuPorId);// Mostrar UNA Sucursal por ID
// app.get('/sucursales/:id', editarSucursal);// Actualizar una Sucursal
// app.get('/sucursales/:id', borrarSucursal);// Borrar una sucursal

/////////////////////////////contorlador Sucursales///////////////////////////////////// 

//listarSucursales
async function traerSucu(req, res) {
  var sucursales = await Sucursal.findAll()
  res.json(sucursales);
}
//------------crear Nueva Sucursal--------------------------------
app.post('/sucursales/new', (req, res) => {
  console.log(req.body);
  Sucursal.create({
    // ID:req.body.ID,
    Codigo: req.body.Codigo,
    Descripcion: req.body.Descripcion,
    Direccion: req.body.Direccion,
    habilitado: req.body.habilitado,
    Localidad: req.body.Localidad,
    FechaAlta: req.body.FechaAlta,
    FechaBaja: req.body.FechaBaja,
  })
    .then(sucursal => {
      res.send('Sucursal Creada')
    })

})
//------------Mostrar UNA Sucursal por ID-------------------------
app.get('/sucursales/:Codigo', sucuPorId);

async function sucuPorId(req, res) {
  var sucursal = await Sucursal.findOne({
    where: {
      Codigo: req.params.Codigo
    },
  })
    .then(sucursal => {
      res.json(sucursal)
    })
    .catch(err => {
      console.log('ERROR AL OBTENER UNA SUCURSAL PUNTUAL:' + req.params.Codigo + ' Detalle del error \n:' + err);
    });

}
//------------Actualizar una Sucursal-----------------------------
app.put('/sucursales/:id', (req, res) => {
  console.log('------------------');
  console.log('El id de la sucursal solicitada es:' + req.params.id);
  Sucursal.findOne({ where: { id: req.params.id } })
    .then(sucursal => {
      sucursal.update(req.body)
        .then(nuevaSucursal => {
          res.send('SUCURSAL INGRESADA CORRECTAMENTE:\n'+ JSON.stringify(nuevaSucursal));
        })
        .catch(err => { let mensajeError= 'Sucursal no actualizada.  DETALLE: \n' + err; console.log(mensajeError); res.send(mensajeError) });
        
    })
    .catch(err => { let mensajeError ='Sucursal no hallada. DETALLE: \n' + err; console.log(mensajeError);res.render(mensajeError) });

});
//------------Borrar una sucursal---------------------------------
app.delete('/sucursales/borrar/:id', (req, res) => {
  Sucursal.destroy({where:{id:req.params.id}})
    .then(() => {console.log('Sucursal Eliminada.');res.send('Sucursal Eliminada Correctamente')})
    .catch(err => {let mensajeError ='Error al Eliminar DETALLE: \n' + err; console.log(mensajeError);res.render(mensajeError)});
  
});







//-----------------------------starting the server------------------------------------

app.listen(3000);