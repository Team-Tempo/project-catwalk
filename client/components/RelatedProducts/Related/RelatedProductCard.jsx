/* eslint-disable react/prop-types */
import React from 'react';
import Card from '@material-ui/core/Card';
import products from '../../DummyData/ProductDummyData';
import Grid from '@material-ui/core/Grid';



const RelatedProductCard = (props) => {

  return (
    <Card>
      <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" width="100" height="150"></img>
      {/* action button
      image
      category
      name
      default_price
      sale_price if on sale
      star rating */}
      <div>{props.relatedWithNameCatPrice.category}</div>
      <div>{props.relatedWithNameCatPrice.name}</div>
      <div>{props.relatedWithNameCatPrice.default_price}</div>
    </Card>
  )
};

export default RelatedProductCard;