import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedProductsList = () => {
  //get request for related product ids based on id of current product
  //then get request for each product to product_id (for name, category, default_price) AND get request to id/styles (for sale_price and image) as well??
  return <RelatedProductCard />;
};

export default RelatedProductsList;