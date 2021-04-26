import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '100%',
  },
  gridTest: {
    overflow: 'auto',
    maxHeight: '595px',
  },
  zoomIcon: {
    zIndex: '1',
    position: 'absolute',
    top: '5px',
    right: '5px',
    background: '#FEDBD0',
    borderRadius: '5px',
  },
  image: {
    position: 'relative',
  },
  backdrop: {
    zIndex: 5,
    color: '#fff',
  },
  backdropImage: {
    maxHeight: '100vh',
    maxWidth: '100vw',
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
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid container>
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
          <img
            className={classes.backdropImage}
            src={currentStyle.photos[currentPhotoIdx].url}
          />
        </Backdrop>
        <Grid item xs={2} className={classes.gridTest}>
          {currentStyle.photos.map((photo, idx) => {
            return (
              <Card key={idx}>
                <CardMedia
                  className={classes.media}
                  image={photo.thumbnail_url === null ? 'https://cdn.discordapp.com/attachments/831557223247249448/836269816590499840/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.png' : photo.thumbnail_url}
                  title="style"
                  onClick={() => {
                    handleClick(idx);
                  }}
                />
              </Card>
            );
          })}
        </Grid>
        <Grid item xs className={classes.image}>
          <ZoomOutMapIcon
            className={classes.zoomIcon}
            fontSize="large"
            onClick={handleToggle}
          />
          <Carousel
            autoPlay={false}
            animation="fade"
            timeout={0}
            indicators={false}
            index={currentPhotoIdx}
            onChange={(index) => {
              handleClick(index);
            }}
          >
            {currentStyle.photos.map((photo, idx) => {
              return (
                <Card key={idx}>
                  <CardMedia
                    className={classes.media}
                    image={photo.url === null ? 'https://cdn.discordapp.com/attachments/831557223247249448/836269816590499840/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.png' : photo.url}
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
