import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import QuestionsDummyData from '../DummyData/QuestionsDummyData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import QAndA from './QAndAComponents/QAndA.jsx';
import QuestionSearch from './QAndAComponents/QuestionSearch.jsx';
import Photos from './QAndAComponents/Photos.jsx';

const QuestionsAndAnswers = () => {
  console.log(QuestionsDummyData.questions);
  var questions = QuestionsDummyData.questions;
  return (
    <div>
      <h3>QUESTIONS & ANSWERS</h3>
      <QuestionSearch questions={QuestionsDummyData.questions}/>
      <QAndA questions={QuestionsDummyData.questions}/>
      <Photos questions={QuestionsDummyData.questions}/>

      <h6>LOAD MORE</h6>
      <Button variant="outlined">
        MORE ANSWERED QUESTIONS
      </Button>
      <Button variant="outlined">
        ADD A QUESTION   +
      </Button>
    </div>
  );
};

export default QuestionsAndAnswers;