import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Helpful from './Helpful.jsx';
var dateFormat = require('dateformat');

const useStyles = makeStyles((theme) => ({
  underlined: {
    textDecoration: 'underline'
  },
  textSpacing: {
    marginLeft: '10px',
    marginRight: '10px'
  },
  verticalSpace: {
    marginTop: '15px',
    marginBottom: '15px'
  }
}));

const QAndA = ( {question} ) => {
  console.log('QAndA question', question.answers);
  console.log(createSortedAnswers(question.answers, 3));
  var sortedAnswers = createSortedAnswers(question.answers, 1);
  // console.log('sort ans answer', sortedAnswers[0].answer);
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid className={classes.verticalSpace}></Grid>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h6"><b>Q: {question.question_body}</b></Typography>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item className={classes.textSpacing}>
            <Helpful question={question}/>
          </Grid>
          <Grid item>
            <Typography variant="caption">|</Typography>
          </Grid>
          <Grid item className={classes.textSpacing}>
            <Typography variant="caption" className={classes.underlined}>Add Answer</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
          <Typography variant="h6"><b>A: </b></Typography>
          <Typography variant="caption">{sortedAnswers[0] ? sortedAnswers[0].answer : null}</Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="caption" className={classes.textSpacing}>by {question.asker_name}, {dateFormat(new Date(question.question_date), "mmmm, d, yyyy")}   </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">|</Typography>
        </Grid>
        <Grid item className={classes.textSpacing}>
          <Helpful question={question}/>
        </Grid>
        <Grid item>
          <Typography variant="caption">|</Typography>
        </Grid>
        <Grid item className={classes.textSpacing}>
          <Typography variant="caption" className={classes.underlined}>Report</Typography>
        </Grid>
      </Grid>
      <Grid className={classes.verticalSpace}></Grid>
    </Grid>
  );
};

const createSortedAnswers = (answersToQuestion, numAnswers) => {
  // var result = [{answer: null, helpfullness: null}];
  var result = [];
  for (var key in answersToQuestion) {
    var currentAnswer = answersToQuestion[key].body;
    var currentHelpfulness = answersToQuestion[key].helpfulness;
    var currentValue = {
      answer: currentAnswer,
      helpfulness: currentHelpfulness
    }
    console.log(currentValue);
    result.push(currentValue);
    var position = result.length - 1;
    console.log('result sort ans', result);
    while (position > 0 && currentHelpfulness > result[position - 1].helpfulness) {
      result[position] = result[position - 1];
      result[position - 1] = currentValue;
      position--;
    }
  }
  result = result.slice(0, numAnswers);
  console.log('sortedAnswers', result);
  return result;
}

const sortByHelpfulness = (questionsAndAnswersData, numQuestions) => {
  console.log('q and a data here!!', questionsAndAnswersData);
  var result = questionsAndAnswersData.slice();
  for (var i = 0; i < questionsAndAnswersData.length; i++) {
    var currentValue = questionsAndAnswersData[i].question_helpfulness;
    var position = i;
    while (position > 0 && questionsAndAnswersData[position] > questionsAndAnswersData[position - 1]) {
      questionsAndAnswersData[position] = questionsAndAnswersData[position - 1];
      questionsAndAnswersData[position - 1] = currentValue;
      position--;
    }
  }
  result = result.slice(0, numQuestions);
  console.log('sorted questions', result);
  return result;
}

export default QAndA;
