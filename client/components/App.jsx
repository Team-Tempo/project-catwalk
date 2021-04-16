import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Header from './Header.jsx';
import ProductDummyData from './DummyData/ProductDummyData.js';

const App = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <ProductOverview />
        <RelatedProducts />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </Container>
    </>
  );
};

export default App;
