/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import QuestionsList from './QuestionsList';
// Use this mock function for testing
jest.mock('../../../../utils/sortHelp.js', () => ({
  sortByHelp: jest.fn((questions) => questions.sort((a, b) => b.helpfulness - a.helpfulness)),
}));

describe('<QuestionsList />', () => {
  const testQuestions = [
    {
      question_id: 1,
      asker_name: 'Eric',
      question_date: '2023-01-01',
      question_body: 'Is this a spaceship?',
      helpfulness: 2,
      answers: {
        1: {
          id: 1,
          body: 'Yes! It is a space ship!',
          answerer_name: 'Lauren',
          date: '2023-01-02',
        },
        2: {
          id: 2,
          body: 'Yes! You can take a 80 years long loan!',
          answerer_name: 'Brandon',
          date: '2023-01-03',
        },
      },
    },
    {
      question_id: 2,
      asker_name: 'Kimberly',
      question_date: '2023-02-01',
      question_body: 'How do you feel?',
      helpfulness: 10,
      answers: {},
    },
  ];
  it('renders questions and answers', () => {
    const { getByText, queryByText, queryAllByText } = render(<QuestionsList
      questions={testQuestions}
    />);

    expect(getByText('Yes! It is a space ship!')).toBeTruthy();

    expect(queryByText('Non-existent Text')).toBeNull();

    expect(getByText('Eric, December 31, 2022')).toBeTruthy();
    expect(getByText('Kimberly, January 31, 2023')).toBeTruthy();
  });

  it('sorts questions by helpfulness in descending order', () => {
    const { getAllByTestId } = render(<QuestionsList questions={testQuestions} />);

    const qBody = getAllByTestId('question-body').map((item) => item.textContent);
    expect(qBody[0]).toBe('Q: How do you feel?');
    expect(qBody[1]).toBe('Q: Is this a spaceship?');
  });

  it('renders More Answered Questions button if there are more than 4 questions', () => {
    // Change key to avoid errors
    const sixQuestions = [...testQuestions, ...testQuestions, ...testQuestions]
      .map((question, i) => ({
        ...question,
        question_id: i + 1,
      }));
    const { getByText } = render(<QuestionsList questions={sixQuestions} />);
    expect(getByText('MORE ANSWERED QUESTIONS')).toBeTruthy();
  });
  it('does not render the More Answered Questions button if there are four or less questions', () => {
    const { queryByText } = render(<QuestionsList questions={testQuestions} />);
    expect(queryByText('MORE ANSWERED QUESTIONS')).toBeNull();
  });
});
