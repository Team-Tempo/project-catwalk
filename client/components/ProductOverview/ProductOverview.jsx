import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import config from '../../../config';

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

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box display="flex" flexDirection="column">
          <ImageGallery currentStyle={currentStyle} />
        </Box>
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
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default ProductOverview;
