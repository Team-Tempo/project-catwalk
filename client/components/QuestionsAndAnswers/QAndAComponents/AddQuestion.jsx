import React, { useState, useEffect } from 'react';
import { Button, Dialog, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core';
import config from '../../../../config';
import axios from 'axios';

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

const AddQuestion = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleSubmit = (e) => {
    if (question.length > 0 && nickname.length > 0 && email.length > 0) {
      console.log('nickname', nickname);
    }
    // axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions?product_id=${id}`)
    setQuestion('');
    setNickname('');
    setEmail('');
    setOpen(false);
  }

  // http://example.com/page?parameter=value&also=another

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        ADD A QUESTION   +
      </Button>
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
            autoFocus
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
            autoFocus
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
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddQuestion;
