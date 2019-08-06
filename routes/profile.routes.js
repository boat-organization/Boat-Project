const express = require('express')
const router = express.Router()

const Port = require('../models/port.model')

router.get('/', (req, res) => {
  Port.find({})
  .then(allThePorts => res.render('profile/profile_search', {ports: allThePorts} ))
  .catch(err => console.log('Hubo un error:', err))
})

// router.post('/', (req, res, next) => {
//   const {date, type, capacity} = req.body

//   Boat.create({ name, type, capacity, captain, port: port_id, description, rate, imgPath, imgName }) //port es el nombre de la propiedad del modelo que coge como valor el port_id del formulario
//   .then((boat) => res.redirect('/'))  //index
//   .catch(err => console.log('Hubo un error:', err))
// })



module.exports = router
