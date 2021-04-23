import React, { useState } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  underlined: {
    textDecoration: 'underline'
  }
}));

const Helpful = ({ helpfulness, handleHelpfulClick, data }) => {
  const classes = useStyles();
  const [helpful, setHelpful] = useState(helpfulness);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // console.log('clicked helpful');
    // console.log('data in help', data);
    // var dataType;
    // var id;
    // if (data.answerer_name) {
    //   dataType = 'answer';
    //   id = data.id;
    // } else {
    //   dataType = 'question';
    //   id = data.question_id;
    // }
    // handleHelpfulClick(data, dataType, id);
    if (!clicked) {
      setHelpful(helpfulness + 1);
      setClicked(true);
    }

    // check if it's a question or an answer
    // revise the helpfulness of it
    // axios.patch()
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