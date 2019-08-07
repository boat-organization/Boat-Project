const express = require('express')
const router = express.Router()

const Port = require('../models/port.model')
const Boat = require('../models/boat.model')

router.get('/', (req, res) => {
  Port.find({})
  .then(allThePorts => res.render('profile/profile_search', {ports: allThePorts} ))
  .catch(err => console.log('Hubo un error:', err))
})


router.post('/', (req, res, next) => {
  const portId = req.body.infoId      // nos traemos el infoId de axios que fue conseguido por el id del formulario
  console.log(portId)
  Port.findById(portId)   
  .then( thePort => {
    Boat.find({port: portId})
  
        .then(theBoatsPort => res.json({thePort, boats: theBoatsPort}))
        .catch(err => console.log('Hubo un error:', err))

          })    // Pasamos el valor de thePort a axios de nuevo
    .catch(err => console.log('Hubo un error:', err))
})


//MOSTRAR LOS BARCOS CON EL ID DEL PORT SELECCIONADO

router.get('/:id', (req, res, next) => {
  const portId = req.params.id
  console.log(portId)
  Boat.find({port: portId})
  // .populate('port')
  .then(allTheBoats => res.render('boat/boatsInPort', { boats: allTheBoats }))
  .catch(err => console.log('Hubo un error:', err))
})

module.exports = router
