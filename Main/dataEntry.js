const add = document.getElementById("add");
const addGan = document.getElementById("addGanado");
const addPro = document.getElementById("addProductoA");

function addGando() {
  add.style.display = "none";
  addGan.style.display = "flex";
}

function addProductos() {
  add.style.display = "none";
  addPro.style.display = "flex";
}

function addDelete() {
  const formularioGan = document.getElementById("FormularioGan");

  add.style.display = "block";
  addGan.style.display = "none";
  addPro.style.display = "none";
}

// funcion, obtener datos del cruze

function thecrossing(selectedValue) {
  var h3cruzado = document.getElementById("h3cruzado");
  var inputCruzado = document.getElementById("inputCruzado");

  if (selectedValue === "cruzado") {
    h3cruzado.style.display = "flex";
    inputCruzado.style.display = "flex";
  } else {
    h3cruzado.style.display = "none";
    inputCruzado.style.display = "none";
  }
}

function agregarDatos() {
  // Obtener los datos del formulario
  const datosFormulario = {
    tb_razas: document.getElementById("tb_razas").value,
    tb_precio: document.getElementById("tb_precio").value,
    tb_residencia: document.getElementById("tb_residencia").value,
    tb_hembras: document.getElementById("tb_hembras").value,
    tb_machos: document.getElementById("tb_machos").value,
    tb_peso: document.getElementById("tb_peso").value,
    tb_edad: document.getElementById("tb_edad").value,
    tb_IMG: document.getElementById("tb_IMG").value,
    tb_VID: document.getElementById("tb_VID").value,
    // Agrega el resto de los campos aquí
  };

  // Hacer la solicitud POST al servidor
  fetch("http://127.0.0.1:5000/guardar_datos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosFormulario),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al agregar datos");
      }
      return response.json();
    })
    .then((data) => {
      alert("Datos agregados correctamente");
      console.log("Datos agregados correctamente:", data);
      // Puedes realizar acciones adicionales después de agregar los datos si es necesario
    })
    .catch((error) => {
      alert("Error al agregar datos. Por favor, inténtelo de nuevo.");
      console.error("Error:", error);
      // Manejar errores si es necesario
    });

  console.log(datosFormulario);
}
