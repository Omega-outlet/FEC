import styled from 'styled-components';

export const YesAndReportButton = styled.button`
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
export const YesReportButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
