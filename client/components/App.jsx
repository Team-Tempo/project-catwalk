import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Header from './Header.jsx';

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
    `http://localhost:1337/reviews/meta?product_id=${id}`
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

const getProduct = (id) => {
  return axios
    .get(`http://localhost:1337/products/${id}`)
    .then((response) => {
      return response.data;
    });
};

const getProductStyles = (id) => {
  return axios
    .get(
      `http://localhost:1337/products/${id}/styles`)
    .then((response) => {
      return response.data.results;
    });
};

const App = () => {
  const [productId, setProductId] = useState(24156);
  const [product, setProduct] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [styles, setStyles] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    async function fetchAverageRating() {
      const avgRating = await getAverageRatingFromId(productId);
      setAverageRating(avgRating);
    }

    fetchAverageRating();
  }, [productId]);

  useEffect(() => {
    async function fetchProduct() {
      const result = await getProduct(productId);
      setProduct(result);
    }

    async function fetchProductStyles() {
      const result = await getProductStyles(productId);
      setStyles(result);
      return result;
    }

    async function setupStyles() {
      const result = await fetchProductStyles();
      setCurrentStyle(result[0]);
    }

    fetchProduct();
    setupStyles();
  }, [productId]);


  return (
    <ThemeProvider theme={theme}>
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
                product={product}
                currentStyle={currentStyle}
                setCurrentStyle={setCurrentStyle}
                averageRating={averageRating}
                styles={styles}
              />
            </Grid>
            <Grid item xs={12}>
              <RelatedProducts
                productId={productId}
                product={product}
                currentStyle={currentStyle}
                averageRating={averageRating}
                setProductId={setProductId}
              />
            </Grid>
            <Grid item xs={12}>
              <QuestionsAndAnswers
                productId={productId}
                product={product}
              />
            </Grid>
            <Grid item xs={12}>
              <RatingsAndReviews
                productId={productId}
                averageRating={averageRating}
               />
            </Grid>
          </Grid>
        </Container>
    </ThemeProvider>
  );
};

export default App;
