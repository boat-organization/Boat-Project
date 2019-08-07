const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Port = require("../models/port.model");
const Boat = require("../models/boat.model");

const uploadCloud = require("../config/cloudinary.config");

//! MUESTRA PORT DROPDOWN EN SEARCH
// Me pasa a la vista search una variable user y una variable isOwner que funciona como un boolean

// Me pasa a la vista

//a las vistas le paso las variables desde las rutas
// req.user lo puedo hacer siempre en el JS, me da el usuario que tengo en ese momento

//si en otra vista quiero hacer esto,

//router.get(profile)

router.get("/search", (req, res, next) => {
  let isOwner = req.user.role === "OWNER"; // variable para saber si es owner
  Port.find({})
    .then((allThePorts) => res.render("user/search", {ports: allThePorts,user: req.user, isOwner}))
    .catch(err => console.log("Hubo un error:", err))
})

// MOSTRAR BARCOS CUYO PUERTO ES EL ELEGIDO EN EL MAPA!!

router.post('/search/:id', (req, res, next) => {
  Boat.find({port: '5d49c5163c5a5e1ee00ae370'})
  .then(boatsInPort => {
    console.log(boatsInPort)
    res.render('user/search', { boats: boatsInPort })
  })
  .catch(err => console.log('Hubo un error:', err))
})





// MOSTRAR MAPA Y PUNTO EN EL MAPA

router.post("/search", (req, res, next) => {
  const portId = req.body.infoId
  Port.findById(portId)
    .then( thePort=> res.json({ thePort }))
    .catch(err => console.log("Hubo un error:", err));
  }) 


// ----- FORMULARIO NUEVO BARCO ----------- //


//! MUESTRA PORT DROPDOWN EN FORMULARIO DE NEW BOAT
router.get("/owner/add", (req, res, next) => {
  Port.find({})
    .then(allThePorts =>
      res.render("user/owner/addBoat", { ports: allThePorts, user: req.user })
    )
    .catch(err => console.log("Hubo un error:", err));
});

//! CREAMOS NEW BOAT
router.post("/owner/add", uploadCloud.single("photo"), (req, res, next) => {
  const {
    name,
    type,
    capacity,
    captain,
    port_id,
    description,
    rate
  } = req.body; //port_id es el name del formulario

  const owner = req.user._id;

  const imgPath = req.file.url;
  const imgName = req.file.originalname;

  Boat.create({
    name,
    type,
    capacity,
    captain,
    owner, //we add the user ID
    port: port_id,
    description,
    rate,
    imgPath,
    imgName
  }) //port es el nombre de la propiedad del modelo que coge como valor el port_id del formulario
    .then(boat => res.redirect("/")) //index
    .catch(err => console.log("Hubo un error:", err));
});

module.exports = router;
