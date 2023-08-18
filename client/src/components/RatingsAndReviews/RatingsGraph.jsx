import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { calculatePercentage } from './arithmetic.js';

function RatingsGraph({ metaData }) {
  return (
    <div data-testid="ratings-graph-component">
      <BarFormat>
        <StarSpan>5 stars</StarSpan>
        <BarDisplay metadata={metaData} rating="5" />
        <ReviewSpan>{`(${metaData['5']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan>4 stars</StarSpan>
        <BarDisplay metadata={metaData} rating="4" />
        <ReviewSpan>{`(${metaData['4']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan>3 stars</StarSpan>
        <BarDisplay metadata={metaData} rating="3" />
        <ReviewSpan>{`(${metaData['3']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan>2 stars</StarSpan>
        <BarDisplay metadata={metaData} rating="2" />
        <ReviewSpan>{`(${metaData['2']})`}</ReviewSpan>
      </BarFormat>
      <BarFormat>
        <StarSpan>1 stars</StarSpan>
        <BarDisplay metadata={metaData} rating="1" />
        <ReviewSpan>{`(${metaData['1']})`}</ReviewSpan>
      </BarFormat>
    </div>
  );
}

RatingsGraph.propTypes = {
  // eslint-disable-next-line react/require-default-props
  metaData: PropTypes.objectOf(PropTypes.string),
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
    black ${({ metadata, rating }) => calculatePercentage(metadata, rating)}%,
    lightgrey ${({ metadata, rating }) => calculatePercentage(metadata, rating)}%);
  height: 10px;
  width: 200px;`;
const ReviewSpan = styled.span`
  padding-left: 10px;
  font-size: 10px;`;
