// Array global para almacenar las encuestas creada
let encuestas = [];

// Clase constructora Encuesta
class Encuesta {
  constructor() {
    // Asigna un ID único a la encuesta basado en el índice actual del array de encuestas.
    this.id = encuestas.length + 1;
    // Obtiene el título de la encuesta desde el elemento HTML con el ID "titulo".
    this.titulo = document.getElementById("titulo").value;
    // Obtiene las opciones de respuesta del elemento HTML con el ID "opciones",
    // las divide por salto de línea y crea un array de objetos para cada opción.
    this.opcionesInput = document.getElementById("opciones").value.split("\n");
    this.opciones = this.opcionesInput.map((opcion) => ({
      texto: opcion,
      votos: 0,
    }));
    // Crea un conjunto (Set) para verificar si hay opciones duplicadas.
    // Un conjunto no permite valores duplicados.
    this.opcionesSet = new Set(this.opciones.map((opcion) => opcion.texto));
  }
  // Método estático para guardar todas las encuestas en el almacenamiento local.
  static guardarEncuestas() {
    // Convierte el array de encuestas a un string JSON y lo almacena en localStorage.
    localStorage.setItem("encuestas", JSON.stringify(encuestas));
  }

  // Método estático para borrar las encuestas.
  static borrarEncuesta(idEncuesta) {
    // Solicita confirmación al usuario antes de eliminar la encuesta
    if (
      confirm(
        `¿Estás seguro de que deseas eliminar la encuesta con ID ${idEncuesta}?`
      )
    ) {
      // Busca el índice de la encuesta en el array de encuestas
      const indice = encuestas.findIndex(
        (encuesta) => encuesta.id === idEncuesta
      );
      if (indice !== -1) {
        // Elimina la encuesta del array
        encuestas.splice(indice, 1);
        // Guarda los cambios en el almacenamiento local
        this.guardarEncuestas();
        // Actualiza la lista de encuestas en la interfaz
        const listaEncuestas = document.getElementById("listaEncuestas");
        listaEncuestas.innerHTML = "";
      } else {
        // Mostrar un mensaje de error al usuario
        console.error(`Encuesta con ID ${idEncuesta} no encontrada`);
      }
    }
  }
  // Metodo para para emitir un voto en la encuesta
  static votar(idEncuesta, opcionIndex) {
    // Buscamos la encuesta correspondiente en el arreglo de encuestas
    const encuesta = encuestas.find((encuesta) => encuesta.id === idEncuesta);
    // Incrementamos el contador de votos
    encuesta.opciones[opcionIndex].votos++;
    // Guardar las encuestas en el almacenamiento local
    this.guardarEncuestas();
    // Mostrar las encuestas
    UI.mostrarResultados(idEncuesta);
  }
}
// Clase constructora para redenrizar las encuestas y resultados
class UI {
  static crearEncuesta(titulo, opciones) {
    // Asignamos una nueva encuesta a una variable
    const nuevaEncuesta = new Encuesta();
    // Verificar si hay opciones duplicadas
    if (nuevaEncuesta.opcionesSet.size !== nuevaEncuesta.opciones.length) {
      alert("Existen opciones duplicadas");
      return;
    }
    // Validar que se hayan ingresado todos los datos
    if (titulo === "" || opciones.length === 0) {
      alert("Por favor, completa todos los campos");
      return;
    }
    // Agregar la nueva encuesta al array
    encuestas.push(nuevaEncuesta);
    // Guardar las encuestas en el almacenamiento local
    Encuesta.guardarEncuestas();
    // Mostrar las encuestas 
    this.mostrarEncuestas();
  }
  // Metodo para mostrar la lista de encuestas en la interfaz
  static mostrarEncuestas() {
    // Obtener la lista donde se mostrarán las encuestas
    const listaEncuestas = document.getElementById("listaEncuestas");
    // Limpiar la lista antes de volver a poblarla
    listaEncuestas.innerHTML = "";
    // Iterar sobre cada encuesta y crear un elemento de lista
    encuestas.forEach((encuesta) => {
      const li = document.createElement("li");
      li.textContent = encuesta.titulo;
      // Crear botones para votar y eliminar
      const botonVotar = document.createElement("button");
      botonVotar.textContent = "Votar";
      botonVotar.onclick = () => this.mostrarFormularioVotacion(encuesta.id);
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.onclick = () => Encuesta.borrarEncuesta(encuesta.id);
      // Agregar los botones al elemento de lista
      li.appendChild(botonVotar);
      li.appendChild(botonEliminar);
      listaEncuestas.appendChild(li);
    });
  }
  // Metodo para mostrar el formulario de votación
  static mostrarFormularioVotacion(idEncuesta) {
    // Buscamos la encuesta correspondiente en el arreglo de encuestas
    const encuesta = encuestas.find((encuesta) => encuesta.id === idEncuesta);
    // Creamos un div contenedor para el formulario y le asignamos un ID único
    const formularioVotacion = document.createElement("div");
    formularioVotacion.id = "formularioVotacion" + idEncuesta; // Asigna un ID único al formulario
    //Creamos un formulario pa desplegar los elementos de la votación
    const formulario = document.createElement("form");
    // Iterar sobre cada opción y crear un elemento de lista
    encuesta.opciones.forEach((opcion, index) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "opcion";
      radio.value = index;
      const label = document.createElement("label");
      label.textContent = opcion.texto;
      // Agregar los los elementos de lista al formulario
      formulario.appendChild(radio);
      formulario.appendChild(label);
      formulario.appendChild(document.createElement("br"));
    });
    //Crear botones para enviar el voto y para borrar las opciones y resultados
    const botonVotar = document.createElement("button");
    botonVotar.textContent = "Votar";
    botonVotar.onclick = () =>
      Encuesta.votar(
        idEncuesta,
        document.querySelector('input[name="opcion"]:checked').value
      );
    const botonEliminarForm = document.createElement("button");
    botonEliminarForm.textContent = "Eliminar";
    botonEliminarForm.onclick = () => {
      if (
        confirm(
          `¿Estás seguro de que deseas eliminar esta opción y sus resultados?`
        )
      ) {
        const resultadosDiv = document.getElementById("resultados"); // Suponemos que tienes un div con este id para mostrar los resultados
        resultadosDiv.innerHTML = "";
        formularioVotacion.removeChild(formulario);
        formularioVotacion.removeChild(botonEliminarForm);
        formularioVotacion.removeChild(botonVotar);
      }
    };
    // Agregar los los elementos del formulario al div contenedor
    document.body.appendChild(formularioVotacion); // Puedes ajustar la posición según tu HTML
    formularioVotacion.appendChild(formulario);
    formularioVotacion.appendChild(botonVotar);
    formularioVotacion.appendChild(botonEliminarForm);
  }
  // Metodo para mostrar los resultados de la votación
  static mostrarResultados(idEncuesta) {
    // Buscamos la encuesta correspondiente en el arreglo de encuestas
    const encuesta = encuestas.find((encuesta) => encuesta.id === idEncuesta);
    // Obtener div donde se mostrarán las resultados de la votación
    const resultadosDiv = document.getElementById("resultados"); // Suponemos que tienes un div con este id para mostrar los resultados
    // Limpiar el div antes de volver a poblarlo
    resultadosDiv.innerHTML = ""; // Limpiar los resultados anteriores
    // Iterar sobre cada opción y crear un elemento p
    encuesta.opciones.forEach((opcion, index) => {
      const p = document.createElement("p");
    // Se asigna al contenido de texto de p opcion.texto y opcion.votos
      p.textContent = `La opción ${opcion.texto} tiene ${opcion.votos} votos`;
    // Se asigna al contenedor div el elemento p  
      resultadosDiv.appendChild(p);
    });
    return;
  }
}

// Obtener los datos de la encuesta desde el formulario
const boton = document.getElementById("miEncuesta");
// Ante el Evento click adjuntas valores titulo y opciones
boton.addEventListener("click", () => {
  const titulo = document.getElementById("titulo").value;
  const opciones = document.getElementById("opciones").value.split("\n");
// Invocar la Clase UI con lo datos para construir la interfaz  
  UI.crearEncuesta(titulo, opciones);
});
