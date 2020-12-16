import React from 'react';
import Axios from 'axios';
import CountrySelect from './CountryList';
import {Chart} from './Chart';
import Country from '../ShowCountryCases';
import { Grid } from '@material-ui/core';
import '../../App.css'

const CountryApi = () => {
    const [countries, setCountries] = React.useState(0);

    React.useEffect(() => {
        Axios.get(`https://api.covid19api.com/countries`) 
         .then((res) => {
           setCountries(res.data)
        })
    },[])

    return(
        <div>
          <CountrySelect countries={countries}/>
        </div>
    )
}

const CasesByCountry = ({country}) => {
  const [confirmed, setConfirmed] = React.useState(0);
  const [recovered, setRecovered] = React.useState(0);
  const [deaths, setDeaths] = React.useState(0);

  React.useEffect(() => {
      Axios.get(`https://covid19.mathdro.id/api/countries/${country}`) 
       .then((res) => {
        setConfirmed(res.data.confirmed.value)
        setRecovered(res.data.recovered.value)
        setDeaths(res.data.deaths.value)
      })
  },[country])
  
  return(
    <Grid container>
      <Grid item xs={6} className="set-margin">
      <Chart country={country} confirmed={confirmed} recovered={recovered} deaths={deaths}/>
      </Grid>
      <Grid item xs={6}>
      <Country country={country} confirmed={confirmed} recovered={recovered} deaths={deaths} />
      </Grid>
    </Grid>
  )
}


export {
  CountryApi,
  CasesByCountry
}