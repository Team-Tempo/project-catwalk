import React from 'react';
import ReviewsList from './Reviews/ReviewsList.jsx'
import Rating from './Rating/Rating.jsx'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const RatingsAndReviews = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <p>Ratings and Reviews</p><Rating />
        </Grid>
        <Grid item xs={8}>
        <ReviewsList />
        </Grid>
      </Grid>
    </div>
    </>
  )
};

export default RatingsAndReviews;


