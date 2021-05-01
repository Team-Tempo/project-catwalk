import React from 'react';
import ReviewsList from './Reviews/ReviewsList.jsx'
import Rating from './Rating/Rating.jsx'
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import reviewsData from '../DummyData/ReviewsDummyData.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    marginBottom: 35
  }
}));

const RatingsAndReviews = (props) => {
  const classes = useStyles();
  return (
    <>
    <Typography variant="subtitle1" className={classes.header}>RATINGS & REVIEWS</Typography>
    <div></div>
    <div className={classes.root}>
      <Grid container spacing={7}>
        <Grid item xs={3}>
        <Rating ratingData={props}/>
        </Grid>
        <Grid item xs={9}>
        <ReviewsList productId={ props.productId }/>
        </Grid>
      </Grid>
    </div>
    </>
  )
};

export default RatingsAndReviews;


