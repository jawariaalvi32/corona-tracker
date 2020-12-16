import React from 'react'
import Axios from 'axios';
import ShowData from './ShowData';
import {Chart} from './Chart'
const Api = () => {

    const [confirmed, setConfirmed] = React.useState(0);
    const [recovered, setRecovered] = React.useState(0);
    const [deaths, setDeaths] = React.useState(0);

    React.useEffect(() => {
        Axios.get(`https://covid19.mathdro.id/api`) 
         .then((res) => {
            setConfirmed(res.data.confirmed.value)
            setRecovered(res.data.recovered.value)
            setDeaths(res.data.deaths.value)
        })
    },[])

    return (
        <div>
            <ShowData confirmed={confirmed} recovered={recovered} deaths={deaths} />
            {/* <Chart confirmed={confirmed} recovered={recovered} deaths={deaths}/> */}
        </div>
    )
}

export default Api
