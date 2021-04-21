import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import { Typography, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios';
import config from '../../../../config.js'
axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN

const getReviewsData = async (id) => {
      const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews?product_id=${id}`);
      return response.data;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    fontWeight: 500,
  }
}))

const ReviewsList = ({ productId }) => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    getReviewsData(productId)
    .then(resultData => {
      setReviewsData(resultData.results);
    })
  }, [productId])


  const classes = useStyles();
  const reviewsCounter = reviewsData.length;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.header}>{ reviewsCounter } reviews, sorted by relevance</Typography>
        </Grid>
        <Grid item xs={12}>
        {reviewsData.map(review =>
        <Review key={review.review_id} review={review}/>
        )}
        </Grid>
      </Grid>
    </div>
    )
}

export default ReviewsList;
