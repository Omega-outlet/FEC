import styled from 'styled-components';

const YesButton = styled.button`
  background: none;
  border: none;
  font-family: var(--body-text-font-family,inherit);
  color: #069;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;
export default YesButton;
