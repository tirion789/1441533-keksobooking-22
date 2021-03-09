import './data.js';
import './util.js';
import './create-offer.js';
import './card.js';
import './form.js';
import './map.js';
import './filters.js';
import './popups.js';
import { createOffers,   removeMarkers } from './map.js';
import { getData } from './server-api.js';
import { resetMapCoordinate } from './map.js';
import { setFiltersBottonReset, setFiltersChange} from './filters.js';


getData((offers) => {
  createOffers(offers);
  setFiltersChange(() => {
    removeMarkers(offers);
    createOffers(offers);})
    setFiltersBottonReset(() => createOffers(offers));
});


const resetMap = () => {
  resetMapCoordinate();
};

export { resetMap };
