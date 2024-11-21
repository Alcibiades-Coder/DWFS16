//// Importaciones

const Users = require('../models/User');

//// Objeto Controlador para Manejo de Reservas

const User = {    

////Controladores Reutilizables

// Controlador para Obtener

    get: async (req, res)=>{
        const { id } =req.params;
        const user = await Users.findOne({ _id: id});
        res.status(200).send(user);
    },

// Controlador para Listar

    list: async (req, res) =>{
        const users = await Users.find();
        res.status(200).send(users);
    },

// Controlador para Crear

    create: async (req, res) =>{
        const user = new Users(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser._id);
    },

// Controlador para Actualizar

    update: async (req, res) =>{
        const { id } = req.params;
        const user = await Users.findOne({ _id: id});
        Object.assign(user, req.body);
        await user.save();
        res.sendStatus(204);
    },

// Controlador para Borrar

    destroy: async (req, res) =>{
        const { id } = req.params;
        const user = await Users.findOne({ _id: id});
        if (user){
            await user.deleteOne({_id: id})
        }
        res.sendStatus(204);
    },
    

////Controladores Especificos

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


}
module.exports = User;