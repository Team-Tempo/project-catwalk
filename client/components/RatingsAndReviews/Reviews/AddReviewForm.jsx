import React, { useState, useEffect, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));

export default function SimpleRating() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <form>
      <Box component="fieldset" mb={3} borderColor="transparent" width="100%">
      <Typography>Overall rating: </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">Do you recommend this product?</label>
    <input className="form-control" id="name" placeholder="Yes/No" size="500"/>
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">Review summary</label>
    <input className="form-control" id="name" placeholder="Best purchase ever!"/>
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">Write your review here</label>
    <input className="form-control" id="name" placeholder=""/>
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="name">What is your nickname?</label>
    <input className="form-control" id="name" placeholder="strawbery_fields"/>
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email"
     placeholder="name@example.com"
    />
      </Box>
</form>
    </div>
  );
}
