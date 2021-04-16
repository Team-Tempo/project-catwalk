import React from 'react';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const RatingSummaryStars = () => {
  return (
    <>
    <h1>3.5</h1>
    <Rating name="read-only" readOnly />    </>
  )
}

export default RatingSummaryStars;