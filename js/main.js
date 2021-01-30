const randomInteger = function(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert(randomInteger(0, 5));

const random = function(min, max, numberFloatPoint) {
  numberFloatPoint = Math.random() * (max - min) + min;
  return numberFloatPoint.toFixed(2);
}

alert(random(0, 5));
