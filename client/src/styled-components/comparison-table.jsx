import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  color: black;
  td:nth-child(2) {
    text-align: center;
  };
  td:nth-child(3) {
    text-align: right;
  };
  tbody tr:nth-child(odd) {
    background-color: #f5f5f5;
  }
`;

export default StyledTable;
