const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Importar rutas
// const exampleRoutes = require('./routes/example.routes');

// Inicializar la aplicación de Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenido a la API de SENATI Express',
    status: 'Servidor funcionando correctamente'
  });
});

// Configurar rutas
// app.use('/api/example', exampleRoutes);

// Middleware para manejo de errores
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;
