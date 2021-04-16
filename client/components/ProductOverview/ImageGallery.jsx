import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles({
  root: {
    width: 300,
    background: purple[500],
  },
});

const ImageGallery = ({ dummyData }) => {
  const classes = useStyles();
  const imageUrl = dummyData.productStyles.results[0].photos[0].url;
  return (
    <>
      <Card className={classes.root}>
        <img className={classes.root} src={imageUrl}></img>
      </Card>
    </>
  );
};

export default ImageGallery;
