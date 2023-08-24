import React from 'react';

const Features = function ({ features }) {
  const featureList = features.map((feature) =>
    (
      <li key={feature.feature}>
        <em>{feature.feature}</em>:
        {feature.value === null ? ' ✓' : <> {feature.value}</>}
      </li>
    ),
  );
  return (
    <div>
      <h3>Product Features:</h3>
      <ul style={{ 'listStyleType': 'none', 'padding': '0' }}>
        {featureList}
      </ul>
    </div>
  );
};

export default Features;
