import React from 'react';

const calculateTotal = (obj) => {
  let total = 0;
  for (let key in obj) {
    total += Number(obj[key])
  }
  return total;
};

const calculateRecommended = (obj) => (
  Math.floor((Number(obj.true) / calculateTotal(obj)) * 100)
);

const calculateAverage = (obj) => {
  let totalStars = 0;
  for (let key in obj) {
    totalStars += (key * Number(obj[key]));
  };
  const total = Number(totalStars / calculateTotal(obj));
  return Math.round(total * 10) / 10;
};

export { calculateAverage, calculateTotal, calculateRecommended };
