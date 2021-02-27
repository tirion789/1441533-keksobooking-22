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

const onSelectChangeArrive = () => {
  timeIn.value = timeOut.value;
}

const onSelectChangeExit = () => {
  timeOut.value = timeIn.value;
}

timeIn.addEventListener('change', onSelectChangeExit);
timeOut.addEventListener('change', onSelectChangeArrive);


const fieldsets = adForm.querySelectorAll('fieldset');
const address = adForm.querySelector('#address');



const inactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  fieldsets.forEach(fieldset => {
    fieldset.disabled = true;
  });
};

inactivateForm();

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  fieldsets.forEach(fieldset => {
    fieldset.disabled = false;
  });
}

const rooms = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');


const onCheckRoomsAndGuest = () => {
  if ((rooms.value == 100) && (capacity.value > 0)) {
    capacity.setCustomValidity('100 Комнат может быть только не для гостей')
  } else if ((rooms.value < 100) && (capacity.value == 0)) {
    capacity.setCustomValidity('Не для гостей может быть только 100 комнат')
  } else if ((rooms.value) < (capacity.value)) {
    capacity.setCustomValidity('Число гостей не может быть больше числа комнат')
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity()
}

capacity.addEventListener('change', () => {
  onCheckRoomsAndGuest();
})

rooms.addEventListener('change', () => {
  onCheckRoomsAndGuest();
})

export {activateForm, address}
