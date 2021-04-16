import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 450,
    background: purple[200],
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
        <img className={classes.root} src={imageUrl}></img>
      </Card>
    </>
  );
};

export default ImageGallery;
