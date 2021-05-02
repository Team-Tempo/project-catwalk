import React, { useState, useEffect, useReducer } from 'react';
import { Button, Dialog, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Typography, Grid } from '@material-ui/core';
import QuestionsDummyData from '../DummyData/QuestionsDummyData';
import QAndA from './QAndAComponents/QAndA.jsx';
import QuestionSearch from './QAndAComponents/QuestionSearch.jsx';
import Photos from './QAndAComponents/Photos.jsx';
import AddQuestion from './QAndAComponents/AddQuestion.jsx';
import config from '../../../config';
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN;

const useStyles = makeStyles((theme) => ({
  scroll: {
    maxHeight: 500,
    overflow: 'auto'
  },
  spacer: {
    marginTop: '10px',
    marginBottom: '10px'
  }
}));

const getQuestions = (id) => {
  return axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions?product_id=${id}&count=1000`)
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
  const [numQuestionsBeforeSearch, setNumQuestionsBeforeSearch] = useState(2);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const classes = useStyles();

  useEffect(() => {
    async function fetchQuestions() {
      const questionData = await getQuestions(productId);
      setQuestions(questionData.results);
      setShownQuestions(sortQuestionsByHelpfulness(questionData.results, 2));
      setNumQuestionsBeforeSearch(2);
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
    setNumQuestionsBeforeSearch(moreQuestions.length);
  }

  const addAQuestion = (question) => {
    var questionData = {
      question_body: question,
      question_helpfulness: 0,
      answers: []
    }
    questions.push(questionData);
    if (shownQuestions.length < 2 || allQuestionsShown) {
      shownQuestions.push(questionData);
    }
    forceUpdate();
  }

  const handleAddQuestionClick = () => {
    setOpen(true);
  }

  const questionSearch = (searchInput) => {
    if (searchInput.length < 3) {
      var questionsToShow = sortQuestionsByHelpfulness(questions, numQuestionsBeforeSearch);
      setShownQuestions(questionsToShow);
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
      <Grid item className={classes.scroll}>
        {shownQuestions.map((question, i) => (
          <QAndA question={question} product={product} key={i}/>
        ))}
      </Grid>
      <Grid item className={classes.spacer}></Grid>
      <Grid item>
        {questions.length > 2 && !allQuestionsShown ?
          <Button variant="contained" color="primary" onClick={handleMoreQuestionsClick}>
            MORE ANSWERED QUESTIONS
          </Button> :
          null}
        <AddQuestion product={product} productId={productId} addAQuestion={addAQuestion}/>
      </Grid>
    </div>
  );
};

const sortQuestionsByHelpfulness = (questionsAndAnswersData, numQuestions) => {
  var answeredQuestions = [];
  var unansweredQuestions = [];
  var result = [];
  for (var i = 0; i < questionsAndAnswersData.length; i++) {
    if (Object.keys(questionsAndAnswersData[i].answers).length === 0) {
      unansweredQuestions.push(questionsAndAnswersData[i]);
    } else {
      answeredQuestions.push(questionsAndAnswersData[i]);
    }
  }
  for (var i = 0; i < unansweredQuestions.length; i++) {
    var currentQuestion = unansweredQuestions[i];
    var position = i;
    while (i > 0 && unansweredQuestions[position].question_helpfulness > unansweredQuestions[position - 1].question_helpfulness) {
      unansweredQuestions[position] = unansweredQuestions[position - 1];
      unansweredQuestions[position - 1] = currentQuestion;
      position--;
    }
  }
  for (var i = 0; i < answeredQuestions.length; i++) {
    var currentQuestion = answeredQuestions[i];
    var position = i;
    while (i > 0 && answeredQuestions[position].question_helpfulness > answeredQuestions[position - 1].question_helpfulness) {
      answeredQuestions[position] = answeredQuestions[position - 1];
      answeredQuestions[position - 1] = currentQuestion;
      position--;
    }
  }
  result = answeredQuestions.concat(unansweredQuestions);
  result = result.slice(0, numQuestions);
  return result;
}

export default QuestionsAndAnswers;