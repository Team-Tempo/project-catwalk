import React from 'react';
import Button from '@material-ui/core/Button';
import QuestionsDummyData from '../DummyData/QuestionsDummyData';
import QAndA from './QAndAComponents/QAndA.jsx';
import QuestionSearch from './QAndAComponents/QuestionSearch.jsx';
import Photos from './QAndAComponents/Photos.jsx';

const QuestionsAndAnswers = () => {
  var sortedQuestions = sortByHelpfulness(QuestionsDummyData.questions.results, 4);
  return (
    <div>
      <h3>QUESTIONS & ANSWERS</h3>

      <QuestionSearch questions={sortedQuestions}/>
      {sortedQuestions.map((question) => {
        return <QAndA question={question}/>
      })}
      <Photos questions={QuestionsDummyData.questions}/>

      <h6>LOAD MORE</h6>
      <Button variant="outlined">
        MORE ANSWERED QUESTIONS
      </Button>
      <Button variant="outlined">
        ADD A QUESTION   +
      </Button>
    </div>
  );
};

const sortByHelpfulness = (questionsAndAnswersData, numQuestions) => {
  var result = questionsAndAnswersData.slice();
  for (var i = 0; i < questionsAndAnswersData.length; i++) {
    var currentValue = questionsAndAnswersData[i].question_helpfulness;
    var position = i;
    while (position > 0 && questionsAndAnswersData[position] < questionsAndAnswersData[position - 1]) {
      questionsAndAnswersData[position] = questionsAndAnswersData[position - 1];
      questionsAndAnswersData[position - 1] = currentValue;
    }
  }
  result = result.slice(0, numQuestions);
  return result;
}

export default QuestionsAndAnswers;