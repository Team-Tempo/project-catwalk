import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import config from '../../../config';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  description: {
    marginTop: '25px',
  },
});

const getProduct = (id) => {
  return axios
    .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}`, {
      headers: {
        Authorization: config.GITHUB_TOKEN,
      },
    })
    .then((response) => {
      return response.data;
    });
};

const getProductStyles = (id) => {
  return axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}/styles`,
      {
        headers: {
          Authorization: config.GITHUB_TOKEN,
        },
      }
    )
    .then((response) => {
      return response.data.results;
    });
};

const ProductOverview = ({ productId }) => {
  const [product, setProduct] = useState([]);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});

  const classes = useStyles();

  useEffect(() => {
    async function fetchProduct() {
      const result = await getProduct(productId);
      setProduct(result);
    }

    async function fetchProductStyles() {
      const result = await getProductStyles(productId);
      setStyles(result);
      return result;
    }

    async function setupStyles() {
      const result = await fetchProductStyles();
      setCurrentStyle(result[0]);
    }

    fetchProduct();
    setupStyles();
  }, []);

  console.log(product);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <ImageGallery currentStyle={currentStyle} />
        </Grid>
        <Grid container direction="column" justify="space-between" item xs={4}>
          <Grid item>
            <ProductInformation product={product} currentStyle={currentStyle} />
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
