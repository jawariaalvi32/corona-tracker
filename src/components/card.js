import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: '5px',
      justifyContent:'center'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const Cards = ({text, value, color}) => {
    const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor:color}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {text}
        </Typography>
        <Typography variant="body2" component="p">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;