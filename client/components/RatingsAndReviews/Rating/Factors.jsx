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
  console.log(characteristics);

  const classes = useStyles();


  // revisit values of factors
  return (
    <div className={classes.root}>
      {
        characteristics.Fit ? (
          <>
          <small>Fit</small>
        <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ Number(characteristics.Fit.value) * 10 } />
      <small>Length</small>
        <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ Number(characteristics.Length.value) * 10 } />
          </>
        ) : (
          <>
          <small>Size</small>
          <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ Number(characteristics.Size.value) * 10 } />
        <small>Width</small>
          <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ Number(characteristics.Width.value) * 10 } />
          </>
        )
      }
      {/* <small>Fit</small>
        <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ Number(characteristics.Fit.value) * 10 } />
      <small>Length</small>
        <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ Number(characteristics.Length.value) * 10 } /> */}
      <small>Comfort</small>
        <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ Number(characteristics.Comfort.value) * 10 } />
      <small>Quality</small>
        <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ Number(characteristics.Quality.value) * 10 } />
      <div className={classes.margin} />
    </div>
  );
}
