import React, { useState } from 'react';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Header from './Header.jsx';

const App = () => {
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
