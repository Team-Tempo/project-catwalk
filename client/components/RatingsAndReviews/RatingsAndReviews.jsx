import React from 'react';
import ReviewsList from './Reviews/ReviewsList.jsx'
import Rating from './Rating/Rating.jsx'
import { Skeleton } from '@material-ui/lab';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const RatingsAndReviews = () => {
  const classes = useStyles();
  return (
    <>
<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}><p>Ratings and Reviews</p><Rating /></Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}><ReviewsList /></Paper>
        </Grid>
      </Grid>
    </div>
    </>
  )
};

export default RatingsAndReviews;


