import React from 'react';
const calculateAverage = (obj) => {
};

const calculateTotal = (obj) => (
  Number(obj.true) + Number(obj.false)
);

const calculateRecommended = (obj) => (
  Math.floor((Number(obj.true) / calculateTotal(obj)) * 100)
);

export { calculateAverage, calculateTotal, calculateRecommended };
