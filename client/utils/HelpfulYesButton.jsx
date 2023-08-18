import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YesAndReportButton from '../src/styled-components/YesAndReportButton.styles.jsx';

function HelpfulYesButton({ initialCount, onHelpfulClick }) {
  const [helpfulYesCount, setHelpfulYesCount] = useState(initialCount);
  // State to check if the user has clicked "Yes" or not
  const [clicked, setClicked] = useState(false);

  const handleHelpfulYesClick = (e) => {
    e.preventDefault();
    if (!clicked) {
      setHelpfulYesCount(helpfulYesCount + 1);
      setClicked(true);
      onHelpfulClick();
    }
  };
  return (
    <p>
      Helpful?
      <YesAndReportButton type="button" onClick={handleHelpfulYesClick}>
        Yes
        (
        {helpfulYesCount}
        )
      </YesAndReportButton>
    </p>
  );
}

HelpfulYesButton.propTypes = {
  initialCount: PropTypes.number,
  onHelpfulClick: PropTypes.func.isRequired,
};

HelpfulYesButton.defaultProps = {
  initialCount: 0,
};

export default HelpfulYesButton;
