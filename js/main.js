const randomInteger = (min, max) => {
  if (min > max) {
    return new Error('Неверно указан числовой диапазон');
  }
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert(randomInteger(0, 5));

const randomNumber = (min, max, numberFloatPoint) => {
  if (min > max) {
    return new Error('Неверно указан числовой диапазон');
  }
  const randomPoint = Math.random() * (max - min) + min;
  return randomPoint.toFixed(numberFloatPoint);
}

alert(randomNumber(0, 5, 3));
