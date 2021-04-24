import React, { useState, useEffect, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));

export default function SimpleRating() {
  const classes = useStyles();

  // const [rating, setRating] = useState(0);
  // const [recommend, setRecommend] = useState();
  // const [reviewSummary, setReviewSummary] = useState();
  // const [reviewBody, setReviewBody] = useState();
  // const [nickname, setNickname] = useState();
  // const [email, setEmail] = useState();

  // const initialState = {
  //   rating: 3,
  //   recommend: '',
  //   reviewSummary: '',
  //   reviewBody: '',
  //   nickname: '',
  //   email: '',
  // };

  // // Initializing state
  // const [value, setValue] = useState(initialState);
  // const { rating, recommend, reviewSummary, reviewBody, nickname, email } = value;

  // common event handler for all the controlled components
  // using spread operator to update the state

  // const handleRatingChange = (event) => {
  //   setValue({ ...value, [event.target.rating]: Number(event.target.value) })
  // }
  // const handleChange = (event) => {
  //   setValue({ ...value, [event.target.name]: event.target.value })
  // };

  return (
    <div>
      <form>
      <Box component="fieldset" mb={3} borderColor="transparent" width="100%">
      <Typography>Overall rating: </Typography>
        <Rating
          name="simple-controlled"
          value={ rating } onChange={handleRatingChange}
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">Do you recommend this product?&nbsp;&nbsp;&nbsp;</label>
      <div class="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        <label className="form-check-label" for="inlineRadio1">Yes</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
        <label className="form-check-label" for="inlineRadio2">No</label>
      </div>
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">Review summary</label>
    <input className="form-control" id="name" placeholder="Best purchase ever!" maxLength="60" onChange={console.log(value)}/>
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">Write your review here</label>
    <input className="form-control" id="name" placeholder=""/>
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">What is your nickname?</label>
    <input className="form-control" id="name" placeholder="strawbery_fields" maxLength="60"/>
    <small id="emailHelp" className="form-text text-muted">For privacy reasons, do not use your full name or email address.</small>
      </Box>
      <Box component="fieldset" className="form-group" mb={3} borderColor="transparent">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" size="500"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
   </Box>
</form>
    </div>
  );
}
