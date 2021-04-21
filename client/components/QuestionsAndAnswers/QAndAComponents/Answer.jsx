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
  },
  align: {
    alignItems: 'center'
  }
}));

const Answer = ( {answer} ) => {
  console.log('answer in answer comp', answer);
  // console.log('sort ans answer', sortedAnswers[0].answer);
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.align} spacing={2}>
          <Typography variant="h6"><b>A:    </b></Typography>
          <Typography variant="caption">{answer.body ? answer.body : 'No answer for this question yet'}</Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="caption" className={classes.textSpacing}>by {answer.answerer_name}, {dateFormat(new Date(answer.date), "mmmm, d, yyyy")}   </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">|</Typography>
        </Grid>
        <Grid item className={classes.textSpacing}>
          <Helpful helpfulness={answer.helpfulness}/>
        </Grid>
        <Grid item>
          <Typography variant="caption">|</Typography>
        </Grid>
        <Grid item className={classes.textSpacing}>
          <Typography variant="caption" className={classes.underlined}>Report</Typography>
        </Grid>
      </Grid>
      <Grid className={classes.verticalSpace}></Grid>
    </div>
  );
};

export default Answer;