import React from 'react';

import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { Box, Container } from '@material-ui/core';

const Header = () => {
  return (
    <>
      <Box display="flex" flexGrow={1}>
        <Typography variant="h4">
          <StarBorderIcon fontSize="inherit" />
          {'   '}
          J. CAD
        </Typography>
      </Box>
      <Typography variant="button">My Account</Typography>
      <SearchIcon />
      <ShoppingCartIcon />
    </>
  );
};

export default Header;
