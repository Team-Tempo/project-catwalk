import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  description: {
    marginTop: '25px',
  },
});

const ProductOverview = ({
  product,
  currentStyle,
  styles,
  setCurrentStyle,
  averageRating,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <ImageGallery currentStyle={currentStyle} />
        </Grid>
        <Grid container direction="column" justify="space-between" item xs={4}>
          <Grid item>
            <ProductInformation
              product={product}
              currentStyle={currentStyle}
              averageRating={averageRating}
            />
          </Grid>
          <Grid item>
            <StyleSelector
              styles={styles}
              currentStyle={currentStyle}
              setCurrentStyle={setCurrentStyle}
            />
          </Grid>
          <Grid item>
            <AddToCart currentStyle={currentStyle} />
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={7} className={classes.description}>
          <Typography variant="h6">{product.slogan}</Typography>
          <Typography variant="body1">{product.description}</Typography>
        </Grid>
        {/* <Grid item xs={1} /> */}
        <Grid item xs={5} className={classes.description}>
          {product.features ? (
            product.features.map((feature, idx) => (
              <Typography key={idx}>
                <CheckIcon /> {feature.value}
                {'   '}
                {feature.feature}
              </Typography>
            ))
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ProductOverview;
