import React from 'react';
import { makeStyles, TextField, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function QuestionSearch({ questions, questionSearch }) {
  const classes = useStyles();

  const handleChange = (e) => {
    e.preventDefault();
    questionSearch(e.target.value);
  }

  return (
    <div className="search">
      <div className={classes.root}>
        <TextField
          size="medium"
          label="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>
    </div>
  );
}


