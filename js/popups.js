const main = document.querySelector('main');


const error = document.querySelector('#error').content;
const contentError = error.querySelector('.error');
const closeErrorButton = contentError.querySelector('.error__button');

const success = document.querySelector('#success').content;
const contentSuccess = success.querySelector('.success');


const discoveryErrorPopup = () => {
  main.appendChild(contentError);
};

const discoverySuccessPopup = () => {
  main.appendChild(contentSuccess);
}

const closeErrorPopup = () => {
  if (main.contains(contentError)) {
    main.removeChild(contentError)
  }
}

const closeSuccessPopup = () => {
  if (main.contains(contentSuccess)) {
    main.removeChild(contentSuccess)
  }
}

document.addEventListener('keydown', (evt) => {
  if ((evt.key === 'Escape' || evt.key === 'Esc')) {
    closeErrorPopup();
    closeSuccessPopup();
  }
})

closeErrorButton.addEventListener('click', () => {
  closeErrorPopup();
})

main.addEventListener('click', closeErrorPopup);
main.addEventListener('click', closeSuccessPopup);

export {discoveryErrorPopup, discoverySuccessPopup}

