const express = require('express')
const router = express.Router()

const Boat = require('../models/boat.model')
const Port = require('../models/port.model')


router.get('/', (req, res) => {
  Port.find({})
  .then(allThePorts => res.render('boats', {ports: allThePorts} ))
  .catch(err => console.log('Hubo un error:', err))
}) 

router.post('/', (req, res, next) => {
  const { name, type, capacity, captain, port_id, description, rate} = req.body  //port_id es el name del formulario
  console.log(port_id)
  Boat.create({ name, type, capacity, captain, port: port_id, description, rate }) //port es el nombre de la propiedad del modelo que coge como valor el port_id del formulario
  .then(() => res.redirect('/'))  //index
  .catch(err => console.log('Hubo un error:', err))
})
 

module.exports = router