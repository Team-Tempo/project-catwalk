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


const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 350,
    maxHeight: 350,
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
    top: '5px',
    right: '5px',
    color: '#ffb400'
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
          <Typography className={classes.category}>
            {relatedProductData.category}
          </Typography>
          <Typography className={classes.name}>
            {relatedProductData.name}
          </Typography>
          {salePrice ? (
            <Typography className={classes.sale}>
              {`$${salePrice}`}
              <Typography className={classes.price}>
              {`$${relatedProductData.default_price}`}
              </Typography>
            </Typography>
          ) : (
            <Typography className={classes.price}>
            {`$${relatedProductData.default_price}`}
            </Typography>
          )}
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