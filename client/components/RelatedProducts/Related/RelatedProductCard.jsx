/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import { StarBorder, Star } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

const StyledRating = withStyles({
  iconFilled: {
    color: '#442c2e',
  },
  iconEmpty: {
    color: '#442c2e',
  },
})(Rating);

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
    color: '#FEDBD0',
    stroke: '#442c2e',
    strokeWidth: 2
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
        <SvgIcon className={classes.overlay}>
          <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
          </path>
        </SvgIcon>
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
            <StyledRating
              emptyIcon={<StarBorder fontSize="inherit" />}
              icon={<Star fontSize="inherit" />}
              name="rating"
              value={ratingAverage}
              precision={0.25}
              size="small"
              readOnly={true}
            ></StyledRating>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default RelatedProductCard;