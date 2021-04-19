import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { StarBorder, Star } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { experimentalStyled as styled } from '@material-ui/core/styles';

const StyledRating = withStyles({
  iconFilled: {
    color: '#442c2e',
  },
  iconEmpty: {
    color: '#442c2e',
  },
})(Rating);

const ProductInformation = ({ product, currentStyle }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <StyledRating
          emptyIcon={<StarBorder fontSize="inherit" />}
          icon={<Star fontSize="inherit" />}
          name="rating"
          defaultValue={3.5}
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
        <Typography variant="h4">{product.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">
          ${Math.round(currentStyle.original_price)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductInformation;
