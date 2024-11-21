
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
