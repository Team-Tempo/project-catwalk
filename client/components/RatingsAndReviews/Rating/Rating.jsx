import React, { useState, useEffect } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingSummaryStars from './RatingSummaryStars';
import axios from 'axios';
import config from '../../../../config.js';
axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN

const getReviewsMetaData = async(id) => {
  const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta?product_id=${id}`);
  return response.data;
}

const Rating = (props) => {
  const [reviewsMetaData, setReviewsMetaData] = useState({});

  useEffect(() => {
    getReviewsMetaData(props.ratingData.productId)
    .then(resultData => {
      setReviewsMetaData(resultData);
    })
  }, [props.productId])

  return (
    <>
    <RatingSummaryStars averageRating={props.ratingData.averageRating}/>
    <RatingBreakdown reviewsMeta={reviewsMetaData}/>
    </>
  )
}

export default Rating;