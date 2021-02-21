import {getArbitraryInteger, getRandomNumber, getArbitraryArrayElement, getArbitraryArrayLength} from './util.js';
import {CARDS_COUNT, NUMBER_FLOAT_COORDINATE, YCoordinate , XCoordinate, NumberGuests, RoomsNumber, PriceRange, AvatarNumber, DESCRIPTION, PHOTOS, FEATURES, CHECKOUT, CHECKIN, TYPE, TITLE} from './data.js'


const getLocation = () => ({
  x: getRandomNumber(XCoordinate.MIN, XCoordinate.MAX, NUMBER_FLOAT_COORDINATE),
  y: getRandomNumber(YCoordinate.MIN, YCoordinate.MAX, NUMBER_FLOAT_COORDINATE),
});

const getAuthor = () => ({
  avatar: `img/avatars/user0${getArbitraryInteger(AvatarNumber.MIN, AvatarNumber.MAX)}.png`,
});

const getGenerateOffer = () => ({
  title: getArbitraryArrayElement(TITLE),
  address: Object.values(getLocation()),
  price: getArbitraryInteger(PriceRange.MIN, PriceRange.MAX),
  type: getArbitraryArrayElement(TYPE),
  rooms: getArbitraryInteger(RoomsNumber.MIN, RoomsNumber.MAX),
  guests: getArbitraryInteger(NumberGuests.MIN, NumberGuests.MAX),
  checkin: getArbitraryArrayElement(CHECKIN),
  checkout: getArbitraryArrayElement(CHECKOUT),
  features: getArbitraryArrayLength(FEATURES),
  description: getArbitraryArrayElement(DESCRIPTION),
  photos: getArbitraryArrayLength(PHOTOS),
});

const getFinalObject = () => ({
  location: getLocation(),
  author: getAuthor(),
  offer: getGenerateOffer(),
});

const createOffer = () => new Array(CARDS_COUNT).fill(null).map(getFinalObject);

createOffer;

export {createOffer};
