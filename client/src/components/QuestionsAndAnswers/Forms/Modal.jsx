import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer, CloseButton } from '../styled-components/Modal.styles.jsx';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        {/* children prop */}
        { children }
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </Overlay>
  );
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;