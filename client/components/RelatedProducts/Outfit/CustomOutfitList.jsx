import React from 'react';
import OutfitProductCard from './OutfitProductCard.jsx'
import BlankOutfitCard from './BlankOutfitCard.jsx'
import Carousel from 'react-elastic-carousel';
import Typography from '@material-ui/core/Typography';

const CustomOutfitList = ({
  addToOutfit,
  removeCard,
  outfitCardsData
}) => {
  return (
    <>
      <Typography>
        YOUR OUTFIT
      </Typography>
      <Carousel showEmptySlots itemsToShow={4}>
        <BlankOutfitCard addToOutfit={addToOutfit} />
          {outfitCardsData.length ? (
            outfitCardsData.map(card => <OutfitProductCard key={card.style_id} outfitCardData={card} removeCard={removeCard}/>)
            ) : (
            <> </>
          )}
      </Carousel>
    </>

  )
};

export default CustomOutfitList;