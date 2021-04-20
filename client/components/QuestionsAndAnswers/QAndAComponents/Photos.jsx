import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    height: '100px',
    width: 'auto',
    marginRight: '50px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  border: {
    borderColor: 'black !important',
    borderWidth: '2px'
  }
}));

const Photos = (props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <div className={classes.border}>
        <img className={classes.image} src={props.questions.results[2].answers[1628412].photos[0]} alt="pic1"/>
      </div>
      <div className={classes.border}>
        <img className={classes.image} src={props.questions.results[2].answers[1628412].photos[1]} alt="pic2"/>
      </div>
    </Grid>


  );
};

export default Photos;
