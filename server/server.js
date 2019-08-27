//ARCHIVO DE CONFIGURACIÓN GLOBAL
require('./config/config');

const express = require('express');
const app = express();

//Node.js body parsing middleware.
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



app.get('/', function(req, res) {

    //res.json('dsdsd'); es para enviar información JSON's
    //res.send('dfdf'); es para enviar HTML
    res.json('Hello World');

});

//la sección usuarios
app.get('/usuario', function(req, res) {
    res.json('Get Usuario');
});

app.post('/usuario', function(req, res) {

    // con esto sacamos los parámetros x-www-form-urlencoded del POST (los atributos que se envían en el cuerpo de la solicitud)
    let cuerpo = req.body;

    //para manejar los mensajes de error de HTTP usaríamos:
    // if (body.nombre === undefined){res.status(400).json({
    //     message: 'Esto es un error tipo 400'
    // })}


    res.json({
        cuerpo
    });
});

//se pone el :id despues de la ruta de usuarios para especifircar que se enviará el ID como parámetro
app.put('/usuario/:id', function(req, res) {

    //obtener los parametros de la URL
    let identifi = req.params.id

    //enviar el JSON de respuesta
    res.json({
        identifi
    });
});;

app.delete('/usuario', function(req, res) {
    res.json('Delete Usuario');
});


app.listen(process.env.PORT, () => {
    console.log(`ESCUCHANDO POR EL PUERTO ${process.env.PORT}`);
});