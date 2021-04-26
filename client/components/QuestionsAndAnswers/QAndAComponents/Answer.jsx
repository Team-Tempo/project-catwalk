import React, { useState} from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Helpful from './Helpful.jsx';
var dateFormat = require('dateformat');
import axios from 'axios';
import config from '../../../../config';

const useStyles = makeStyles((theme) => ({
  underlined: {
    textDecoration: 'underline'
  },
  textSpacing: {
    marginLeft: '10px',
    marginRight: '10px'
  },
  miniSpacing: {
    marginLeft: '5px',
    marginRight: '5px'
  },
  verticalSpace: {
    marginTop: '15px',
    marginBottom: '15px'
  },
  align: {
    alignItems: 'center'
  }
}));

const Answer = ({ answer }) => {
  const [reportClicked, setReportClicked] = useState(false);
  const classes = useStyles();

  const handleReportClick = (e) => {
    setReportClicked(true);
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/answers/${answer.id}/report`, {
      headers: {
        Authorization: config.GITHUB_TOKEN,
      }
    })
  }

  return (
    <div>
      <Grid container className={classes.align}>
        <Grid item>
          <Typography variant="h6"><b>A:</b></Typography>
        </Grid>
        <Grid item className={classes.miniSpacing}>
          <Typography variant="caption">{answer.body ? answer.body : 'No answer for this question yet'}</Typography>
        </Grid>
      </Grid>
      {answer.date ?
        <Grid container>
          <Grid item>
            <Typography variant="caption" className={classes.textSpacing}>by {answer.answerer_name}, {dateFormat(new Date(answer.date), "mmmm, d, yyyy")}   </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">|</Typography>
          </Grid>
          <Grid item className={classes.textSpacing}>
            <Helpful helpfulness={answer.helpfulness}/>
          </Grid>
          <Grid item>
            <Typography variant="caption">|</Typography>
          </Grid>
          <Grid item className={classes.textSpacing}>
            {reportClicked ?
              <Typography variant="caption" className={classes.underlined}>Reported</Typography> :
              <Typography variant="caption" className={classes.underlined} onClick={handleReportClick}>Report</Typography>
            }
          </Grid>
        </Grid>
        :
        null }
      <Grid className={classes.verticalSpace}></Grid>
    </div>
  );
};

export default Answer;