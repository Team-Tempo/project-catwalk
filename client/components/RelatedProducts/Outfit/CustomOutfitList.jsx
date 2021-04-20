import React from 'react';
import OutfitProductCard from './OutfitProductCard.jsx'
import BlankOutfitCard from './BlankOutfitCard.jsx'
import Carousel from 'react-elastic-carousel';
import Typography from '@material-ui/core/Typography';

const CustomOutfitList = () => {
  return (
    <>
      <Typography>
        YOUR OUTFIT
      </Typography>
      <Carousel showEmptySlots itemsToShow={4}>
        <BlankOutfitCard />
        <OutfitProductCard/>
      </Carousel>
    </>

  )
};

export default CustomOutfitList;