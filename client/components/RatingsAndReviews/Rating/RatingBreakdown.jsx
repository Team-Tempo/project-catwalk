import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { LinearProgress, Grid, Typography } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 8,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#009973',
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const RatingBreakdown = ({ reviewsMeta }) => {
  const classes = useStyles();
  var recommendedData = reviewsMeta.recommended;

  // calculating percentage of reviewers recommending the product
  var recommendedPercentage = Math.floor(Number(recommendedData.true) * 100 / (Number(recommendedData.true) + Number(recommendedData.false)))

  var numberOfReviews = Object.values(reviewsMeta.ratings).reduce((a, b) => Number(a) + Number(b));
  var yo = Number(reviewsMeta.ratings['1']) * 100 / numberOfReviews;
  console.log("yoyo: ", yo)

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs>
          <Typography >{ recommendedPercentage }% of reviews recommend this product</Typography>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <Typography>5 stars</Typography>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={ reviewsMeta.ratings['5'] ? Number(reviewsMeta.ratings['5']) * 100 / numberOfReviews : 0 } />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
         <Typography>4 stars</Typography>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={ reviewsMeta.ratings['4'] ? Number(reviewsMeta.ratings['4']) * 100 / numberOfReviews : 0 } />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <Typography>3 stars</Typography>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={ reviewsMeta.ratings['3'] ? Number(reviewsMeta.ratings['3']) * 100 / numberOfReviews : 0 } />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <Typography>2 stars</Typography>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={
          reviewsMeta.ratings['2'] ? Number(reviewsMeta.ratings['2']) * 100 / numberOfReviews : 0
           } />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <Typography>1 stars</Typography>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={ reviewsMeta.ratings['1'] ? Number(reviewsMeta.ratings['1']) * 100 / numberOfReviews : 0 } />
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default RatingBreakdown;