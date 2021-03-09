import './data.js';
import './util.js';
import './create-offer.js';
import './card.js';
import './form.js';
import './map.js';
import './filters.js';
import './popups.js';
import { createOffers } from './map.js';
import { getData } from './server-api.js';
import { resetMapCoordinate, removeMarkers } from './map.js';
import { setFiltersBottonReset, setFiltersChange} from './filters.js'

const RERENDER_DELAY = 500;

getData((offers) => {
  createOffers(offers);
  setFiltersChange(_.debounce(
    () => (removeMarkers(offers),
    createOffers(offers)),
    RERENDER_DELAY));
  setFiltersBottonReset(() => createOffers(offers));
});


const resetMap = () => {
  resetMapCoordinate();
};

export { resetMap };
