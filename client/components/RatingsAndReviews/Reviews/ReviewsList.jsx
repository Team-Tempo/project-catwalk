import React from 'react';
import Review from './Review.jsx';
import { Skeleton } from '@material-ui/lab';

const ReviewsList = () => {
  return (
    <>
    <h1>ReviewList Component</h1>
    <Skeleton />
    <Review />
    <Review />
    <Review />
    </>
    )
}

export default ReviewsList;