import React from 'react';
import Review from './Review.jsx';
import { Typography, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    fontWeight: 500,
  }
}))

const ReviewsList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.header}>248 reviews, sorted by relevance</Typography>
        </Grid>
        <Grid item xs={12}>
        <Review />
        </Grid>
      </Grid>
    </div>
    )
}

export default ReviewsList;
