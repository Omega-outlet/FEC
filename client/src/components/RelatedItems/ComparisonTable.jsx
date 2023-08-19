//create style component for table design
import React from 'react';

const ComparisonTable = function ({currentProduct, currentStyle, comparedProduct, comparedStyle}) {
  const tableRows = <tr><td>{currentProduct.slogan}</td><td>Sample comparison row</td><td>{comparedProduct.slogan}</td></tr>;

  //make th position: sticky
  return (
    <table>
      <thead>
        <tr>
          <th>Comparing</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>{currentProduct.name}</th>
          <th></th>
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

/* <table>
  <thead>
    <tr class="red">
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
      <th>Color</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem.</td>
      <td>Ullam.</td>
      <td>Vel.</td>
      <td>At.</td>
      <td>Quis.</td>
    </tr>
  </tbody>
</table> */
