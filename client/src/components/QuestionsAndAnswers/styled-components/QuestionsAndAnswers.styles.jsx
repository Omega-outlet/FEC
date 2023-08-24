import styled, { keyframes } from 'styled-components';
import searchIcon from '../../../../dist/assets/searchIcon.svg';

export const QAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100vh;
  border-bottom: var(--common-border-width,1px) solid var(--common-border-color,rgba(0,0,0,0.15));
  padding-bottom: 20px;
`;

export const QuestionList = styled.ul`
  list-style-type: none;
  max-height: 80vh;
  overflow-y: auto;
`;

export const QuestionDetailsList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 5px;
  &:not(:first-child) {
    border-top: var(--common-border-width,1px) solid var(--common-border-color,rgba(0,0,0,0.15));
  }
  padding-bottom: 10px;
`;

export const AskerDetailsContainer = styled.div`
  min-width: 200px;
  max-width: 200px;
  border-right: var(--common-border-width,1px) solid var(--common-border-color,rgba(0,0,0,0.15));
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
  padding-bottom: 20px;
  font-size: 16px;
`;
export const QuestionAndAnswersContainer = styled.div`
  flex: 2;
  padding: 20px;
`;

export const QuestionBodyAndHelpfulContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AnswerListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  max-height: 50vh;
  overflow-y: auto;
`;


export const SearchBarContainer = styled.div`
  width: 65%;
  padding: 20px;
  position: sticky;
  // makes it stick on top of the scrollable section
  top: 0;
  background-color: transparent;
  padding-bottom: 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 30px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: left 10px center;
  border-radius: 10px;
`;

export const YesReportButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AnswerDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
export const LoadMoreAndAddNewButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const BodyAndQuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const QuestionAskedByText = styled.p`
  font-size: 10px;
  color: #0E1311;
`;
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const ScrollSpinner = styled.div`
  border: 16px solid whitesmoke;
  border-top: 16px solid dodgerblue;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: ${spinAnimation} 2s linear infinite;
  // make it center
  margin: 20px auto;
`;
export const Header = styled.h2`
  border-top: 0;
  margin-bottom: 10px;
`;

export const ThumbnailImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
`;

export const HighlightTerm = styled.span`
  background-color: yellow;
`;
export const AnswerBodyText = styled.p`
  max-width: 30%;
  font-size: 14px;
  color: #0E1311;
  text-align: left;
  overflow-wrap: break-word;
  clear: both;
  margin-left: 5px;
`;

export const AnswerContainer = styled.div`
  display: flex;
  align-Items: baseline;
`;

export const NoQuestionImage = styled.img`
  width: 30%;
  max-width: 400px;
  display: block;
  margin: 20px auto;
`;

export const ImageAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  `;

export const ScrollableContainer = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  position: relative;
`;
