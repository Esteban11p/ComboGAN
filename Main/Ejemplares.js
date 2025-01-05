// Función para obtener y mostrar los datos de la base de datos
function obtenerDatos() {
    fetch("/obtener_datos") // Hacer una solicitud GET a la ruta de tu servidor que devuelve los datos
        .then(response => response.json())
        .then(data => {
            const datosContainer = document.getElementById('container');
            datosContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los nuevos datos
            // Agregar los nuevos datos al contenedor
            data.forEach(item => {
                const div = document.createElement('div');
                div.textContent = `Raza: ${item.tb_razas}, Precio: ${item.tb_precio}`;
                datosContainer.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

// Llamar a obtenerDatos() al cargar la página
document.addEventListener('DOMContentLoaded', obtenerDatos);

// Actualizar los datos periódicamente (cada 5 segundos, por ejemplo)
setInterval(obtenerDatos, 5000); // 5000 milisegundos = 5 segundos
