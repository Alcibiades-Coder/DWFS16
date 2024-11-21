// Importaciones

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const user = require('./controllers/user.controller');
const { Authenticate, isAuthenticated } = require('./controllers/auth.controller')

// Constantes de Aplicación

const app = express();
const port = 3000;

// Uso de Express JSON

app.use(express.json());

// Conexión con MonogDB mediante Mongoose

mongoose.connect(process.env.MONGOUSERANDDB)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error(err));

// Endpoints de Login y Registro  

app.post('/login', Authenticate.login);
app.post('/register', Authenticate.register);

// Endpoints GET, POST, PUT, PATCH, DELETE

app.get('/users', isAuthenticated, user.list);
app.get('/users/hotel', isAuthenticated, user.searchByHotel);
app.get('/users/roomtype', isAuthenticated, user.searchRoomType);
app.get('/users/dates', isAuthenticated, user.searchByDates);
app.get('/users/adults', isAuthenticated, user.searchByNumPassengers);
app.get('/users/state', isAuthenticated, user.searchByState);
app.post('/users', isAuthenticated, user.create);
app.get('/users/:id', isAuthenticated, user.get);
app.put('/users/:id', isAuthenticated, user.update);
app.patch('/users/:id', isAuthenticated, user.update);
app.delete('/users/:id', isAuthenticated, user.destroy);

//Middleware para ejecutar APP de forma estatica por Express

app.use(express.static('app'));

// Endpoint para Ejecutar la Página Base index.html

app.get('/',(req, res) =>{
    res.sendFile(`${__dirname}/index.html`);
});

// Endpoint para Ejecutar error si es que no encuentra la Página

app.get('*', (req, res) => {
    res.status(404).send('Esta Pagina No Existe!');
});

// Endpoint para asignar el Listen Port para la app

app.listen(port, () =>{
    console.log('Arrancando la App');
    
});