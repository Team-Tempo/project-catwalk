import React from 'react';
import Review from './Review.jsx';
import { Skeleton } from '@material-ui/lab';

const ReviewsList = () => {
  return (
    <>
    <p>248 reciews, sorted by relevance</p>

    <Review />
    <Review />
    <Review />
    </>
    )
}

export default ReviewsList;