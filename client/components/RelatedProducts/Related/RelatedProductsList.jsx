import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import products from '../../DummyData/ProductDummyData';
import GridList from '@material-ui/core/GridList';
// import Carousel from 'react-material-ui-carousel'




let allProducts = products.products;
let relatedProducts = products.relatedProducts;
const RelatedProductsList = (props) => {
  // const [related, setRelated] = useState(relatedProducts)
  // setRelated(relatedWithNameCatPrice)

  //get all products

  //filter products to only include those whose product.id is in the relatedProducts array
  let relatedWithNameCatPrice = allProducts.filter(product => relatedProducts.includes(product.id))
  console.log({relatedWithNameCatPrice})
  // send as props to RelatedProductCard


  //get request for related product ids based on id of current product
  //then get request for each product to product_id (for name, category, default_price) AND get request to id/styles (for sale_price and image) as well??
  return  (
    <GridList cols={4}>
      {relatedWithNameCatPrice.map(item => <RelatedProductCard key={item.id} relatedWithNameCatPrice={item}/>)}
    </GridList>
  )
};

export default RelatedProductsList;