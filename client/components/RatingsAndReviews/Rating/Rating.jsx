import React, { useState, useEffect } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingSummaryStars from './RatingSummaryStars';
import axios from 'axios';
import config from '../../../../config.js';
axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN

const Rating = (props) => {
  const [reviewsMetaData, setReviewsMetaData] = useState({});

  // change product id to use live data
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta?product_id=${props.ratingData.productId}`)
      .then(res => {
        setReviewsMetaData(res.data)
      })
      .catch((err) => {
        console.log(err, 'error getting reviews metadate for the product id');
      });
  }, [props.ratingData.productId])

  // console.log("FROM R: ", "D: ", props.reviewsMeta, "\n",  "LIVE: ", reviewsMetaData)

  return (
    <>
      <RatingSummaryStars averageRating={props.ratingData.averageRating}/>
    {Object.entries(reviewsMetaData).length === 0 || reviewsMetaData === undefined? (<></>) : (
      <RatingBreakdown reviewsMeta={reviewsMetaData}/>
    )}

    </>
  )
}

export default Rating;

//props.reviewsMeta