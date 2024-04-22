import axios from 'axios';

const parseHTML = (htmlText) => {
  const parser = new DOMParser();
  const decodedText = parser.parseFromString(htmlText, 'text/html').documentElement.textContent;
  return decodedText;
};

export const fetchQuestions = async () => {
  try {
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
    const decodedResults = response.data.results.map(result => ({
      ...result,
      question: parseHTML(result.question), // Parse HTML in question
      correct_answer: parseHTML(result.correct_answer), // Parse HTML in correct_answer
      incorrect_answers: result.incorrect_answers.map(answer => parseHTML(answer)), // Parse HTML in incorrect_answers
    }));
    return decodedResults;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};
