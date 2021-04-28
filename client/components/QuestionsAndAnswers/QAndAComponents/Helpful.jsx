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
  const [helpful, setHelpful] = useState(helpfulness);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      return;
    }
    if (questionId === 'NA') {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/answers/${answerId}/helpful`)
    } else if (answerId === 'NA') {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${questionId}/helpful`)
    }
    setHelpful(helpfulness + 1);
    setClicked(true);
  }

  return (
    <div>
      <Typography variant="caption">Helpful?   </Typography>
      <Typography variant="caption" onClick={handleClick} className={classes.yes}>Yes</Typography>
      <Typography variant="caption">  ({helpful})</Typography>
    </div>
  );
};

export default Helpful;