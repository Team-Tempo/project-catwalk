import React, { useState, useEffect } from 'react';
import RelatedProductsList from './Related/RelatedProductsList.jsx';
import CustomOutfitList from './Outfit/CustomOutfitList.jsx';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import config from '../../../config.js'

axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN;

const RelatedProducts = ({productId}) => {

  const [relatedProductsData, setRelatedProductsData] = useState([]);

  async function getRelatedIds(productId) {
    const relatedIdsResponse = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/related`);
    return relatedIdsResponse.data;
  }

  useEffect(() => {
    getRelatedIds(productId)
    .then(relatedIdsResult => {

      const productsIdGetReq = relatedIdsResult.map(id => {
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}`);
      })

      const stylesGetReq = relatedIdsResult.map(id => {
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}/styles`);
      })

      return Promise.all([...productsIdGetReq, ...stylesGetReq]);
    })
    .then(bothResponses => bothResponses.map(response => response.data))
    .then(bothResponsesData => {

      const midIndex = bothResponsesData.length / 2
      const productsIdResult = bothResponsesData.slice(0, midIndex);
      const stylesResult = bothResponsesData.slice(midIndex);
      const combinedResults = [];

      for (let i = 0; i < productsIdResult.length; i++) {
        let temp = {...productsIdResult[i], ...stylesResult[i]};
        combinedResults.push(temp);
      }

      setRelatedProductsData(combinedResults)
    })
  }, [productId]);

  return (
    <div id='related'>
      <Grid container spacing={2}>
        <RelatedProductsList relatedProductsData={relatedProductsData} />
      </Grid>
      <Grid>
        <CustomOutfitList />
      </Grid>
     </div>
  );
};

export default RelatedProducts;