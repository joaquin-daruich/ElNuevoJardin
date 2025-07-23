const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta principal (opcional para testear si está vivo)
app.get('/', (req, res) => {
  res.send('Servidor en línea');
});

// Ruta para recibir los mensajes del formulario
app.post('/enviar', (req, res) => {
  const mensaje = req.body.mensaje;

  if (!mensaje) {
    return res.status(400).send('Mensaje vacío');
  }

  const rutaArchivo = path.join(__dirname, 'mensajes.txt');
  const entrada = `${new Date().toISOString()} - ${mensaje}\n`;

  fs.appendFile(rutaArchivo, entrada, err => {
    if (err) {
      console.error('Error al guardar el mensaje:', err);
      return res.status(500).send('Error al guardar el mensaje');
    }

    console.log('Mensaje recibido y guardado');
    res.send('Mensaje recibido. ¡Gracias!');
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
