import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import Carousel from 'react-elastic-carousel';
import Typography from '@material-ui/core/Typography';


const RelatedProductsList = ({
  relatedProductsData,
  product,
  setProductId
}) => {


  return  (
    <>
      <Typography>
        RELATED PRODUCTS
      </Typography>
      <Carousel showEmptySlots itemsToShow={4}>
          {relatedProductsData.map(item => <RelatedProductCard key={item.id} relatedProductData={item} product={product} setProductId={setProductId}/>)}
      </Carousel>
    </>
  )
};

export default RelatedProductsList;