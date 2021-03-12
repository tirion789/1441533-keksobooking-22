import {resetFormButton} from './form.js'

const DEFOLT_VALUE = 'any';

const PriceMoney = {
  MAX: 50000,
  MIN: 10000,
};

const filterForm = document.querySelector('.map__filters');
const selectsFilterForm = filterForm.querySelectorAll('select');
const featuresFilterForm = filterForm.querySelector('#housing-features');
const filtersHousingType = filterForm.querySelector('#housing-type');
const filtersHousingPrice = filterForm.querySelector('#housing-price');
const filtersHousingRooms = filterForm.querySelector('#housing-rooms');
const filtersHousingGuests = filterForm.querySelector('#housing-guests');


const inactivateFilter = () => {
  filterForm.classList.add('map__filters--disabled');
  featuresFilterForm.disabled = true;
  selectsFilterForm.forEach((select) => {
    select.disabled = true;
  });
};

inactivateFilter();

const activateFilter = () => {
  filterForm.classList.remove('map__filters--disabled');
  featuresFilterForm.disabled = false;
  selectsFilterForm.forEach((select) => {
    select.disabled = false;
  });
};

const priceEnumeration = {
  any: 'any',
  middle: 'middle',
  low: 'low',
  high: 'high',
};


const filtersReset = () => {
  filterForm.reset();
};

const filteringType = (type) => {
  return filtersHousingType.value === DEFOLT_VALUE || filtersHousingType.value === type;
};

const filteringPrice = (price) => {
  switch (filtersHousingPrice.value) {
    case priceEnumeration.any:
      return price;
    case priceEnumeration.middle:
      return PriceMoney.MAX >= price && PriceMoney.MIN <= price;
    case priceEnumeration.low:
      return PriceMoney.MIN >= price;
    case priceEnumeration.high:
      return price >= PriceMoney.MAX;
  }
};

const filteringFeatures = (features) => {
  const featuresList = featuresFilterForm.querySelectorAll('input:checked');

  return Array.from(featuresList).every((feature) => {
    return features.includes(feature.value);
  });
};

const filteringRooms = (rooms) => {
  return filtersHousingRooms.value === DEFOLT_VALUE || +filtersHousingRooms.value === rooms;
};

const filteringGuests = (guests) => {
  return (
    filtersHousingGuests.value === DEFOLT_VALUE || +filtersHousingGuests.value === guests
  );
};

const filtersGeneration = ({offer}) => {
  return (
    filteringType(offer.type) &&
    filteringPrice(offer.price) &&
    filteringRooms(offer.rooms) &&
    filteringGuests(offer.guests) &&
    filteringFeatures(offer.features)
  );
};

const setFiltersChange = (cb) => {
  filterForm.addEventListener('change', cb)
}

const setFiltersBottonReset = (cb) => {
  resetFormButton.addEventListener('click', cb);
};

export { activateFilter, filtersReset, filtersGeneration, setFiltersBottonReset, setFiltersChange };
