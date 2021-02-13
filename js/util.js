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

export {getArbitraryInteger, getRandomNumber, getArbitraryArrayElement, getArbitraryArrayLength};
