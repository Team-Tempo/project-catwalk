import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { StarBorder, Star } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

import { makeStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

const StyledRating = withStyles({
  iconFilled: {
    color: '#442c2e',
  },
  iconEmpty: {
    color: '#442c2e',
  },
})(Rating);

const useStyles = makeStyles({
  salePrice: {
    marginLeft: '5px',
    color: red[400],
  },
  strikethrough: {
    textDecoration: 'line-through',
  },
});

const ProductInformation = ({ product, currentStyle, averageRating }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <StyledRating
          emptyIcon={<StarBorder fontSize="inherit" />}
          icon={<Star fontSize="inherit" />}
          name="rating"
          value={averageRating}
          precision={0.25}
          size="small"
          readOnly={true}
        ></StyledRating>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="button">Read all reviews</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="overline">{product.category}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">{product.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        {currentStyle.sale_price ? (
          <>
            <Typography className={classes.strikethrough} variant="caption">
              ${Math.round(currentStyle.original_price)}
            </Typography>
            <Typography className={classes.salePrice} variant="caption">
              ${Math.round(currentStyle.sale_price)}
            </Typography>
          </>
        ) : (
          <Typography variant="caption">
            ${Math.round(currentStyle.original_price)}
          </Typography>
        )}
      </Grid>
      <Grid item>
        <IconButton color="secondary">
          <FacebookIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="secondary">
          <TwitterIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton color="secondary">
          <PinterestIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ProductInformation;
