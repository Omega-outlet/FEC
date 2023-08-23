import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // Black color with 50% alpha/opacity
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 50%;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #000;
  }
`;
export const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;
export const ImageInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const InputWithButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UrlButton = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 6px;
  &:hover {
    background-color: #bbb;
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
`;

export const WarningMessageContainer = styled.div`
  background-color: #ffdddd;
  border: 1px solid #f44336;
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
  color: #f44336;
  font-weight: bold;
`;

export const CustomChooseFileInput = styled.input`
  display: none;
`;

export const CustomFileInputLabel = styled.label`
  display: inline-block;
  padding: 8px 16px;
  background: #2d87f0;
  color: #fff;
  border: none;
  border-radius: 10x;
  cursor: pointer;
  text-align: center;
`;
