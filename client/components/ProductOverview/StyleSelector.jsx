import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar } from '@material-ui/core';

const StyleSelector = ({ styles, currentStyle, setCurrentStyle }) => {
  const handleClick = (idx) => {
    setCurrentStyle(styles[idx]);
  };

  return (
    <>
      <Typography variant="body2">STYLE &gt; {currentStyle.name}</Typography>
      <Grid container spacing={1}>
        {styles.map((style, idx) => (
          <Grid key={idx} item xs={3}>
            <Avatar
              onClick={() => handleClick(idx)}
              variant="rounded"
              src={style.photos[0].thumbnail_url}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StyleSelector;
