import {activateFilter} from './filters.js';
import {activateForm,address} from './form.js';
// import {generateCard} from './card.js';

const Coordinates = {
  width: 35.65061,
  longitude: 139.78695,
};

const HELP_COORDINATES = 12

const addressValue = () => {
  address.value = `${Coordinates.width}, ${Coordinates.longitude}`;
}

const Icon = {
  iconUrl: [45, 45],
  iconAnchor: [24, 45],
}

/* global L:readonly */

const map = L.map('map-canvas')
  .on('load', () => {
    activateFilter();
    activateForm();
    addressValue();
  })
  .setView({
    lat: Coordinates.width,
    lng: Coordinates.longitude,
  }, HELP_COORDINATES);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinMarker = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: Icon.iconUrl,
  iconAnchor: Icon.iconAnchor,
});

const marker = L.marker({
  lat: Coordinates.width,
  lng: Coordinates.longitude,
}, {
  draggable: true,
  icon: mainPinMarker,
});

marker.addTo(map);

marker.on('move', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

// const randomPin = L.icon({
//   iconUrl: './img/pin.svg',
//   iconSize: Icon.iconUrl,
//   iconAnchor: Icon.iconAnchor,
// });

const resetMap = () => {
  map.setView(Coordinates.width, Coordinates.longitude);
  marker.setLatLng(Coordinates.longitude, Coordinates.longitude);
  addressValue();
}

// similarCard.forEach((element) => {
//   const blueMarker = L.marker(
//     {
//       lat: element.location.x,
//       lng: element.location.y,
//     },
//     {
//       icon: randomPin,
//     },
//   );

//   blueMarker
//     .addTo(map)
//     .bindPopup(generateCard(element));
// });

export {resetMap}
