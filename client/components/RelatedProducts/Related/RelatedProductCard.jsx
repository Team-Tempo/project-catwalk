/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
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


const RelatedProductCard = ({relatedProductsData}) => {
  const classes = useStyles();
  const image = relatedProductsData.results[0].photos[0].url;

  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
        className={classes.media}
        component="img"
        image={image}
        alt="Image not available"
        />
        <Icon className={classes.overlay}>
          <span className="material-icons">star_rate</span>
        </Icon>
        <CardContent>
          {/*
          sale_price if on sale
          */}
          <Typography className={classes.category}>
            {relatedProductsData.category}
          </Typography>
          <Typography className={classes.name}>
            {relatedProductsData.name}
          </Typography>
          <Typography className={classes.price}>
            {relatedProductsData.default_price}
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