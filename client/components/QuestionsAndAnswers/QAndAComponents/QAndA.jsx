import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Helpful from './Helpful.jsx';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '0px'
  },
  underlined: {
    underline: 'always'
  }
}));

const QAndA = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Typography variant="h6"><b>Q: {props.questions.results[1].question_body}</b></Typography>
      </Grid>

      <Grid item justify="space-between" xs={2}>
        <Helpful />
      </Grid>
      <Grid item justify="space-between" xs={2}>
        <Typography variant="caption"> |   Add Answer</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6"><b>A: </b>{props.questions.results[1].answers[1628393].body}</Typography>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="caption">by {props.questions.results[1].asker_name}, {props.questions.results[1].question_date}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Helpful />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption" className={classes.underlined}>Report</Typography>
        </Grid>
      </Grid>
    </Grid>


    // <Grid container spacing={2}>
    //   <Grid item xs={8} justify="flex-end">
    //     <ImageGallery dummyData={dummyData}></ImageGallery>
    //   </Grid>
    //   <Grid container direction="column" justify="space-between" item xs={4}>
    //     <Grid item>
    //       <ProductInformation product={product}></ProductInformation>
    //     </Grid>
    //     <Grid item>
    //       <StyleSelector></StyleSelector>
    //     </Grid>
    //     <Grid item>
    //       <AddToCart></AddToCart>
    //     </Grid>
    //   </Grid>
    // </Grid>
    // <div>
    //   {/* Iterate through results
    //         find the 2 questions with most helpfulness
    //         find the most helpful answer related to that
    //         if they contain photos, display those photos
    //   */}
    //   <div>
    //     <Typography variant="h4"><em>Q: {props.questions.results[1].question_body}</em></Typography>
    //     <Typography variant="h4"><em>A: </em>{props.questions.results[1].answers[1628393].body}</Typography>
    //   </div>
    //   <div>
    //     <h4><em>Q: {props.questions.results[2].question_body}</em></h4>
    //     <h4><b>A: </b>{props.questions.results[2].answers[1628412].body}</h4>
    //   </div>
    // </div>
  );
};

export default QAndA;
