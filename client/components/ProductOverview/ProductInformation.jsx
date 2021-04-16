import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ProductInformation = ({ product }) => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Rating defaultValue={3.5} precision={0.25} size="small"></Rating>
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
        <Typography variant="body2">{product.default_price}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProductInformation;
