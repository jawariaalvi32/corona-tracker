import React from 'react';
import Axios from 'axios';
import CountrySelect from './CountrySelect';

const CountryApi = () => {
    const [countries, setCountries] = React.useState(0);

    React.useEffect(() => {
        Axios.get(`https://api.covid19api.com/countries`) 
         .then((res) => {
            console.log(res.data)
           setCountries(res.data)
        })
    },[])
    return(
        <div className="d-flex justify-content-center">
          <CountrySelect countries={countries}/>
            {/* {
              countries.map((items,index) => {
                console.log('----- =>',items)
            })
            }   */}
        </div>
    )
}

export default CountryApi;