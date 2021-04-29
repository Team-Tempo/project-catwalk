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
  console.log("CH: ", characteristics);

  if (characteristics.Quality) {
    return null;
  }

  return (
    <div className={classes.root}>
      {
        characteristics.Fit ? (
          <>
            <small>Fit</small>
              <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ characteristics.Fit.value === null ? 50 : Number(characteristics.Fit.value) * 100 / 5 } />
            <small>Length</small>
              <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ characteristics.Length.value === null ? 50 : Number(characteristics.Length.value) * 100 / 5 } />
          </>
        ) : (
          <>
            <small>Size</small>
              <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ characteristics.Size.value === null ? 50 : Number(characteristics.Size.value) * 100 / 5 } />
            <small>Width</small>
              <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ characteristics.Width.value === null ? 50 : Number(characteristics.Width.value) * 100 / 5 } />
          </>
        )
      }
      <small>Comfort</small>
        <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ characteristics.Comfort.value === null ? 50 : Number(characteristics.Comfort.value) * 20 } />
      <small>Quality</small>
        <PrettoSlider aria-label="pretto slider" disabled marks={marks} value={ characteristics.Quality.value === null ? 50 : Number(characteristics.Quality.value) * 100 / 5 } />
      <div className={classes.margin} />
    </div>
  );
}
