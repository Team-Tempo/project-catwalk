import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingSummaryStars from './RatingSummaryStars';

const Rating = ({ reviewsMeta }) => {
  console.log("This is from Rating: ", reviewsMeta);
  return (
    <>
    <RatingSummaryStars ratings={reviewsMeta.ratings}/>
    <RatingBreakdown ratings={reviewsMeta.ratings}/>
    </>
  )

}

export default Rating;