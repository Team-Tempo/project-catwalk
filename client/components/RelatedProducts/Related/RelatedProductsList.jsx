import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import products from '../../DummyData/ProductDummyData';
import GridList from '@material-ui/core/GridList';
import Carousel from 'react-elastic-carousel';
import Typography from '@material-ui/core/Typography';

//CSS styling for later so disabled arrow does not show:
// .rec.rec-arrow:disabled {
//   visibility: hidden;
// }

const RelatedProductsList = ({nameCatPrice}) => {

  return  (
    <>
      <Typography>
        RELATED PRODUCTS
      </Typography>
      <Carousel showEmptySlots itemsToShow={4}>
          {/* {products.products.map(item => <RelatedProductCard key={item.id} relatedWithNameCatPrice={item}/>)} */}
          {nameCatPrice.map(item => <RelatedProductCard key={item.id} nameCatPrice={item}/>)}
      </Carousel>
    </>
  )
};

export default RelatedProductsList;