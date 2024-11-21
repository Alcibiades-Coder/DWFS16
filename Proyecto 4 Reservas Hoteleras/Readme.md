
# PROYECTO 4: Reservas Hoteleras

## **ÍNDICE**

* [1. Intro](#1-intro)
* [2. Demo](#2-demo)
* [3. ¿Qué construirás?](#3-qu%C3%A9-construir%C3%A1s)
* [4. Objetivos de Aprendizaje](#4-objetivos-de-aprendizaje)
* [5. Requisitos](#5-requisitos-y-entregables)
* [6. Criterios de evaluación](#6-criterios-de-evaluaci%C3%B3n)
* [7. Entregas](#7-entregas)

****

## 1. Intro
El Proyecto número 4 del Bootcamp DWFS Cohort 16 consiste en el desarrollo de una API CRUD ejemplificado en un sistema de reservas hoteleras donde se pueda:

Crear Reservas.
Listar Reservas.
Buscar Reservas por diferentes criterios de busqueda.
Borrar Reservas.
Actualizar Reservas.

****

## 2. Demo

Visita la demostración aquí: [LINK](https://github.com/UDDBootcamp/7M_FULLSTACK_M4_PROY/tree/master/demo)

En esta demo, se muestra una aplicación de gestión de pedidos para restaurantes. Te recomendamos revisarla cuidadosamente antes de iniciar este proyecto, para asegurarte de que comprendes todos los requisitos.

La documentación de la API en esta demo utiliza Swagger y OpenAPI. Aunque la documentación es opcional en este proyecto, te alentamos a explorarla.

![](./images/api.png)

****

## 3. ¿Qué se construyó?

Este proyecto, se divide en dos actividades:

1. La construcción de una aplicación de servicios para la gestión de reservas en hoteles que involucra las 4 operaciones `CRUD` y otras 6 adicionales relacionadas con filtros, utilizando Node.js y Express. 

2. Opcionalmente, realizarás un proceso de investigación relacionado con la documentación de API, usando Swagger, con la estandarización OPENAPI, la cual se utiliza en equipos internacionales para construir servicios escalables.

A continuación, se presentan las características solicitadas del proyecto:

- Se utilizó Node.js y Express para el desarrollo del servidor.
- Se cuenta con un archivo `.env` para las variables de entorno.
- Se cuenta con un archivo `.gitignore` que incluye las carpetas y archivos que se ocultan para el repositorio.
- Uso de una arquitectura de carpetas como se muestra a continuación.

```
Proyecto\ 4\ Reservas\ Hoteleras
│  └─  api
│    ├─ .env
│    ├─ .gitignore
│    ├─ api.js
│    ├─ app
│    │  └─ main.js  
│    ├─ controllers
│    │  ├─ auth.controller.js
│    │  └─ user.controller.js  
│    ├─ index.html
│    ├─ models
│    │  ├─ Auth.js
│    │  └─ User.js
│    ├─ package-lock.json
│    └─ package.json
└─ README.md (ESTE ARCHIVO)
```

- Se implementan los siguientes 10 endpoints. 

|Descripción del Endpoint|	Método|	Endpoint| Ejemplo. Caso de uso. |
|-----------------------|----------|------------|---------|
|Crear reserva	| POST| 	/api/reservas|Como viajero, quiero hacer una reserva en el hotel "Hotel Paraíso" para el 15 de mayo de 2023. Necesito una habitación doble para dos adultos y un niño.
|Obtener la lista de reservas|	GET|	/api/reservas|Como gerente del hotel, quiero ver una lista de todas las reservas para hoy para poder planificar el trabajo del personal de limpieza y recepción.|
|Obtener información de una reserva específica	|GET|	/api/reservas/:id|Como recepcionista, necesito verificar los detalles de la reserva del huésped que acaba de llegar al hotel. Su número de reserva es 12345.
|Actualizar información de una reserva|	PUT|	/api/reservas/:id|Como huésped, necesito cambiar mi reserva en el hotel "Hotel Paraíso". Originalmente reservé una habitación doble, pero ahora necesito una suite familiar. Mi número de reserva es 12345.|
|Eliminar una reserva específica	|DELETE|	/api/reservas/:id|Como viajero, tuve un cambio de planes y ya no necesito la habitación que reservé en el hotel "Hotel Paraíso". Mi número de reserva es 12345.|
|Filtrar reservas por hotel|	GET|	/api/reservas?hotel=HOTEL|Como gerente de una cadena de hoteles, quiero ver todas las reservas para el "Hotel Paraíso" para el próximo mes.|
|Filtrar reservas por rango de fechas|	GET|	/api/reservas?fecha_inicio=FECHA_INICIO&fecha_fin=FECHA_FIN|Como gerente del hotel, quiero ver todas las reservas para la semana de Navidad para poder planificar el personal y las actividades necesarias.|
|Filtrar reservas por tipo de habitación|	GET|	/api/reservas?tipo_habitacion=TIPO_HABITACION|Como gerente del hotel, quiero ver todas las reservas para nuestras suites de lujo para el próximo mes para asegurarme de que todo esté en perfectas condiciones para nuestros huéspedes VIP.|
|Filtrar reservas por estado|	GET|	/api/reservas?estado=ESTADO|Como gerente del hotel, quiero ver todas las reservas que están pendientes de pago para poder hacer un seguimiento con los clientes.|
|Filtrar reservas por número de huéspedes|	GET|	/api/reservas?num_huespedes=NUM_HUESPEDES|Como gerente del hotel, quiero ver todas las reservas para grupos de más de 5 personas para el próximo mes, para poder planificar las necesidades adicionales de estos grupos grandes.|


- Opcionalmente, puedes utilizar este [schema](https://github.com/U-Camp/7M_FULLSTACK_M4_PROY/blob/main/schema.json) para guiarte. Si lo prefieres, puedes crearlo desde cero. Es tu decisión.
- Opcionalmente, documentar todos tus `endpoints` utilizando `Swagger` y `OpenAPI` (observa la demo para ver su implementación).
- Opcionalmente, configurar el proyecto para el despliegue en [render.com](https://render.com).


****

## 4. Objetivos de aprendizaje logrados

Objtivos Aprendidos en Clases
- Se Aplicaron las operaciones CRUD en un segmento de datos.
- Se Desarrolló una API REST.
- Se Trabajó con datos estructurados.
- Se Implementó la lógica de negocios.
- Se Documentó una API.
Objetivos Aprendidos de forma Autodidacta
- Se Manejaron los datos en una Base de Datos MongoDB Atlas.
- Se Integró la API al DOM mediante una plantilla simple y formularios HTML.
- Se Integró el Registro y Login mediante el uso de JSON Web Tokens y encriptación.
****

## 5. Requisitos y entregables

Usa esta lista para saber los requisitos mínimos del proyecto:
### GENERAL
- [OK] Realizarse de manera individual / Proyecto realizado por Alcibiades Oyarzún Neilson.

### ARQUITECTURA DE CARPETAS

- [OK] Crear una arquitectura de carpetas y archivos, clara / Se creó una estructura de carpetas y archivos ya expresada más arriba.

```
Proyecto\ 4\ Reservas\ Hoteleras
│  └─  api
│    ├─ .env
│    ├─ .gitignore
│    ├─ api.js
│    ├─ app
│    │  └─ main.js  
│    ├─ controllers
│    │  ├─ auth.controller.js
│    │  └─ user.controller.js  
│    ├─ index.html
│    ├─ models
│    │  ├─ Auth.js
│    │  └─ User.js
│    ├─ package-lock.json
│    └─ package.json
└─ README.md (ESTE ARCHIVO)
```
 
### APLICACIÓN DE SERVICIOS CRUD

- [OK] Permitir la creación de reservas con los detalles necesarios (por ejemplo, hotel, tipo de habitación, número de huéspedes, fechas, etc.).

![](../Images/CreateForm.png)

En el Archivo /app/main.js se crea el formulario para poder ingresar los datos de la reserva.
```
//// Template para Manejo de Reservas

const loadInitialTemplate = () => {
    const template = `
        <h1>Reservas</h1>
            <form id="user-form">
                <div>
                    <label>Nombre</label>
                    <input name="name" />
                </div>
                <div>
                    <label>Fecha de Nacimiento</label>
                    <input id="nacimiento" name="date" type="date" />
                </div>
                <div>
                    <label>Ciudad</label>
                    <input name="city" type="text" />
                </div>
                <div>
                    <label>Hotel</label>
                    <select name="hotel">
                        <option value="Paraiso">Paraiso</option>
                        <option value="Niagara">Niagara</option>
                        <option value="Cozumel">Cozumel</option>
                        <option value="En Sueño">En Sueño</option>
                    </select>
                </div>
                <div>
                    <label>N° de Adultos</label>
                    <select name="numpassengers">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <label>N° de Niños</label>
                    <select name="numkids">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div>
                    <label>Tipo de Habitación</label>
                    <select name="roomtype">
                        <option value="Single">Single (1 Queen size bed)</option>
                        <option value="Double">Double (1 Queen size bed-2 Single size bed)</option>
                        <option value="Double Queen">Double Queens (2 Queen size bed)</option>
                        <option value="Double Kings">Double Kings (2 King size bed)</option>
                        <option value="Master Suite">Master Suite (1 Super King size bed-2 Queen size bed)</option>
                    </select>
                </div>
                <div>
                    <label>Fecha de Ingreso</label>
                    <input name="checkin" type="date" />
                </div>
                <div>
                    <label>Fecha de Salida</label>
                    <input name="checkout" type="date" />
                </div>
                <div>
                    <label>Estado de la Reserva</label>
                    <input type="text" name="state" value="Creada" readonly>
                </div>
                
                <button type="submit">Enviar</button>
            </form>
...
`;
        
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = template;
}
```

Para la recepción de los datos del formulario se crea dentro del archivo /app/main.js el siguiente listener, este a su vez previene el comportamiento por defecto del botón "Enviar" y realiza un Fetch al EndPoint /users con el metodo POST para luego limpiar el formulario y ejecutar la función para listar las reservas.
```
//// Listener para el Formulario de Creación de Pasajeros

const addFormListener = () => {
    const userForm = document.getElementById('user-form');
    userForm.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(userForm);
        const data = Object.fromEntries(formData.entries())
        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('jwt'),
            }
        })
        userForm.reset();
        getUsers();
    }
}
```

El EndPoint /users con el metodo POST es utilizado por Express en el archivo /api.js. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función isAuthenticated.
```
app.post('/users', isAuthenticated, user.create);
```

La logica del EndPoint se encuentra en su archivo controlador /controllers/user.controller.js y es la siguiente:
```
// Controlador para Crear

    create: async (req, res) =>{
        const user = new Users(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser._id);
    },
```

y el schema utilizado para la logica se encuentra en el archivo de modelos /models/User.js y su estructura es:
```
//// Objeto Modelo de DB para Reservas

const Users = mongoose.model('User', {
    idsearch: { type: String, required: false, minLength: 3},
    name: { type: String, required: true, minLength: 3},
    date: { type: Date, required: true, minLength: 3},
    city: { type: String, required: true, minLength: 3},
    hotel: { type: String, required: true, minLength: 1},
    numpassengers: { type: Number, required: true, minLength: 1},
    numkids: { type: Number, required: true, minLength: 1},
    roomtype: { type: String, required: true, minLength: 3},
    checkin: { type: Date, required: true, minLength: 3},
    checkout: { type: Date, required: true, minLength: 3},
    state: { type: String, required: true, minLength: 3},
})

module.exports = Users;
```


  
- [OK] Permitir la visualización de la lista de reservas.
  
- [OK] Permitir la obtención de la información de una reserva específica.
  
- [OK] Permitir la actualización de la información de una reserva.
  
- [OK] Permitir la eliminación de una reserva.
  
- [OK] Permitir la búsqueda de reservas por hotel, rango de fechas, tipo de habitación, estado y número de huéspedes.
  
- [OK] Almacenar los datos de las reservas en una estructura de datos.


### CONTROL DE VERSIONES
- [ ] Crear un repositorio en GitHub y subir el proyecto al mismo.


### ENTREGA A TIEMPO
- [ ] Entregar a tiempo el proyecto.


### DOCUMENTACIÓN DE LA API (OPCIONAL)

- [ ] Documentar todos los `endpoints` utilizando `Swagger` y `OpenAPI`


### DESPLIEGUE (OPCIONAL)
- [ ] Crear una URL de producción para este proyecto, a través de [render.com](https://render.com)



****

## 6. Criterios de evaluación

Tu calificación estará definida en base a los siguientes criterios:


| ÁREA       | % DEL TOTAL |
| ------------- |:-------------:|
|Arquitectura de carpetas y organización de código|50%
|Estructura de datos y persistencia de información|20%
|Uso adecuado del control de versiones (Git & GitHub)| 20%
|Entrega a tiempo| 10%


****

## 7. Entregas

- **Definición de fechas.** Habla con tus coaches sobre el periodo de entregas del proyecto. Es importante que te organices y hagas un seguimiento constante de tus avances para cumplir con los plazos establecidos.

- **Cumple con los requisitos y entregables.** En caso de que no logres cumplir con todos los requisitos, se te asignará un progreso proporcional a lo que lograste. Recuerda que lo importante es entregar siempre tu proyecto, independientemente del grado de completitud.
