//create style component for table design
import React from 'react';

const ComparisonTable = function ({currentProduct, comparedProduct}) {

  //Create a comparison object

  //map to rows
  const tableRows = () => (
  <tr>
    <td>{currentProduct.slogan}</td><td>Comparison category</td><td>{comparedProduct.slogan}</td>
  </tr>
  );

  return (
    <table>
      <thead>
        <tr style={{ position: 'sticky' }}>
          <th>{currentProduct.name}</th>
          <th>Comparing</th>
          <th>{comparedProduct.name}</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
