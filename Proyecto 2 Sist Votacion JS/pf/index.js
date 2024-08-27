// Array global para almacenar las encuestas creada
let encuestas = [];

// Función para crear una nueva encuesta
function crearEncuesta() {
  // Obtener los datos de la encuesta desde el formulario
  const titulo = document.getElementById("titulo").value;
  const opcionesInput = document.getElementById("opciones").value.split("\n");
  // Convertir las opciones en un array de objetos con texto y votos
  const opciones = opcionesInput.map((opcion) => ({ texto: opcion, votos: 0 }));
  // Verificar si hay opciones duplicadas
  const opcionesSet = new Set(opciones.map((opcion) => opcion.texto));
  if (opcionesSet.size !== opciones.length) {
    alert("Existen opciones duplicadas");
    return;
  }
  // Validar que se hayan ingresado todos los datos
  if (titulo === "" || opciones.length === 0) {
    alert("Por favor, completa todos los campos");
    return;
  }
  // Crear un objeto para representar la nueva encuesta
  const nuevaEncuesta = {
    id: encuestas.length + 1,
    titulo,
    opciones,
  };
  // Agregar la nueva encuesta al array
  encuestas.push(nuevaEncuesta);
  // Guardar las encuestas en el almacenamiento local
  guardarEncuestas();
  // Mostrar las encuestas 
  mostrarEncuestas();
}

// Función para guardar las encuestas en el almacenamiento local
function guardarEncuestas() {
  localStorage.setItem("encuestas", JSON.stringify(encuestas));
}

// Función para mostrar la lista de encuestas en la interfaz
function mostrarEncuestas() {
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
    botonVotar.onclick = () => mostrarFormularioVotacion(encuesta.id);
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => borrarEncuesta(encuesta.id);
     // Agregar los botones al elemento de lista
    li.appendChild(botonVotar);
    li.appendChild(botonEliminar);
    listaEncuestas.appendChild(li);
  });
}

// Función para mostrar el formulario de votación
function mostrarFormularioVotacion(idEncuesta) {
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
    votar(
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
  document.body.appendChild(formularioVotacion); 
  formularioVotacion.appendChild(formulario);
  formularioVotacion.appendChild(botonVotar);
  formularioVotacion.appendChild(botonEliminarForm);
}

// Función para para emitir un voto en la encuesta
function votar(idEncuesta, opcionIndex) {
  // Buscamos la encuesta correspondiente en el arreglo de encuestas
  const encuesta = encuestas.find((encuesta) => encuesta.id === idEncuesta);
  // Incrementamos el contador de votos
  encuesta.opciones[opcionIndex].votos++;
  // Guardar las encuestas en el almacenamiento local
  guardarEncuestas();
  // Mostrar las encuestas 
  mostrarResultados(idEncuesta);
}

// Función para mostrar los resultados de la votación
function mostrarResultados(idEncuesta) {
  const encuesta = encuestas.find((encuesta) => encuesta.id === idEncuesta);
  // Obtener div donde se mostrarán las resultados de la votación
  const resultadosDiv = document.getElementById("resultados"); 
  console.log(resultadosDiv);
  // Limpiar el div antes de volver a poblarlo
  resultadosDiv.innerHTML = "";
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

// Función para borrar encuestas
function borrarEncuesta(idEncuesta) {
// Confirmación al usuario antes de eliminar la encuesta
  if (
    confirm(
      `¿Estás seguro de que deseas eliminar la encuesta con ID ${idEncuesta}?`
    )
  ) {
    // Buscamos el índice de la encuesta en el array de encuestas
    const indice = encuestas.findIndex(
      (encuesta) => encuesta.id === idEncuesta
    );
    // Si se encuentra la encuesta, la eliminamos del array
    if (indice !== -1) {
      encuestas.splice(indice, 1);
      // Guardamos los cambios en el almacenamiento local
      guardarEncuestas();
            // Actualizamos la lista de encuestas en la interfaz
      const listaEncuestas = document.getElementById("listaEncuestas");
      listaEncuestas.innerHTML = "";
      // Volvemos a llamar a la función para redibujar la lista
      //mostrarEncuestas();
    } else {
      // Si no se encuentra la encuesta, mostramos un mensaje de error
      console.error(`Encuesta con ID ${idEncuesta} no encontrada`);
    }
  }
}
