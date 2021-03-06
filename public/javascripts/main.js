window.onload = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.38623, lng: 6.17498 },
    zoom: 5.4,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#ebe3cd"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#F6F7BD"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f1e6"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#c9b2a6"
          }
        ]
      },
      {
        featureType: "administrative.country",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#dcd2be"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ae9e90"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.province",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#93B1AF"
          }
        ]
      },
      {
        featureType: "landscape.natural.terrain",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#93817c"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#a5b076"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#447530"
          }
        ]
      },
      {
        featureType: "road",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f1e6"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#fdfcf8"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#f8c967"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#e9bc62"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#e98d58"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#db8555"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#806b63"
          }
        ]
      },
      {
        featureType: "transit.line",
        stylers: [
          {
            color: "#f8f596"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#E6AC27"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#f8f596"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8f7d77"
          }
        ]
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ebe3cd"
          }
        ]
      },
      {
        featureType: "transit.station",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "water",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#5B5F60"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#5B5F60"
          }
        ]
      }
    ]
  });

  document.getElementById("elboton").onclick = () => {
    getPorts(map);
  };
};

function getPorts(map) {
  const infoId = document.getElementById("homeport-list").value; //el valor sale del formulario

  axios
    .post("/user/search", { infoId }) //es la misma dirección que la indicada en user.routers '/'
    .then(response => {
      //response es el valor de thePort de user.routers
      console.log(response.data); //con .data accedemos a toda la info que contiene el port en la BBDD

      //-----  PINTAMOS LOS BARCOS DEL PUERTO SELECCIONADO ------------

      let parent = document.getElementById("boatsList"); //es el id del <div> de la vista
      response.data.thePort.boats.forEach(el => {      // es la response que nos traemos del backend user.router.js
        console.log(el); //el = barco

        let parent2 = document.createElement("div");
        parent2.setAttribute("class", "parent2")

        let parent3 = document.createElement("div");
        parent3.setAttribute("class", "parent3")

        let parentPhoto = document.createElement("div");
        parentPhoto.setAttribute("class", "parentPhoto")


        let photo = document.createElement("img");
        let name = document.createElement("h3");
        let type = document.createElement("h5");
        let capacity = document.createElement("h5");
        let captain = document.createElement("h5");
        let description = document.createElement("h5");
        let rate = document.createElement("h5");
        let button = document.createElement("a");


        photo.setAttribute("src", el.imgPath);
        photo.style.width = "100%";
        name.innerHTML = el.name;
        type.innerHTML = `Type: ${el.type}`;
        capacity.innerHTML = `Capacity: ${el.capacity}`;
        captain.innerHTML = `Captain: ${el.captain}`;
        description.innerHTML = `Description: ${el.description}`;
        rate.innerHTML = `Rate: ${el.rate} €/day`;
        button.setAttribute("href",`http://localhost:3000/user/search/reserve/${el._id}`);
    
     
        parent.appendChild(parent2);
        parent2.appendChild(parent3);
        parent2.appendChild(parentPhoto);

  
        parentPhoto.appendChild(photo);
        parent3.appendChild(name);
        parent3.appendChild(type);
        parent3.appendChild(capacity);
        parent3.appendChild(captain);
        parent3.appendChild(description);
        parent3.appendChild(rate);
        parent3.appendChild(button);
        button.appendChild(document.createTextNode("Reserve"));
      });

      placePorts(response, map);
    })

    .catch(err => console.log(err));
}

function placePorts(response, map) {
  const locatedAt = {
    lat: response.data.thePort.location.coordinates[1],
    lng: response.data.thePort.location.coordinates[0]
  };


  map.setCenter(locatedAt);
  map.setZoom(8);

  const icon = {
    url: "/images/boat-orange.png",
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  const marker = new google.maps.Marker({
    position: locatedAt,
    map: map,
    title: response.data.name,
    icon: icon
  });

  // map.addListener("center_changed", function() {
  //   // 3 seconds after the center of the map has changed, pan back to the
  //   // marker.
  //   window.setTimeout(function() {
  //     map.panTo(marker.getPosition());
  //   }, 3000);
  // });
}
