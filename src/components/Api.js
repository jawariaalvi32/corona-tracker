import React from 'react';
import Axios from 'axios';
import Cards from './card';

const Api = () => {
    const [confirmed, setConfirmed] = React.useState(0);
    const [recovered, setRecovered] = React.useState(0);
    const [deaths, setDeaths] = React.useState(0);

    React.useEffect(() => {
        Axios.get(`https://covid19.mathdro.id/api`) 
         .then((res) => {
            console.log(res)
            setConfirmed(res.data.confirmed.value)
            setRecovered(res.data.recovered.value)
            setDeaths(res.data.deaths.value)
        })
    },[])
    return(
        <div className="d-flex justify-content-center">
            <Cards text='Confirmed Cases' value={confirmed} color='#ef5350'/>
            <Cards text='Recovered' value={recovered} color='#039be5'/>
            <Cards text='Deaths' value={deaths} color='#b0bec5'/>
        </div>
    )
}

export default Api;