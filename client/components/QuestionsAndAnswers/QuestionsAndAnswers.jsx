import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import QuestionsDummyData from '../DummyData/QuestionsDummyData';
import GridList from '@material-ui/core/GridList';

const QuestionsAndAnswers = () => {
  console.log(QuestionsDummyData.questions);
  var questions = QuestionsDummyData.questions;
  return (
    // <div>
    //   <Grid container>
    //     <Grid xs={12}>
    //       <form className="class1" noValidate autoComplete="off">
    //         <TextField id="standard-basic" label="Standard" />
    //         <TextField id="filled-basic" label="Filled" variant="filled" />
    //         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    //       </form>
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
      <h3>QUESTIONS & ANSWERS</h3>
      {/* <form className="class" noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
      </form>
      <Button variant="contained" color="primary">
        Hello World
      </Button> */}
      <div className="search">
        <div className="searchicon">
            <InputBase
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
              classes={{
                root: 'classes.inputRoot',
                input: 'classes.inputInput',
              }}
              inputProps={{ 'aria-label': 'search' }}
              />
            <SearchIcon />
        </div>
      </div>

      {/* Iterate through results
            find the 2 questions with most helpfulness
            find the most helpful answer related to that
            if they contain photos, display those photos
      */}
      <div>
        <h4><em>Q: {questions.results[1].question_body}</em></h4>
        <h4><em>A: </em>{questions.results[1].answers[1628393].body}</h4>
      </div>
      <div>
        <h4><em>Q: {questions.results[2].question_body}</em></h4>
        <h4><em>A: </em>{questions.results[2].answers[1628412].body}</h4>
        <img src={questions.results[2].answers[1628412].photos[0]}></img>
        <img src={questions.results[2].answers[1628412].photos[1]}></img>
      </div>
      <Button variant="contained" >
        MORE ANSWERED QUESTIONS
      </Button>
      <Button variant="contained">
        ADD A QUESTION   +
      </Button>
    </div>
  );
};

export default QuestionsAndAnswers;