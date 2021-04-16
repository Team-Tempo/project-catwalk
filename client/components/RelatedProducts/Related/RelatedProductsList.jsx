import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import products from '../../DummyData/ProductDummyData';
import GridList from '@material-ui/core/GridList';
// import Carousel from 'react-material-ui-carousel'


const RelatedProductsList = (props) => {

  return  (
    <GridList cols={4}>
      {props.relatedWithNameCatPrice.map(item => <RelatedProductCard key={item.id} relatedWithNameCatPrice={item}/>)}
    </GridList>
  )
};

export default RelatedProductsList;