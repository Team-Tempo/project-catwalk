import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  icon: {
    color: '#FEDBD0',
    cursor: 'pointer',
  },
}));

const StyleSelector = ({
  productId,
  styles,
  currentStyle,
  setCurrentStyle,
}) => {
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    setCurrentStyleIdx(0);
  }, [productId]);

  const handleClick = (idx) => {
    setCurrentStyle(styles[idx]);
    setCurrentStyleIdx(idx);
  };

  return (
    <>
      <Typography variant="body2" gutterBottom={true}>
        STYLE &gt; {currentStyle.name}
      </Typography>
      <Grid container spacing={1}>
        {styles.map((style, idx) => (
          <Grid key={idx} item xs={3}>
            <Badge
              className={classes.icon}
              overlap="circle"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              badgeContent={<FiberManualRecordIcon />}
              invisible={currentStyleIdx === idx ? false : true}
            >
              <Avatar
                className={classes.large}
                onClick={() => handleClick(idx)}
                src={style.photos[0].thumbnail_url}
              />
            </Badge>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StyleSelector;
