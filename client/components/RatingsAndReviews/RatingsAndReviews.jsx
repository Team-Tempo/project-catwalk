import React from 'react';
import ReviewsList from './Reviews/ReviewsList.jsx'
import Rating from './Rating/Rating.jsx'
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import reviewsData from '../DummyData/ReviewsDummyData.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const RatingsAndReviews = () => {
  const classes = useStyles();
  return (
    <>
    <Typography variant="subtitle1">RATINGS & REVIEWS</Typography>
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
        <Rating reviewsMeta={reviewsData.reviewsMeta}/>
        </Grid>
        <Grid item xs={9}>
        <ReviewsList />
        </Grid>
      </Grid>
    </div>
    </>
  )
};

export default RatingsAndReviews;


