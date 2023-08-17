// Horizontal list rendering
//import React from 'react';
import styled from 'styled-components';

export const Carousel = styled.ul`
  list-style-type: none;
  inline-size: min-content;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  flex: 0 0 auto;

  height: 30em;
  align-items: center;
`;
//  add overflow: hidden above to hide scroll bars
// once I finish CSS sizing

export const Item = styled.li`
  flex: 1;
  width: 20em;
  height: 100%;
`;

export const Image = styled.img`
  value: none;
  margin-left: auto;
  margin-right: auto;
  height: 25em;
`;

export const ButtonWrap = styled.button`
  background-color: black;
  background: black;
  color: white;
  text-align: center;
  height: 10%;
  font-weight: bold;
`;
