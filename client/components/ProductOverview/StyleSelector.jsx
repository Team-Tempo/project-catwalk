import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Avatar } from '@material-ui/core';

const StyleSelector = () => {
  return (
    <>
      <Typography variant="body2">STYLE &gt; Forest Green & Black</Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Avatar src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar src="https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar src="https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar src="https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={2}>
          <Avatar src="https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar src="https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80">
            Style
          </Avatar>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};

export default StyleSelector;
