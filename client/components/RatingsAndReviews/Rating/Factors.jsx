import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
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

export default function CustomizedSlider({ characteristics }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        Object.entries(characteristics).map((characteristic) => (
          <div key={characteristic[1].id}>
            <small>{characteristic[0]}</small>
              <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ characteristic[1].value === null ? 50 : Number(characteristic[1].value) * 100 / 5 } />
          </div>
        ))
      }
    </div>
  );
}
