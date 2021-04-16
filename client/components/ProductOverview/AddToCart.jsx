import React from 'react';
import {
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddToCart = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={8}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Size</InputLabel>
          <Select
            value=""
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>XS</MenuItem>
            <MenuItem value={20}>S</MenuItem>
            <MenuItem value={30}>M</MenuItem>
            <MenuItem value={40}>L</MenuItem>
            <MenuItem value={50}>XL</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
          <Select
            value=""
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={40}>4</MenuItem>
            <MenuItem value={50}>5</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={10}>
        <Button
          startIcon={<AddShoppingCartIcon />}
          variant="contained"
          color="primary"
        >
          <Typography>Add to cart</Typography>
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined">
          <Typography>
            <StarBorderIcon />
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddToCart;
