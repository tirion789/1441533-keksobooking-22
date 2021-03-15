import { activateFilter, filtersGeneration } from './filters.js';
import { activateForm, setAddress } from './form.js';
import { generateCard } from './card.js';
import L from 'leaflet';

const HELP_COORDINATES = 12;

const OFFER_LIMITED = 10;

const Coordinates = {
  WIDTH: 35.65061,
  LONGITUDE: 139.78695,
};

const Icon = {
  URLS: [45, 45],
  ANCHORS: [24, 45],
};

setAddress(Coordinates.WIDTH, Coordinates.LONGITUDE);


const map = L.map('map-canvas')
  .on('load', () => {
    activateFilter();
    activateForm();
    setAddress(Coordinates.WIDTH, Coordinates.LONGITUDE);
  })
  .setView(
    {
      lat: Coordinates.WIDTH,
      lng: Coordinates.LONGITUDE,
    },
    HELP_COORDINATES,
  );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinMarker = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: Icon.URLS,
  iconAnchor: Icon.ANCHORS,
});

const marker = L.marker(
  {
    lat: Coordinates.WIDTH,
    lng: Coordinates.LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinMarker,
  },
);

marker.addTo(map);

marker.on('move', (evt) => {
  setAddress(evt.target.getLatLng().lat.toFixed(5), evt.target.getLatLng().lng.toFixed(5));
});

const offerPin = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: Icon.URLS,
  iconAnchor: Icon. ANCHORS,
});

const resetMapCoordinate = () => {
  map.setView({ lat: Coordinates.WIDTH, lng: Coordinates.LONGITUDE }, HELP_COORDINATES);
  marker.setLatLng({ lat: Coordinates.WIDTH, lng: Coordinates.LONGITUDE });
  setAddress(Coordinates.WIDTH, Coordinates.LONGITUDE);
};

let markers = [];

const removeMarkers = () => {
  markers.forEach((marker) => map.removeLayer(marker));
  markers = [];
};

const createOffers = (cards) => {
  cards
    .slice()
    .filter(filtersGeneration)
    .slice(0, OFFER_LIMITED)
    .forEach((card) => {
      const blueMarker = L.marker(
        {
          lat: card.location.lat,
          lng: card.location.lng,
        },
        {
          icon: offerPin,
        },
      );
      blueMarker.addTo(map).bindPopup(generateCard(card));
      markers.push(blueMarker);
    });
};

export { createOffers, resetMapCoordinate, removeMarkers };
