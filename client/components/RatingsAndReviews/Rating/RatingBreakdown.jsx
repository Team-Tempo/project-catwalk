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

  // calculating percentage of reviews recommending the product
  var recommendedPercentage = Math.floor(Number(recommendedData.true) * 100 / (Number(recommendedData.true) + Number(recommendedData.false)))

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
        <BorderLinearProgress variant="determinate" value={60} />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
         <Typography>4 stars</Typography>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={40} />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <Typography>3 stars</Typography>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={100} />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <Typography>2 stars</Typography>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={45} />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <Typography>1 stars</Typography>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={20} />
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default RatingBreakdown;