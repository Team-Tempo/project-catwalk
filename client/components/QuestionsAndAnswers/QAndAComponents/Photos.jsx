import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const Photos = (props) => {
  console.log(props);
  return (
      <GridList className="gridList" cols={2.5}>
        <GridListTile key={props.questions.results[2].answers[1628412].photos[0]}>
          <img src={props.questions.results[2].answers[1628412].photos[0]} alt="pic1" />
        </GridListTile>
        <GridListTile key={props.questions.results[2].answers[1628412].photos[1]}>
          <img src={props.questions.results[2].answers[1628412].photos[1]} alt="pic2" />
        </GridListTile>
      </GridList>
  );
};

export default Photos;