import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const QuestionSearch = () => {
  return (
    <div className="search">
      <div className="searchicon">
        <TextField
          label="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          variant="outlined"
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
};

export default QuestionSearch;