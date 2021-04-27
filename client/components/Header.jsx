import React from 'react';

import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Box } from '@material-ui/core';

const Header = () => {
  return (
    <>
      <Box
        marginLeft="14%"
        marginRight="14%"
        display="flex"
        flexGrow={1}
        justifyContent="space-around"
        alignItems="center"
      >
        <Typography variant="h4">J. CAD</Typography>
        <Typography variant="button">New</Typography>
        <Typography variant="button">Women</Typography>
        <Typography variant="button">Men</Typography>
        <Typography variant="button">Clearance</Typography>
        <Typography variant="button">Sustainability</Typography>
        <Typography variant="button">My Account</Typography>
        <ShoppingCartIcon />
      </Box>
    </>
  );
};

export default Header;
