import React, { useState } from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios';
import config from '../../../../config.js';
import Button from '@material-ui/core/Button';
axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN
import AddReviewForm from './AddReviewForm';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}))

const AddReviewDialog = ({ productId }) => {
  const [open, setOpen] = useState(false);
  const childObjectData = {};


  const handleClickOpen = () => {
    setOpen(true);
    console.log(productId)
  };

  const handleClose = () => {
    setOpen(false);

    console.log("I'm called");
  };

  const handleFormData = (data) => {
    handleClose();
    childObjectData.data["product_id"] = 24176;
    console.log(childObjectData.data);
    axios
      .post(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews`, childObjectData.data)
      .then(res => {
      console.log(res)
      })
      .catch(err => console.log(err));
  }



  const classes = useStyles();

  return (
    <>
            <Button variant='contained' color='primary'>MORE REVIEWS</Button>
        <Button variant='contained' color='primary' onClick={handleClickOpen}>ADD A REVIEW +</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Write your review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Should display actual product name */}
            About the Camo Onesie
          </DialogContentText>
          <AddReviewForm formObject={childObjectData}/>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary" className="btn btn-primary">
            Cancel
          </Button>
          {/* <Button variant="contained" color="primary" onClick={handleClose} className="form-control btn btn-primary" type="submit">
            Submit Review
          </Button> */}
               <Button variant="contained" color="primary" onClick={handleFormData} className="form-control btn btn-primary" type="submit">
            Submit Review
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddReviewDialog;