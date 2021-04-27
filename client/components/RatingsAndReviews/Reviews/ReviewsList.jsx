import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import AddReviewDialog from './AddReviewDialog';
import { Typography, Grid, GridList, GridListTile, makeStyles } from '@material-ui/core'
import axios from 'axios';
import config from '../../../../config.js';
axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN

const getReviewsData = async (id) => {
      const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews?product_id=${id}`);
      return response.data;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  scroll: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 1000,
    height: 700,
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



        {/* <div className={classes.scroll}> */}
      <GridList cellHeight={140} className={classes.gridList} cols={1}>


          {reviewsData.map(review =>
      //  <GridListTile key={review.review_id} cols={review.cols || 1}>

          <Review key={review.review_id} review={review}/>

          )}
       {/* </GridListTile> */}


      </GridList>
          {/* </div> */}


        </Grid>
        <Grid item xs={12} className={classes.buttons}>
          <AddReviewDialog productId={productId}/>
        </Grid>
      </Grid>
    </div>
    )
}

export default ReviewsList;
