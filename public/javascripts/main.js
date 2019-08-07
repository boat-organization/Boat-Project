window.onload = () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4.2,
    center: { lat: 41.386230, lng: 2.174980 }
  })

  document.getElementById("elboton").onclick = () => getPorts(map)
}

function getPorts(map) {
  const infoId = document.getElementById('homeport-list').value    //el valor sale del formulario

  console.log({infoId})

  axios.post('/profile', {infoId}) //es la misma dirección que la indicada en profile.routers '/'
  .then(response => {         //response es el valor de thePort de profile.routers
    console.log(response.data)  //con .data accedemos a toda la info que contiene el port en la BBDD
    placePorts(response, map)
  })
  .catch(err => console.log(err))
}

function placePorts(response, map) {
    console.log(response)
    const locatedAt = {
      lat: response.data.thePort.location.coordinates[1],
      lng: response.data.thePort.location.coordinates[0]
    }

    new google.maps.Marker({
      position: locatedAt,
      map: map,
      title: response.data.name
    })
}



