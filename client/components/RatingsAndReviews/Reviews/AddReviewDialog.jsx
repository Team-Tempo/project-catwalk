import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core'
import axios from 'axios';
import config from '../../../../config.js';
import Button from '@material-ui/core/Button';
import AddReviewForm from './AddReviewForm';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN

const useStyles = makeStyles((theme) => ({
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}))

const AddReviewDialog = ({ productId }) => {
  const [open, setOpen] = useState(false);
  const dataFromFormStorage = {};


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormData = () => {
    handleClose();
    dataFromFormStorage.data["product_id"] = productId;

    axios
      .post(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews`, dataFromFormStorage.data)
      .then(res => {
      console.log(res)
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <Button variant='contained' color='primary'>MORE REVIEWS</Button>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>ADD A REVIEW +</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Write your review</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {/* Change to display actual product name later*/}
          About the Camo Onesie
        </DialogContentText>
          <AddReviewForm formObject={dataFromFormStorage}/>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose} color="primary" className="btn btn-primary">
            Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleFormData} className="form-control btn btn-primary" type="submit">
          Submit Review
        </Button>
      </DialogActions>
      </Dialog>
    </>
  )
}

export default AddReviewDialog;