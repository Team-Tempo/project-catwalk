import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
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

const getReviewsData = async (id) => {
      const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews?product_id=${id}`);
      return response.data;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    fontWeight: 500,
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}))

const ReviewsList = ({ productId }) => {
  const [reviewsData, setReviewsData] = useState([]);
  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getReviewsData(productId)
    .then(resultData => {
      setReviewsData(resultData.results);
    })
  }, [productId])


  const classes = useStyles();
  const reviewsCounter = reviewsData.length;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.header}>{ reviewsCounter } reviews, sorted by relevance</Typography>
        </Grid>
        <Grid item xs={12}>
        {reviewsData.map(review =>
        <Review key={review.review_id} review={review}/>
        )}
        </Grid>
        <Grid item xs={12} className={classes.buttons}>

        {/* Buttons */}
        <Button variant='contained' color='primary'>MORE REVIEWS</Button>
        <Button variant='contained' color='primary' onClick={handleClickOpen}>ADD A REVIEW +</Button>
        </Grid>
        <Grid item xs>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Write your review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Should display actual product name */}
            About the Camo Onesie
          </DialogContentText>
          <AddReviewForm />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary" className="btn btn-primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleClose} className="form-control btn btn-primary" type="submit">
            Submit Review
          </Button>
        </DialogActions>
      </Dialog>
        </Grid>
      </Grid>
    </div>
    )
}

export default ReviewsList;
