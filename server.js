const express = require('express');
const app = express();
// const hbs = require('hbs');

// require('./hbs/helpers');

const port = process.env.PORT || 80;


app.use(express.static(__dirname + '/public'));
// app.use('/public/', express.static('public/'));
// Express HBS eengine
// hbs.registerPartials(__dirname + '/views/parciales');

// app.set('view engine', 'hbs');


app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente1'
    });
});
// app.get('/about', (req, res) => {
//  res.send('Hola Mundo');

//  res.render('about', {
//   nombre: 'Ignacio',
//   anio: new Date().getFullYear()
// });
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});