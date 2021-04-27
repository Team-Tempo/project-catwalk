import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Helpful from './Helpful.jsx';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';
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
  },
  alignHorizontally: {
    display: 'flex',
    justifyContent: 'flex-end',

  },
  alignVertically: {
    alignItems: 'center'
  },
  miniSpacing: {
    marginLeft: '5px',
    marginRight: '5px'
  }
}));

const QAndA = ({ question}) => {
  var sortedAnswers = createSortedAnswers(question.answers, 2);
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.verticalSpace}></Grid>
      <Grid container direction="row" className={classes.alignVertically} item xs={12}>
        <Grid container direction ="row" item xs={7}>
          <Grid item>
            <Typography variant="h6"><b>Q:</b></Typography>
          </Grid>
          <Grid item className={classes.miniSpacing}>
            <Typography variant="h6"> {question.question_body}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={5} className={classes.alignHorizontally}>
          <Grid item className={classes.textSpacing}>
            <Helpful helpfulness={question.question_helpfulness}/>
          </Grid>
          <Grid item className={classes.textSpacing}>
            <Typography variant="caption">|</Typography>
          </Grid>
          <Grid item className={classes.textSpacing}>
            <AddAnswer question={question}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        {sortedAnswers.map((answer, i) => {
          return <Answer answer={answer} key={i}/>
        })}
      </Grid>
      <Grid className={classes.verticalSpace}></Grid>
    </Grid>
  );
};

const createSortedAnswers = (answersToQuestion, numAnswers) => {
  var result = [];
  for (var key in answersToQuestion) {
    var currentValue = answersToQuestion[key];
    var currentHelpfulness = currentValue.helpfulness;
    var currentAnswerer = currentValue.answerer_name;
    result.push(currentValue);
    var position = result.length - 1;
    if (currentAnswerer === 'Seller') {
      result.unshift(currentValue);
      continue;
    }
    while (position > 0 && currentHelpfulness > result[position - 1].helpfulness) {
      result[position] = result[position - 1];
      result[position - 1] = currentValue;
      position--;
    }
  }
  result = result.slice(0, numAnswers);
  if (result.length === 0) {
    result = [{
      body: 'No answer for this question yet.'
    }]
  }
  return result;
}

export default QAndA;
