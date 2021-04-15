import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import RatingSummaryStars from './RatingSummaryStars';
import { Skeleton } from '@material-ui/lab';

const Rating = () => {
  return (
    <>
    <h3>Rating Component</h3>
    <RatingSummaryStars />
    <Skeleton />
    <RatingBreakdown />
    </>
  )

}

export default Rating;