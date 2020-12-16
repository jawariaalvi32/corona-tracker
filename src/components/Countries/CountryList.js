import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../../App.css'
import { CasesByCountry } from './Api';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const CountrySelect = ({countries}) => {
    const classes = useStyles();
    const [state, setState] = React.useState(0);
  
    const handleChange = (event) => {
      setState(event.target.value);
    };
    const countryList = (countries) ?
      countries.map((items, index) => (
        <option key={index} value={items.Country}>{items.Country}</option>
      )):
      <option value='0'>Select</option>

  
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Countries</InputLabel>
        <Select
          native
          value={state.select}
          onChange={handleChange}
        >
          { countryList }
        </Select>
      </FormControl>        
      <CasesByCountry country={state}/>
    </div>
  );
}

export default CountrySelect;