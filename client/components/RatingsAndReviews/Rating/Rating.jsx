import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingSummaryStars from './RatingSummaryStars';

const Rating = ({ reviewsMeta }) => {
  return (
    <>
    <RatingSummaryStars ratings={reviewsMeta.ratings}/>
    <RatingBreakdown reviewsMeta={reviewsMeta}/>
    </>
  )

}

export default Rating;