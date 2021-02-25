import {activeFilter} from './filters.js';
import {activeForm, address} from './form.js';
import {similarCard, generateCard} from './card.js';


const Coordinates = {
  width: 35.65841,
  longitude: 139.78145,
};

const map = L.map('map-canvas')
  .on('load', () => {
    activeFilter();
    activeForm();
  })
  .setView({
    lat: Coordinates.width,
    lng: Coordinates.longitude,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinMarker = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [45, 45],
  iconAnchor: [24, 45],
});

const marker = L.marker({
  lat: 35.65841,
  lng: 139.78145,
}, {
  draggable: true,
  icon: mainPinMarker,
},);

marker.addTo(map);

marker.on('move', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const randomPin = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [45, 45],
  iconAnchor: [24, 45],
});

similarCard.forEach((elements) => {
  const blueMarker = L.marker(
    {
      lat: elements.location.x,
      lng: elements.location.y,
    },
    {
      icon: randomPin,
    },
  );

  blueMarker
    .addTo(map)
    .bindPopup(generateCard(elements));
});



