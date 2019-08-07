const express = require("express");
const router = express.Router();

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

//! MUESTRA EL FORMULARIO SEARCH

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



//! MUESTRA EL MAPA & PONE EL MARKER EN EL MAPA
router.post("/search", (req, res, next) => {
  const portId = req.body.infoId
  Port.findById(portId)
    .then( thePort=> res.json({ thePort }))
    .catch(err => console.log("Hubo un error:", err));
  }) 


// ----- FORMULARIO NUEVO BARCO ----------- //


//! MUESTRA LOS PORT EN EL DROPDOWN DEL FORMULARIO NEW BOAT
router.get("/owner/add", (req, res, next) => {
  Port.find({})
    .then(allThePorts =>
      res.render("user/owner/addBoat", { ports: allThePorts, user: req.user })
    )
    .catch(err => console.log("Hubo un error:", err));
});

//! CREA NEW BOAT
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

//! MOSTRAMOS TODOS LOS BOATS DE ESE USUARIO

router.get("/owner/myBoats", (req, res, next) => {
  Boat.find({ owner: req.user._id })
    .populate("port")
    .then(myBoats => res.render("user/owner/boatIndex", { boat: myBoats }))
    .catch(err => console.log("There was an error:", err));
});

//! EDITAMOS UN BOAT DE ESE USUARIO

router.get("/owner/myBoats/edit/:id", (req, res) => {
  Boat.findById(req.params.id)
    .then(theBoat => res.render("user/owner/boatEdit", { theBoat }))
    .catch(err => console.log("There was an error:", err));
});
router.post("/owner/myBoats/edit/:id", (req, res) => {
  const { name, description } = req.body;

  Boat.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name,
        description
      }
    },
    { new: true }
  )
    .then(updatedBoat => {
      res.redirect("/user/owner/myBoats");
    })
    .catch(err => console.log("Hubo un error:", err));
});

//! ELIMINAMOS UN BOAT DE ESE USUARIO

router.post("/owner/myBoats/delete/:id", (req, res, next) => {
  //console.log(req.params.id);
  Boat.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/user/owner/myBoats"))
    .catch(function(err) {
      console.log("Hubo un error:", err);
    });
});

module.exports = router;
