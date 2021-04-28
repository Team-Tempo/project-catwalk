import React, { useState, useEffect } from 'react';
import RelatedProductsList from './Related/RelatedProductsList.jsx';
import CustomOutfitList from './Outfit/CustomOutfitList.jsx';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import dotenv from 'dotenv';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

axios.defaults.headers.common['Authorization'] = process.env.GITHUB_TOKEN;

const RelatedProducts = ({
  productId,
  product,
  currentStyle,
  averageRating,
  setProductId,
}) => {
  const [relatedProductsData, setRelatedProductsData] = useState([]);
  const [outfitCardsData, setOutfitCardsData] = useState(
    JSON.parse(localStorage.getItem('outfitCardsData')) || []
  );
  const [openSnackbar, setOpenSnackbar] = useState(false);

  async function getRelatedIds(productId) {
    const relatedIdsResponse = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/related`
    );
    return relatedIdsResponse.data;
  }

  useEffect(() => {
    getRelatedIds(productId)
      .then((relatedIdsResult) => {
        const uniqueRelatedIdsSet = new Set(relatedIdsResult);
        const uniqueRelatedIds = [...uniqueRelatedIdsSet];

        const productsIdGetReq = uniqueRelatedIds.map((id) => {
          return axios.get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}`
          );
        });

        const stylesGetReq = uniqueRelatedIds.map((id) => {
          return axios.get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}/styles`
          );
        });

        const ratingsGetReq = uniqueRelatedIds.map((id) => {
          return axios.get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta?product_id=${id}`
          );
        });

        return Promise.all([
          ...productsIdGetReq,
          ...stylesGetReq,
          ...ratingsGetReq,
        ]);
      })
      .then((allResponses) => allResponses.map((response) => response.data))
      .then((productCardData) => {
        //consolidates each product into one object within the combinedResults array:
        const firstSplitIndex = productCardData.length / 3;
        const secondSplitIndex = firstSplitIndex * 2;
        const productsIdResult = productCardData.slice(0, firstSplitIndex);
        const stylesResult = productCardData.slice(
          firstSplitIndex,
          secondSplitIndex
        );
        const ratingsResult = productCardData.slice(secondSplitIndex);
        const combinedResults = [];

        for (let i = 0; i < productsIdResult.length; i++) {
          let temp = {
            ...productsIdResult[i],
            ...stylesResult[i],
            ...ratingsResult[i],
          };
          combinedResults.push(temp);
        }

        setRelatedProductsData(combinedResults);
      });
  }, [productId]);

  //click handlers for Snackbar
  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const addToOutfit = () => {
    let isPresentInOutfit = false;
    for (let outfit of outfitCardsData) {
      if (outfit.style_id === currentStyle.style_id) {
        isPresentInOutfit = true;
        break;
      }
    }

    if (!isPresentInOutfit) {
      const outfitCardsDataCopy = outfitCardsData.slice();
      const outfitCardData = {
        name: currentStyle.name,
        original_price: currentStyle.original_price,
        sale_price: currentStyle.sale_price,
        photo: currentStyle.photos[0].thumbnail_url,
        style_id: currentStyle.style_id,
        category: product.category,
        rating: averageRating,
      };
      outfitCardsDataCopy.push(outfitCardData);
      setOutfitCardsData(outfitCardsDataCopy);
      localStorage.setItem(
        'outfitCardsData',
        JSON.stringify(outfitCardsDataCopy)
      );
    } else {
      handleSnackbarOpen();
    }
  };

  const removeCard = (styleId) => {
    let indexOfCardToRemove;
    for (let i = 0; i < outfitCardsData.length; i++) {
      if (outfitCardsData[i].style_id === styleId) {
        indexOfCardToRemove = i;
        break;
      }
    }

    outfitCardsData.splice(indexOfCardToRemove, 1);
    let removedOutfitCardsData = outfitCardsData.slice();
    setOutfitCardsData(removedOutfitCardsData);
    localStorage.setItem(
      'outfitCardsData',
      JSON.stringify(removedOutfitCardsData)
    );
  };

  return (
    <div id="related">
      <Grid container spacing={2}>
        <RelatedProductsList
          setProductId={setProductId}
          relatedProductsData={relatedProductsData}
          product={product}
        />
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          autoHideDuration={6000}
          open={openSnackbar}
          onClose={handleSnackbarClose}
          message="This style has already been added to your outfit list!"
          action={
            <IconButton
              size="medium"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        ></Snackbar>
      </Grid>
      <Grid>
        <CustomOutfitList
          outfitCardsData={outfitCardsData}
          addToOutfit={addToOutfit}
          removeCard={removeCard}
        />
      </Grid>
    </div>
  );
};

export default RelatedProducts;
