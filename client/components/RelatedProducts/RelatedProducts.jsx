import React from 'react';
import RelatedProductsList from './Related/RelatedProductsList.jsx';
import CustomOutfitList from './Outfit/CustomOutfitList.jsx';
import Grid from '@material-ui/core/Grid';


const RelatedProducts = (id) => {
  id = 24156;
  return (
    <div id='related'>
      <Grid container spacing={2}>
        <RelatedProductsList id={id}/>
      </Grid>
      <Grid>
        <CustomOutfitList />
      </Grid>
     </div>
  );
};

export default RelatedProducts;