import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        marginLeft: 5,
        marginTop: 10
    },
    headerStyles: {
      display: 'flex',
      justifyContent: 'center'
    }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerStyles}>
      <Typography variant="h6" className={classes.typographyStyles}>
      Covid-19 Coronavirus Outbreak
      </Typography>
    </div>
  );
}