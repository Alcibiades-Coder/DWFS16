
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

El EndPoint /users con el metodo POST es utilizado por Express en el archivo /api.js. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función isAuthenticated. Tambien el Endpoint hace referencia a la función controladora user.create.
```
app.post('/users', isAuthenticated, user.create);
```

La logica de la función controladora user.create del EndPoint se encuentra en su archivo controlador /controllers/user.controller.js y es la siguiente:
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
  
- [OK] Permitir la visualización de la lista de reservas.

En el Archivo /app/main.js se crea un contenedor para poder listar los datos de la reservas.
```
<h1>Listado de Reservas</h1>
   <ul id="user-list"></ul>
```

Dento del Archivo /app/main.js tambien se encuentra la función getUsers que genera una plantilla para mostrar todos las reservas creadas de la siguiente forma:


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

Además esta función realiza un Fetch al EndPoint /users con el metodo GET que es utilizado por Express en el archivo /api.js. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función isAuthenticated. Tambien el Endpoint hace referencia a la función controladora user.list. 

```
app.get('/users', isAuthenticated, user.list);
```

La logica de la función controladora user.list del EndPoint se encuentra en su archivo controlador /controllers/user.controller.js y es la siguiente:
```
// Controlador para Listar

    list: async (req, res) =>{
        const users = await Users.find();
        res.status(200).send(users);
    },
```

El Fetch realizado por el controlador adjunta el JSON Web Token dentro del Header a la API de la siguiente forma:
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

Como respuesta se obtiene el objeto de reservas el codigo de status 200 (OK) de la siguiente forma:
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

 
- [OK] Permitir la obtención de la información de una reserva específica.

En el Archivo /app/main.js se crea el formulario para poder ingresar el ID de una reserva y asi obtener los datos de esta.
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

Para realizar la busqueda se crea la función searchUsers que realiza un Fetch a /users/_id y despliega los resultados en una plantilla en el contendor creado para este fin.
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
El Fetch hace referencia al EndPoint /users/:id con el metodo GET que es utilizado por Express en el archivo /api.js. Cabe notar que el usuario de la API debe estar autenticado y sus credenciales son manejadas por la función isAuthenticated. Tambien el Endpoint hace referencia a la función controladora user.get.
```
app.get('/users/:id', isAuthenticated, user.get);
```

La logica de la función controladora user.get del EndPoint se encuentra en su archivo controlador /controllers/user.controller.js y es la siguiente:
```
// Controlador para Obtener

    get: async (req, res)=>{
        const { id } =req.params;
        const user = await Users.findOne({ _id: id});
        res.status(200).send(user);
    },
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
