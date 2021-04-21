import React, { useState } from 'react';
import {
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Typography,
  ButtonGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  sizeButton: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
    maxWidth: '30px',
    minWidth: '30px',
  },
}));

const AddToCart = ({ currentStyle }) => {
  if (!currentStyle.skus) {
    return null;
  }
  const classes = useStyles();
  const [selectedSize, setSelectedSize] = useState('');

  const skus = Object.values(currentStyle.skus);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleSubmit = () => {
    console.log(selectedSize);
    console.log(currentStyle.skus);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Select size</Typography>
      </Grid>
      <Grid item xs={12}>
        {skus.map((sku, idx) => {
          return sku.size === selectedSize ? (
            <Button
              key={idx}
              className={classes.sizeButton}
              variant="contained"
              color="primary"
              size="small"
              onClick={() => {
                handleSizeClick('');
              }}
            >
              {sku.size}
            </Button>
          ) : (
            <Button
              key={idx}
              className={classes.sizeButton}
              variant="text"
              color="secondary"
              size="small"
              onClick={() => {
                handleSizeClick(sku.size);
              }}
            >
              {sku.size}
            </Button>
          );
        })}
      </Grid>
      <Grid item xs={10}>
        <ButtonGroup>
          <Button
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            <Typography>Add to cart</Typography>
          </Button>
          <Button variant="outlined">
            <Typography>
              <FavoriteBorder />
            </Typography>
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default AddToCart;
