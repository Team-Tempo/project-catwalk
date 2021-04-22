import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '200px',
    alignItems: 'center',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  gridTest: {
    overflow: 'auto',
    maxHeight: '600px',
  },
});

const ImageGallery = ({ currentStyle }) => {
  if (!currentStyle.photos) {
    return null;
  }

  const handleClick = (idx) => {
    setCurrentPhotoUrl(currentStyle.photos[idx].url);
  };

  const [currentPhotoUrl, setCurrentPhotoUrl] = useState('');
  const classes = useStyles();
  const imageUrl = currentPhotoUrl
    ? currentPhotoUrl
    : currentStyle.photos[0].url;

  return (
    <>
      <Grid container>
        <Grid item xs={2} className={classes.gridTest}>
          {currentStyle.photos.map((photo, idx) => {
            return (
              <Card key={idx}>
                <CardMedia
                  className={classes.media}
                  image={photo.thumbnail_url}
                  title="style"
                  onClick={() => {
                    handleClick(idx);
                  }}
                />
              </Card>
            );
          })}
        </Grid>
        <Grid item xs>
          <Carousel>
            <Card>
              <CardMedia className={classes.media} image={imageUrl} />
            </Card>
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default ImageGallery;
