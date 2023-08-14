import React from 'react';

const ScrollButton = function ({scroll, dir}) {
  return <input type="button" value={dir === 'left' ? '<' : '>'} onClick={scroll} />;
};

export default ScrollButton;
