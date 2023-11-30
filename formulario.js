var formulario = document.querySelector("#form")

formulario.onsubmit = function (event) { // remplazando el nombre de la funcion e por event

  event.preventDefault(); // error de escritura .preventDefault

  let n = formulario.elements[0] // a partir de aqui se cmabio let a todas las variables declaradas previamente con var
  let edadElement = formulario.elements[1] // remplazando el nombre de la variale e por edadElement
  let na = formulario.elements[2]

  let nombre = n.value
  let edad = edadElement.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  let lista = document.getElementById("lista-de-invitados")

  let elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista") // error de escritura .add
  lista.appendChild(elementoLista)

  // var spanNombre = document.createElement("span") // se comenta por exceso de declaracion de variables.
  // var inputNombre = document.createElement("input")
  // var espacio = document.createElement("br")
  // spanNombre.textContent = "Nombre: "
  // inputNombre.value = nombre 
  // elementoLista.appendChild(spanNombre)
  // elementoLista.appendChild(inputNombre)
  // elementoLista.appendChild(espacio)


  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span")
    let inputNombre = document.createElement("input")
    let espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  let botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  let corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}