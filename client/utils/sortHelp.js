export function sortByHelp(questions) {
  return questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
}

export default sortByHelp;