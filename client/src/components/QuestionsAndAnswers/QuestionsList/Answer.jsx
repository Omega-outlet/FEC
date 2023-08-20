import React from 'react';
import PropTypes from 'prop-types';
import { reFormatDate } from '../../../../utils/reFormatDate.js';
import HelpfulYesButton from '../../../../utils/HelpfulYesButton.jsx';
import ReportButton from '../../../../utils/ReportButton.jsx';
import useHelpfulYes from '../../../../utils/useHelpfulYes.jsx';
import useReport from '../../../../utils/useReport.jsx';
import { YesReportButtonContainer } from '../../../styled-components/YesAndReportButton.styles.jsx';
import { AnswerDetailsContainer } from '../styled-components/QuestionsAndAnswers.styles.jsx';

function Answer({ answer }) {
  const registerHelpfulClick = useHelpfulYes();
  const registerReportClick = useReport();
  return (
    <li>
      <p>
        <strong>A: </strong>
        {answer.body}
      </p>
      <AnswerDetailsContainer>
        <div>
          <p>
            Answered by
            {' '}
            {answer.answerer_name === 'Seller' ? <strong>{answer.answerer_name}</strong> : answer.answerer_name}
            ,
            {' '}
            {reFormatDate(answer.date)}
          </p>
        </div>
        <YesReportButtonContainer>
          <HelpfulYesButton
            initialCount={answer.helpfulness}
            onHelpfulClick={() => registerHelpfulClick('answers', answer.id)}
          />
          <ReportButton
            initialReported={answer.reported}
            onReportClick={() => registerReportClick('answers', answer.id)}
          />
        </YesReportButtonContainer>
      </AnswerDetailsContainer>
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    helpfulness: PropTypes.number,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    reported: PropTypes.bool,
    answerer_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Answer;
