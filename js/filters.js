const filterForm = document.querySelector('.map__filters');
const selectsFilterForm = filterForm.querySelectorAll('select');
const featuresFilterForm = filterForm.querySelector('#housing-features');

const inactivateFilter = () => {
  filterForm.classList.add('map__filters--disabled');
  featuresFilterForm.disabled = true;
  selectsFilterForm.forEach(select => {
    select.disabled = true;
  });
};

inactivateFilter();


const activateFilter = () => {
  filterForm.classList.remove('map__filters--disabled');
  featuresFilterForm.disabled = false;
  selectsFilterForm.forEach(select => {
    select.disabled = false;
  });
}

const filtersReset = () => {
  filterForm.reset();
}

export {activateFilter, filtersReset}
