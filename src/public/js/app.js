$(function() {
  const socket = io();

  // Obteniendo los elementos del DOM
  const formMensaje = $('#form-mensaje');
  const cajaMensaje = $('#mensaje');
  const chat = $('#chat');

  // Eventos
  formMensaje.submit( e => {
    e.preventDefault();
    socket.emit('enviar mensaje', cajaMensaje.val());
    cajaMensaje.val('');
  });

  socket.on('nuevo mensaje', (datos) => {
    chat.append(`${datos}<br>`);
  })
});
