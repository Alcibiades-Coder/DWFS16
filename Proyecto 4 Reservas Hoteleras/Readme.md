
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

- [OK] Crear una arquitectura de carpetas y archivos, clara - Se creó una estructura de carpetas y archivos ya expresada más arriba.

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

+ ### A.- CREACIÓN DE RESERVAS

- [OK] Permitir la creación de reservas con los detalles necesarios (por ejemplo, hotel, tipo de habitación, número de huéspedes, fechas, etc.).

![](../Images/CreateForm.png)

En el Archivo `/app/main.js` se crea el formulario para poder ingresar los datos de la reserva.
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

Para la recepción de los datos del formulario se crea dentro del archivo `/app/main.js` el siguiente listener, este a su vez previene el comportamiento por defecto del botón `Enviar` y realiza un Fetch al EndPoint /users con el metodo POST para luego limpiar el formulario y ejecutar la función para listar las reservas.
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

El EndPoint `/users` con el metodo POST es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.create`.
```
app.post('/users', isAuthenticated, user.create);
```

La logica de la función controladora `user.create` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para Crear

    create: async (req, res) =>{
        const user = new Users(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser._id);
    },
```

y el schema utilizado para la logica se encuentra en el archivo de modelos `/models/User.js` y su estructura es:
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

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header a la API de la siguiente forma:
```
POST /users HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Content-Length: 191
Content-Type: application/json
Host: 127.0.0.1:3000
Origin: http://127.0.0.1:3000
Referer: http://127.0.0.1:3000/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"

```

El Fetch realizado por el controlador adjunta los datos del formulario al Body dentro del Payload en la API de la siguiente forma:
```
{
  "name": "John Doe",
  "date": "1980-01-01",
  "city": "Santiago",
  "hotel": "Paraiso",
  "numpassengers": "2",
  "numkids": "0",
  "roomtype": "Double",
  "checkin": "2024-12-12",
  "checkout": "2024-12-13",
  "state": "Creada"
}
```

Como respuesta se obtiene el ID de la reserva creada y el codigo de status 201 (Created) de la siguiente forma:
```
"673f39aa56c8ff457832b80b"
```

+ ### B.- LISTAR RESERVAS
  
- [OK] Permitir la visualización de la lista de reservas.

En el Archivo `/app/main.js` se crea un contenedor para poder listar los datos de la reservas.
```
<h1>Listado de Reservas</h1>
   <ul id="user-list"></ul>
```

Dento del Archivo `/app/main.js` tambien se encuentra la función `getUsers` que genera una plantilla para mostrar todos las reservas creadas de la siguiente forma:


```
const getUsers = async () => {
    const response = await fetch('/users', {
        headers: {
            Authorization: localStorage.getItem('jwt')
        }
    });
    const users = await response.json();
    const template = user => `
        <li>
           <div><p>Reserva a Nombre de: ${user.name} 
           <p>Id de la Reserva: ${user._id}
           <p>En el Hotel: ${user.hotel} 
           <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños 
           <p>Tipo de Habitación: ${user.roomtype} 
           <p>Fecha de Ingreso: ${user.checkin} 
           <p>Fecha de Salida: ${user.checkout}
           <p>Estado Reserva: ${user.state}</p> 
           <p></div><button data-id="${user._id}">Eliminar</button>
        </li>
    `
    // Controlador para Borrar Reserva de Pasajero por ID

    const userList = document.getElementById('user-list');
    userList.innerHTML = users.map(user => template(user)).join('');
    users.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            await fetch(`/users/${user._id}`, {
               method: 'DELETE', 
               headers: {
                Authorization: localStorage.getItem('jwt'),
               }
            })
            userNode.parentNode.remove()
            alert('Eliminado con Exito!')
        }
    })
}
```

Además esta función realiza un Fetch al EndPoint `/users` con el metodo GET que es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.list`. 

```
app.get('/users', isAuthenticated, user.list);
```

La logica de la función controladora `user.list` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para Listar

    list: async (req, res) =>{
        const users = await Users.find();
        res.status(200).send(users);
    },
```

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header y el ID como parametro a la API de la siguiente forma:
```
GET /users/"ID DE BUSQUEDA" HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
Referer: http://127.0.0.1:3000/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"ws"
```

Como respuesta se obtiene el arreglo de objetos de reservas el codigo de status 200 (OK) de la siguiente forma:
```
[
    {
        "_id": "673f39aa56c8ff457832b80b",
        "name": "John Doe Doe",
        "date": "1980-01-01T00:00:00.000Z",
        "city": "Santiago",
        "hotel": "Paraiso",
        "numpassengers": 2,
        "numkids": 0,
        "roomtype": "Double",
        "checkin": "2024-12-12T00:00:00.000Z",
        "checkout": "2024-12-13T00:00:00.000Z",
        "state": "Creada",
        "__v": 0
    }
]
```

+ ### C.- BUSQUEDA DE RESERVAS POR ID
 
- [OK] Permitir la obtención de la información de una reserva específica.

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el ID de una reserva y asi obtener los datos de esta.
```
 <h2>Buscar Reserva por ID</h2>
        <form id="search-form">
            <label>ID de la Reserva:</label>
            <input type="text" id="search-id" placeholder="Ingrese el ID de la reserva" />
            <button type="submit">Buscar</button>
        </form>        
```
Tambien se crea el contenedor que desplegará los resultados de la busqueda.
```
<div id="search-results"></div>
```

Para realizar la busqueda se crea la función `searchUsers` que realiza un Fetch a `/users/:id` y despliega los resultados en una plantilla en el contendor creado para este fin.
```
const searchUsers = () => {
    const searchForm = document.getElementById('search-form');
    searchForm.onsubmit = async (e) => {
        e.preventDefault();
        const searchId = document.getElementById('search-id').value.trim();

        if (!searchId) {
            alert("Por favor, ingrese un ID válido.");
            return;
        }

        try {

    // Llamada a la API para obtener el usuario por su ID

            const response = await fetch(`/users/${searchId}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontró ninguna reserva con el ID especificado.");
            }

            const user = await response.json();

    // Selecciona el contenedor de resultados de búsqueda

            const searchResults = document.getElementById('search-results');
            
    // Muestra el usuario si se encuentra

            searchResults.innerHTML = `
                <div>
                    <h3>Resultado de la búsqueda</h3>
                    <p>Reserva a Nombre de: ${user.name}</p>
                    <p>ID de la Reserva: ${user._id}</p>
                    <p>En el Hotel: ${user.hotel}</p>
                    <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                    <p>Tipo de Habitación: ${user.roomtype}</p>
                    <p>Fecha de Ingreso: ${user.checkin}</p>
                    <p>Fecha de Salida: ${user.checkout}</p>
                    <p>Estado Reserva: ${user.state}</p>
                    <button data-id="${user._id}">Eliminar</button>
                </div>
            `;

//// Función de Controlador para Borrar Reserva de Pasajero por ID

            const deleteButton = searchResults.querySelector(`[data-id="${user._id}"]`);
            deleteButton.onclick = async () => {
                await fetch(`/users/${user._id}`, {
                    method: 'DELETE',
                    headers: { Authorization: localStorage.getItem('jwt') },
                });
                searchResults.innerHTML = '';
                alert('Eliminado con éxito!');
            };
        } catch (error) {

    // Muestra un mensaje si no se encuentra el usuario o hay un error

            document.getElementById('search-results').innerHTML = `<p>${error.message}</p>`;
        }
    };
};

```
El Fetch hace referencia al EndPoint `/users/:id` con el metodo GET que es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.get`.
```
app.get('/users/:id', isAuthenticated, user.get);
```

La logica de la función controladora `user.get` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para Obtener

    get: async (req, res)=>{
        const { id } =req.params;
        const user = await Users.findOne({ _id: id});
        res.status(200).send(user);
    },
```

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header y el ID como parametro a la API de la siguiente forma:
```
GET /users/"ID DE BUSQUEDA" HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
Referer: http://127.0.0.1:3000/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"ws"
```


Como respuesta se obtiene el objeto de reservas con el ID buscado y el codigo de status 200 (OK) de la siguiente forma:
```
{
    "_id": "673f39aa56c8ff457832b80b",
    "name": "John Doe Doe",
    "date": "1980-01-01T00:00:00.000Z",
    "city": "Santiago",
    "hotel": "Paraiso",
    "numpassengers": 2,
    "numkids": 0,
    "roomtype": "Double",
    "checkin": "2024-12-12T00:00:00.000Z",
    "checkout": "2024-12-13T00:00:00.000Z",
    "state": "Creada",
    "__v": 0
}
```

+ ### D.- BUSQUEDAS POR DIFERENTES CRITERIOS

- [OK] Permitir la búsqueda de reservas por hotel, rango de fechas, tipo de habitación, estado y número de huéspedes.

* ### D.1.- BUSQUEDA POR HOTEL

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el hotel de la reserva.

```
<h2>Buscar Reserva por Hotel</h2>
        <form id="search-hotel">
            <label>Nombre del Hotel:</label>
                    <select id="hotel-name">
                        <option value="Paraiso">Paraiso</option>
                        <option value="Niagara">Niagara</option>
                        <option value="Cozumel">Cozumel</option>
                        <option value="En Sueño">En Sueño</option>
                    </select>
            <button type="submit">Buscar</button>
        </form>        
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.
```
<div id="hotel-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByHotel` que realiza un Fetch a `/users/hotel?hotel="HOTEL SELECCIONADO"` y despliega los resultados en una plantilla en el contendor creado para este fin.
```
//// Función de Controlador para Listar las Reservas de Pasajeros por nombre de Hotel

const searchUsersByHotel = () => {
    const searchHotelForm = document.getElementById('search-hotel');
    searchHotelForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección

        const hotelName = document.getElementById('hotel-name');
        const hotelSelected = hotelName.value;

        try {

    // Llamada a la API para obtener las reservas en el hotel especificado

            const response = await fetch(`/users/hotel?hotel=${encodeURIComponent(hotelSelected)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron reservas para el hotel especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel

            const hotelResults = document.getElementById('hotel-results');
            
            if (users.length > 0) {
                // Genera el HTML para mostrar los usuarios encontrados
                hotelResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

    // Función de Controlador para Borrar Reserva de Pasajero por ID

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {

    // Si no se encuentran resultados, muestra un mensaje

                hotelResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('hotel-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};

```

El Fetch hace referencia al EndPoint `/users/hotel` con el metodo GET que es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.searchByHotel`.

```
app.get('/users/:id', isAuthenticated, user.searchByHotel);
```

La logica de la función controladora `user.searchByHotel` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para Buscar por Hotel

    searchByHotel:  async (req, res) => {
    const hotel = req.query.hotel; // Obtiene el nombre del hotel desde la consulta (query param)

    if (!hotel) {
        return res.status(400).json({ message: 'El nombre del hotel es obligatorio' });
    }

    try {
        const reservations = await Users.find({ hotel: hotel });
        if (reservations.length === 0) {
            return res.status(404).json({ message: 'No se encontraron reservas para el hotel especificado.' });
        }
        return res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al obtener las reservas' });
    }
},
```

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header y el HOTEL SELECCIONADO como parametros a la API de la siguiente forma:
```
GET /users/hotel?hotel="HOTEL SELECCIONADO" HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
Referer: http://127.0.0.1:3000/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

Como respuesta se obtiene el arreglo de objetos de reservas con el HOTEL SELECCIONADO y el codigo de status 200 (OK) de la siguiente forma:
```
[
    {
        "_id": "673f39aa56c8ff457832b80b",
        "name": "John Doe Doe",
        "date": "1980-01-01T00:00:00.000Z",
        "city": "Santiago",
        "hotel": "Paraiso",
        "numpassengers": 2,
        "numkids": 0,
        "roomtype": "Double",
        "checkin": "2024-12-12T00:00:00.000Z",
        "checkout": "2024-12-13T00:00:00.000Z",
        "state": "Creada",
        "__v": 0
    }
]
```

* ### D.2.- BUSQUEDA POR RANGO DE FECHAS

En el Archivo `/app/main.js` se crea el formulario para poder ingresar rango de fechas de las reservas.

```
 <h2>Buscar Reservas por Rango de Fechas</h2>
        <form id="search-dates">
            <label>Fecha de Inicio:</label>
            <input type="date" id="start-date" name="start-date" />
            <label>Fecha de Fin:</label>
            <input type="date" id="end-date" name="end-date" />
        <button type="submit">Buscar</button>
        </form>       
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.
```
<div id="date-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByDateRange` que realiza un Fetch a `/users/dates?start=YYYY-MM-dd&end=YYYY-MM-dd` y despliega los resultados en una plantilla en el contendor creado para este fin.
```
//// Función de Controlador para Listar las Reservas de Pasajeros por rango de fechas

const searchUsersByDateRange = () => {
   const searchDateForm = document.getElementById('search-date');
    searchDateForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección

        const dateCheckIn = document.getElementById('start-date');
        const dateCheckOut = document.getElementById('start-date');
        const checkinSelected = dateCheckIn.value;
        const checkoutSelected = dateCheckOut.value;

        try {

    // Llamada a la API para obtener las reservas en el hotel especificado
    /users/dates?start=2024-12-11&end=2024-12-14
            const response = await fetch(`/users/dates?start=${encodeURIComponent(checkinSelectedSelected)}&end=${encodeURIComponent(checkoutSelectedSelected)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron reservas para el hotel especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel

            const datesResults = document.getElementById('date-results');
            
            if (users.length > 0) {
                // Genera el HTML para mostrar los usuarios encontrados
                dateResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

    // Controlador para Borrar Reserva de Pasajero por ID

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {
                
    // Si no se encuentran resultados, muestra un mensaje

                dateResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje
 
            document.getElementById('date-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};


```

El Fetch hace referencia al EndPoint `/users/dates` con el metodo GET que es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.searchByDates`.

```
app.get('/users/dates', isAuthenticated, user.searchByDates);
```

La logica de la función controladora `user.searchByDates` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para buscar por rango de fechas

searchByDates: async (req, res) => {
    const { start, end } = req.query;

    if (!start || !end) {
        return res.status(400).json({ message: 'Las fechas de inicio y fin son requeridas.' });
    }

    try {
        
        const startDate = new Date(start);
        const endDate = new Date(end);  
        
        const bookings = await Users.find({
            checkin: { $lte: endDate },
            checkout: { $gte: startDate }
        });

        res.json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
},
```

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header y el HOTEL SELECCIONADO como parametros a la API de la siguiente forma:
```
GET /users/dates?start="FECHA CHECKIN YYYY-MM-dd"&end="FECHA CHECKOUT YYYY-MM-dd HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
If-None-Match: W/"116-z5Jq0HRx/xyf8ONAjVVNAPdelkg"
Referer: http://127.0.0.1:3000/?start-date=2024-12-12&end-date=2024-12-13
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

Como respuesta se obtiene el arreglo de objetos de reservas con el rango de fechas seleccionado y el codigo de status 304 (Not Modified) de la siguiente forma:
```
[
    {
        "_id": "673f39aa56c8ff457832b80b",
        "name": "John Doe Doe",
        "date": "1980-01-01T00:00:00.000Z",
        "city": "Santiago",
        "hotel": "Paraiso",
        "numpassengers": 2,
        "numkids": 0,
        "roomtype": "Double",
        "checkin": "2024-12-12T00:00:00.000Z",
        "checkout": "2024-12-13T00:00:00.000Z",
        "state": "Creada",
        "__v": 0
    }
]
```

* ### D.3.- BUSQUEDA POR TIPO DE HABITACIÓN

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el tipo de habitación de la reserva.

```
<h2>Buscar Reserva por Tipo de Habitación</h2>
            <form id="search-room">
                <label>Tipo de Habitación:</label>
                    <select id="roomtype-name">
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Double Queen">Double Queens</option>
                        <option value="Double Kings">Double Kings</option>
                        <option value="Master Suite">Master Suite</option>
                    </select>
            <button type="submit">Buscar</button>
            </form>            
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.
```
<div id="rooms-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByRoomType` que realiza un Fetch a `/users/roomtype?roomtype="HABITACIÓN SELECCIONADA` y despliega los resultados en una plantilla en el contendor creado para este fin.
```
//// Función de Controlador para Listar las Reservas de Pasajeros por tipo de Habitación

const searchUsersByRoomType = () => {
    const searchRoomForm = document.getElementById('search-room');
    searchRoomForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección

        const roomName = document.getElementById('roomtype-name');
        console.log(roomName.value);
        const roomSelected = roomName.value;
        
        try {

    // Llamada a la API para obtener las reservas en el hotel especificado

            const response = await fetch(`/users/roomtype?roomtype=${encodeURIComponent(roomSelected)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron habitaciones para el tipo especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel

            const roomsResults = document.getElementById('rooms-results');
            
            if (users.length > 0) {

    // Genera el HTML para mostrar los usuarios encontrados

                roomsResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

    // Función de Controlador para Borrar Reserva de Pasajero por ID

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {

    // Si no se encuentran resultados, muestra un mensaje

                roomsResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('rooms-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};
```

El Fetch hace referencia al EndPoint `/users/roomtype` con el metodo GET que es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.searchRoomType`.

```
app.get('/users/roomtype', isAuthenticated, user.searchRoomType);
```

La logica de la función controladora `user.searchRoomType` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para Buscar por Tipo de Habitación

searchRoomType:  async (req, res) => {
    const roomtype = req.query.roomtype;

    if (!roomtype) {
        return res.status(400).json({ message: 'El tipo de habitación es obligatorio' });
    }

    try {
        
        const rooms = await Users.find({ roomtype: roomtype });

        if (rooms.length === 0) {
            return res.status(404).json({ message: 'No se encontraron habitaciones del tipo especificado.' });
        }

        
        return res.status(200).json(rooms);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al obtener las habitaciones' });
    }
},
```

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header y el HOTEL SELECCIONADO como parametros a la API de la siguiente forma:
```
GET /users/roomtype?roomtype=Double HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
Referer: http://127.0.0.1:3000/?start-date=2024-12-12&end-date=2024-12-13
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

Como respuesta se obtiene el arreglo de objetos de reservas con el rango de fechas seleccionado y el codigo de status 304 (Not Modified) de la siguiente forma:
```
[
    {
        "_id": "673f39aa56c8ff457832b80b",
        "name": "John Doe Doe",
        "date": "1980-01-01T00:00:00.000Z",
        "city": "Santiago",
        "hotel": "Paraiso",
        "numpassengers": 2,
        "numkids": 0,
        "roomtype": "Double",
        "checkin": "2024-12-12T00:00:00.000Z",
        "checkout": "2024-12-13T00:00:00.000Z",
        "state": "Creada",
        "__v": 0
    }
]
```

* ### D.4.- BUSQUEDA POR ESTADO DE LA RESERVA

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el estado de las reservas.

```
 <h2>Buscar Reserva por Estado</h2>
            <form id="search-state">
                <label>Tipo de Estado:</label>
                    <select id="state-name">
                        <option value="Creada">Creada</option>
                        <option value="Modificada">Modificada</option>
                    </select>
            <button type="submit">Buscar</button>
            </form>     
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.
```
<div id="state-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByState` que realiza un Fetch a `/users/state?state="ESTADO DE LA RESERVA"` y despliega los resultados en una plantilla en el contendor creado para este fin.
```
//// Función de Controlador para Listar las Reservas de Pasajeros por estado de reserva

const searchUsersByState = () => {
    const searchStateForm = document.getElementById('search-state');
    searchStateForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección

        const stateName = document.getElementById('state-name');
        const stateSelected = stateName.value;

        try {

    // Llamada a la API para obtener las reservas en el hotel especificado
            
            const response = await fetch(`/users/state?state=${encodeURIComponent(stateSelected)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron reservas para el estado especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel
    
            const stateResults = document.getElementById('state-results');
            
            if (users.length > 0) {
                // Genera el HTML para mostrar los usuarios encontrados
                stateResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

//// Función de Controlador para Borrar Reserva de Pasajero por ID          

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {

    // Si no se encuentran resultados, muestra un mensaje
                
                stateResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('state-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};
```

El Fetch hace referencia al EndPoint `/users/state` con el metodo GET que es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.searchByState`.

```
app.get('/users/state', isAuthenticated, user.searchByState);
```

La logica de la función controladora `user.searchByState` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para buscar por estado de la reserva

searchByState:  async (req, res) => {
    const state = req.query.state; // Obtiene el nombre del hotel desde la consulta (query param)

    if (!state) {
        return res.status(400).json({ message: 'El nombre del estado es obligatorio' });
    }

    try {
        
        const states = await Users.find({ state: state });

        if (states.length === 0) {
            return res.status(404).json({ message: 'No se encontraron estados especificados.' });
        }

        
        return res.status(200).json(states);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Hubo un error al obtener las reservas' });
    }
},

```

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header y el HOTEL SELECCIONADO como parametros a la API de la siguiente forma:
```
GET /users/state?state=Creada HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
Referer: http://127.0.0.1:3000/?start-date=2024-12-12&end-date=2024-12-13
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

Como respuesta se obtiene el arreglo de objetos de reservas con el estado seleccionado y el codigo de status 200 (OK) de la siguiente forma:
```
[
    {
        "_id": "673f39aa56c8ff457832b80b",
        "name": "John Doe Doe",
        "date": "1980-01-01T00:00:00.000Z",
        "city": "Santiago",
        "hotel": "Paraiso",
        "numpassengers": 2,
        "numkids": 0,
        "roomtype": "Double",
        "checkin": "2024-12-12T00:00:00.000Z",
        "checkout": "2024-12-13T00:00:00.000Z",
        "state": "Creada",
        "__v": 0
    }
]
```
* ### D.5.- BUSQUEDA POR NÚMERO DE HUESPEDES

En el Archivo `/app/main.js` se crea el formulario para poder ingresar el número de adutlos de las reservas.

```
       <h2>Buscar Reserva por N° de Adultos</h2>
            <form id="search-numpassengers">
                <label>Pasajeros Adultos en la Reserva:</label>
                <input type="text" id="search-adults" placeholder="Ingrese el N° de Adultos en la reserva" />
            <button type="submit">Buscar</button>
            </form>         
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.
```
<div id="adults-results"></div>
```

Para realizar la busqueda se crea la función `searchUsersByNumPassengers` que realiza un Fetch a `/users/adults?adults=="N° DE ADULTOS DE LA RESERVA"` y despliega los resultados en una plantilla en el contendor creado para este fin.
```
//// Función Controlador para Listar las Reservas de Pasajeros por Número de Adultos

const searchUsersByNumPassengers = () => {
    const searchAdultForm = document.getElementById('search-numpassengers');
    searchAdultForm.onsubmit = async (e) => {
        e.preventDefault();
        
    // Obtiene el nombre del hotel del campo de selección
 
        const adults = document.getElementById('search-adults').value.trim();
        
        try {

    // Llamada a la API para obtener las reservas en el hotel especificado
            
            const response = await fetch(`/users/adults?adults=${encodeURIComponent(adults)}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron resultados para el N° especificado.");
            }

            const users = await response.json();

    // Selecciona el contenedor de resultados de búsqueda por hotel

            const adultsResults = document.getElementById('adults-results');
            
            if (users.length > 0) {

    // Genera el HTML para mostrar los usuarios encontrados

                adultsResults.innerHTML = users.map(user => `
                    <div>
                        <h3>Reserva a Nombre de: ${user.name}</h3>
                        <p>ID de la Reserva: ${user._id}</p>
                        <p>Hotel: ${user.hotel}</p>
                        <p>Para: ${user.numpassengers} Adultos y ${user.numkids} Niños</p>
                        <p>Tipo de Habitación: ${user.roomtype}</p>
                        <p>Fecha de Ingreso: ${user.checkin}</p>
                        <p>Fecha de Salida: ${user.checkout}</p>
                        <p>Estado Reserva: ${user.state}</p>
                        <button data-id="${user._id}">Eliminar</button>
                    </div>
                `).join('');

    // Controlador para Borrar Reserva de Pasajero por ID

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {
    // Si no se encuentran resultados, muestra un mensaje

                adultsResults.innerHTML = `<p>No se encontraron reservas con N° de adultos especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('adults-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};
```

El Fetch hace referencia al EndPoint `/users/adults` con el metodo GET que es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.searchByNumPassengers`.

```
app.get('/users/adults', isAuthenticated, user.searchByNumPassengers);
```

La logica de la función controladora `user.searchByNumPassengers` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para Buscar por Número de Pasajeros Adultos

searchByNumPassengers: async (req, res) => {
    const { adults } = req.query;

    if (!adults) {
        return res.status(400).json({ message: 'El número de adultos es requerido.' });
    }

    try {
        
        const numAdults = parseInt(adults);

        if (isNaN(numAdults)) {
            return res.status(400).json({ message: 'El número de adultos debe ser un valor numérico.' });
        }

        
        const bookings = await Users.find({ numpassengers: numAdults });

        
        res.json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
},

```

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header y el HOTEL SELECCIONADO como parametros a la API de la siguiente forma:
```
GET /users/adults?adults="N° DE ADULTOS DE LA RESERVA" HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
Referer: http://127.0.0.1:3000/?start-date=2024-12-12&end-date=2024-12-13
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

Como respuesta se obtiene el arreglo de objetos de reservas con el estado seleccionado y el codigo de status 200 (OK) de la siguiente forma:
```
[
    {
        "_id": "673f39aa56c8ff457832b80b",
        "name": "John Doe Doe",
        "date": "1980-01-01T00:00:00.000Z",
        "city": "Santiago",
        "hotel": "Paraiso",
        "numpassengers": 2,
        "numkids": 0,
        "roomtype": "Double",
        "checkin": "2024-12-12T00:00:00.000Z",
        "checkout": "2024-12-13T00:00:00.000Z",
        "state": "Creada",
        "__v": 0
    }
]
```

+ ### E.- ACTUALIZACIÓN DE RESERVA
    
- [OK] Permitir la actualización de la información de una reserva.


En el Archivo `/app/main.js` se crea el formulario para poder ingresar el ID de la reserva a actualizar.

```
       <h2>Modificar Reserva por ID</h2>
            <form id="update-form">
                <label>ID de la Reserva:</label>
                <input type="text" id="update-id" placeholder="Ingrese el ID de la reserva" />
                <button type="submit">Buscar</button>
            </form>                
```

Tambien se crea el contenedor que desplegará los resultados de la busqueda.
```
<div id="update-results"></div>
```

Para realizar la busqueda se crea la función `updateUsersById` que realiza un Fetch a `/users/"ID DE LA RESERVA"` con metodo GET y despliega los resultados en un formulario con los datos precargados en el contendor creado para este fin. Una vez completado el formulario se envía donde se realiza nuevamente un Fetch a `/users/"ID DE LA RESERVA"` pero está vez con el metodo PUT.
```
//// Función de Controlador para Actualizar las Reservas de Pasajeros por ID

const updateUsersById = () => {
    const updateUserForm = document.getElementById('update-form');
    updateUserForm.onsubmit = async (e) => {
        e.preventDefault();
        
        const updateId = document.getElementById('update-id').value.trim();

        try {

    // Llama a la API para obtener los datos del usuario

const response = await fetch(`/users/${updateId}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt')
                }
            });

            if (!response.ok) {
                throw new Error("No se encontraron reservas para el estado especificado.");
            }

            const user = await response.json();

    // Muestra el formulario pre-rellenado con los datos del usuario

            const updateResults = document.getElementById('update-results');
            const formatDate = user.date.split("T")[0];
            const formatCheckin = user.checkin.split("T")[0];
            const formatCheckout = user.checkout.split("T")[0];
            
            
            updateResults.innerHTML = `
                <div>
                   <form id="update-user-form">
                        <div>
                            <label>Nombre</label>
                            <input name="name" value="${user.name}" />
                        </div>
                        <div>
                            <label>Fecha de Nacimiento</label>
                            <input name="date" type="date" value="${formatDate}" />
                        </div>
                        <div>
                            <label>Ciudad</label>
                            <input name="city" type="text" value="${user.city}" />
                        </div>
                        <div>
                            <label>Hotel</label>
                            <select name="hotel">
                                <option value="Paraiso" ${user.hotel === "Paraiso" ? "selected" : ""}>Paraiso</option>
                                <option value="Niagara" ${user.hotel === "Niagara" ? "selected" : ""}>Niagara</option>
                                <option value="Cozumel" ${user.hotel === "Cozumel" ? "selected" : ""}>Cozumel</option>
                                <option value="En Sueño" ${user.hotel === "En Sueño" ? "selected" : ""}>En Sueño</option>
                            </select>
                        </div>
                        <div>
                            <label>N° de Adultos</label>
                            <select name="numpassengers">
                                <option value="1" ${user.numpassengers === 1 ? "selected" : ""}>1</option>
                                <option value="2" ${user.numpassengers === 2 ? "selected" : ""}>2</option>
                                <option value="3" ${user.numpassengers === 3 ? "selected" : ""}>3</option>
                                <option value="4" ${user.numpassengers === 4 ? "selected" : ""}>4</option>
                                <option value="5" ${user.numpassengers === 5 ? "selected" : ""}>5</option>
                            </select>
                        </div>
                        <div>
                            <label>N° de Niños</label>
                            <select name="numkids">
                                <option value="0" ${user.numkids === 0 ? "selected" : ""}>0</option>
                                <option value="1" ${user.numkids === 1 ? "selected" : ""}>1</option>
                                <option value="2" ${user.numkids === 2 ? "selected" : ""}>2</option>
                                <option value="3" ${user.numkids === 3 ? "selected" : ""}>3</option>
                                <option value="4" ${user.numkids === 4 ? "selected" : ""}>4</option>
                            </select>
                        </div>
                        <div>
                            <label>Tipo de Habitación</label>
                            <select name="roomtype">
                                <option value="Single" ${user.roomtype === "Single" ? "selected" : ""}>Single</option>
                                <option value="Double" ${user.roomtype === "Double" ? "selected" : ""}>Double</option>
                                <option value="Double Queen" ${user.roomtype === "Double Queen" ? "selected" : ""}>Double Queen</option>
                                <option value="Double Kings" ${user.roomtype === "Double Kings" ? "selected" : ""}>Double Kings</option>
                                <option value="Master Suite" ${user.roomtype === "Master Suite" ? "selected" : ""}>Master Suite</option>
                            </select>
                        </div>
                        <div>
                            <label>Fecha de Ingreso</label>
                            <input name="checkin" type="date" value="${formatCheckin}" />
                        </div>
                        <div>
                            <label>Fecha de Salida</label>
                            <input name="checkout" type="date" value="${formatCheckout}" />
                        </div>
                        <div>
                            <label>Estado de la Reserva</label>
                            <input type="text" name="state" value="Modificada" readonly>
                        </div>
            
                        <button type="submit">Actualizar</button>
                    </form>
                </div>
            `;

    // Evento para enviar el formulario de actualización

            const updateUserForm = document.getElementById('update-user-form');
            updateUserForm.onsubmit = async (e) => {
                e.preventDefault();
                
                const formData = new FormData(updateUserForm);
                const data = Object.fromEntries(formData.entries());

    // Realiza la solicitud PUT para actualizar el usuario
                
                const updateResponse = await fetch(`/users/${updateId}`, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: localStorage.getItem('jwt')
                    }
                });

                if (updateResponse.ok) {
                    alert("Usuario actualizado con éxito.");
                    updateResults.innerHTML = ""; 
                } else {
                    alert("Error al actualizar el usuario.");
                }
            };
        } catch (error) {
            document.getElementById('update-results').innerHTML = `<p>${error.message}</p>`;
        }
    };
};
```

Los Fetchs hacen referencia a los EndPoint `/users/:id` con el metodo GET y el metodo PUT que es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.searchByNumPassengers`.

```
app.put('/users/:id', isAuthenticated, user.update);
```

La logica de la función controladora `user.update` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para Actualizar

    update: async (req, res) =>{
        const { id } = req.params;
        const user = await Users.findOne({ _id: id});
        Object.assign(user, req.body);
        await user.save();
        res.sendStatus(204);
    },
```

El Fetch con metodo GET realizado por el controlador adjunta el JSON Web Token dentro del Header y el HOTEL SELECCIONADO como parametros a la API de la siguiente forma:
```
GET /users/"ID DE LA RESERVA" HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
Referer: http://127.0.0.1:3000/?start-date=2024-12-12&end-date=2024-12-13
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

Como respuesta se obtiene el objeto de reservas con el ID y el codigo de status 304 (Not Modified) de la siguiente forma:
```
{
    "_id": "673f39aa56c8ff457832b80b",
    "name": "John Doe Doe",
    "date": "1980-01-01T00:00:00.000Z",
    "city": "Santiago",
    "hotel": "Paraiso",
    "numpassengers": 2,
    "numkids": 0,
    "roomtype": "Double",
    "checkin": "2024-12-12T00:00:00.000Z",
    "checkout": "2024-12-13T00:00:00.000Z",
    "state": "Creada",
    "__v": 0
}
```  

El Fetch con metodo PUT realizado por el controlador adjunta el JSON Web Token dentro del Header y el HOTEL SELECCIONADO como parametros a la API de la siguiente forma:
```
PUT /users/673f39aa56c8ff457832b80b HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
Referer: http://127.0.0.1:3000/?start-date=2024-12-12&end-date=2024-12-13
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

Como Payload se agrega la data de la siguiente forma:
```
{
    "_id": "673f39aa56c8ff457832b80b",
    "name": "John Doe Doe",
    "date": "1980-01-01T00:00:00.000Z",
    "city": "Santiago",
    "hotel": "Paraiso",
    "numpassengers": 2,
    "numkids": 0,
    "roomtype": "Double",
    "checkin": "2024-12-12T00:00:00.000Z",
    "checkout": "2024-12-13T00:00:00.000Z",
    "state": "Modificada",
    "__v": 0
}
```  


+ ### F.- ELIMINACIÓN DE RESERVA
  
- [OK] Permitir la eliminación de una reserva.

Dentro de todas las funciones anteriormente mencionadas, excepto la creación de reservas y la actualizacion de reservas, se crea una función que a continuación del despliegue de resultados incopora un botón "Eliminar" que realiza un Fetch a `/users/:id` y ejecuta el siguiente codigo expresado en `/app/main.js`:
```  
//// Función de Controlador para Borrar Reserva de Pasajero por ID          

                users.forEach(user => {
                    const deleteButton = document.querySelector(`[data-id="${user._id}"]`);
                    deleteButton.onclick = async () => {
                        await fetch(`/users/${user._id}`, {
                            method: 'DELETE',
                            headers: { Authorization: localStorage.getItem('jwt') },
                        });
                        deleteButton.parentElement.remove();
                        alert('Reserva eliminada con éxito');
                    };
                });
            } else {

    // Si no se encuentran resultados, muestra un mensaje
                
                stateResults.innerHTML = `<p>No se encontraron reservas en el hotel especificado.</p>`;
            }
        } catch (error) {

    // Maneja el error y muestra un mensaje

            document.getElementById('state-results').innerHTML = `<p>${error.message}</p>`;
        }
       

    };
};
```  

El Fetch hace referencia al EndPoint `/users/:id` con el metodo DELETE que es utilizado por Express en el archivo `/api.js`. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función `isAuthenticated`. Tambien el Endpoint hace referencia a la función controladora `user.destroy`.

```
app.delete('/users/:id', isAuthenticated, user.destroy);
```

La logica de la función controladora `user.destroy` del EndPoint se encuentra en su archivo controlador `/controllers/user.controller.js` y es la siguiente:
```
// Controlador para Borrar

    destroy: async (req, res) =>{
        const { id } = req.params;
        const user = await Users.findOne({ _id: id});
        if (user){
            await user.deleteOne({_id: id})
        }
        res.sendStatus(204);
    },

```

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header y el HOTEL SELECCIONADO como parametros a la API de la siguiente forma:
```
DELETE /users/673f39aa56c8ff457832b80b HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: es-419,es
Authorization: Bearer "JSON Web Token" // Debe ir el valor del JSON Web Token almacenado en la variable jwt
Connection: keep-alive
Host: 127.0.0.1:3000
Referer: http://127.0.0.1:3000/?start-date=2024-12-12&end-date=2024-12-13
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Sec-GPC: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
sec-ch-ua: "Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
```

Como respuesta se obtiene el codigo de status 204 (No Content) de la siguiente forma:

+ ### F.- ALMACENAMIENTO DE DATOS DE RESERVAS
    
- [OK] Almacenar los datos de las reservas en una estructura de datos.

Para el almacenamiento de los datos se utilizo el sistema de base de datos MongoDB Atlas y su servicio gratuito y en Node.JS se instalaron las dependecias de Mongoose paquete para conectar y administrar bases de datos de MongoDB.

Los datos fueron almacenados según en los archivos de modelos  `/models/User.js` y `/models/Auth.js` con las siguientes estructuras

`/models/User.js`

```
//// Importaciones

const mongoose = require('mongoose');

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

`/models/Auth.js`

```
//// Importaciones

const mongoose = require('mongoose');

//// Objeto Modelo de DB para Autenticación

const Auths = mongoose.model('Auth', {
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
});

module.exports = Auths;
```


+ ### G.- CONTROL DE VERSIONES

- [OK] Crear un repositorio en GitHub y subir el proyecto al mismo.

Se crea el repositorio publico en GITHUB con nombre Proyecto 4 Reservas Hoteleras en el [Link](https://github.com/Alcibiades-Coder/DWFS16/tree/main/Proyecto%204%20Reservas%20Hoteleras).


+ ### H.- ENTREGA A TIEMPO
- [ ] Entregar a tiempo el proyecto.


+ ### I.- DOCUMENTACIÓN DE LA API (OPCIONAL)

- [ ] Documentar todos los `endpoints` utilizando `Swagger` y `OpenAPI`


+ ### J.- DESPLIEGUE (OPCIONAL)
- [ ] Crear una URL de producción para este proyecto, a través de [render.com](https://render.com)



****
