import React, { useState } from 'react';
import { Button, Dialog, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import config from '../../../../config';
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = config.GITHUB_TOKEN;

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  underlined: {
    textDecoration: 'underline'
  }
}));

const AddAnswer = ({ product, question }) => {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleSubmit = (e) => {
    if (answer.length === 0 || nickname.length === 0 || email.length === 0) {
      return;
    }

    var answerData = {
      body: answer,
      name: nickname,
      email: email,
      photos: []
    };

    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question.question_id}/answers`, answerData)

    setAnswer('');
    setNickname('');
    setEmail('');
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Typography variant="caption" className={classes.underlined} onClick={handleOpen}>Add Answer</Typography>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Submit Your Answer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {product.name}: {question.question_body}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="answer"
            label="* Your Answer"
            placeholder="Type your question here..."
            multiline
            rows={4}
            size="medium"
            variant="outlined"
            fullWidth
            value={answer}
            onInput={(e) => setAnswer(e.target.value)}
          />
          <TextField
            margin="dense"
            id="nickname"
            label="* What is your nickname?"
            placeholder="Example: jack543!"
            variant="outlined"
            fullWidth
            value={nickname}
            onInput={(e) => setNickname(e.target.value)}
          />
          <Typography variant="caption">For privacy reasons, do not use your full name or email address.</Typography>
          <TextField
            margin="dense"
            id="email"
            label="* Your email"
            placeholder="Example: jack@email.com"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <Typography variant="caption">For authentication reasons, you will not be emailed.</Typography>
          <br></br>
          <Button color="primary" variant="contained">Upload Photos</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddAnswer;










