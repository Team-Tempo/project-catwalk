import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import { StarBorder, Star } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

const StyledRating = withStyles({
  iconFilled: {
    color: '#442c2e',
  },
  iconEmpty: {
    color: '#442c2e',
  },
})(Rating);

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 375,
    maxHeight: 375,
    margin: 16
  },
  category: {
    textTransform: 'uppercase'
  },
  name: {
    fontWeight: 700
  },
  media: {
    height: 250,
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    color: '#442C2E'
  },
  sale: {
    marginLeft: '5px',
    color: red[400],
  },
  strikethrough: {
    textDecoration: 'line-through',
  }
});
const OutfitProductCard = ({
  outfitCardData,
  removeCard
}) => {

  const classes = useStyles();

  const handleXClick = () => {
    removeCard(outfitCardData.style_id)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={outfitCardData.photo}
        />
        <HighlightOffIcon onClick={handleXClick} className={classes.icon}>
        </HighlightOffIcon>
        <CardContent>
          <Typography className={classes.category} variant="caption">
            {outfitCardData.category}
          </Typography>
          <Typography className={classes.name}>
            {outfitCardData.name}
          </Typography>
          {outfitCardData.sale_price ? (
            <>
              <Typography className={classes.strikethrough} variant="caption">
                ${Math.round(outfitCardData.original_price)}
              </Typography>
              <Typography className={classes.sale} variant="caption">
                ${Math.round(outfitCardData.sale_price)}
              </Typography>
            </>
          ) : (
            <Typography variant="caption">
            ${Math.round(outfitCardData.original_price)}
            </Typography>
          )}
          <Typography>
            <StyledRating
              emptyIcon={<StarBorder fontSize="inherit" />}
              icon={<Star fontSize="inherit" />}
              name="rating"
              value={outfitCardData.rating}
              precision={0.25}
              size="small"
              readOnly={true}
            ></StyledRating>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default OutfitProductCard;