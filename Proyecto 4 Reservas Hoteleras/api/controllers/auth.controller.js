const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { expressjwt:expressJwt} = require('express-jwt');
require('dotenv').config();
const Auths = require('../models/Auth')

const secret = process.env.SECRET;// Recordar Exportar la llave a las Variables de Entorno como export JWT_SECRET=llave
const validateJwt = expressJwt({ secret, algorithms: ['HS256'] });
const signToken = _id => jwt.sign({ _id }, secret);

const findAndAssingUser = async (req, res, next) => {
    try {
        const user = await Auths.findById(req.auth._id);
        if (!user){
            return res.status(401).end();
        }
        req.user = user;
        next();
    }catch (e) {
        next (e)
    }
    
}

const isAuthenticated = express.Router().use(validateJwt, findAndAssingUser);

const Authenticate = {
    login: async (req, res) => {
        const { body } = req;
        try {
            const user = await Auths.findOne({ email: body.email });
            if (!user){
                res.status(401).send('Usuario y/o contraseña invalida');
            } else {
              const isMatch = await bcrypt.compare(body.password, user.password);
              if (isMatch) {
                const signed = signToken(user._id)
                res.status(200).send(signed)
              } else {
                res.status(401).send('Usuario y/o contraseña invalida');
              }
            }
            
        }catch(e) {
            res.send(e.message)
        }
    },
    register: async (req, res) => {
        const {body } = req;
        try{
            const isAuth = await Auths.findOne({ email: body.email})
            if(isAuth){
                res.send('Usuario ya existe!')
            } else {
                const salt = await bcrypt.genSalt();
                const hashed = await bcrypt.hash(body.password, salt);
                const user = await Auths.create({email: body.email, password: hashed, salt});
                const signed = signToken(user._id);
                res.send(signed)
            }
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

}

module.exports = { Authenticate, isAuthenticated }
