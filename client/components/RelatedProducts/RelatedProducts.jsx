import React, { useState, useEffect } from 'react';
import RelatedProductsList from './Related/RelatedProductsList.jsx';
import CustomOutfitList from './Outfit/CustomOutfitList.jsx';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import config from '../../../config.js'

axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN;

const RelatedProducts = ({productId}) => {
  //get request for related product ids based on id of current product
  const [relatedIds, setRelatedIds] = useState([]);

  async function getRelatedIds(productId) {
    const relatedIdsResponse = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/related`)
    setRelatedIds(relatedIdsResponse.data);
    return relatedIdsResponse.data;
  }

  // useEffect(() => {
  //   getRelatedIds(productId);
  // }, []);

  console.log('relatedIds', relatedIds)
  //map over relatedIds and return array of axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId})`
  // //map over relatedIds and return array of `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/styles`
  //Promise.all on array of get requests
  //.then set state with responses

  const [nameCatPrice, setNameCatPrice] = useState([]);

  useEffect(() => {
    getRelatedIds(productId)
    .then(relatedIdsResult => {
      const nameCatPriceGetReq = relatedIdsResult.map(id => {
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}`)
      })

      Promise.all(nameCatPriceGetReq)
      .then(response => response.map(item => item.data))
      .then(nameCatPriceResult => setNameCatPrice(nameCatPriceResult))
    })
  }, []);


  return (
    <div id='related'>
      <Grid container spacing={2}>
      {console.log({nameCatPrice})}
        <RelatedProductsList nameCatPrice={nameCatPrice} />
      </Grid>
      <Grid>
        <CustomOutfitList />
      </Grid>
     </div>
  );
};

export default RelatedProducts;