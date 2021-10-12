// const proyectosController = require('../controllers/proyectosController');
const M_Sucursal = require ('../../models/M_Sucursal.js')

module.exports = function (app,db){

    //ABML

    app.Router.get('/api/todo', function (req,res){
        db.M_Sucursal.findAll({}).then(function (result){
            res.json(result);
        });
    });
    app.put('/app/modificacion', function (){});
    app.post('/app/alta', function (){});
    app.delete('/api/borrar/:id', function (){});
};




