import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Header from './Header.jsx';

const App = () => {
  const [productId] = useState(24156);
  return (
    <>
      <Container maxWidth="lg">
        <Grid container direction="column" spacing={10}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <ProductOverview productId={productId} />
          </Grid>
          <Grid item xs={12}>
            <RelatedProducts productId={productId} />
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
