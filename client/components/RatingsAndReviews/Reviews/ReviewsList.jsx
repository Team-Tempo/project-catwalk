import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import AddReviewDialog from './AddReviewDialog';
import { Typography, Grid, GridList, GridListTile, makeStyles, Button } from '@material-ui/core'
import axios from 'axios';
import config from '../../../../config.js';
axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  scroll: {
    justifyContent: 'space-around',
    overflow: 'auto',
  },
  gridList: {
    minHeight: 550,
    maxHeight: 550
  },
  header: {
    fontWeight: 500,
  },
}))

const getReviewsData = async (id) => {
      const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews?product_id=${id}&count=100`);
      return response.data;
};

const ReviewsList = ({ productId }) => {
  const [reviewsData, setReviewsData] = useState([]);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    getReviewsData(productId)
    .then(resultData => {
      setReviewsData(resultData.results.slice(0, limit));
    })
    .catch((err) => {
      console.log(err);
    })
  }, [productId, limit])

  const classes = useStyles();
  const reviewsCounter = reviewsData.length;

  const handleMoreReviews = () => {
    setLimit(limit + 2);
  }

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
        <Grid container item xs={12} className={classes.buttons}>
          <Grid item xs={2}>
             <Button variant='contained' color='primary' onClick={handleMoreReviews}>MORE REVIEWS</Button>
          </Grid>
          <Grid item xs={2}>
             <AddReviewDialog productId={productId}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
    )
}

export default ReviewsList;
