import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingSummaryStars from './RatingSummaryStars';
import Factors from './Factors';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Rating = (props) => {
  const classes = useStyles();

  const [reviewsMetaData, setReviewsMetaData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:1337/reviews/meta?product_id=${props.ratingData.productId}`)
      .then(res => {
        setReviewsMetaData(res.data)
      })
      .catch((err) => {
        console.log(err, 'error getting reviews metadata for the product id');
      });
  }, [props.ratingData.productId])

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RatingSummaryStars averageRating={props.ratingData.averageRating}/>
        </Grid>
        <Grid item xs={12}>
          {Object.entries(reviewsMetaData).length === 0 || reviewsMetaData === undefined? (<></>) : (<RatingBreakdown reviewsMeta={reviewsMetaData}/>)}
        </Grid>
        <Grid item xs={12}>
          {Object.entries(reviewsMetaData).length === 0 || reviewsMetaData === undefined? (<></>) : (<Factors characteristics={reviewsMetaData.characteristics}/>)}
        </Grid>
      </Grid>
    </div>
  )
}

export default Rating;
