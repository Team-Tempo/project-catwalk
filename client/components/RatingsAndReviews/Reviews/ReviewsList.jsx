import React from 'react';
import Review from './Review.jsx';
import { Typography, Grid, makeStyles } from '@material-ui/core'
import reviewsData from '../../DummyData/ReviewsDummyData.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    fontWeight: 500,
  }
}))

const ReviewsList = () => {
  // console.log("This is reviews: ", reviewsData.reviews.results);
  const classes = useStyles();
  const reviewsToMap = reviewsData.reviews.results;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.header}>248 reviews, sorted by relevance</Typography>
        </Grid>
        <Grid item xs={12}>
        {reviewsToMap.map(review =>
        <Review key={review.review_id} review={review}/>
        )}
        </Grid>
      </Grid>
    </div>
    )
}

export default ReviewsList;
