import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  underlined: {
    textDecoration: 'underline'
  }
}));

const Helpful = ( {helpfulness} ) => {
  const classes = useStyles();
  const handleHelpfulClick = () => {
    console.log('clicked helpful');
  }
  return (
    <div>
      <Typography variant="caption">Helpful?   </Typography>
      <Typography variant="caption" onClick={handleHelpfulClick} className={classes.underlined}>Yes</Typography>
      <Typography variant="caption">  ({helpfulness})</Typography>
    </div>
  );
};

export default Helpful;