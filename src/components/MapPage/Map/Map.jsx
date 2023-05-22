import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import car from "/images/Map/R.png";
import "./styles.css";

const Container = styled.div`
  height: ${() => window.innerHeight}px;
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  position: relative;
`;

const springPort = 8080;
let tt = null;
let map = null;
let markers = [];
var locations = "";

var garagesPopups = null;

// From Taxi app
const apiKey = "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD";

let passengerInitCoordinates = undefined;

let passengerMarker;

let taxiPassengerBatchCoordinates = [];
let taxiConfig = [];

let routes = [];
let bestRouteIndex;

let routeLabelsDiv;

const routeWeight = 7;
const routeBackgroundWeight = 12;
const fastestRouteColor = "#65A7A9";
const grayedOutDivColor = "#979797";

let modal = null;
let modalContent = null;

function setDefaultTaxiConfig() {
  let length = garagesPopups.length;
  for (let i = 0; i < length; i = i + 1) {
    let position = [
      garagesPopups[i].garageLocation.longitude,
      garagesPopups[i].garageLocation.latitude,
    ];
    taxiConfig[i] = createTaxi(
      garagesPopups[i].garageName,
      "#" + Math.floor(Math.random() * 16777215).toString(16),
      position,
      "none"
    );
  }
}

function createTaxi(
  name,
  color,
  coordinates,
  iconFilePath,
  iconWidth = 55,
  iconHeight = 55
) {
  return {
    name: name,
    color: color,
    icon: null,
    coordinates: coordinates,
  };
}

function updateTaxiBatchLocations(passengerCoordinates) {
  taxiPassengerBatchCoordinates = [];
  taxiConfig.forEach((taxi) => {
    taxiPassengerBatchCoordinates.push(
      taxi.coordinates + ":" + passengerCoordinates
    );
  });
}

function humanReadableTimeFormat(time) {
  const hrs = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = time % 60;
  let formattedString = "";
  if (hrs > 0) {
    formattedString += hrs + ":" + (mins < 10 ? "0" : "");
  }
  formattedString += mins + ":" + (secs < 10 ? "0" : "");
  formattedString += secs;
  return formattedString;
}

function metersToKilometers(distance) {
  distance = distance / 1000;
  return distance.toFixed(1);
}

function convertToPoint(lat, long) {
  return {
    point: {
      latitude: lat,
      longitude: long,
    },
  };
}

function routeOnMouseOverAnimation(route) {
  map.moveLayer(route[0]);
  map.moveLayer(route[1]);
}

function bringBestRouteToFront() {
  map.moveLayer(routes[bestRouteIndex][0]);
  map.moveLayer(routes[bestRouteIndex][1]);
}

function buildOriginsParameter() {
  const origins = [];
  taxiConfig.forEach(function (taxi) {
    origins.push(convertToPoint(taxi.coordinates[1], taxi.coordinates[0]));
  });
  return origins;
}

function buildDestinationsParameter() {
  return [
    convertToPoint(
      passengerMarker.getLngLat().lat,
      passengerMarker.getLngLat().lng
    ),
  ];
}

function modifyFastestRouteColor(travelTimeInSecondsArray) {
  const sortedTab = travelTimeInSecondsArray.slice();
  sortedTab.sort(function (a, b) {
    return a - b;
  });
  bestRouteIndex = travelTimeInSecondsArray.indexOf(sortedTab[0]);
  taxiConfig[bestRouteIndex].color = fastestRouteColor;
}

function displayModal() {
  modalContent.innerText =
    "Dispatch garage number " + String(bestRouteIndex + 1);
  modal.style.display = "block";
}

function animateRouteOnDivHover(e) {
  routeOnMouseOverAnimation(routes[e.target.id]);
}

function updateRouteLegend(
  travelTimeInSecondsArray,
  lengthInMetersArray,
  trafficDelayInSecondsArray
) {
  let div;
  routeLabelsDiv.innerText = "";

  taxiConfig.forEach(function (child, index) {
    div = document.createElement("div");
    div.id = index;
    div.style.borderLeftColor = child.color;
    if (index !== bestRouteIndex) {
      div.style.color = grayedOutDivColor;
    }
    div.colorHex = child.color;
    div.innerText =
      child.name +
      ", drive time:" +
      humanReadableTimeFormat(travelTimeInSecondsArray[index]) +
      ", distance:" +
      metersToKilometers(lengthInMetersArray[index]) +
      "km, " +
      (trafficDelayInSecondsArray[index] === 0
        ? "no traffic delay"
        : "traffic delay:" +
          humanReadableTimeFormat(trafficDelayInSecondsArray[index]));
    div.addEventListener("mouseover", animateRouteOnDivHover);
    div.addEventListener("mouseout", bringBestRouteToFront);
    routeLabelsDiv.appendChild(div);
  });
}

function buildStyle(id, data, color, width) {
  return {
    id: id,
    type: "line",
    source: {
      type: "geojson",
      data: data,
    },
    paint: {
      "line-color": color,
      "line-width": width,
    },
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
  };
}

function drawAllRoutes() {
  let items = [];
  for (let i = 0; i < taxiConfig.length; i = i + 1) {
    items.push({ locations: taxiPassengerBatchCoordinates[i] });
  }
  tt.services
    .calculateRoute({
      batchMode: "sync",
      key: apiKey,
      batchItems: items,
    })
    .then(function (results) {
      results.batchItems.forEach(function (singleRoute, index) {
        const routeGeoJson = singleRoute.toGeoJson();
        const route = [];
        const route_background_layer_id = "route_background_" + index;
        const route_layer_id = "route_" + index;

        map
          .addLayer(
            buildStyle(
              route_background_layer_id,
              routeGeoJson,
              "black",
              routeBackgroundWeight
            )
          )
          .addLayer(
            buildStyle(
              route_layer_id,
              routeGeoJson,
              taxiConfig[index].color,
              routeWeight
            )
          );

        route[0] = route_background_layer_id;
        route[1] = route_layer_id;
        routes[index] = route;

        if (index === bestRouteIndex) {
          const bounds = new tt.LngLatBounds();
          routeGeoJson.features[0].geometry.coordinates.forEach(function (
            point
          ) {
            bounds.extend(tt.LngLat.convert(point));
          });
          map.fitBounds(bounds, { padding: 150 });
        }

        map.on("mouseenter", route_layer_id, function () {
          map.moveLayer(route_background_layer_id);
          map.moveLayer(route_layer_id);
        });

        map.on("mouseleave", route_layer_id, function () {
          bringBestRouteToFront();
        });
      });
      bringBestRouteToFront();
    });
}

function clear() {
  routes.forEach(function (child) {
    map.removeLayer(child[0]);
    map.removeLayer(child[1]);
    map.removeSource(child[0]);
    map.removeSource(child[1]);
  });
  routes = [];
  setDefaultTaxiConfig();
  passengerMarker.togglePopup();
}

function processMatrixResponse(result) {
  const travelTimeInSecondsArray = [];
  const lengthInMetersArray = [];
  const trafficDelayInSecondsArray = [];
  result.matrix.forEach(function (child) {
    travelTimeInSecondsArray.push(
      child[0].response.routeSummary.travelTimeInSeconds
    );
    lengthInMetersArray.push(child[0].response.routeSummary.lengthInMeters);
    trafficDelayInSecondsArray.push(
      child[0].response.routeSummary.trafficDelayInSeconds
    );
  });
  modifyFastestRouteColor(travelTimeInSecondsArray);
  updateRouteLegend(
    travelTimeInSecondsArray,
    lengthInMetersArray,
    trafficDelayInSecondsArray
  );
  drawAllRoutes();
  displayModal();
}

function callMatrix() {
  const origins = buildOriginsParameter();
  const destinations = buildDestinationsParameter();
  tt.services
    .matrixRouting({
      key: apiKey,
      origins: origins,
      destinations: destinations,
      traffic: true,
    })
    .then(processMatrixResponse);
}

const submitButtonHandler = () => {
  clear();
  callMatrix();
};

function createPassengerMarker(markerCoordinates, popup) {
  const passengerMarkerElement = document.createElement("div");
  passengerMarkerElement.innerHTML = `<img src=${car} style='width: 40px; height: 40px';>`;
  return new tt.Marker({ element: passengerMarkerElement })
    .setLngLat(markerCoordinates)
    .setPopup(popup)
    .addTo(map);
}

// From Taxi app

export async function calculateRoute() {
  var routeOptions = {
    key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
    locations: [],
    instructionsType: "text",
    travelMode: "car",
  };
  let i = 0;
  for (i = 0; i < markers.length; ++i) {
    routeOptions.locations.push(markers[i].getLngLat());
  }

  // Execute the routing API

  tt.services.calculateRoute(routeOptions).then(function (routeData) {
    console.log(routeData);
    var geo = routeData.toGeoJson();
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        data: geo,
        type: "geojson",
      },
      paint: {
        "line-color": "red",
        "line-width": 7,
      },
    });
  });

  const { routes } = await tt.services.calculateRoute({
    locations,
    instructionsType: "text",
    key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
  });
  const routesDirections = routes.map((route) => {
    const { instructions } = route.guidance;
    return instructions.map((i) => {
      let result = "";

      switch (i.maneuver) {
        case "TURN_LEFT":
          result += "↰ ";
          break;
        case "TURN_RIGHT":
          result += "↱ ";
          break;
        case "ARRIVE_RIGHT":
        case "ARRIVE_LEFT":
        case "WAYPOINT_REACHED":
          result += "☑ ";
          break;
      }
      result += i.message.replace("waypoint", "pickup area");
      return result;
    });
  });
  directionsRoutes = routesDirections[0];
}

export const lookingFor = (place, radius) => {
  var lng = undefined,
    lat = undefined;
  navigator.geolocation.getCurrentPosition((position) => {
    lng = position.coords.longitude;
    lat = position.coords.latitude;
    axios
      .get(
        "https://api.tomtom.com/search/2/search/" +
          place +
          ".json?lat=" +
          lat +
          "&lon=" +
          lng +
          "&radius=" +
          radius +
          "&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=q2yukmABGuRvQD9NhkGAABCOYtIMoHFD"
      )
      .then((response) => {
        console.log(response.data);
        let results = response.data.results;
        for (let i = 0; i < results.length; i += 1) {
          let popup = new tt.Popup({
            offset: {
              top: [0, 0],
              bottom: [0, -30],
              "bottom-right": [0, -70],
              "bottom-left": [0, -70],
              left: [25, -35],
              right: [-25, -35],
            },
          }).setHTML(
            `<div>
              <h1 style="font-weight: 900">${results[i].poi.name}</h1>
            </div>`
          );

          let marker = new tt.Marker({
            color: "orange",
            width: "40",
            height: "50",
          })
            .setLngLat(results[i].position)
            .addTo(map);

          marker.setPopup(popup).togglePopup();

          markers.push(marker);
        }
      });
  });
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOffsets: {
        top: [0, 0],
        bottom: [0, -30],
        "bottom-right": [0, -70],
        "bottom-left": [0, -70],
        left: [25, -35],
        right: [-25, -35],
      },
    };
  }

  addMarkerOnClick(e, obj) {
    var marker = new this.tt.Marker(obj).setLngLat(e.lngLat).addTo(this.map);

    if (markers.length == 0)
      locations += "" + e.lngLat.lng + "," + e.lngLat.lat;
    else locations += ":" + e.lngLat.lng + "," + e.lngLat.lat;

    markers.push(marker);

    this.flyToLocation({
      center: {
        lng: e.lngLat.lng,
        lat: e.lngLat.lat,
      },
      zoom: 16,
    });
    this.displayPopups(this.state.popupOffsets);
  }

  flyToLocation(obj) {
    this.map.flyTo(obj);
  }

  displayPopups(popupOffsets) {
    var i = 0;
    var markersPositions = [];
    var imagesNames = [];

    var random = 0;
    garagesPopups.map((garagePopup) => {
      random = Math.floor(Math.random() * 99999999);
      var position = [
        garagePopup.garageLocation.longitude,
        garagePopup.garageLocation.latitude,
      ];
      imagesNames.push(
        `http://localhost:${springPort}/garages/${garagePopup.garageID}/profileImage/${random}`
      );
      markersPositions.push(
        new this.tt.Marker().setLngLat(position).addTo(this.map)
      );
    });

    for (i = 0; i < garagesPopups.length; ++i) {
      var popup = new tt.Popup({ offset: popupOffsets }).setHTML(
        `<div style="width: 150px" id="${garagesPopups[i].garageID}"><a style="color: black;text-decoration: none; display:flex; flex-direction: column; align-items: center" href="#"><h1 style="font-weight: 900">` +
          `${garagesPopups[i].garageName}` +
          `</h1><br /><img width="100%" height="100%" src="${imagesNames[i]}" alt="image" /></a></div>`
      );
      markersPositions[i].setPopup(popup).togglePopup();
    }
  }

  componentDidMount() {
    // Call the API to get garages
    axios.get(`http://localhost:${springPort}/garages`).then((response) => {
      garagesPopups = response.data;
      tt = window.tt;

      map = tt.map({
        key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
        container: "map",
        style: "tomtom://vector/1/basic-main",
        language: "ar",
      });
      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());

      this.map = map;
      this.tt = tt;
      this.points = [];

      // Display traffic and flow incident
      var trafficFlowConfig = {
        key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
        theme: {
          style: "relative-delay",
          source: "vector",
        },
        refresh: 3000,
      };

      var trafficIncidentsConfig = {
        key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
        incidentTiles: {
          style: "tomtom://vector/1/s2",
        },
        incidentDetails: {
          style: "s2",
        },
      };

      this.displayPopups(this.state.popupOffsets);

      const self = this;
      map.on("load", () => {
        navigator.geolocation.getCurrentPosition((position) => {
          var longitude = position.coords.longitude;
          var latitude = position.coords.latitude;
          this.map.flyTo({
            center: {
              lng: longitude,
              lat: latitude,
            },
            zoom: 13,
          });

          passengerInitCoordinates = [longitude, latitude];
          setDefaultTaxiConfig();
          updateTaxiBatchLocations(passengerInitCoordinates);
          tt.setProductInfo("Garage dispatcher application", "1.00");

          passengerMarker = createPassengerMarker(
            passengerInitCoordinates,
            new tt.Popup({ offset: 45 }).setHTML("<h1>You are here</h1>")
          );
          passengerMarker.togglePopup();
          taxiConfig.forEach(function (taxi) {
            const carMarkerElement = document.createElement("div");
            carMarkerElement.innerHTML = taxi.icon;
            new tt.Marker({ element: carMarkerElement, offset: [0, 27] })
              .setLngLat(taxi.coordinates)
              .addTo(map);
          });
          map.addTier(new tt.TrafficIncidentTier(trafficIncidentsConfig));
          // map.addTier(new tt.TrafficFlowTilesTier(trafficFlowConfig));
        });
      });

      modal = document.getElementById("modal");
      modalContent = document.getElementById("modal-content");

      routeLabelsDiv = document.getElementById("route-labels");

      map.on("click", (event) => {
        this.addMarkerOnClick(event, {
          color: "rgb(190, 18, 47)",
          width: "40",
          height: "50",
        });
      });

      modal.addEventListener("click", function () {
        modal.style.display = "none";
      });
    });
  }

  render() {
    return (
      <Container id="map" width="100%" height="100%" borderRadius="5px">
        <div id="labels-container">
          <label>Find the garage that will arrive fastest</label>
          <div id="route-labels"></div>
          <input
            type="button"
            id="submit-button"
            value="Submit"
            onClick={submitButtonHandler}
          />
        </div>
        <div id="modal">
          <div id="modal-content"></div>
        </div>
      </Container>
    );
  }
}
