import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import AddReviewForm from './AddReviewForm';
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
  const formDataStorage = {};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormData = () => {
    handleClose();
    formDataStorage.data["product_id"] = productId;

    axios
      .post(`http://localhost:1337/reviews`, formDataStorage.data)
      .then(res => {
      console.log(res)
      })
      .catch(err => console.log(err));
  }

  const classes = useStyles();

  return (
    <div className={classes.buttons}>
      <Button variant='contained' color='primary'>MORE REVIEWS</Button>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>ADD A REVIEW +</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Write your review</DialogTitle>
          <DialogContent>
          <DialogContentText>
            {/*  Pass actual product name later */}
            About the Camo Onesie
          </DialogContentText>
          <AddReviewForm formData={formDataStorage}/>
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
    </div>
  )
}

export default AddReviewDialog;