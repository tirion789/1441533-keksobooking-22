const TITLE = [
  'Квартира в хороших районах Токио',
  'Просторные и уютные квартиры для всей семьи',
  'Квартиры в шаговой доступности к метро',
  'Квартиры рядом с парком',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Квартиры со всеми удобствами',
  'В квартирах сделан ремонт, в японском стиле',
  'Квартиры с частной парковкой',
  'Множество комнат, которые можно оборудовать под что угодно!',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const AvatarNumber = {
  MIN: 1,
  MAX: 8,
};

const PriceRange = {
  MIN: 3000,
  MAX: 10000,
};

const RoomsNumber = {
  MIN: 1,
  MAX: 5,
};

const NumberGuests = {
  MIN: 1,
  MAX: 10,
};

const XCoordinate = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const YCoordinate = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const NUMBER_FLOAT_CORDINATE = 5;

const QUANTITY_ARRAY = 10;

const getArbitraryInteger = (min, max) => {
  if (min > max) {
    throw new Error('Неверно указан числовой диапазон');
  }
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const getRandomNumber = (min, max, numberFloatPoint) => {
  if (min > max) {
    throw new Error('Неверно указан числовой диапазон');
  }
  const randomPoint = Math.random() * (max - min) + min;
  return randomPoint.toFixed(numberFloatPoint);
}

const getArbitraryArrayElement = (element) => element[Math.floor(Math.random() * element.length)];

const getArbitraryArrayLength = (array) => {
  const newArray = [];

  for (let i = 0; i < getArbitraryInteger(1, array.length); i++) {
    newArray.push(array[i]);
  }
  return newArray;
};


const getLocation = () => ({
  x: getRandomNumber(XCoordinate.MIN, XCoordinate.MAX, NUMBER_FLOAT_CORDINATE),
  y: getRandomNumber(YCoordinate.MIN, YCoordinate.MAX, NUMBER_FLOAT_CORDINATE),
})

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

const createOffer = new Array(QUANTITY_ARRAY).fill(null).map(getFinalObject);
createOffer;
