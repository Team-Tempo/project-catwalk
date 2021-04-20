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

const QAndA = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid className={classes.verticalSpace}></Grid>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h6"><b>Q: {props.question.question_body}</b></Typography>
        </Grid>
        <Grid container justify="flex-end" xs={4}>
          <Grid item className={classes.textSpacing}>
            <Helpful question={props.question}/>
          </Grid>
          <Grid item>
            <Typography variant="caption">|</Typography>
          </Grid>
          <Grid item className={classes.textSpacing}>
            <Typography variant="caption" className={classes.underlined}>Add Answer</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} xs={12}>
        <Grid item>
          {/* <Typography variant="h6"><b>A: </b>{props.question.answers[1628393].body}</Typography> */}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="caption" className={classes.textSpacing}>by {props.question.asker_name}, {dateFormat(new Date(props.question.question_date), "mmmm, d, yyyy")}   </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">|</Typography>
        </Grid>
        <Grid item className={classes.textSpacing}>
          <Helpful question={props.question}/>
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

export default QAndA;
