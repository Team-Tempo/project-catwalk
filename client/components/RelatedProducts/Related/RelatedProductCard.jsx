/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Rating from '@material-ui/lab/Rating';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 375,
    maxHeight: 375,
    margin: 16
  },
  category: {
    textTransform: 'uppercase'
  },
  name: {
    fontWeight: 700
  },
  media: {
    height: 250,
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    color: '#ffb400'
  },
  sale: {
    marginLeft: '5px',
    color: red[400],
  },
  strikethrough: {
    textDecoration: 'line-through',
  }
});


const RelatedProductCard = ({relatedProductData}) => {
  const classes = useStyles();
  const image = relatedProductData.results[0].photos[0].url;

  let salePrice = null;
  for (let style of relatedProductData.results) {
    if (style['default?'] === true) {
      salePrice = style['sale_price'];
    }
  }

  //reused same logic from App.js for calculating ratings average:
  const ratings = relatedProductData.ratings;
  let sumOfRatings = 0;
  let numberOfRatings = 0;

  for (const rating in ratings) {
    sumOfRatings += rating * ratings[rating];
    numberOfRatings += Number(ratings[rating]);
  }

  let ratingAverage = (sumOfRatings / numberOfRatings) || 0;

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
          <Typography className={classes.category} variant="caption">
            {relatedProductData.category}
          </Typography>
          <Typography className={classes.name}>
            {relatedProductData.name}
          </Typography>
          {salePrice ? (
            <>
              <Typography className={classes.strikethrough} variant="caption">
                ${Math.round(relatedProductData.default_price)}
              </Typography>
              <Typography className={classes.sale} variant="caption">
                ${Math.round(salePrice)}
              </Typography>
            </>
          ) : (
            <Typography variant="caption">
            ${Math.round(relatedProductData.default_price)}
            </Typography>
          )}
          <Typography>
            <Rating
              name="rating"
              defaultValue={ratingAverage}
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