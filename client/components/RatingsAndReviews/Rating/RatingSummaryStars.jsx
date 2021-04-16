import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const RatingSummaryStars = () => {
  return (
    <>
    <Container>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={3}><h1>3.5</h1></Grid>
        <Grid item xs={4}>
        <Rating name="read-only" readOnly />
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default RatingSummaryStars;