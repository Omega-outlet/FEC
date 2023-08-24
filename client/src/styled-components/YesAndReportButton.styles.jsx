import styled from 'styled-components';

export const YesAndReportButton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  font-family: var(--body-text-font-family,inherit);
  color: #5a5a5a;
  cursor: pointer;
  line-height: 2;
  .underline-text {
    text-decoration: underline;
      &:hover {
    text-decoration: none;
  }
`;
export const YesReportButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #5a5a5a;
`;
export const HelpfulTextSpan = styled.span`
  margin-right: 5px;
  color: #5a5a5a;
`;