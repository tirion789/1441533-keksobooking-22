import './data.js';
import './util.js';
import './create-offer.js';
import './card.js';
import './form.js';
import './map.js';
import './filters.js';
import './popups.js';
import  {createServerOffers} from './map.js';
import {getData} from './server-api.js';
import {resetMapCoordinate} from './map.js';

getData((offers) => {
  createServerOffers(offers);
})

const resetMap = () => {
  resetMapCoordinate();
}

export {resetMap}
