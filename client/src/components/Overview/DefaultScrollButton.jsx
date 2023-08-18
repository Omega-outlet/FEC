import React from 'react';

const DefaultScrollButton = function ({scroll, dir}) {
  return <input type='button' value={dir === 'left' ? '<' : '>'} onClick={scroll} />;
};

export default DefaultScrollButton;
