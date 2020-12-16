import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
 
const useStyles = makeStyles((theme) => ({
    clrRed: {
        color: '#ff073a',
        border: 'none',
        textAlign: 'right'
    },
    clrGreen: {
        color: 'rgba(40,167,69,.6)',
        border: 'none',
        textAlign: 'right'
    },
    clrGray: {
        color: '#6c757d',
        border: 'none',
        textAlign: 'right'
    },
}));

export default function Country({country, confirmed, recovered, deaths}) {
  const classes = useStyles();
  return (
    <div className="justify-content-left">
      <Card variant="outlined" className={classes.clrRed}>
        <CardContent>
          <span>Confirmed</span>
          <Typography>
              {confirmed}
          </Typography>       
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.clrGreen}>
        <CardContent>
        <span>Recovered</span>
        <Typography variant="h6">
            {recovered}
          </Typography>       
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.clrGray}>
        <CardContent>
        <span>Deaths</span>
        <Typography variant="h6">
            {deaths}
          </Typography>       
        </CardContent>
      </Card>
      </div>
  );
}