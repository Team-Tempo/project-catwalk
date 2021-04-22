import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Helpful from './Helpful.jsx';
import Answer from './Answer.jsx';
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

const QAndA = ( {question} ) => {
  console.log('q and a ------>:', question);
  // console.log('QAndA question', question.answers);
  // console.log(createSortedAnswers(question.answers, 3));
  var sortedAnswers = createSortedAnswers(question.answers, 2);
  // console.log('sort ans answer', sortedAnswers[0].answer);
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
        {/* <div className={classes.alignHorizontally}> */}
        <Grid item xs={5} className={classes.alignHorizontally}>
          <Grid item className={classes.textSpacing}>
            <Helpful helpfulness={question.question_helpfulness}/>
          </Grid>
          <Grid item className={classes.textSpacing}>
            <Typography variant="caption">|</Typography>
          </Grid>
          <Grid item className={classes.textSpacing}>
            <Typography variant="caption" className={classes.underlined}>Add Answer</Typography>
          </Grid>
        </Grid>
        {/* </div> */}
      </Grid>

      <Grid>
        {sortedAnswers.map((answer) => {
          return <Answer answer={answer}/>
        })}
      </Grid>
      {/* <Grid container spacing={2}>
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
      </Grid> */}
      <Grid className={classes.verticalSpace}></Grid>
    </Grid>
  );
};

const createSortedAnswers = (answersToQuestion, numAnswers) => {
  // var result = [{answer: null, helpfullness: null}];
  var result = [];
  console.log('------>', answersToQuestion);
  for (var key in answersToQuestion) {
    var currentValue = answersToQuestion[key];
    var currentHelpfulness = currentValue.helpfulness;
    var currentAnswerer = currentValue.answerer_name;

    // var currentValue = {
    //   answer: currentAnswer,
    //   helpfulness: currentHelpfulness
    // }
    // console.log(currentValue);
    result.push(currentValue);
    var position = result.length - 1;
    // console.log('result sort ans', result);
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
  // console.log('sortedAnswers', result);
  return result;
}

// const sortByHelpfulness = (questionsAndAnswersData, numQuestions) => {
//   // console.log('q and a data here!!', questionsAndAnswersData);
//   var result = questionsAndAnswersData.slice();
//   for (var i = 0; i < questionsAndAnswersData.length; i++) {
//     var currentValue = questionsAndAnswersData[i].question_helpfulness;
//     var position = i;
//     while (position > 0 && questionsAndAnswersData[position] > questionsAndAnswersData[position - 1]) {
//       questionsAndAnswersData[position] = questionsAndAnswersData[position - 1];
//       questionsAndAnswersData[position - 1] = currentValue;
//       position--;
//     }
//   }
//   result = result.slice(0, numQuestions);
//   // console.log('sorted questions', result);
//   return result;
// }

export default QAndA;
