import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Button, Typography, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { FavoriteBorder } from '@material-ui/icons';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import config from '../../../config';

axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN;

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
  const [selectedSku, setSelectedSku] = useState('');
  const [open, setOpen] = useState(false);

  const skus = Object.values(currentStyle.skus);

  const handleSizeClick = (size) => {
    for (const key in currentStyle.skus) {
      if (currentStyle.skus[key].size === size) {
        setSelectedSku(key);
      }
    }
    setSelectedSize(size);
  };

  const handleSubmit = () => {
    if (!selectedSku) {
      console.error('No size selected!');
    }
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/cart/', {
      sku_id: selectedSku,
    });

    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Select size</Typography>
      </Grid>
      <Grid item xs={12}>
        {skus.map((sku, idx) => {
          let isOutOfStock = false;
          if (sku.quantity === 0) {
            isOutOfStock = true;
          }
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
              disabled={isOutOfStock}
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
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Item added to cart!"
            action={
              <React.Fragment>
                <Button color="primary" size="small" onClick={handleClose}>
                  Undo
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
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
