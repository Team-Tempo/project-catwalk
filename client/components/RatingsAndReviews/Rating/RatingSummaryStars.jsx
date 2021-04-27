import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Grid, Container } from '@material-ui/core';

const RatingSummaryStars = ({ averageRating }) => {
  return (
    <props>
    <Container>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={3}><h1>{averageRating.toFixed(1)}</h1></Grid>
        <Grid item xs={4}>
        <Rating name="read-only" readOnly value={averageRating} />
        </Grid>
      </Grid>
    </Container>
    </props>
  )
}

export default RatingSummaryStars;