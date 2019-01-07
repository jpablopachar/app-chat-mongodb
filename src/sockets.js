module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');
    socket.on('enviar mensaje', (datos) => {
      io.sockets.emit('nuevo mensaje', datos);
    });
  });
};
