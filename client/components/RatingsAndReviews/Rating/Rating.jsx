import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingSummaryStars from './RatingSummaryStars';

const Rating = () => {
  return (
    <>
    <h1>Hello from Rating component</h1>
    <RatingSummaryStars />
    <RatingBreakdown />
    </>
  )

}

export default Rating;