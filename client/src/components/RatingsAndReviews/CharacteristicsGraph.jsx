import React from 'react';
import propTypes from 'prop-types';
import descriptionArr from './descriptionArr.js';

function CharacteristicsGraph({ metaData }) {
  const [characteristics, setCharacteristics] = React.useState([]);
  React.useEffect(() => setCharacteristics(Object.keys(metaData)), [metaData]);

  return (
    <div>
      <h5 data-testid="char-graph-component" style={{'marginTop': '0', 'textAlign': 'center'}}>Characteristics</h5>
      <div style={{'marginTop': '10px'}}>
        {characteristics.length && characteristics.map((char) => (
          <div key={char} style={{'marginTop': '10px'}}>
            <div className="descriptions">
              {descriptionArr.filter((descObj) => (descObj.attribute === char.toLowerCase()))[0].descArr.filter((desc, index) => !(index % 2)).map((feedback) => <span key={feedback} style={{ 'fontSize': '10px', 'width': '33.3%' }}>{feedback}</span>)}
            </div>
            <div className="bar" style={{ 'display': 'flex', 'alignItems': 'center' }}>
              <span style={{ 'width': '100px', 'fontSize': '15px' }}>{char}</span>
              <div style={{ 'height': '1px', 'width': `${100 - ((metaData[char]?.value - 1) / 5) * 100}%`, 'background': 'black' }} />
              <span>x</span>
              <div style={{ 'height': '1px', 'width': `${((metaData[char]?.value - 1) / 5) * 100}%`, 'background': 'black' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

CharacteristicsGraph.propTypes = {
  // eslint-disable-next-line react/require-default-props
  metaData: propTypes.objectOf({
    Comfort: propTypes.objectOf({
      id: propTypes.number.isRequired,
      value: propTypes.string.isRequired,
    }),
    Size: propTypes.objectOf({
      id: propTypes.number.isRequired,
      value: propTypes.string.isRequired,
    }),
    Width: propTypes.objectOf({
      id: propTypes.number.isRequired,
      value: propTypes.string.isRequired,
    }),
    Fit: propTypes.objectOf({
      id: propTypes.number.isRequired,
      value: propTypes.string.isRequired,
    }),
    Length: propTypes.objectOf({
      id: propTypes.number.isRequired,
      value: propTypes.string.isRequired,
    }),
  }),
};
export default CharacteristicsGraph;
