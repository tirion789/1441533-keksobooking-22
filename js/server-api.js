import { showAlert } from './util.js';

const SERVER_DATA = 'https://22.javascript.pages.academy/keksobooking/data';
const SERVER_SHIPMENT = 'https://22.javascript.pages.academy/keksoasdfbooking';

const getData = (onSuccess) => {
  fetch(SERVER_DATA)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(showAlert);
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SERVER_SHIPMENT, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
