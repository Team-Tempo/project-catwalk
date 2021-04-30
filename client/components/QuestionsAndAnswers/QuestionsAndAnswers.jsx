import React, { useState, useEffect } from 'react';
import { Button, Dialog, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import QuestionsDummyData from '../DummyData/QuestionsDummyData';
import QAndA from './QAndAComponents/QAndA.jsx';
import QuestionSearch from './QAndAComponents/QuestionSearch.jsx';
import Photos from './QAndAComponents/Photos.jsx';
import AddQuestion from './QAndAComponents/AddQuestion.jsx';
import axios from 'axios';
import config from '../../../config.js';

const getQuestions = (id) => {
  return axios
    .get(`http://${config.IP_ADDRESS}:${config.PORT}/qa/questions?product_id=${id}&count=1000`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const QuestionsAndAnswers = ({ productId, product }) => {
  const [questions, setQuestions] = useState([]);
  const [shownQuestions, setShownQuestions] = useState([]);
  const [allQuestionsShown, setAllQuestionsShown] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      const questionData = await getQuestions(productId);
      setQuestions(questionData.results);
      setShownQuestions(sortQuestionsByHelpfulness(questionData.results, 2));
    }
    fetchQuestions();
  }, [productId]);

  const handleMoreQuestionsClick = () => {
    var numQuestionsToShow;
    if (questions.length > shownQuestions.length + 2) {
      numQuestionsToShow = shownQuestions.length + 2;
    } else {
      setAllQuestionsShown(true);
      numQuestionsToShow = questions.length;
    }
    var moreQuestions = sortQuestionsByHelpfulness(questions, numQuestionsToShow);
    setShownQuestions(moreQuestions);
  }

  const handleAddQuestionClick = () => {
    setOpen(true);
  }

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

  return (
    <div>
      <Typography variant="h6">QUESTIONS & ANSWERS</Typography>
      <QuestionSearch questions={shownQuestions} questionSearch={questionSearch}/>
      {shownQuestions.map((question, i) => (
       <QAndA question={question} product={product} key={i}/>
      ))}
      {questions.length > 1 && !allQuestionsShown ?
        <Button variant="contained" color="primary" onClick={handleMoreQuestionsClick}>
          MORE ANSWERED QUESTIONS
        </Button>
      : null}
        <AddQuestion product={product} productId={productId}/>
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