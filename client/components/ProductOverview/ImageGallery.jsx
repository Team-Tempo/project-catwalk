import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 450,
    alignItems: 'center',
  },
});

const ImageGallery = ({ currentStyle }) => {
  if (!currentStyle.photos) {
    return null;
  }
  const classes = useStyles();
  const imageUrl = currentStyle.photos[0].url;
  return (
    <>
      <Card className={classes.root}>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs>
            <img className={classes.root} src={imageUrl}></img>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ImageGallery;
