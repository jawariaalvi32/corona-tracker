import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from '../card';
import '../../App.css'

const useStyles = makeStyles((theme) => ({
    cardStyles : {
        justifyContent: 'center',
        display: 'flex'
    }

}));

const Global = ({confirmed, recovered, deaths}) => {
    const classes = useStyles();

    return(
        <div align="center">
            <h3>GLOBAL CASES</h3>
            <div className={classes.cardStyles}>
                <Cards text='Confirmed' value={confirmed} cardClr='red-card card'/>
                <Cards text='Recovered' value={recovered} cardClr='green-card card'/>
                <Cards text='Deaths' value={deaths} cardClr='gray-card card'/>
            </div>
        </div>
       
    )
}

export default Global;