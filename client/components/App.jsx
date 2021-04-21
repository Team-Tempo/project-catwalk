import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Header from './Header.jsx';
import config from '../../config';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FEDBD0',
      main: '#FEDBD0',
      dark: '#FEDBD0',
      contrastText: '#442C2E',
    },
    secondary: {
      light: '#442C2E',
      main: '#442C2E',
      dark: '#442C2E',
      contrastText: '#FEDBD0',
    },
    text: {
      primary: '#442C2E',
      secondary: '#442C2E',
    },
    background: {
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Rubik',
  },
});

const getAverageRatingFromId = async (id) => {
  const result = await axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta?product_id=${id}`,
    {
      headers: {
        Authorization: config.GITHUB_TOKEN,
      },
    }
  );

  const ratings = result.data.ratings;
  let sumOfRatings = 0;
  let numberOfRatings = 0;

  for (const rating in ratings) {
    sumOfRatings += rating * ratings[rating];
    numberOfRatings += Number(ratings[rating]);
  }

  if (numberOfRatings === 0) {
    return 0;
  }
  return sumOfRatings / numberOfRatings;
};

const App = () => {
  const [productId] = useState(24156);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    async function fetchAverageRating() {
      const avgRating = await getAverageRatingFromId(productId);
      setAverageRating(avgRating);
    }

    fetchAverageRating();
  }, [productId]);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <AppBar position="sticky">
          <Toolbar>
            <Header />
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Grid container direction="column" spacing={10}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <ProductOverview
                productId={productId}
                averageRating={averageRating}
              />
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
      </Paper>
    </ThemeProvider>
  );
};

export default App;
