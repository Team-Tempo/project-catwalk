import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import AddReviewDialog from './AddReviewDialog';
import { Typography, Grid, GridList, GridListTile, makeStyles } from '@material-ui/core'
import axios from 'axios';
import config from '../../../../config.js';

const getReviewsData = async (id) => {
      const response = await axios.get(`http://${config.IP_ADDRESS}:${config.PORT}/reviews?product_id=${id}&count=25`);
      return response.data;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  scroll: {
    justifyContent: 'space-around',
    overflow: 'auto',
  },
  gridList: {
    minHeight: 200,
    maxHeight: 500
  },
  header: {
    fontWeight: 500,
  },
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
        <Grid item xs={12}  className={classes.scroll}>
         <GridList cellHeight={140} className={classes.gridList} cols={1}>
          {reviewsData.map(review =>
          <Review key={review.review_id} review={review}/>
          )}
         </GridList>
        </Grid>
        <Grid item xs={12} className={classes.buttons}>
          <AddReviewDialog productId={productId}/>
        </Grid>
      </Grid>
    </div>
    )
}

export default ReviewsList;
