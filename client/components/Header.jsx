import React from 'react';

import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Box, Button } from '@material-ui/core';

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
        <a>
          <Button>
            <Typography variant="h4">J. CAD</Typography>
          </Button>
        </a>
        <a>
          <Button>
            <Typography variant="button">New</Typography>
          </Button>
        </a>
        <a>
          <Button>
            <Typography variant="button">Women</Typography>
          </Button>
        </a>
        <a>
          <Button>
            <Typography variant="button">Men</Typography>
          </Button>
        </a>
        <a>
          <Button>
            <Typography variant="button">Clearance</Typography>
          </Button>
        </a>
        <a>
          <Button>
            <Typography variant="button">Sustainability</Typography>
          </Button>
        </a>
        <a>
          <Button>
            <Typography variant="button">My Account</Typography>
          </Button>
        </a>
        <a>
          <Button>
            <ShoppingCartIcon />
          </Button>
        </a>
      </Box>
    </>
  );
};

export default Header;
