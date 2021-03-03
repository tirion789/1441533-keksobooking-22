import {showAlert} from './util.js'


const serverData = 'https://22.javascript.pages.academy/keksobooking/data'
const serverShipment = 'https://22.javascript.pages.academy/keksobooking'

const getData = (onSuccess) => {
  fetch(serverData)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(showAlert)
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    serverShipment,
    {
      method: 'POST',
      body,
    },
  )
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

export {getData, sendData};
