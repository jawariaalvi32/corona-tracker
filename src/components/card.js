import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Activity from "../images/activity.gif";

const Cards = ({text, value, cardClr}) => {
  return (
    <div className={cardClr}>
      <Card variant="outlined" className={cardClr}>
        <CardContent>
          <Typography style={{marginBottom:'15%'}}>
              {text}
          </Typography>
          <Typography variant="h6" style={{marginBottom:'20%'}}>
            {value}
          </Typography>
          <img src={Activity} width="45%" height="45%"/>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;