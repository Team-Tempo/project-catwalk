import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  StarBorder,
  Star,
  ExpandMore,
  ExpandMoreRounded,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { experimentalStyled as styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';

const StyledRating = withStyles({
  iconFilled: {
    color: '#442c2e',
  },
  iconEmpty: {
    color: '#442c2e',
  },
})(Rating);

const useStyles = makeStyles({
  salePrice: {
    marginLeft: '5px',
    color: red[400],
  },
  strikethrough: {
    textDecoration: 'line-through',
  },
  productDetails: {
    // margin: '10px 0',
  },
});

const ProductInformation = ({ product, currentStyle }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <StyledRating
          emptyIcon={<StarBorder fontSize="inherit" />}
          icon={<Star fontSize="inherit" />}
          name="rating"
          defaultValue={3.5}
          precision={0.25}
          size="small"
          readOnly={true}
        ></StyledRating>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="button">Read all reviews</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="overline">{product.category}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">{product.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        {currentStyle.sale_price ? (
          <>
            <Typography className={classes.strikethrough} variant="caption">
              ${Math.round(currentStyle.original_price)}
            </Typography>
            <Typography className={classes.salePrice} variant="caption">
              ${Math.round(currentStyle.sale_price)}
            </Typography>
          </>
        ) : (
          <Typography variant="caption">
            ${Math.round(currentStyle.original_price)}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <Accordion className={classes.productDetails}>
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <Typography variant="subtitle1">Product Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{product.description}</Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default ProductInformation;
