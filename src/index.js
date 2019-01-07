const express = require('express');
const socketio = require('socket.io');
const morgan = require('morgan');
const path = require('path');
const http = require('http');

const app = express();

const servidor = http.createServer(app);
const io = socketio.listen(servidor);

io.on('connection', socket => console.log('Nuevo usuario conectado'));

/*                  Ajustes                     */
// Usa el puerto establecido o usa el puerto 3000
app.set('port', process.env.PORT || 3000);

/*           Conexión a base de datos           */

/*                 Middleware                   */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// Convierte los datos que llegan a través de solicitudes HTTP al tipo JSON
app.use(express.json());

/*                    Rutas                      */
// app.use(require('./routes/api'));

/*                   Vistas                      */

/*             Archivos Estáticos                */
app.use(express.static(path.join(__dirname, 'public')));

// Escucha en el puerto establecido
servidor.listen(app.get('port'), () => {
  console.log('Servidor en puerto', app.get('port'));
});
