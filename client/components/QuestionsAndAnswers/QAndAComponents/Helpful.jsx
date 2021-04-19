import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  underlined: {
    textDecoration: 'underline'
  }
}));

const Helpful = (props) => {
  console.log('help props', props);
  const classes = useStyles();
  return (
    <Grid spacing={3}>
      <Typography variant="caption">Helpful?  </Typography>
      <Typography variant="caption" className={classes.underlined}>Yes</Typography>
      <Typography variant="caption">({props.questions.results[1].question_helpfulness})</Typography>
    </Grid>
  );
};

export default Helpful;