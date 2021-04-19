import React, { useState, useEffect } from 'react';
import RelatedProductsList from './Related/RelatedProductsList.jsx';
import CustomOutfitList from './Outfit/CustomOutfitList.jsx';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import config from '../../../config.js'

axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN;

const RelatedProducts = ({productId}) => {

  async function getRelatedIds(productId) {
    const relatedIdsResponse = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/related`);
    return relatedIdsResponse.data;
  }

  const [nameCatPrice, setNameCatPrice] = useState([]);
  const [salePic, setSalePic] = useState([]);

  useEffect(() => {
    getRelatedIds(productId)
    .then(relatedIdsResult => {

      const nameCatPriceGetReq = relatedIdsResult.map(id => {
        return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}`);
      })

      // const salePicGetReq = relatedIdsResult.map(id => {
      //   return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}/styles`);
      // })
      return Promise.all(nameCatPriceGetReq);
    })
    .then(nameCatPriceResponse => nameCatPriceResponse.map(item => item.data))
    .then(nameCatPriceResult => setNameCatPrice(nameCatPriceResult))
    // .then(salePicResponse => {

    //   console.log({salePicResponse})
    //   salePicResponse.map(item => item.data)
    // })
    // .then(salePicResult => setSalePic(salePicResult))
  }, [productId]);

  useEffect(() => {
    getRelatedIds(productId)
    .then(relatedIdsResult => {

      const salePicGetReq = relatedIdsResult.map(id => {
      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}/styles`);
    })
      return Promise.all(salePicGetReq);
    })

    .then(salePicResponse => salePicResponse.map(item => item.data))
    .then(salePicResult => setSalePic(salePicResult))
  }, [productId]);


  return (
    <div id='related'>
      <Grid container spacing={2}>
      {console.log({salePic})}
        <RelatedProductsList salePic={salePic} nameCatPrice={nameCatPrice} />
      </Grid>
      <Grid>
        <CustomOutfitList />
      </Grid>
     </div>
  );
};

export default RelatedProducts;