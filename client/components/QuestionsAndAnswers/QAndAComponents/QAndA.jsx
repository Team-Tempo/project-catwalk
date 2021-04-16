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


const QAndA = (props) => {
  return (
    <div>
      {/* Iterate through results
            find the 2 questions with most helpfulness
            find the most helpful answer related to that
            if they contain photos, display those photos
      */}
      <div>
        <h4><em>Q: {props.questions.results[1].question_body}</em></h4>
        <h4><em>A: </em>{props.questions.results[1].answers[1628393].body}</h4>
      </div>
      <div>
        <h4><em>Q: {props.questions.results[2].question_body}</em></h4>
        <h4><b>A: </b>{props.questions.results[2].answers[1628412].body}</h4>
      </div>
    </div>
  );
};

export default QAndA;