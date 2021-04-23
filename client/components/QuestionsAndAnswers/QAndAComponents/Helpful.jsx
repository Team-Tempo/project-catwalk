import React, { useState } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  underlined: {
    textDecoration: 'underline'
  }
}));

const Helpful = ({ helpfulness }) => {
  const classes = useStyles();
  const [helpful, setHelpful] = useState(helpfulness);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setHelpful(helpfulness + 1);
      setClicked(true);
    }
  }

  return (
    <div>
      <Typography variant="caption">Helpful?   </Typography>
      <Typography variant="caption" onClick={handleClick} className={classes.underlined}>Yes</Typography>
      <Typography variant="caption">  ({helpful})</Typography>
    </div>
  );
};

export default Helpful;