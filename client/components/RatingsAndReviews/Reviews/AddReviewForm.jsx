import React, { useState, useEffect, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));

export default function AddReviewForm() {
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [email, setEmail] = useState();

  function onSummaryChange(event) {
    console.log(event.target.value);
    setReviewSummary(event.target.value);
  }

  function onReviewBodyChange(event) {
    setReviewBody(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }


  return (
    <div>
      <form>
      <Box component="fieldset" mb={3} borderColor="transparent" width="100%">
      <Typography>Overall rating: </Typography>
        <Rating
          name="simple-controlled"
          value={ rating } onChange={(event, newRating) => {
            console.log(event, newRating)
            setRating(newRating);
          }}
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">Do you recommend this product?&nbsp;&nbsp;&nbsp;</label>
      <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
      </div>
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">Review summary</label>
    <input
      className="form-control"
      placeholder="Best purchase ever!"
      maxLength="60"
      type="text"
      name="reviewSummary"
      value={ reviewSummary }
      onChange={onSummaryChange}
      />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">Write your review here</label>
    <input
      className="form-control"
      id="name"
      placeholder=""
      type="text"
      name="reviewBody"
      value={ reviewBody }
      onChange={onReviewBodyChange}
      />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">What is your nickname?</label>
    <input className="form-control" id="name" placeholder="strawbery_fields" maxLength="60"/>
    <small id="emailHelp" className="form-text text-muted">For privacy reasons, do not use your full name or email address.</small>
      </Box>
      <Box component="fieldset" className="form-group" mb={3} borderColor="transparent">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          size="500"
          name="email"
          value={email}
          onChange={onEmailChange}
          />
        <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
      </div>
   </Box>
</form>
    </div>
  );
}
