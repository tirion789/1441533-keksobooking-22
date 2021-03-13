import './util.js';
import './card.js';
import './form.js';
import './map.js';
import './filters.js';
import './server-api.js';
import './popups.js';
import './photos.js'
import { createOffers } from './map.js';
import { getData } from './server-api.js';
import { resetMapCoordinate, removeMarkers } from './map.js';
import { setFiltersButtonReset, setFiltersChange} from './filters.js'

const RERENDER_DELAY = 500;

getData((offers) => {
  createOffers(offers);
  setFiltersChange(_.debounce( () => {removeMarkers(offers); createOffers(offers)}, RERENDER_DELAY));
  setFiltersButtonReset(() => createOffers(offers));
});


const resetMap = () => {
  resetMapCoordinate();
};

export { resetMap };
