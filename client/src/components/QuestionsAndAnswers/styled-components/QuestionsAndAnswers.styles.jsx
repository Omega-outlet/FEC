import styled from 'styled-components';

export const QAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

export const QuestionList = styled.ul`
  list-style-type: none;
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
`;

export const BodyAndQuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const QuestionAskedByText = styled.p`
  font-size: 10px;
  color: #0E1311;
`;
