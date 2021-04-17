import React from 'react';
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

const AddToCart = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Select size</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button className={classes.sizeButton} color="secondary" size="small">
          XS
        </Button>
        <Button className={classes.sizeButton} color="secondary" size="small">
          S
        </Button>
        <Button className={classes.sizeButton} color="secondary" size="small">
          M
        </Button>
        <Button className={classes.sizeButton} color="secondary" size="small">
          L
        </Button>
        <Button className={classes.sizeButton} color="secondary" size="small">
          XL
        </Button>
      </Grid>
      <Grid item xs={10}>
        <ButtonGroup>
          <Button
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
            color="primary"
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
