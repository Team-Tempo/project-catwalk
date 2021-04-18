import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

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

const Review = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <Rating name="read-only" readOnly />
        </Grid>
        <Grid item xs={3}>
          {/* This is just to keep spacing between two items in this row */}
        </Grid>
        <Grid item xs={3}>
          {/* This is just to keep spacing between two items in this row */}
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.userDateHelp}>User1234, January 1, 2019</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.reviewTitle}>Donut chocolate bar pudding yuuummmm</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.reviewBody}>Donut gummi bears gingerbread gummies chocolate. Ice cream apple pie tiremisu fruitcake chupa chups icing apple pie. Lemon drops cake yummy pudding</Typography>
        </Grid>
        <Grid item xs>
          <Typography className={classes.userDateHelp}>Helpful? Yes(10) &ensp; | &ensp; Report</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.dividerLine} />
        </Grid>
      </Grid>
    </div>
  )

}

export default Review;