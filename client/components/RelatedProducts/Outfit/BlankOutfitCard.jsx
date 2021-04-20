import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import products from '../../DummyData/ProductDummyData';
import AddIcon from '@material-ui/icons/Add';
import CardHeader from '@material-ui/core/CardHeader';




const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 300,
    margin: 16,
    display: 'flex',
    backgroundColor: '#eeeeee',
    textAlign: 'center'
  },

  plus: {
    fontSize: 60,
    color: 'gray',
  }

});
const BlankOutfitCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardHeader title="Add to Outfit" />
        <CardContent >
         <AddIcon className={classes.plus}>
         </AddIcon>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default BlankOutfitCard;