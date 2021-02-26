const MIN_PRICE_OF_HOUSING = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const adForm = document.querySelector('.ad-form');

const priceHousing = adForm.querySelector('#price');
const typeHousing = adForm.querySelector('#type');


const typeChange = () => {
  priceHousing.placeholder = MIN_PRICE_OF_HOUSING[typeHousing.value];
  priceHousing.min = MIN_PRICE_OF_HOUSING[typeHousing.value];
  priceHousing.required = true;
}

typeHousing.addEventListener('change', typeChange);

typeChange();


const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const OnSelectChangeArrive = () => {
  timeIn.value = timeOut.value;
}

const OnSelectChangeExit = () => {
  timeOut.value = timeIn.value;
}

timeIn.addEventListener('change', OnSelectChangeExit);
timeOut.addEventListener('change', OnSelectChangeArrive);


const fieldsets = adForm.querySelectorAll('fieldset');
const address = adForm.querySelector('#address');


const inactiveForm = () => {
  adForm.classList.add('ad-form--disabled');
  fieldsets.forEach(fieldset => {
    fieldset.disabled = true;
  });
};

inactiveForm();

const activeForm =() => {
  adForm.classList.remove('ad-form--disabled');
  fieldsets.forEach(fieldset => {
    fieldset.disabled = false;
  });
}

export {activeForm, address}
