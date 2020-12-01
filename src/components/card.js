import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
 
const Cards = ({text, value, cardClr}) => {
  return (
    <div className={cardClr}>
      <Card variant="outlined" className={cardClr}>
        <CardContent>
          <Typography gutterBottom>
              {text}
          </Typography>
          <Typography variant="body2" component="p">
            {value}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;