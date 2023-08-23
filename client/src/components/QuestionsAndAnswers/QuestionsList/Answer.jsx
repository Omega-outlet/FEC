import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { reFormatDate } from '../../../../utils/reFormatDate.js';
import HelpfulYesButton from '../../../../utils/HelpfulYesButton.jsx';
import ReportButton from '../../../../utils/ReportButton.jsx';
import useHelpfulYes from '../../../../utils/useHelpfulYes.jsx';
import useReport from '../../../../utils/useReport.jsx';
import { YesReportButtonContainer } from '../../../styled-components/YesAndReportButton.styles.jsx';
import { AnswerDetailsContainer, ThumbnailImg } from '../styled-components/QuestionsAndAnswers.styles.jsx';
import ImageModal from '../Forms/ImageModal.jsx'

function Answer({ answer }) {
  // console.log(answer);
  const registerHelpfulClick = useHelpfulYes();
  const registerReportClick = useReport();

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (url) => {
    setCurrentImage(url);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setCurrentImage('');
  };
  return (
    <li>
      <p>
        <strong>A: </strong>
        {answer.body}
      </p>
      <div>
        {answer.photos && answer.photos.map((photo) => (
          <ThumbnailImg key={photo.id} src={photo.url} alt={`Photo ${photo.id} `} onClick={() => handleImageClick(photo.url)}/>
        ))}
      </div>
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
        {isImageModalOpen && <ImageModal imageUrl={currentImage} onClose={closeImageModal} />}
        <YesReportButtonContainer>
          <HelpfulYesButton
            initialCount={answer.helpfulness}
            onHelpfulClick={() => registerHelpfulClick('answers', answer.answer_id)}
          />
          <ReportButton
            initialReported={answer.reported}
            onReportClick={() => registerReportClick('answers', answer.answer_id)}
          />
        </YesReportButtonContainer>
      </AnswerDetailsContainer>
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.shape({
    answer_id: PropTypes.number,
    helpfulness: PropTypes.number,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    reported: PropTypes.bool,
    answerer_name: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })),
  }).isRequired,
};

export default Answer;
