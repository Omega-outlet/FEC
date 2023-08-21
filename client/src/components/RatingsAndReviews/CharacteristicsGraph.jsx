import React from 'react';

function CharacteristicsGraph({ metaData }) {
  const [characteristics, setCharacteristics] = React.useState([]);
  React.useEffect(() => setCharacteristics(Object.keys(metaData)), [metaData]);
  const descriptionArr = [
    { attribute: 'size', descArr: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'] },
    { attribute: 'width', descArr: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'] },
    { attribute: 'comfort', descArr: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'] },
    { attribute: 'quality', descArr: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'] },
    { attribute: 'length', descArr: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'] },
    { attribute: 'fit', descArr: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'] },
  ];
  console.log(metaData)
  return (
    <div>
      <div>
        <h5 data-testid="char-graph-component" style={{'marginTop': '0', 'textAlign': 'center'}}>Characteristics</h5>
      </div>
      {characteristics.length && characteristics.map((char) => (
        <div key={char}>
          <div className="descriptions">
            {descriptionArr.filter((descObj) => (descObj.attribute === char.toLowerCase()))[0].descArr.filter((desc, index) => !(index % 2)).map((feedback) => <span key={feedback} style={{ 'fontSize': '10px', 'width': '33.3%' }}>{feedback}</span>)}
          </div>
          <div className="bar" style={{ 'display': 'flex', 'alignItems': 'center' }}>
            <span style={{ 'width': '100px', 'fontSize': '15px' }}>{char}</span>
            <div style={{ 'height': '1px', 'width': `${100 - ((metaData[char]['value'] - 1) / 5) * 100}%`, 'background': 'black' }} />
            <span>x</span>
            <div style={{ 'height': '1px', 'width': `${((metaData[char]['value'] - 1) / 5) * 100}%`, 'background': 'black' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacteristicsGraph;
