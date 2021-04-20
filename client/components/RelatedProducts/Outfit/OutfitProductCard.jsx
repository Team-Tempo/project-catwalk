import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import products from '../../DummyData/ProductDummyData';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
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
  icon: {
    position: 'absolute',
    top: '1px',
    right: '1px',
    color: 'black'
  }
});
const OutfitProductCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea >
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <HighlightOffIcon className={classes.icon}>
        </HighlightOffIcon>
        <CardContent>
          {/*
          sale_price if on sale
          */}
          <Typography className={classes.category}>
            {/* {props.relatedWithNameCatPrice.category} */}
          </Typography>
          <Typography className={classes.name}>
            {/* {props.relatedWithNameCatPrice.name} */}
          </Typography>
          <Typography className={classes.price}>
            {/* {props.relatedWithNameCatPrice.default_price} */}
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

export default OutfitProductCard;