import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import Carousel from 'react-elastic-carousel';
import Typography from '@material-ui/core/Typography';

//CSS styling for later so disabled arrow does not show:
// .rec.rec-arrow:disabled {
//   visibility: hidden;
// }

const RelatedProductsList = ({
  relatedProductsData,
  product
}) => {

  return  (
    <>
      <Typography>
        RELATED PRODUCTS
      </Typography>
      <Carousel showEmptySlots itemsToShow={4}>
          {relatedProductsData.map(item => <RelatedProductCard key={item.id} relatedProductData={item} product={product} />)}
      </Carousel>
    </>
  )
};

export default RelatedProductsList;