window.onload = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4.3,
    center: { lat: 41.38623, lng: 2.17498 }
  });

  document.getElementById("elboton").onclick = () => getPorts(map)
}

function getPorts(map) {
  const infoId = document.getElementById("homeport-list").value //el valor sale del formulario
  const infoId2 = document.getElementById("destinationport-list").value
  console.log({ infoId });

  axios.post('/user/search', { infoId }) //es la misma dirección que la indicada en user.routers '/'
    .then(response => {      //response es el valor de thePort de user.routers
      console.log(response.data); //con .data accedemos a toda la info que contiene el port en la BBDD
  
      //-----  PINTAMOS LOS BARCOS DEL PUERTO SELECCIONADO ------------
      
      let parent = document.getElementById("boatsList")  //es el id del <div> de la vista
      response.data.thePort.boats.forEach(el => {        // es la response que nos traemos del backend user.router.js
        console.log(el)        //el = barco

        let name = document.createElement("h3")
        let photo = document.createElement("img")
        let type = document.createElement("h5")
        let capacity = document.createElement("h5")
        let captain = document.createElement("h5")
        let description = document.createElement("h5")
        let rate = document.createElement("h5")
        let button = document.createElement("a")
 
        name.innerHTML = el.name
        photo.setAttribute("src", el.imgPath)
        photo.style.width = "50%"
        type.innerHTML = `Type: ${el.type}`
        capacity.innerHTML = `Capacity: ${el.capacity}`
        captain.innerHTML = `Captain: ${el.captain}`
        description.innerHTML = `Description: ${el.description}`
        rate.innerHTML = `Rate: ${el.rate} €/day`
        button.setAttribute("href", `http://localhost:3000/user/search/reserve/${el._id}`)
    
        parent.appendChild(name)
        parent.appendChild(photo)
        parent.appendChild(type)
        parent.appendChild(capacity)
        parent.appendChild(captain)
        parent.appendChild(description)
        parent.appendChild(rate)
        parent.appendChild(button)
        button.appendChild(document.createTextNode("Reserve"))
      })
      placePorts(response, map);
    })
 
    .catch(err => console.log(err))
}

function placePorts(response, map) {
  const locatedAt = {
    lat: response.data.thePort.location.coordinates[1],
    lng: response.data.thePort.location.coordinates[0]
  };

  new google.maps.Marker({
    position: locatedAt,
    map: map,
    title: response.data.name
  });
}
