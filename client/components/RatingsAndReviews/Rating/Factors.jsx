import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: theme.spacing(1),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#debcff',
    height: 8,
  },
  thumb: {
    backgroundColor: '#debcff',
    borderRadius: '0',
    borderBottom: '10px solid #4E5255',
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '1px solid transparent',
    transform: 'rotate(180deg)',
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    backgroundColor: '#debcff',
    height: 8,
    borderRadius: 4,
  },
  rail: {
    backgroundColor: '#debcff',
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const marks = [
  {
    value: 5,
    label: 'Poor',
  },
  {
    value: 93,
    label: 'Perfect',
  },
];

export default function CustomizedSlider(props) {
  console.log("F: ", props)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Typography variant="subtitle2" gutterBottom>Fit</Typography> */}
      <small>Fit</small>
      <PrettoSlider aria-label="pretto slider" disabled="true"  marks={marks} defaultValue={20} />
      {/* <Typography variant="subtitle2" gutterBottom>Length</Typography> */}
      <small>Length</small>
      <PrettoSlider aria-label="pretto slider" disabled="true"   marks={marks} defaultValue={20} />
      {/* <Typography variant="subtitle2" gutterBottom>Comfort</Typography> */}
      <small>Comfort</small>
      <PrettoSlider aria-label="pretto slider" disabled="true" marks={marks} defaultValue={20} />
      {/* <Typography variant="subtitle2" gutterBottom>Quality</Typography> */}
      <small>Quality</small>
      <PrettoSlider aria-label="pretto slider" disabled="true" marks={marks} defaultValue={20} />
      <div className={classes.margin} />
    </div>
  );
}
