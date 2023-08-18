import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YesAndReportButton from '../src/styled-components/YesAndReportButton.styles.jsx';

function ReportButton({ initialReported, onReportClick }) {
  const [isReported, setIsReported] = useState(initialReported);
  // State to check if the user has clicked "Yes" or not
  const [clicked, setClicked] = useState(false);

  const handleReportClick = (e) => {
    e.preventDefault();
    if (!clicked) {
      setIsReported(true);
      setClicked(true);
      onReportClick();
    }
  };
  return (
    <p>
      <YesAndReportButton type="button" onClick={handleReportClick} disabled={clicked}>
        {isReported ? 'Reported' : 'Report'}
      </YesAndReportButton>
    </p>
  );
}

ReportButton.propTypes = {
  initialReported: PropTypes.bool,
  onReportClick: PropTypes.func.isRequired,
};

ReportButton.defaultProps = {
  initialReported: false,
};

export default ReportButton;
