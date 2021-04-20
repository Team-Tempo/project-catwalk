import React from 'react';
import RelatedProductsList from './Related/RelatedProductsList.jsx';
import CustomOutfitList from './Outfit/CustomOutfitList.jsx';
import Grid from '@material-ui/core/Grid';
import products from './../DummyData/ProductDummyData';


const RelatedProducts = (id) => {

  //get request for related product ids based on id of current product
  //then get request for each product to product_id (for name, category, default_price) AND get request to id/styles (for sale_price and image) as well??
  // id = 24156;
  let allProducts = products.products;
  let relatedProducts = products.relatedProducts;
  let relatedWithNameCatPrice = allProducts.filter(product => relatedProducts.includes(product.id));

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