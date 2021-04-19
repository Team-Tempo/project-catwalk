import React, { useState, useEffect } from 'react';
import RelatedProductsList from './Related/RelatedProductsList.jsx';
import CustomOutfitList from './Outfit/CustomOutfitList.jsx';
import Grid from '@material-ui/core/Grid';
import products from './../DummyData/ProductDummyData';
import axios from 'axios';
import config from '../../../config.js'


const RelatedProducts = ({productId}) => {
  //get request for related product ids based on id of current product
  const [relatedIds, setRelatedIds] = useState([]);

  async function getRelatedIds(productId) {
    const relatedIdsResponse = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/related`, {
      headers: {
        'Authorization': config.GITHUB_TOKEN
      }
    });
    setRelatedIds(relatedIdsResponse.data);
  }

  useEffect(() => {
    getRelatedIds(productId);
  }, []);

  console.log('relatedIds', relatedIds)
  //map over relatedIds and return array of `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}`
  // //map over relatedIds and return array of `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/styles`
  //Promise.all on array of get requests
  //.then set state with responses




  //then get request for each product to product_id (for name, category, default_price) AND get request to id/styles (for sale_price and image) as well??
  // id = 24156;
  const allProducts = products.products;
  const relatedProducts = products.relatedProducts;
  const relatedWithNameCatPrice = allProducts.filter(product => relatedProducts.includes(product.id));

  return (
    <div id='related'>
      <Grid container spacing={2}>
        <RelatedProductsList relatedWithNameCatPrice={relatedWithNameCatPrice} />
      </Grid>
      <Grid>
        <CustomOutfitList />
      </Grid>
     </div>
  );
};

export default RelatedProducts;