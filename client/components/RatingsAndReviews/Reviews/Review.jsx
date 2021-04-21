import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  reviewTitle: {
    fontWeight: 500,
    fontSize: 16
  },
  userDateHelp: {
    fontSize: 12,
    color: "grey"
  },
  reviewBody: {
    color: "#777272",
    fontSize: 14
  },
  section: {
    margin: theme.spacing(2)
  },
  dividerLine: {
    backgroundColor: "black"
  }

}));

const Review = ({ review }) => {

  var timeDate = new Date(review.date).toLocaleDateString(
    'en-gb',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  )

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <Rating name="read-only" readOnly />
        </Grid>
        <Grid item xs={6}>
          {/* This is just to keep spacing between two items in this row */}
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.userDateHelp}>{ review.reviewer_name }, { timeDate }</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.reviewTitle}>{ review.summary }</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.reviewBody}>{ review.body }</Typography>
        </Grid>
        <Grid item xs>
          <Typography className={classes.userDateHelp}>Helpful? Yes({ review.helpfulness }) &ensp; | &ensp; Report</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.dividerLine} />
        </Grid>
      </Grid>
    </div>
  )

}

export default Review;