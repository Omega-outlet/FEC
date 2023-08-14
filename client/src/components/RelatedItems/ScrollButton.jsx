import React from 'react';

const ScrollButton = function ({scroll}) {
  return <input type="button" value="<Scroll>" onClick={scroll} />;
};

export default ScrollButton;
