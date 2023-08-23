import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { calculatePercentage } from './arithmetic.js';

function RatingsGraph({ metaData, changeFilter }) {
  return (
    <div data-testid="ratings-graph-component">
      <BarFormat>
        <StarSpan id="5" onClick={(e) => changeFilter(e.target.id)} data-testid="span">5 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="5" />
        <ReviewSpan>{`(${metaData['5']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan id="4" onClick={(e) => changeFilter(e.target.id)} data-testid="span2">4 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="4" />
        <ReviewSpan>{`(${metaData['4']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan id="3" onClick={(e) => changeFilter(e.target.id)} data-testid="span3">3 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="3" />
        <ReviewSpan>{`(${metaData['3']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan id="2" onClick={(e) => changeFilter(e.target.id)}>2 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="2" />
        <ReviewSpan>{`(${metaData['2']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan id="1" onClick={(e) => changeFilter(e.target.id)}>1 stars</StarSpan>
        <BarDisplay $metadata={metaData} $rating="1" />
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
    black ${({ $metadata, $rating }) => calculatePercentage($metadata, $rating)}%,
    lightgrey ${({ $metadata, $rating }) => calculatePercentage($metadata, $rating)}%);
  height: 10px;
  width: 200px;`;
const ReviewSpan = styled.span`
  padding-left: 10px;
  font-size: 10px;`;
