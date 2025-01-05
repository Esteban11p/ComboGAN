function agregarDatos() {
    // Obtener los datos del formulario
    const datosFormulario = {
      tb_razas: document.getElementById('tb_razas').value,
      tb_precio: document.getElementById('tb_precio').value,
      tb_residencia: document.getElementById('tb_residencia').value,
      tb_hembras: document.getElementById('tb_hembras').value,
      tb_machos: document.getElementById('tb_machos').value,
      tb_cantidad: document.getElementById('tb_cantidad').value,
      tb_peso: document.getElementById('tb_peso').value,
      tb_edad: document.getElementById('tb_edad').value,

      // Agrega el resto de los campos aquí
    };

    // Hacer la solicitud POST al servidor
    fetch('http://localhost:5000/guardar_datos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosFormulario),
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
}