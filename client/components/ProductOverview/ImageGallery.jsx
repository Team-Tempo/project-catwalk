import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '100%',
  },
  gridTest: {
    overflow: 'auto',
    maxHeight: '595px',
  },
});

const ImageGallery = ({ currentStyle }) => {
  if (!currentStyle.photos) {
    return null;
  }

  const handleClick = (idx) => {
    setCurrentPhotoIdx(idx);
  };

  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const classes = useStyles();

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
          <Carousel
            autoPlay={false}
            animation="fade"
            timeout={0}
            indicators={false}
            index={currentPhotoIdx}
          >
            {currentStyle.photos.map((photo, idx) => {
              return (
                <Card key={idx}>
                  <CardMedia
                    className={classes.media}
                    image={photo.url}
                    title="style"
                    onClick={() => {
                      handleClick(idx);
                    }}
                  />
                </Card>
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default ImageGallery;
