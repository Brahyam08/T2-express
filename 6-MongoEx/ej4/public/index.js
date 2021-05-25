mostrar();
let localMenus = [];

function mostrar() {
  fetch("/api/menus")
    .then((res) => res.json())
    .then(function (datos) {
      datos.error
        ? (document.getElementById("feedback").innerHTML =
            "<h3>Ha habido un error</h3>")
        : imprimir(datos),
        (localMenus = datos.contenido);
    });
}

function crear() {
  fetch("/api/nuevoMenu", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      numero: document.getElementById("numero").value,
      primerPlato: document.getElementById("primerPlato").value,
      segundoPlato: document.getElementById("segundoPlato").value,
      postre: document.getElementById("postre").value,
      precio: parseFloat(document.getElementById("precio").value),
    }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      datos.contenido.insertedCount >= 1
        ? ((document.getElementById("feedback").innerHTML =
            "<h3>Menu añadido correctamente</h3>"),
          mostrar())
        : (document.getElementById("feedback").innerHTML =
            "<h3>Se ha producido un error</h3>");
    });
}

function editar(indice) {
  document.getElementById("numero").value = localMenus[indice].numero;
  document.getElementById("primerPlato").value = localMenus[indice].primerPlato;
  document.getElementById("segundoPlato").value =
    localMenus[indice].segundoPlato;
  document.getElementById("postre").value = localMenus[indice].postre;
  document.getElementById("precio").value = localMenus[indice].precio;
}

function editarFinal() {
  fetch("/api/editarMenu", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      numero: document.getElementById("numero").value,
      primerPlato: document.getElementById("primerPlato").value,
      segundoPlato: document.getElementById("segundoPlato").value,
      postre: document.getElementById("postre").value,
      precio: parseFloat(document.getElementById("precio").value),
    }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      datos.contenido.modifiedCount >= 1
        ? ((document.getElementById("feedback").innerHTML =
            "<h3>Menu editado correctamente</h3>"),
          mostrar())
        : (document.getElementById("feedback").innerHTML =
            "<h3>Se ha producido un error</h3>");
    });
}

function borrar(indice) {
  fetch("/api/borrarMenu", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      numero: localMenus[indice].numero,
    }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      datos.contenido.deletedCount >= 1
        ? ((document.getElementById("feedback").innerHTML =
            "<h3>Menu editado correctamente</h3>"),
          mostrar())
        : (document.getElementById("feedback").innerHTML =
            "<h3>Se ha producido un error</h3>");
    });
}

function imprimir(datos) {
  let parrafo = "";

  for (let i = 0; i < datos.contenido.length; i++) {
    parrafo += `<tr><td>${datos.contenido[i].numero}</td><td>${datos.contenido[i].primerPlato}</td><td>${datos.contenido[i].segundoPlato}</td><td>${datos.contenido[i].postre}</td><td>${datos.contenido[i].precio}</td><td><button onclick="editar(${i})">Editar</button></td><td><button onclick="borrar(${i})">Borrar</button></td></tr>`;
  }

  document.getElementById(
    "menus"
  ).innerHTML = `<table><th>Numero</th><th>1er Plato</th><th>2o Plato</th><th>Postre</th><th>Precio</th>${parrafo}</table>`;
}
