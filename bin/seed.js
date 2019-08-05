const mongoose = require('mongoose')
const Port = require('../models/port.model')



const dbName = 'boatProject';         //nombre de la colección en la BBDD
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true }); 
Port.collection.drop()

const ports = [ 
  {
    name: "Port of Rosas",
    country: "Spain",
    url: "",
    location: {
      // type: { type: "Point" },
      coordinates: [ 3.177195, 42.256666 ] 
    }
  },
  {
    name: "Port of Barcelona",
    country: "Spain",
    url: "http://www.apb.es",
    location: {
      // type: { type: "Point" },
      coordinates: [ 2.170143, 41.354907 ]  
    }
  },
  {
    name: "Port of Tarragona",
    country: "Spain",
    url: "http://www.porttarragona.es",
    location: {
      // type: { type: "Point" },
      coordinates: [ 1.222229, 41.096171 ] 
    }
  },
  { 
    name: "Port of Castellon",
    country: "Spain",
    url: "http://www.portcastello.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ 0.018711, 39.971595 ]
    }
  },
  { 
    name: "Port of Valencia",
    country: "Spain",
    url: "http://www.valenciaport.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -0.319633, 39.444412 ]
    }
  },
  { 
    name: "Port of Denia",
    country: "Spain",
    url: "",
    location: {
      // type: { type: "Point" },
      coordinates: [ 0.116172, 38.843217 ]
    }
  },
  { 
    name: "Port of Alicante",
    country: "Spain",
    url: "http://www.puertoalicante.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -0.491209, 38.33553 ]
    }
  },
  { 
    name: "Port of Torrevieja",
    country: "Spain",
    url: "",
    location: {
      // type: { type: "Point" },
      coordinates: [ -0.68656, 37.970692 ]
    }
  },
  { 
    name: "Port of Cartagena",
    country: "Spain",
    url: "http://www.apc.es",
    location: {
      // type: { type: "Point" },
      coordinates: [ -0.978985, 37.581181 ]
    }
  },
  { 
    name: "Port of Mazarron",
    country: "Spain",
    url: "",
    location: {
      // type: { type: "Point" },
      coordinates: [ -1.257119, 37.562915 ] 
    }
  },
  { 
    name: "Port of Almeria",
    country: "Spain",
    url: "http://www.apalmeriamotril.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -2.473898, 36.832302 ]
    }
  },
  { 
    name: "Port of Motril",
    country: "Spain",
    url: "http://www.apalmeriamotril.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -2.473898, 36.832302 ]
    }
  },
  { 
    name: "Port of Malaga",
    country: "Spain",
    url: "http://www.puertomalaga.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -4.419422, 36.709577 ]
    }
  },
  { 
    name: "Port of Gibraltar",
    country: "Spain",
    url: "http://www.gibraltarport.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -5.361586, 36.136974 ]
    }
  },
  { 
    name: "Port of the Bay of Cadiz",
    country: "Spain",
    url: "http://www.puertocadiz.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -6.263924, 36.520121 ]
    }
  },
  { 
    name: "Port of Rota",
    country: "Spain",
    url: "",
    location: {
      // type: { type: "Point" },
      coordinates: [ -6.335506, 36.619523 ]
    }
  },
  { 
    name: "Port of Huelva",
    country: "Spain",
    url: "http://www.puertohuelva.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -6.937265, 37.192869 ] 
    }
  },
  { 
    name: "Port of Vigo",
    country: "Spain",
    url: "http://www.apvigo.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -8.731728, 42.242625 ]
    }
  },
  { 
    name: "Port of Corcubion",
    country: "Spain",
    url: "",
    location: {
      // type: { type: "Point" },
      coordinates: [ -9.188261, 42.947565 ]
    }
  },
  { 
    name: "Port of A Coruna",
    country: "Spain",
    url: "http://www.puertocoruna.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -8.390722, 43.363067 ]
    }
  },
  { 
    name: "Port of Ferrol",
    country: "Spain",
    url: "http://www.porto-ferrolsanciprian.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -8.251419, 43.479892 ]
    }
  },
  { 
    name: "Port of San Esteban de Pravia",
    country: "Spain",
    url: "",
    location: {
      // type: { type: "Point" },
      coordinates: [ -6.08325, 43.552872 ]
    }
  },
  { 
    name: "Port of Aviles",
    country: "Spain",
    url: "http://www.avilesport.com",
    location: {
      // type: { type: "Point" },
      coordinates: [ -5.921974, 43.57865 ]
    }
  },
  { 
    name: "Port of Gijon",
    country: "Spain",
    url: "http://www.puertogijon.es" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -5.691776, 43.55875 ] 
    }
  },
  { 
    name: "Port of Santander",
    country: "Spain",
    url: "http://www.puertosantander.es" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -3.807793, 43.442326 ]
    }
  },
  { 
    name: "Port of Bilbao",
    country: "Spain",
    url: "http://www.bilbaoport.es" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -3.032913, 43.342658 ]
    }
  },
  { 
    name: "Port of Mao",
    country: "Spain",
    url: "http://www.portsdebalears.com" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 120.487576, 17.987081 ]
    }
  },
  { 
    name: "Port of Mallorca",
    country: "Spain",
    url: "http://www.portdemallorca.com" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 2.63041, 39.55121 ]
    }
  },
  { 
    name: "Port of Eivissa",
    country: "Spain",
    url: "http://www.portsdebalears.com" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 1.441355, 38.910404 ]
    }
  },
  {
    name: "Port of Ceuta",
    country: "Spain",
    url: "http://www.puertodeceuta.com" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -5.31661, 35.89051 ]
    }
  },
  {
    name: "Puertos de Tenerife",
    country: "Spain",
    url: "http://www.puertosdetenerife.org" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -16.2323, 28.474727 ]
    }
  },
  {
    name: "Port of Las Palmas",
    country: "Spain",
    url: "http://www.palmasport.es" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -15.418453, 28.137394 ] 
    }
  },
  {
    name: "Port of Marseille",
    country: "France",
    url: "http://www.marseille-port.fr" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 4.915695, 43.42425 ]
    }
  },
  {
    name: "Port of Nice",
    country: "France",
    url: "http://www.riviera-ports.com" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 7.287197, 43.694004 ] 
    }
  },
  {
    name: "Port of Monaco",
    country: "Monaco",
    url: "" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 7.42341, 43.732158 ]
    }
  },
  {
    name: "Port of Genoa",
    country: "Italy",
    url: "http://www.porto.genova.it" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 7.42341, 43.732158 ]
    }
  },
  {
    name: "Port of Porto Santo Stefano",
    country: "Italy",
    url: "" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 11.122885, 42.436064 ] 
    }
  },
  {
    name: "Port of Fiumicino",
    country: "Italy",
    url: "" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 12.236881, 41.756075 ] 
    }
  },
  {
    name: "Port of Napoli",
    country: "Italy",
    url: "http://www.porto.napoli.it" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 14.27433, 40.836801 ] 
    }
  },
  {
    name: "Port of Salerno",
    country: "Italy",
    url: "" ,
    location: {
      // type: { type: "Point" },
      coordinates:[ 14.746399, 40.672111 ] 
    }
  },
  {
    name: "Port of Palermo",
    country: "Italy",
    url: "http://www.autport.pa.it" ,
    location: {
      // type: { type: "Point" },
      coordinates:[ 13.371735, 38.131046 ] 
    }
  },
  {
    name: "Port of Porto Vecchio",
    country: "France",
    url: "http://www.corse-du-sud.cci.fr" ,
    location: {
      // type: { type: "Point" },
      coordinates:[ 9.291344, 41.593429 ] 
    }
  },
  {
    name: "Port of Carloforte",
    country: "Italy",
    url: "" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ 8.310814, 39.144107 ]
    }
  },
  {
    name: "Port of Lisbon",
    country: "Portugal",
    url: "http://www.portodelisboa.com" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -9.159164, 38.699444 ] 
    }
  },
  {
    name: "Port of Figueira Da Foz",
    country: "Portugal",
    url: "" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -8.857727, 40.145355 ]
    }
  },
  {
    name: "Port of Leixoes",
    country: "Portugal",
    url: "http://www.apdl.pt" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -8.698339, 41.185049 ]
    }
  },
  {
    name: "Port of Douro",
    country: "Portugal",
    url: "http://www.apdl.pt" ,
    location: {
      // type: { type: "Point" },
      coordinates: [ -8.741856, 40.643591 ]
    }
  },
 
 
]


Port.create(ports, (err) => {    
  if (err) { throw (err) }
  console.log(`Created ${ports.length} ports`)
  mongoose.connection.close();
});
