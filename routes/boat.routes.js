const express = require('express')
const router = express.Router()

const Boat = require('../models/boat.model')
const Port = require('../models/port.model')

const uploadCloud = require('../config/cloudinary.config');

//MOSTRAR FORMULARIO DE BARCOS
router.get('/', (req, res) => {
  Port.find({})
  .then(allThePorts => res.render('boat/boats', {ports: allThePorts} ))
  .catch(err => console.log('Hubo un error:', err))
}) 

//CREAMOS UN NUEVO BARCO A TRAVÉS DEL FORMULARIO
router.post('/', uploadCloud.single('photo'), (req, res, next) => {
  const { name, type, capacity, captain, port_id, description, rate} = req.body  //port_id es el name del formulario
  const imgPath = req.file.url;
  const imgName = req.file.originalname;

  Boat.create({ name, type, capacity, captain, port: port_id, description, rate, imgPath, imgName }) //port es el nombre de la propiedad del modelo que coge como valor el port_id del formulario
  .then((boat) => res.redirect('/'))  //index
  .catch(err => console.log('Hubo un error:', err))
})

//EDICIÓN DE UN BARCO


//ELIMINAR BARCO





module.exports = router