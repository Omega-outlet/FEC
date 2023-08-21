import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Forms/Modal.jsx';
import AnswerForm from '../Forms/AnswerForm.jsx';
import { AnswerThisQuestionButton } from '../styled-components/Buttons.styles.jsx';
import { YesAndReportButton } from '../../../styled-components/YesAndReportButton.styles.jsx';

function AddNewAnswerButton({productName, questionBody, length, onHandleAddAnswer }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isOpen]);

  const handleSubmit = (formData) => {
    onHandleAddAnswer(formData);
    console.log(formData);
    // close the modal after submit
    setIsOpen(false);
  };

  return (
    <div>
      {length === 0
        ? (
          <AnswerThisQuestionButton type="button" onClick={handleOpenModal}>
            Answer This Question
          </AnswerThisQuestionButton>
        )
        : (
          <YesAndReportButton type="button" onClick={handleOpenModal}>
            Add Answer
          </YesAndReportButton>
        )}
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <AnswerForm
            productName={productName}
            questionBody={questionBody}
            onSubmit={handleSubmit}
            onCancel={handleCloseModal}
          />
        </Modal>
    </div>
  )
}

export default AddNewAnswerButton;
