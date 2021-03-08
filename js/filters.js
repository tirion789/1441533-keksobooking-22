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
  ANY: 'any',
  MIDDLE: 'middle',
  LOW: 'low',
  HIGH: 'high',
};

const PriceMoney = {
  MAX: 50000,
  MIN: 10000,
};

const DEFOLT_VALUE = 'any';

const filtersReset = () => {
  filterForm.reset();
};

const filterType = (ad) => {
  return filtersHousingType.value === DEFOLT_VALUE || filtersHousingType.value === ad;
};

const filterPrice = (ad) => {
  switch (filtersHousingPrice.value) {
    case priceEnumeration.ANY:
      return ad;
    case priceEnumeration.MIDDLE:
      return PriceMoney.MAX >= ad && PriceMoney.MIN <= ad;
    case priceEnumeration.LOW:
      return PriceMoney.MIN >= ad;
    case priceEnumeration.HIGH:
      return ad >= PriceMoney.MAX;
  }
};

const filterFeatures = (ad) => {
  const features = featuresFilterForm.querySelectorAll('input:checked');

  return Array.from(features).every((feature) => {
    return ad.includes(feature.value);
  });
};

const filterRooms = (ad) => {
  return filtersHousingRooms.value === DEFOLT_VALUE || +filtersHousingRooms.value === ad;
};

const filterGuests = (ad) => {
  return (
    filtersHousingGuests.value === DEFOLT_VALUE || +filtersHousingGuests.value === ad
  );
};

const filtersGeneration = (ad) => {
  return (
    filterType(ad.offer.type) &&
    filterPrice(ad.offer.price) &&
    filterRooms(ad.offer.rooms) &&
    filterGuests(ad.offer.guests) &&
    filterFeatures(ad.offer.features)
  );
};

const setFiltersChange = (cb) => {
  filterForm.addEventListener('change', cb)
};

const setFiltersReset = (cb) => {
  filterForm.addEventListener('reset', cb);
};

export { activateFilter, filtersReset, filtersGeneration, setFiltersReset, setFiltersChange };
