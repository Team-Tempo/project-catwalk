import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import QuestionsDummyData from '../DummyData/QuestionsDummyData';
import QAndA from './QAndAComponents/QAndA.jsx';
import QuestionSearch from './QAndAComponents/QuestionSearch.jsx';
import Photos from './QAndAComponents/Photos.jsx';
import config from '../../../config';
import axios from 'axios';

const getQuestions = (id) => {
  return axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions?product_id=${id}`, {
      headers: {
        Authorization: config.GITHUB_TOKEN,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const QuestionsAndAnswers = ( { productId }) => {
  const [questions, setQuestions] = useState([]);
  const [shownQuestions, setShownQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const questionData = await getQuestions(productId);
      setQuestions(questionData.results);
      setShownQuestions(questionData.results);
    }

    fetchQuestions();
  }, []);

  const questionSearch = (searchInput) => {
    if (searchInput.length < 3) {
      setShownQuestions(questions);
      return;
    }
    var searchMatchingQuestions = [];
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].question_body.includes(searchInput)) {
        searchMatchingQuestions.push(questions[i]);
      }
    }
    setShownQuestions(searchMatchingQuestions);
  };

  var sortedQuestions = sortQuestionsByHelpfulness(shownQuestions, 4);
  return (
    <div>
      <h6>QUESTIONS & ANSWERS</h6>
      <QuestionSearch questions={sortedQuestions} questionSearch={questionSearch}/>
      {sortedQuestions.map((question, i) => (
       <QAndA question={question} key={i}/>
      ))}
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

const sortQuestionsByHelpfulness = (questionsAndAnswersData, numQuestions) => {
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