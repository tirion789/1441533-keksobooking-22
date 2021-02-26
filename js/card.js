import {createOffer} from './create-offer.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const TYPE_OF_HOUSING = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец ',
};

const similarCard = createOffer();

const createCardsFragment = document.createDocumentFragment();

const generateCard = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = TYPE_OF_HOUSING[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = offer.description;
  cardElement.querySelector('img').src = author.avatar;

  const featuresList = cardElement.querySelector('.popup__features');
  featuresList.innerText = '';
  for (let feature of offer.features) {
    featuresList.insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${feature}"></li>`);
  }

  const photoList = cardElement.querySelector('.popup__photos');
  photoList.innerText = '';
  for (let photos of offer.photos) {
    photoList.insertAdjacentHTML('beforeend', `<img src="${photos}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
  }

  return cardElement;
};

const generateCards = similarCard.map(generateCard)
createCardsFragment.appendChild(generateCards[0]);

export {similarCard, generateCard};
