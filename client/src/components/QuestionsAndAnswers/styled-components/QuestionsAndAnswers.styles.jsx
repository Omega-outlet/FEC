import styled, { keyframes } from 'styled-components';

export const QAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid;
  max-height: 100vh;
`;

export const QuestionList = styled.ul`
  list-style-type: none;
  max-height: 80vh;
  overflow-y: auto;
`;

export const QuestionDetailsList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 15px;
  border-bottom: var(--common-border-width,1px) solid var(--common-border-color,rgba(0,0,0,0.15));
  padding-bottom: 40px;

`;

export const AskerDetailsContainer = styled.div`
  min-width: 200px;
  max-width: 200px;
  border-right: var(--common-border-width,1px) solid var(--common-border-color,rgba(0,0,0,0.15));
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 40px;
  padding-bottom: 100px;
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
`;

export const SearchBarContainer = styled.div`
  width: 65%;
  padding: 20px;
  position: sticky;
  // makes it stick on top of the scrollable section
  top: 0;
  background-color: white;
  padding-bottom: 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 20px;
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