/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import products from '../../DummyData/ProductDummyData';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 300,
    margin: 16
  },
  category: {
    fontSize: 12,
    textTransform: 'uppercase'
  },
  name: {
    fontWeight: 700
  },
  price: {
    fontSize: 12
  },
  media: {
    height: 250,
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '1px',
    right: '1px',
    color: '#ffb400'
  }
});


const RelatedProductCard = ({nameCatPrice, salePic}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
        className={classes.media}
        image={salePic.results[0].photos[0].url}
        />
        <IconButton className={classes.overlay}>
          <span className="material-icons">star_rate</span>
        </IconButton>
        <CardContent>
          {/*
          sale_price if on sale
          */}
          <Typography className={classes.category}>
            {nameCatPrice.category}
          </Typography>
          <Typography className={classes.name}>
            {nameCatPrice.name}
          </Typography>
          <Typography className={classes.price}>
            {nameCatPrice.default_price}
          </Typography>
          <Typography>
            <Rating
              name="rating"
              defaultValue={3.5}
              precision={0.25}
              size="small"
          ></Rating>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default RelatedProductCard;