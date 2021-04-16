import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Review = () => {
  return (
    <>
    <Rating name="read-only" readOnly />
    <p>Review title with word-break trancation to prevent</p>
</>
  )

}

export default Review;