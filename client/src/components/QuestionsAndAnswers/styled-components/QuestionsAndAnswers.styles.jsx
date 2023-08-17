import styled from 'styled-components';

export const QAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid;
  border-bottom: 2px solid;
`;

export const QuestionList = styled.ul`
  list-style-type: none;
`;

export const QuestionDetailsList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-basis: 100%;
  align-items: baseline;
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 40px;
  border-bottom: var(--common-border-width,1px) solid var(--common-border-color,rgba(0,0,0,0.15));
  padding-bottom: 40px;
`;

export const AskerDetailsContainer = styled.div`
  flex: 1;
  border-right: var(--common-border-width,1px) solid var(--common-border-color,rgba(0,0,0,0.15));
  display: flex;
  flex-direction: column;
  justify-content: center;
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
