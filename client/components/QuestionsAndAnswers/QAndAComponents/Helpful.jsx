import React, { useState } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  yes: {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));

const Helpful = ({ helpfulness, questionId, answerId }) => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      return;
    }
    if (questionId === 'NA') {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/answers/${answerId}/helpful`)
        .then((results) => {
          setClicked(true);
        })
        .catch((err) => {
          console.error(err);
        })
    } else if (answerId === 'NA') {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${questionId}/helpful`)
        .then((results) => {
          setClicked(true);
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }

  return (
    <div>
      <Typography variant="caption">Helpful?   </Typography>
      <Typography variant="caption" onClick={handleClick} className={classes.yes}>Yes</Typography>
      {clicked ?
        <Typography variant="caption">  ({helpfulness + 1})</Typography> :
        <Typography variant="caption">  ({helpfulness})</Typography>
      }
    </div>
  );
};

export default Helpful;