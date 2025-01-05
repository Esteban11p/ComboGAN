const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 5000;

// Configurar middleware para analizar datos JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la conexión a la base de datos SQLite
const dbPath = path.join(__dirname, 'BD', 'MiBased.db');
const db = new sqlite3.Database(dbPath);

// Ruta para guardar datos en la base de datos
app.post('/guardar_datos', (req, res) => {
  const { tb_razas, tb_precio, tb_residencia, tb_hembras, tb_machos, tb_peso, tb_edad, tb_IMG, tb_VID } = req.body;
  const query = 'INSERT INTO Lotes (tb_razas, tb_precio, tb_residencia, tb_hembras, tb_machos, tb_peso, tb_edad, tb_IMG, tb_VID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.run(query, [tb_razas, tb_precio, tb_residencia, tb_hembras, tb_machos, tb_peso, tb_edad, tb_IMG, tb_VID], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Error al guardar los datos en la base de datos');
    }
    console.log('Nuevo lote guardado correctamente');
    // Después de guardar el lote, redirigir a la página ejemplares.html
    res.redirect('/ejemplares.html');
  });
});

app.post('/guardar', (req, res) => {
  const { tb_nombre, tb_email, tb_password } = req.body;
  const query = 'INSERT INTO Usuarios (tb_nombre, tb_email, tb_password) VALUES (?, ?, ?)';

  db.run(query, [tb_nombre, tb_email, tb_password], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Error al guardar los datos en la base de datos');
    }
    console.log('Nuevo lote guardado correctamente');
    // Después de guardar el lote, redirigir a la página ejemplares.html
    res.redirect('/ejemplares.html');
  });
});

// Escuchar en la dirección IP y el puerto especificados
app.listen(port, '127.0.0.1', () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${port}/`);
});
