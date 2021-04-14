import React, { useState } from 'react';

import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Header from './Header.jsx';
import ProductDummyData from './DummyData/ProductDummyData.js';

const App = () => {
  console.log(ProductDummyData.relatedProducts);
  return (
    <>
      <Header />
      <ProductOverview />
      <RelatedProducts />
      <QuestionsAndAnswers />
      <RatingsAndReviews />
    </>
  );
};

export default App;
