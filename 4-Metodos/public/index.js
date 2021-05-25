lista();

function lista() {
  fetch("/personas")
    .then((res) => res.json())
    .then(function (datos) {
      let parrafo = "";
      for (let i = 0; i < datos.length; i++) {
        parrafo += `<tr><td>${datos[i].nombre}</td><td>${datos[i].apellido}</td><td>${datos[i].edad}</td></tr>`;
      }
      document.getElementById("div").innerHTML = `<table>${parrafo}</table>`;
    });
}

function enviarInfo() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let paqueteFDX = {
    nombre,
    apellido,
    edad,
  };

  fetch("/personas", {
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify(paqueteFDX),
  })
    .then((res) => res.json())
    .then(function (datos) {
      console.log(datos);
      lista();
    });
}

function modificarInfo() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let paqueteFDX = {
    nombre,
    apellido,
    edad,
  };

  fetch("/personas", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paqueteFDX),
  })
    .then((res) => res.json())
    .then(function (datos) {
      document.getElementById(
        "feedback"
      ).innerHTML = `<h3>${datos.mensaje}</h3>`;
      lista();
    });
}

function eliminarInfo() {
  let nombre = { nombre: document.getElementById("nombre").value };

  fetch("/personas", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nombre),
  })
    .then((res) => res.json())
    .then(function (datos) {
      document.getElementById(
        "feedback"
      ).innerHTML = `<h3>${datos.mensaje}</h3>`;
      lista();
    });
}
