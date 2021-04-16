import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Avatar } from '@material-ui/core';

const StyleSelector = ({ productStyles }) => {
  return (
    <>
      <Typography variant="body2">Style &gt; Selected Style</Typography>
      <Grid container>
        <Grid item xs={3}>
          <Avatar src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={3}>
          <Avatar src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={3}>
          <Avatar src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={3}>
          <Avatar src="https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={3}>
          <Avatar src="https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={3}>
          <Avatar src="https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={3}>
          <Avatar></Avatar>
        </Grid>
        <Grid item xs={3}>
          <Avatar></Avatar>
        </Grid>
      </Grid>
    </>
  );
};

export default StyleSelector;
