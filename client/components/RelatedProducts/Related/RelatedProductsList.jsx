import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import products from '../../DummyData/ProductDummyData';
import GridList from '@material-ui/core/GridList';
// import Carousel from 'react-material-ui-carousel'
import Carousel from 'react-elastic-carousel';

//CSS styling for later so disabled arrow does not show:
// .rec.rec-arrow:disabled {
//   visibility: hidden;
// }

const RelatedProductsList = (props) => {

  return  (
    <Carousel showEmptySlots itemsToShow={4}>
        {/* {products.products.map(item => <RelatedProductCard key={item.id} relatedWithNameCatPrice={item}/>)} */}
        {props.relatedWithNameCatPrice.map(item => <RelatedProductCard key={item.id} relatedWithNameCatPrice={item}/>)}
    </Carousel>
  )
};

export default RelatedProductsList;