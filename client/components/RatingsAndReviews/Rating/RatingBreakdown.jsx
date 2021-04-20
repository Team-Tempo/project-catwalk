import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
          <p>{ recommendedPercentage }% of reviews recommend this product</p>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <>5 stars</>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={60} />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
         <>4 stars</>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={40} />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <>3 stars</>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={100} />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <>2 stars</>
        </Grid>
        <Grid item xs={9}>
        <BorderLinearProgress variant="determinate" value={45} />
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={1}>
        <Grid item xs={3}>
          <>1 stars</>
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