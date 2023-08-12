/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import QuestionsList from './QuestionsList';

describe('<QuestionsList />', () => {
  const testQuestions = [
    {
      question_id: 1,
      asker_name: 'Eric',
      answers: {
        1: {
          id: 1,
          body: 'Yes! It is a space ship!',
          answerer_name: 'Lauren',
        },
        2: {
          id: 2,
          body: 'Yes! You can take a 80 years long loan!',
          answerer_name: 'Brandon',
        },
      },
    },
    {
      question_id: 2,
      asker_name: 'Kimberly',
      answers: {},
    },
  ];
  it('renders questions and answers', () => {
    const { getByText, queryByText, queryAllByText } = render(<QuestionsList
      questions={testQuestions}
    />);

    expect(getByText('Yes! It is a space ship!')).toBeTruthy();

    expect(queryByText('Non-existent Text')).toBeNull();

    const texts = queryAllByText('Who asked the question?');
    expect(texts).toHaveLength(2);
  });
});
