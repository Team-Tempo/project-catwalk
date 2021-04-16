import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
        <Grid container direction="column" spacing={10}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <ProductOverview />
          </Grid>
          <Grid item xs={12}>
            <RelatedProducts />
          </Grid>
          <Grid item xs={12}>
            <QuestionsAndAnswers />
          </Grid>
          <Grid item xs={12}>
            <RatingsAndReviews />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
