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

const ANY = 'any';

const filtersReset = () => {
  filterForm.reset();
};

const filterType = (serverData) => {
  return filtersHousingType.value === ANY || filtersHousingType.value === serverData.offer.type;
};

const filterPrice = (serverData) => {
  switch (filtersHousingPrice.value) {
    case priceEnumeration.ANY:
      return serverData;
    case priceEnumeration.MIDDLE:
      return PriceMoney.MAX >= serverData.offer.price && PriceMoney.MIN <= serverData.offer.price;
    case priceEnumeration.LOW:
      return PriceMoney.MIN >= serverData.offer.price;
    case priceEnumeration.HIGH:
      return serverData.offer.price >= PriceMoney.MAX;
  }
};

const filterFeatures = (serverData) => {
  const features = featuresFilterForm.querySelectorAll('input:checked');

  return Array.from(features).every((feature) => {
    return serverData.offer.features.includes(feature.value);
  });
};

const filterRooms = (serverData) => {
  return filtersHousingRooms.value === ANY || +filtersHousingRooms.value === serverData.offer.rooms;
};

const filterGuests = (serverData) => {
  return (
    filtersHousingGuests.value === ANY || +filtersHousingGuests.value === serverData.offer.guests
  );
};

const filtersGeneration = (serverData) => {
  return (
    filterType(serverData) &&
    filterPrice(serverData) &&
    filterRooms(serverData) &&
    filterGuests(serverData) &&
    filterFeatures(serverData)
  );
};

const setFiltersChange = (cb) => {
  filterForm.addEventListener('change', () => cb());
};

const setFiltersReset = (cb) => {
  filterForm.addEventListener('Reset', () => cb());
};

export { activateFilter, filtersReset, filtersGeneration, setFiltersReset, setFiltersChange };
