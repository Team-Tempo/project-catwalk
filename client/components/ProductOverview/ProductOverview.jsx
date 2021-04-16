import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import config from '../../../config';

import dummyData from '../DummyData/ProductDummyData';

const getProduct = () => {
  return axios
    .get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {
      headers: {
        Authorization: config.GITHUB_TOKEN,
      },
    })
    .then((response) => {
      return response.data[0];
    });
};

// const getProductStyles = () => {
//   return axios.get(
//     'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products',
//     {
//       headers: {
//         Authorization: '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',
//       },
//     }
//   );
// };

const ProductOverview = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const result = await getProduct();
      setProduct(result);
    }
    fetchProduct();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <Box display="flex" flexDirection="column">
          <ImageGallery dummyData={dummyData}></ImageGallery>
        </Box>
      </Grid>
      <Grid container direction="column" justify="space-between" item xs={3}>
        <Grid item>
          <ProductInformation product={product}></ProductInformation>
        </Grid>
        <Grid item>
          <StyleSelector></StyleSelector>
        </Grid>
        <Grid item>
          <AddToCart></AddToCart>
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default ProductOverview;
