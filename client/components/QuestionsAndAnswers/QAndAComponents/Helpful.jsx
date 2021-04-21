import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  underlined: {
    textDecoration: 'underline'
  }
}));

const Helpful = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Typography variant="caption">Helpful?  </Typography>
      <Typography variant="caption" className={classes.underlined}>Yes</Typography>
      <Typography variant="caption">({props.question.question_helpfulness})</Typography>
    </Grid>
  );
};

export default Helpful;