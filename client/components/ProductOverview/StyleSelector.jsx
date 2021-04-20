import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const StyleSelector = ({ styles, currentStyle, setCurrentStyle }) => {
  const classes = useStyles();

  const handleClick = (idx) => {
    setCurrentStyle(styles[idx]);
  };

  return (
    <>
      <Typography variant="body2" gutterBottom={true}>
        STYLE &gt; {currentStyle.name}
      </Typography>
      <Grid container spacing={1}>
        {styles.map((style, idx) => (
          <Grid key={idx} item xs={3}>
            <Avatar
              className={classes.large}
              onClick={() => handleClick(idx)}
              // variant="rounded"
              src={style.photos[0].thumbnail_url}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StyleSelector;
