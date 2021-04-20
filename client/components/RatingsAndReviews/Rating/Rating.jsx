import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingSummaryStars from './RatingSummaryStars';

const Rating = ({ reviewsMeta }) => {
  return (
    <>
    <RatingSummaryStars ratings={reviewsMeta.ratings}/>
    <RatingBreakdown ratings={reviewsMeta}/>
    </>
  )

}

export default Rating;