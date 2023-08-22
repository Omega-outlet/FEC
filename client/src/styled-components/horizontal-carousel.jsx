// Horizontal list rendering
//import React from 'react';
import styled from 'styled-components';

export const Carousel = styled.ul`
  list-style-type: none;
  inline-size: min-content;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  flex: 0 0 auto;
  gap: 5px;
  justify-content: center;
  height: 35em;
  align-items: center;
`;

export const Item = styled.li`
  width: 20em;
  height: 100%;
  clip: shape;
  align-items: center;
  background-color: #f5f5f5;
  position: relative;
`;
// rm background color if desired later, just putting it in for viz

export const Image = styled.img`
  background-size: cover;
  object-fit: cover;
  display: block;
  height: 25em;
  width: 20em;
  clip: shape;
`;
