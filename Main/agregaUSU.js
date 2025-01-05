'use strict'

var agregarCuenta = document.querySelector('#CrearCuenta');

agregarCuenta.addEventListener('click', function(){

    const datosUsuario = {
        tb_nombre: document.querySelector('#addName').value,
        tb_email: document.querySelector('#addEmail').value,
        tb_password: document.querySelector('#addPassword').value,
    }

    fetch('http://localhost:5000/crear_cuenta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al agregar datos');
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos agregados correctamente:', data);
        // Puedes realizar acciones adicionales después de agregar los datos si es necesario
      })
      .catch(error => {
        console.error('Error:', error);
        // Manejar errores si es necesario
      });

});