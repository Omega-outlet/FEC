import { React, useContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import descriptionArr from './descriptionArr.js';
import ThemeContext from '../ThemeContext.jsx';

function CharacteristicsGraph({ metaData }) {
  const [characteristics, setCharacteristics] = useState([]);
  useEffect(() => setCharacteristics(Object.keys(metaData)), [metaData]);
  const { theme } = useContext(ThemeContext);

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
              <div style={{
                'height': '1px',
                'width': `${100 - ((metaData[char]?.value - 1) / 5) * 100}%`,
                'background': `${theme === 'light' ? 'black' : 'white'}`,
              }}
              />
              <span>x</span>
              <div style={{
                'height': '1px',
                'width': `${((metaData[char]?.value - 1) / 5) * 100}%`,
                'background': `${theme === 'light' ? 'black' : 'white'}`,
              }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

CharacteristicsGraph.propTypes = {
  // eslint-disable-next-line react/require-default-props
  metaData: propTypes.shape({
    Comfort: propTypes.shape({
      id: propTypes.number,
      value: propTypes.string,
    }),
    Size: propTypes.shape({
      id: propTypes.number,
      value: propTypes.string,
    }),
    Width: propTypes.shape({
      id: propTypes.number,
      value: propTypes.string,
    }),
    Fit: propTypes.shape({
      id: propTypes.number,
      value: propTypes.string,
    }),
    Length: propTypes.shape({
      id: propTypes.number,
      value: propTypes.string,
    }),
  }),
};
export default CharacteristicsGraph;
