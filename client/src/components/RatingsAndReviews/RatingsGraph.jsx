import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { calculatePercentage } from './arithmetic.js';
import ThemeContext from '../ThemeContext.jsx';

function RatingsGraph({ metaData, changeFilter }) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div data-testid="ratings-graph-component">
      <BarFormat>
        <StarSpan id="5" onClick={(e) => changeFilter(e.target.id)} data-testid="span">5 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="5" $theme={theme} />
        <ReviewSpan>{`(${metaData['5']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan id="4" onClick={(e) => changeFilter(e.target.id)} data-testid="span2">4 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="4" $theme={theme} />
        <ReviewSpan>{`(${metaData['4']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan id="3" onClick={(e) => changeFilter(e.target.id)} data-testid="span3">3 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="3" $theme={theme} />
        <ReviewSpan>{`(${metaData['3']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan id="2" onClick={(e) => changeFilter(e.target.id)}>2 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="2" $theme={theme} />
        <ReviewSpan>{`(${metaData['2']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan id="1" onClick={(e) => changeFilter(e.target.id)}>1 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="1" $theme={theme} />
        <ReviewSpan>{`(${metaData['1']})`}</ReviewSpan>
      </BarFormat>
    </div>
  );
}

RatingsGraph.propTypes = {
  // eslint-disable-next-line react/require-default-props
  metaData: PropTypes.objectOf(PropTypes.string),
  changeFilter: PropTypes.func.isRequired,
};

export default RatingsGraph;

const BarFormat = styled.div`
  display: flex;
  align-items: center;`;
const StarSpan = styled.span`
  padding-right: 10px;
  cursor: pointer;`;
const BarDisplay = styled.div`
  background: linear-gradient(90deg,
    ${({ $theme }) => ($theme === 'light' ? 'black' : 'white')} ${({ $metadata, $rating }) => calculatePercentage($metadata, $rating)}%,
    ${({ $theme }) => ($theme === 'light' ? 'lightgray' : 'rgb(121, 121, 121)')} ${({ $metadata, $rating }) => calculatePercentage($metadata, $rating)}%);
  height: 10px;
  width: 200px;`;
const ReviewSpan = styled.span`
  padding-left: 10px;
  font-size: 10px;`;
