import React, { useState } from 'react';
import { Button, Dialog, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core';
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
}));

const AddQuestion = ({ product, productId }) => {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleSubmit = (e) => {
    if (question.length === 0 || nickname.length === 0 || email.length === 0) {
      return;
    }
    var questionData = {
      body: question,
      name: nickname,
      email: email,
      product_id: productId
    };

    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions`, questionData)

    setQuestion('');
    setNickname('');
    setEmail('');
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Typography variant="caption">Add Answer</Typography>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ask Your Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            About the {product.name}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="question"
            label="Your Question"
            placeholder="Type your question here..."
            multiline
            rows={4}
            size="medium"
            variant="outlined"
            fullWidth
            value={question}
            onInput={(e) => setQuestion(e.target.value)}
          />
          <TextField
            margin="dense"
            id="nickname"
            label="Nickname"
            placeholder="Example: jackson11!"
            variant="outlined"
            fullWidth
            value={nickname}
            onInput={(e) => setNickname(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            placeholder="Why did you like the product or not?"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddQuestion;










